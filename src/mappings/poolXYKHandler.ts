import { SubstrateBlock } from "@subql/types";
import { PoolXYK, Asset, PriceType } from "../types";
import { formatU128ToBalance, updatePrice } from "./utils";
import BigNumber from "bignumber.js";

import { XOR, VAL, PSWAP, DAI, ETH } from "..";

const DOUBLE_PRICE_POOL: Array<String> = [VAL, PSWAP, DAI, ETH];

export async function handleXYKPools(block: SubstrateBlock): Promise<void> {
    const blockTimestamp: number = parseInt(((block.timestamp).getTime() / 1000).toFixed(0));

    const pools: Array<PoolXYK> = [];
    const assets: Array<Asset> = [];

    let totalXorInPools = new BigNumber(0);
    let totalXORWithDoublePools = new BigNumber(0);
    let xorPriceInDAI = new BigNumber(0);
    let pswapPriceInDAI = new BigNumber(0);

    //todo rework to liquidity proxy quote
    let reserves;

    try {
        reserves = await api.query.poolXYK.reserves.entries(XOR)
    } catch (e) {
        logger.error("Error getting reserves", e);
        return;
    }

    for (const [{ args: [baseAsset, targetAsset] }, value] of reserves) {
        const baseAssetId = baseAsset.toString();
        const targetAssetId = targetAsset.toString();
        const xorReserves: BigNumber = new BigNumber(value[0].toBigInt());
        const targetAssetReserves: BigNumber = new BigNumber(value[1].toBigInt());

        const asset = (await Asset.get(targetAssetId)) || new Asset(targetAssetId);
        const pool = (await PoolXYK.get(asset.id.toString())) || new PoolXYK(asset.id.toString());

        asset.poolXYKId = pool.id;

        pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAssetId);
        pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAssetId);
        pool.multiplier = DOUBLE_PRICE_POOL.includes(targetAssetId) ? BigInt(2) : BigInt(1);
        pool.priceUSD = '0';
        pool.strategicBonusApy = '0';

        pools.push(pool);
        assets.push(asset);

        totalXorInPools = totalXorInPools.plus(xorReserves);
        totalXORWithDoublePools = totalXORWithDoublePools.plus(xorReserves.multipliedBy(Number(pool.multiplier)));

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

            p.priceUSD = daiPrice.toFixed(18).toString();

            if (!pswapPriceInDAI.isZero()) {
                const strategicBonusApy = ((
                    (pswapPriceInDAI.multipliedBy(new BigNumber(2500000)))
                        .dividedBy(xorPriceInDAI.multipliedBy(totalXORWithDoublePools.dividedBy(Math.pow(10, 18)))))
                    .multipliedBy(new BigNumber(365 / 2)))
                    .multipliedBy(Number(p.multiplier));

                p.strategicBonusApy = strategicBonusApy.toFixed(18).toString();
            }
        });
    }

    //Add fake XOR Pool in order to add fiat price for it
    const xorAsset: Asset = (await Asset.get(XOR)) || new Asset(XOR);
    const xorPool: PoolXYK = (await PoolXYK.get(xorAsset.id.toString())) || new PoolXYK(xorAsset.id.toString());

    xorAsset.poolXYKId = xorPool.id;

    xorPool.multiplier = BigInt(1);
    xorPool.baseAssetReserves = "0";
    xorPool.targetAssetReserves = "0";
    xorPool.priceUSD = xorPriceInDAI.toFixed(18).toString();
    xorPool.strategicBonusApy = "0";

    assets.push(xorAsset);
    pools.push(xorPool);

    await Promise.all(pools.map(pool => pool.save()));
    await Promise.all(assets.map(asset => asset.save()));

    // update price samples
    for (const pool of pools) {
        const assetId = pool.id.toString();
        const currentPrice = new BigNumber(pool.priceUSD || 0);

        await updatePrice(assetId, PriceType.DEFAULT, currentPrice, blockTimestamp);
        await updatePrice(assetId, PriceType.HOUR, currentPrice, blockTimestamp);
        await updatePrice(assetId, PriceType.DAY, currentPrice, blockTimestamp);
    }
}
