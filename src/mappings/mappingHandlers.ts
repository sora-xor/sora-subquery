import {SubstrateBlock} from "@subql/types";
import {Pool, PoolXYKEntity} from "../types";


const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
const DOUBLE_PRICE_POOL: Array<String> = [VAL, PSWAP, DAI, ETH];
const XYK_POOL: string = 'XYKPool';

function formatU128ToBalance(u128: string, decimals: number = 18) {
    let padded = u128.padStart(decimals + 1, "0");
    return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
}

export async function handleXYKPools(block: SubstrateBlock): Promise<void> {
    if (block.block.header.number.toNumber() % 100 != 0) {
        return;
    }
    let record = new PoolXYKEntity(block.block.header.hash.toString());
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
                pools.push(pool);
            }
        }
    });

    let reserves = await api.query.poolXyk.reserves.entries(XOR)
        .catch(e => logger.error("Error getting reserves", e))
    let totalXORWithDoublePools: number = 0;
    reserves.forEach(([{args: [baseAsset, targetAsset]}, value]) => {
        let xorReservesStr = formatU128ToBalance(value[0].toString(), 18);
        let targetAssetReserves = formatU128ToBalance(value[1].toString(), 18);
        let pool = pools.find(p => p.targetAssetId === targetAsset.toHuman());
        pool.baseAssetReserves = xorReservesStr;
        pool.targetAssetReserves = targetAssetReserves;

        let xorReserves = Number(xorReservesStr);
        totalXorInPools += xorReserves;
        totalXORWithDoublePools += xorReserves * Number(pool.multiplier);
    });

    pools.forEach(p => {
        let apy: number = (((0.08 * 2500000) / (226 * totalXORWithDoublePools)) * (365 / 2)) * Number(p.multiplier);
        p.apy = apy.toString();
    });

    record.totalXORInPools = totalXorInPools.toString();
    await record.save().catch(e => logger.error("Error saving record", e));
    await Promise.all(pools.map(pool => {
        pool.save()
    })).catch(e => logger.error("Error saving pools", e));
}


