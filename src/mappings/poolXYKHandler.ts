import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK, SnapshotType } from "../types";

import { formatU128ToBalance, updateAssetPrice, updateAssetSnapshotsPrice } from '../utils/assets';
import { updateLiquidityStats } from '../utils/network';
import { poolAccounts, handleBlockTransferEvents, PoolsPrices } from '../utils/pools';
import { XOR, XSTUSD, PSWAP, DAI, BASE_ASSETS, SnapshotSecondsMap, SECONDS_IN_BLOCK } from '../utils/consts';
import { formatDateTimestamp } from '../utils';

const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.DEFAULT] / SECONDS_IN_BLOCK;

export async function updatePoolXYKPrices(block: SubstrateBlock): Promise<void> {
    const blockNumber = block.block.header.number.toNumber();

    handleBlockTransferEvents(block);

    const isNewInterval = blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;
    const isNewReserves = PoolsPrices.get();
    const shouldSync = isNewReserves || isNewInterval;

    if (!shouldSync) return;

    logger.debug(`[${blockNumber}]: Update prices in PoolXYK entities; isNewInterval: ${isNewInterval}; isNewReserves: ${isNewReserves}`);

    const blockTimestamp: number = formatDateTimestamp(block.timestamp);

    let pswapPriceInDAI = new BigNumber(0);
    let liquiditiesUSD = new BigNumber(0);
    let liquidityLocked = {
        [XOR]: '0',
        [XSTUSD]: '0',
    };

    for (const baseAssetId of BASE_ASSETS) {
        const isXorPools = baseAssetId === XOR;
        const pools: Array<PoolXYK> = [];

        const poolsMap = poolAccounts.getMap(baseAssetId);

        if (!poolsMap) continue;

        let baseAssetInPools = new BigNumber(0);
        let baseAssetWithDoublePools = new BigNumber(0);
        let baseAssetPriceInDAI = new BigNumber(0);

        for (const poolId of poolsMap.values()) {
            const pool = await PoolXYK.get(poolId);

            if (!pool) continue;

            const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString());
            const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString());

            baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN);
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)));

            if (pool.targetAsset === DAI) {
                baseAssetPriceInDAI = targetAssetReservesBN.div(baseAssetReservesBN);
            }

            pools.push(pool);
        }

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools.forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString());
                const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString());
                const daiPrice = baseAssetReserves
                    .dividedBy(targetAssetReserves)
                    .multipliedBy(baseAssetPriceInDAI);

                p.priceUSD = daiPrice.toFixed(18);

                // update pswap price (scope)
                if (p.targetAsset === PSWAP && pswapPriceInDAI.isZero()) {
                    pswapPriceInDAI = daiPrice;
                }
            });

            if (!pswapPriceInDAI.isZero()) {
                pools.forEach(p => {
                    const strategicBonusApy = ((
                        (pswapPriceInDAI.multipliedBy(new BigNumber(2500000)))
                        .dividedBy(baseAssetPriceInDAI.multipliedBy(baseAssetWithDoublePools.dividedBy(Math.pow(10, 18)))))
                        .multipliedBy(new BigNumber(365 / 2)))
                        .multipliedBy(new BigNumber((p.multiplier)));
        
                    p.strategicBonusApy = strategicBonusApy.toFixed(18);
                });
            }
        }

        const baseAssetInPoolsFormatted = formatU128ToBalance(baseAssetInPools.toFixed(0), baseAssetId);

        // update liquidities data
        liquidityLocked[baseAssetId] = baseAssetInPoolsFormatted;
        liquiditiesUSD = liquiditiesUSD.plus(
            new BigNumber(baseAssetInPoolsFormatted)
                .multipliedBy(baseAssetPriceInDAI)
                .multipliedBy(new BigNumber(2))
        );

        await Promise.all(pools.map(pool => pool.save()));

        // update price samples
        if (isXorPools) {
            for (const pool of pools) {
                await updateAssetPrice(pool.targetAsset, pool.priceUSD);
                await updateAssetSnapshotsPrice(pool.targetAsset, pool.priceUSD, blockTimestamp);
            }
        }
    }

    // update network liquidity locked
    await updateLiquidityStats(liquidityLocked, liquiditiesUSD, blockTimestamp);

    PoolsPrices.set(false);
}
