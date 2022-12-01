import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK, SnapshotType } from "../types";

import { getAssetId, formatU128ToBalance, updateAssetPrice } from '../utils/assets';
import { updateLiquidityStats } from '../utils/network';
import { getAllReserves } from '../utils/pools';
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

    for (const baseAsset of BASE_ASSETS) {
        const isXorPools = baseAsset === XOR;
        const pools: Array<PoolXYK> = [];

        let baseAssetInPools = new BigNumber(0);
        let baseAssetWithDoublePools = new BigNumber(0);
        let baseAssetPriceInDAI = new BigNumber(0);

        const reserves = await getAllReserves(baseAsset);

        if (!reserves) continue;

        for (const [{ args: [, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const baseAssetReserves: BigNumber = new BigNumber(value[0].toBigInt());
            const targetAssetReserves: BigNumber = new BigNumber(value[1].toBigInt());
            const poolId = `${baseAsset}-${targetAssetId}`;
            const pool = (await PoolXYK.get(poolId)) || new PoolXYK(poolId);

            pool.baseAsset = baseAsset;
            pool.targetAsset = targetAssetId;
            pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAsset);
            pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAssetId);
            pool.multiplier = isXorPools && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
            pool.priceUSD = '0';
            pool.strategicBonusApy = '0';

            pools.push(pool);

            baseAssetInPools = baseAssetInPools.plus(baseAssetReserves);
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReserves.multipliedBy(new BigNumber(pool.multiplier)));

            if (targetAssetId === DAI) {
                baseAssetPriceInDAI = targetAssetReserves.div(baseAssetReserves);
            }
        }

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools.forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves);
                const targetAssetReserves = new BigNumber(p.targetAssetReserves);
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

        const baseAssetInPoolsFormatted = formatU128ToBalance(baseAssetInPools.toFixed(0), baseAsset);

        // update liquidities data
        liquidityLocked[baseAsset] = baseAssetInPoolsFormatted;
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
