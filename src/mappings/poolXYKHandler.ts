import {SubstrateBlock} from "@subql/types";
import {Pool, PoolXYKEntity} from "../types";
import {formatU128ToBalance} from "./utils";


const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
const DOUBLE_PRICE_POOL: Array<String> = [VAL, PSWAP, DAI, ETH];
const XYK_POOL: string = 'XYKPool';
const ONE_HOUR_IN_BLOCKS = 600;


export async function handleXYKPools(block: SubstrateBlock): Promise<void> {
    if (block.block.header.number.toNumber() % ONE_HOUR_IN_BLOCKS != 0) {
        return;
    }
    let blockDate = block.timestamp;

    let record = new PoolXYKEntity(block.block.header.hash.toString());
    record.updated = blockDate;
    let totalXorInPools: number = 0;
    const pairs = await api.query.tradingPair.enabledSources.entries(0)
        .catch(e => {
            logger.error("Error reading tradingPair.sources for block " + block.block.header.hash.toString());
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
    let reserves = await api.query.poolXyk.reserves.entries(XOR)
        .catch(e => logger.error("Error getting reserves", e))
    let totalXORWithDoublePools: number = 0;
    let xorPriceInDAI: number = 0;
    reserves.forEach(([{args: [baseAsset, targetAsset]}, value]) => {
        let xorReservesStr = formatU128ToBalance(value[0].toString(), 18);
        let targetAssetReserves = formatU128ToBalance(value[1].toString(), 18);
        let pool = pools.find(p => p.targetAssetId === targetAsset.toHuman());
        if (pool) {
            pool.baseAssetReserves = xorReservesStr;
            pool.targetAssetReserves = targetAssetReserves;
            if (targetAsset.toHuman() === DAI) {
                xorPriceInDAI = value[1].toBigInt() / value[0].toBigInt();
            }
            let xorReserves = Number(xorReservesStr);
            totalXorInPools += xorReserves;
            totalXORWithDoublePools += xorReserves * Number(pool.multiplier);
        }
    });
    let pswapPool = pools.find(p => p.targetAssetId === PSWAP);
    let pswapPriceInXor: number = Number(pswapPool.baseAssetReserves) / Number(pswapPool.targetAssetReserves);
    let pswapPriceInDAI = pswapPriceInXor * Number(xorPriceInDAI);
    pools.forEach(p => {
        let priceInXor: number = Number(p.baseAssetReserves) / Number(p.targetAssetReserves);
        let daiPrice = priceInXor * Number(xorPriceInDAI);
        let apy: number = (((pswapPriceInDAI * 2500000) / (Number(xorPriceInDAI) * totalXORWithDoublePools)) * (365 / 2)) * Number(p.multiplier);
        p.priceUSD = daiPrice.toString();
        p.apy = apy.toString();
    });

    record.totalXORInPools = totalXorInPools.toString();
    await record.save();
    await Promise.all(pools.map(pool => {
        pool.save()
    }));
}


