import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../../types";

import { assetSnapshotsStorage, tickerSyntheticAssetId } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { orderBooksStorage } from '../../utils/orderBook';
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools';
import { XOR, PSWAP, DAI, BASE_ASSETS, XSTUSD } from '../../utils/consts';
import { getPoolsStorageLog, getSyncPricesLog } from "../../utils/logs";

const getAssetDexCap = (assetReserves: BigNumber, assetPrice: BigNumber, daiReserves: BigNumber) => {
    // theoretical asset capitalization in DAI inside DEX
    const assetDaiCap = assetPrice.multipliedBy(assetReserves);
    // real asset capitalization is supported by DAI
    const assetDexCap = assetDaiCap.isGreaterThan(daiReserves) ? daiReserves : assetDaiCap;

    return assetDexCap;
};

export async function syncPoolXykPrices(block: SubstrateBlock): Promise<void> {
    if (!PoolsPrices.get()) return;

    getSyncPricesLog(block).debug('Sync PoolXYK prices')

    let pswapPriceInDAI = new BigNumber(0);
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

        getSyncPricesLog(block).debug({ baseAssetId }, `Update ${poolsMap.size} pools`);

        for (const poolId of poolsMap.values()) {
            const pool = await poolsStorage.getPoolById(block, poolId);

            if (!pool) continue;

            const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString());
            const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString());

            baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN);
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)));

            if (pool.targetAssetId === DAI) {
                baseAssetPriceInDAI = !baseAssetReservesBN.isZero()
                    ? targetAssetReservesBN.dividedBy(baseAssetReservesBN)
                    : new BigNumber(0);
                daiReserves[baseAssetId] = targetAssetReservesBN
            }

            pools[baseAssetId].push(pool);
            getPoolsStorageLog(block).debug({ poolId: pool.id }, 'Update pool')
        }

        baseAssetWithDoublePoolsPrice = baseAssetWithDoublePoolsPrice.plus(baseAssetWithDoublePools.multipliedBy(baseAssetPriceInDAI));

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools[baseAssetId].forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString());
                const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString());
                const daiPrice = !targetAssetReserves.isZero()
                    ? baseAssetReserves.dividedBy(targetAssetReserves).multipliedBy(baseAssetPriceInDAI)
                    : new BigNumber(0);

                p.priceUSD = daiPrice.toFixed(18);

                // update PSWAP price (price from pair with XOR)
                if (p.targetAssetId === PSWAP && p.baseAssetId === XOR) {
                    pswapPriceInDAI = daiPrice;
                }
            });
        }

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
                for (const p of pools[baseAssetId]) {
                    const strategicBonusApy =
                        pswapPriceInDAI.multipliedBy(pswapsPerDay)
                        .dividedBy(baseAssetWithDoublePoolsPrice.dividedBy(Math.pow(10, 18)))
                        .multipliedBy(new BigNumber(365 / 2))
                        .multipliedBy(new BigNumber(p.multiplier))
                        .toFixed(18);

                    await poolsStorage.updateApy(block, p.id, strategicBonusApy);
                }
            }
        }
    }

    // update assets prices
    for (const [assetId, { price }] of Object.entries(assetsPrices)) {
        // do not update price from XYK pool for synthetic assets
        if (!syntheticAssetsIds.includes(assetId)) {
            await assetSnapshotsStorage.updatePrice(block, assetId, price);
        }
    }
    getSyncPricesLog(block).debug(`${Object.entries(assetsPrices).length} asset snapshot prices updated`);

    const poolsLockedUSD = await poolsStorage.getLockedLiquidityUSD(block);
    const booksLockedUSD = await orderBooksStorage.getLockedLiquidityUSD(block);
    const liquiditiesUSD = poolsLockedUSD.plus(booksLockedUSD);

    // update total liquidity in USD
    await networkSnapshotsStorage.updateLiquidityStats(block, liquiditiesUSD);

    getSyncPricesLog(block).debug('PoolXYK prices updated');

    PoolsPrices.set(false);
}
