import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../../types";

import { formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools';
import { XOR, XSTUSD, PSWAP, DAI, BASE_ASSETS } from '../../utils/consts';
import { formatDateTimestamp } from '../../utils';

export async function syncPoolXykPrices(block: SubstrateBlock): Promise<void> {
    if (!PoolsPrices.get()) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Update prices in PoolXYK entities`);

    const blockTimestamp: number = formatDateTimestamp(block.timestamp);

    let pswapPriceInDAI = new BigNumber(0);
    let liquiditiesUSD = new BigNumber(0);
    let liquidityLocked = {
        [XOR]: '0',
        [XSTUSD]: '0',
    };

    for (const baseAssetId of BASE_ASSETS) {
        const pools: Array<PoolXYK> = [];

        const poolsMap = poolAccounts.getMap(baseAssetId);

        if (!poolsMap) continue;

        let baseAssetInPools = new BigNumber(0);
        let baseAssetWithDoublePools = new BigNumber(0);
        let baseAssetPriceInDAI = new BigNumber(0);

        logger.debug(`[${blockNumber}]: Update ${poolsMap.size} ${baseAssetId} based pools`);

        for (const poolId of poolsMap.values()) {
            const pool = await poolsStorage.getPoolById(poolId);

            if (!pool) continue;

            const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString());
            const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString());

            baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN);
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)));

            if (pool.targetAssetId === DAI) {
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
                if (p.targetAssetId === PSWAP && pswapPriceInDAI.isZero()) {
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

        // update price samples
        if (baseAssetId === XOR) {
            for (const pool of pools) {
                await assetSnapshotsStorage.updatePrice(pool.targetAssetId, pool.priceUSD, blockTimestamp);
            }

            await assetSnapshotsStorage.updatePrice(baseAssetId, baseAssetPriceInDAI.toFixed(18), blockTimestamp);
        }
    }

    await networkSnapshotsStorage.updateLiquidityStats(liquidityLocked, liquiditiesUSD, blockTimestamp);

    logger.debug(`[${blockNumber}]: PoolXYK prices updated`);

    PoolsPrices.set(false);
}
