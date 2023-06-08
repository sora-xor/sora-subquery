import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../../types";

import { formatU128ToBalance, assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools';
import { XOR, PSWAP, DAI, BASE_ASSETS } from '../../utils/consts';
import { formatDateTimestamp } from '../../utils';

export async function syncPoolXykPrices(block: SubstrateBlock): Promise<void> {
    if (!PoolsPrices.get()) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Update prices in PoolXYK entities`);

    const blockTimestamp: number = formatDateTimestamp(block.timestamp);
    const assetsLockedInPools = new Map<string, bigint>();

    let pswapPriceInDAI = new BigNumber(0);
    let liquiditiesUSD = new BigNumber(0);

    let baseAssetWithDoublePoolsPrice = new BigNumber(0);

    const pools: Record<string, PoolXYK[]> = {};

    for (const baseAssetId of BASE_ASSETS) {
        const poolsMap = poolAccounts.getMap(baseAssetId);

        if (!poolsMap) continue;

        pools[baseAssetId] = [];

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

            assetsLockedInPools.set(
                pool.baseAssetId,
                (assetsLockedInPools.get(pool.baseAssetId) || BigInt(0)) + pool.baseAssetReserves,
            );

            assetsLockedInPools.set(
                pool.targetAssetId,
                (assetsLockedInPools.get(pool.targetAssetId) || BigInt(0)) + pool.targetAssetReserves,
            );

            pools[baseAssetId].push(pool);
        }

        baseAssetWithDoublePoolsPrice = baseAssetWithDoublePoolsPrice.plus(baseAssetWithDoublePools.multipliedBy(baseAssetPriceInDAI));

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools[baseAssetId].forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString());
                const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString());
                const daiPrice = baseAssetReserves
                    .dividedBy(targetAssetReserves)
                    .multipliedBy(baseAssetPriceInDAI);

                p.priceUSD = daiPrice.toFixed(18);

                // update PSWAP price (price from pair with XOR)
                if (p.targetAssetId === PSWAP && p.baseAssetId === XOR) {
                    pswapPriceInDAI = daiPrice;
                }
            });
        }

        const baseAssetInPoolsFormatted = formatU128ToBalance(baseAssetInPools.toFixed(0), baseAssetId);

        // update liquidities data
        liquiditiesUSD = liquiditiesUSD.plus(
            new BigNumber(baseAssetInPoolsFormatted)
                .multipliedBy(baseAssetPriceInDAI)
                .multipliedBy(new BigNumber(2))
        );

        // update price samples
        if (baseAssetId === XOR) {
            for (const pool of pools[baseAssetId]) {
                await assetSnapshotsStorage.updatePrice(pool.targetAssetId, pool.priceUSD, blockTimestamp);
            }

            await assetSnapshotsStorage.updatePrice(baseAssetId, baseAssetPriceInDAI.toFixed(18), blockTimestamp);
        }
    }

    // update pools SB_APY
    if (!pswapPriceInDAI.isZero()) {
        const pswapsPerDay = new BigNumber(2_500_000);

        for (const baseAssetId of BASE_ASSETS) {
            if (Array.isArray(pools[baseAssetId])) {
                pools[baseAssetId].forEach(p => {
                    const strategicBonusApy =
                        pswapPriceInDAI.multipliedBy(pswapsPerDay)
                        .dividedBy(baseAssetWithDoublePoolsPrice.dividedBy(Math.pow(10, 18)))
                        .multipliedBy(new BigNumber(365 / 2))
                        .multipliedBy(new BigNumber(p.multiplier));
    
                    p.strategicBonusApy = strategicBonusApy.toFixed(18);
                });
            }
        }
    }

    // update locked luqidity for assets
    for (const [assetId, liquidity] of assetsLockedInPools.entries()) {
        await assetSnapshotsStorage.updateLiquidity(assetId, liquidity, blockTimestamp);
    }

    // update total liquidity in USD
    await networkSnapshotsStorage.updateLiquidityStats(liquiditiesUSD, blockTimestamp);

    logger.debug(`[${blockNumber}]: PoolXYK prices updated`);

    PoolsPrices.set(false);
}
