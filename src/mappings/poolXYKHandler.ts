import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK, SnapshotType } from "../types";

import { getAssetId, formatU128ToBalance, updateAssetPrice } from '../utils/assets';
import { updateLiquidityStats } from '../utils/network';
import { getAllReserves, getOrCreatePoolXYKEntity } from '../utils/pools';
import { XOR, XSTUSD, PSWAP, DAI, DOUBLE_PRICE_POOL, SECONDS_IN_BLOCK, BASE_ASSETS, SnapshotSecondsMap } from '../utils/consts';
import { formatDateTimestamp } from '../utils';

const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.DEFAULT] / SECONDS_IN_BLOCK;

export async function syncXYKPools(block: SubstrateBlock): Promise<void> {
    const blockNumber = block.block.header.number.toNumber();
    const shouldSync = blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

    if (!shouldSync) return;

    const blockTimestamp: number = formatDateTimestamp(block.timestamp);

    let pswapPriceInDAI = new BigNumber(0);
    let liquiditiesUSD = new BigNumber(0);
    let liquidityLocked = {
        [XOR]: '0',
        [XSTUSD]: '0',
    };

    for (const baseAssetId of BASE_ASSETS) {
        const isXorPools = baseAsset === XOR;
        const pools: Array<PoolXYK> = [];

        let baseAssetInPools = new BigNumber(0);
        let baseAssetWithDoublePools = new BigNumber(0);
        let baseAssetPriceInDAI = new BigNumber(0);

        const reserves = await getAllReserves(baseAssetId);

        if (!reserves) continue;

        for (const [{ args: [, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const pool = await getOrCreatePoolXYKEntity(baseAssetId, targetAssetId);

            pool.baseAssetReserves = BigInt(value[0].toString());
            pool.targetAssetReserves = BigInt(value[1].toString());

            pools.push(pool);

            const baseAssetReservesBN = new BigNumber(value[0].toString());
            const targetAssetReservesBN = new BigNumber(value[1].toString());

            baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN);
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)));

            if (targetAssetId === DAI) {
                baseAssetPriceInDAI = targetAssetReservesBN.div(baseAssetReservesBN);
            }
        }

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI) {
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
                await updateAssetPrice(pool.targetAsset, pool.priceUSD, blockTimestamp, blockNumber);
            }
        }
    }

    // update network liquidity locked
    await updateLiquidityStats(liquidityLocked, liquiditiesUSD, blockTimestamp, blockNumber);
}
