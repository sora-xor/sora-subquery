import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK, SnapshotType } from "../types";

import { getAssetId, formatU128ToBalance, updateAssetPrice } from '../utils/assets';
import { PoolsPrices } from '../utils/pools';
import { XOR, PSWAP, DAI, DOUBLE_PRICE_POOL, SECONDS_IN_BLOCK, BASE_ASSETS, SnapshotSecondsMap } from '../utils/consts';
import { formatDateTimestamp } from '../utils';

const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.DEFAULT] / SECONDS_IN_BLOCK;

const getReserves = async (baseAssetId: string) => {
    try {
        return await api.query.poolXYK.reserves.entries(baseAssetId);
    } catch (e) {
        logger.error("Error getting reserves", e);
        return null;
    }
};

export async function syncXYKPools(block: SubstrateBlock): Promise<void> {
    const blockNumber = block.block.header.number.toNumber();
    const shouldSync = PoolsPrices.get() || blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

    if (!shouldSync) return;

    const blockTimestamp: number = formatDateTimestamp(block.timestamp);

    let pswapPriceInDAI = new BigNumber(0);

    for (const baseAsset of BASE_ASSETS) {
        const isXorPools = baseAsset === XOR;
        const pools: Array<PoolXYK> = [];

        let baseAssetInPools = new BigNumber(0);
        let baseAssetWithDoublePools = new BigNumber(0);
        let baseAssetPriceInDAI = new BigNumber(0);

        const reserves = await getReserves(baseAsset);

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
                const daiPrice = new BigNumber(p.baseAssetReserves)
                    .dividedBy(new BigNumber(p.targetAssetReserves))
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

        //If pools exists, add fake XOR Pool in order to add fiat price for it
        if (pools.length > 0) {
            const basePoolId = `${baseAsset}-${baseAsset}`;
            const basePool: PoolXYK = (await PoolXYK.get(basePoolId)) || new PoolXYK(basePoolId);

            basePool.baseAsset = baseAsset;
            basePool.targetAsset = baseAsset;
            basePool.multiplier = 1;
            basePool.baseAssetReserves = "0";
            basePool.targetAssetReserves = formatU128ToBalance(baseAssetInPools.toFixed(0), baseAsset);
            basePool.priceUSD = baseAssetPriceInDAI.toFixed(18);
            basePool.strategicBonusApy = "0";

            pools.push(basePool);
        }

        await Promise.all(pools.map(pool => pool.save()));

        // update price samples
        if (isXorPools) {
            for (const pool of pools) {
                await updateAssetPrice(pool.targetAsset, pool.priceUSD, blockTimestamp, blockNumber);
            }
        }
    }

    PoolsPrices.set(false);
}
