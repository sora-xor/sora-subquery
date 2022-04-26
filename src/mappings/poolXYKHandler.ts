import {SubstrateBlock} from "@subql/types";
import {Pool, PoolXYKEntity} from "../types";
import {formatU128ToBalance} from "./utils";
import BigNumber from "bignumber.js";

import { XOR } from "..";

const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
const DOUBLE_PRICE_POOL: Array<String> = [VAL, PSWAP, DAI, ETH];
const XYK_POOL: string = 'XYKPool';
const FIVE_MINUTES_IN_BLOCKS = 50;

export async function handleXYKPools(block: SubstrateBlock): Promise<void> {
    if (block.block.header.number.toNumber() % FIVE_MINUTES_IN_BLOCKS != 0) {
        return;
    }

    let blockDate: string = ((block.timestamp).getTime() / 1000).toFixed(0).toString();

    let record = new PoolXYKEntity(block.block.header.hash.toString());
    record.updated = blockDate;
    let totalXorInPools: BigNumber = new BigNumber(0);
    const pairs = await api.query.tradingPair.enabledSources.entries(0)
        .catch(e => {
            logger.error("Error reading tradingPair.sources for block " + block.block.header.hash.toString(), e);
            throw (e)
        });
    let pools: Array<Pool> = [];
    pairs.forEach(([{args: [dexId, tradingPair]}, value]) => {
        if (value.isSome) {
            if (value.toHuman().toString().includes(XYK_POOL)) {
                let baseAssetId = tradingPair.base_asset_id.toString();
                let targetAssetId = tradingPair.target_asset_id.toString();
                let pool = new Pool(record.id.toString() + "_" + baseAssetId + "_" + targetAssetId);
                pool.baseAssetId = baseAssetId;
                pool.targetAssetId = targetAssetId;
                pool.multiplier = DOUBLE_PRICE_POOL.some(p => p === targetAssetId) ? BigInt(2) : BigInt(1);
                pool.poolEntityId = record.id;
                pool.baseAssetReserves = "0";
                pool.targetAssetReserves = "0";
                pool.updated = blockDate;
                pools.push(pool);
            }
        }
    });

    //todo rework to liquidity proxy quote
    let reserves;
    try {
        reserves = await api.query.poolXYK.reserves.entries(XOR)
        .catch(e => logger.error("Error getting reserves", e))
    } catch (e) {
        logger.error(e);
        return;
    }
    let totalXORWithDoublePools: BigNumber = new BigNumber(0);

    let xorPriceInDAI: BigNumber = new BigNumber(0);
    reserves.forEach(([{args: [baseAsset, targetAsset]}, value]) => {
        let xorReserves: BigNumber = new BigNumber(value[0].toBigInt());
        let targetAssetReserves: BigNumber = new BigNumber(value[1].toBigInt());
        let pool = pools.find(p => p.targetAssetId === targetAsset.toHuman());
        if (pool) {
            pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAsset.toString());
            pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAsset.toString());
            if (targetAsset.toHuman() === DAI) {
                xorPriceInDAI = targetAssetReserves.div(xorReserves);
            }
            totalXorInPools = totalXorInPools.plus(xorReserves);
            totalXORWithDoublePools = totalXORWithDoublePools
                .plus(xorReserves.multipliedBy(Number(pool.multiplier)));
        }
    });

    let pswapPool = pools.find(p => p.targetAssetId === PSWAP);
    if (pswapPool) {
        let pswapPriceInXor: BigNumber = new BigNumber(pswapPool.baseAssetReserves)
            .div(new BigNumber(pswapPool.targetAssetReserves));
        let pswapPriceInDAI: BigNumber = pswapPriceInXor.multipliedBy(xorPriceInDAI);
        pools.forEach(p => {
            let priceInXor: BigNumber = new BigNumber(p.baseAssetReserves)
                .dividedBy(new BigNumber(p.targetAssetReserves));
            let daiPrice: BigNumber = priceInXor.multipliedBy(xorPriceInDAI);
            let strategicBonusApy: BigNumber = ((
                (pswapPriceInDAI.multipliedBy(new BigNumber(2500000)))
                    .dividedBy(xorPriceInDAI.multipliedBy(totalXORWithDoublePools.dividedBy(Math.pow(10, 18)))))
                .multipliedBy(new BigNumber(365 / 2)))
                .multipliedBy(Number(p.multiplier));
            p.priceUSD = daiPrice.toFixed(18).toString();
            p.strategicBonusApy = strategicBonusApy.toFixed(18).toString();
        });
    }

    record.totalXORInPools = formatU128ToBalance(totalXorInPools.toFixed(0).toString(), XOR);

    //Add fake XOR Pool in order to add fiat price for it
    let xorPool: Pool = new Pool(record.id.toString() + "_" + XOR + "_" + XOR);
    xorPool.baseAssetId = XOR;
    xorPool.targetAssetId = XOR;
    xorPool.multiplier = BigInt(1);
    xorPool.baseAssetReserves = "0";
    xorPool.targetAssetReserves = "0";
    xorPool.priceUSD = xorPriceInDAI.toFixed(18).toString();
    xorPool.strategicBonusApy = "0";
    xorPool.updated = blockDate;
    xorPool.poolEntityId = record.id;
    pools.push(xorPool);

    await record.save();
    await Promise.all(pools.map(pool => {
        pool.save()
    }));
}
