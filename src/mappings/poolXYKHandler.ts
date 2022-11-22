import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { PoolXYK, Asset, SnapshotType } from "../types";

import { getAssetId, formatU128ToBalance, getOrCreateAssetEntity, updateAssetPrice } from '../utils/assets';
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

    const pools: Array<PoolXYK> = [];
    const assets: Array<Asset> = [];

    let totalXorInPools = new BigNumber(0);
    let totalXORWithDoublePools = new BigNumber(0);
    let xorPriceInDAI = new BigNumber(0);
    let pswapPriceInDAI = new BigNumber(0);

    const reserves = await getReserves(XOR);

    for (const [{ args: [baseAsset, targetAsset] }, value] of reserves) {
        const baseAssetId = getAssetId(baseAsset);
        const targetAssetId = getAssetId(targetAsset);
        const xorReserves: BigNumber = new BigNumber(value[0].toBigInt());
        const targetAssetReserves: BigNumber = new BigNumber(value[1].toBigInt());

        const asset = await getOrCreateAssetEntity(targetAssetId);

        const poolId = `${baseAssetId}-${targetAssetId}`;
        const pool = (await PoolXYK.get(poolId)) || new PoolXYK(poolId);

        asset.poolXYKId = pool.id;

        pool.baseAsset = baseAssetId;
        pool.targetAsset = targetAssetId;
        pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAssetId);
        pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAssetId);
        pool.multiplier = DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
        pool.priceUSD = '0';
        pool.strategicBonusApy = '0';

        pools.push(pool);
        assets.push(asset);

        totalXorInPools = totalXorInPools.plus(xorReserves);
        totalXORWithDoublePools = totalXORWithDoublePools.plus(xorReserves.multipliedBy(new BigNumber(pool.multiplier)));

        if (targetAssetId === DAI) {
            xorPriceInDAI = targetAssetReserves.div(xorReserves);
        }
    }

    // Update pools priceUSD & strategicBonusApy
    if (!xorPriceInDAI.isZero()) {
        const pswapPool = pools.find(p => p.id === PSWAP);

        if (pswapPool) {
            pswapPriceInDAI = new BigNumber(pswapPool.baseAssetReserves)
                .div(new BigNumber(pswapPool.targetAssetReserves))
                .multipliedBy(xorPriceInDAI)
        }

        pools.forEach(p => {
            const daiPrice = new BigNumber(p.baseAssetReserves)
                .dividedBy(new BigNumber(p.targetAssetReserves))
                .multipliedBy(xorPriceInDAI);

            p.priceUSD = daiPrice.toFixed(18);

            if (!pswapPriceInDAI.isZero()) {
                const strategicBonusApy = ((
                    (pswapPriceInDAI.multipliedBy(new BigNumber(2500000)))
                        .dividedBy(xorPriceInDAI.multipliedBy(totalXORWithDoublePools.dividedBy(Math.pow(10, 18)))))
                    .multipliedBy(new BigNumber(365 / 2)))
                    .multipliedBy(new BigNumber((p.multiplier)));

                p.strategicBonusApy = strategicBonusApy.toFixed(18);
            }
        });
    }

    //If pools exists, add fake XOR Pool in order to add fiat price for it
    if (pools.length > 0) {
        const xorAsset = await getOrCreateAssetEntity(XOR);

        const xorPoolId = `${XOR}-${XOR}`;
        const xorPool: PoolXYK = (await PoolXYK.get(xorPoolId)) || new PoolXYK(xorPoolId);

        xorAsset.poolXYKId = xorPool.id;

        xorPool.baseAsset = XOR;
        xorPool.targetAsset = XOR;
        xorPool.multiplier = 1;
        xorPool.baseAssetReserves = "0";
        xorPool.targetAssetReserves = formatU128ToBalance(totalXorInPools.toFixed(0), XOR);
        xorPool.priceUSD = xorPriceInDAI.toFixed(18);
        xorPool.strategicBonusApy = "0";

        assets.push(xorAsset);
        pools.push(xorPool);
    }

    await Promise.all(pools.map(pool => pool.save()));
    await Promise.all(assets.map(asset => asset.save()));

    // update price samples
    for (const pool of pools) {
        await updateAssetPrice(pool.id.toString(), pool.priceUSD, blockTimestamp, blockNumber);
    }

    PoolsPrices.set(false);
}
