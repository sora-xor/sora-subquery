import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../../types";

import { formatU128ToBalance, assetSnapshotsStorage, tickerSyntheticAssetId } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools';
import { XOR, PSWAP, DAI, BASE_ASSETS, XSTUSD } from '../../utils/consts';
import { formatDateTimestamp } from '../../utils';

const getAssetDexCap = (assetReserves: BigNumber, assetPrice: BigNumber, daiReserves: BigNumber) => {
    // theoretical asset capitalization in DAI inside DEX
    const assetDaiCap = assetPrice.multipliedBy(assetReserves);
    // real asset capitalization is supported by DAI
    const assetDexCap = assetDaiCap.isGreaterThan(daiReserves) ? daiReserves : assetDaiCap;

    return assetDexCap;
};

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
    const daiReserves: Record<string, BigNumber> = {};
    const assetsPrices: Record<string, { dexCap: BigNumber; price: string; }> = {};
    const syntheticAssetsIds = [...tickerSyntheticAssetId.values()].filter((id) => id !== XSTUSD);

    for (const baseAssetId of [...BASE_ASSETS].reverse()) {
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
                daiReserves[baseAssetId] = targetAssetReservesBN
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
        assetsPrices[baseAssetId] = {
            price: baseAssetPriceInDAI.toFixed(18),
            dexCap: getAssetDexCap(
                baseAssetInPools,
                baseAssetPriceInDAI,
                daiReserves[baseAssetId],
            ),
        };

        // update price samples
        for (const pool of pools[baseAssetId]) {
            const assetDexCap = getAssetDexCap(
                new BigNumber(pool.targetAssetReserves.toString()),
                new BigNumber(pool.priceUSD),
                daiReserves[baseAssetId]
            );

            if (!assetsPrices[pool.targetAssetId] || assetsPrices[pool.targetAssetId].dexCap.isLessThan(assetDexCap)) {
                assetsPrices[pool.targetAssetId] = {
                    dexCap: assetDexCap,
                    price: pool.priceUSD,
                };
            }
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

    // update assets prices
    for (const [assetId, { price }] of Object.entries(assetsPrices)) {
        // do not update price from XYK pool for synthetic assets
        if (!syntheticAssetsIds.includes(assetId)) {
            await assetSnapshotsStorage.updatePrice(assetId, price, blockTimestamp);
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
