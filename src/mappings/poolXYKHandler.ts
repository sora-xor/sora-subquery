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
const FIVE_MINUTES_IN_BLOCKS = 50;

export async function handleXYKPools(block: SubstrateBlock): Promise<void> {
    if (block.block.header.number.toNumber() % FIVE_MINUTES_IN_BLOCKS != 0) {
        return;
    }

    const blockDate: string = ((block.timestamp).getTime() / 1000).toFixed(0).toString();
    const record = new PoolXYKEntity(block.block.header.hash.toString());
    const pools: Array<Pool> = [];

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

    reserves.forEach(([{ args: [baseAsset, targetAsset] }, value]) => {
        const baseAssetId = baseAsset.toString();
        const targetAssetId = targetAsset.toString();
        const xorReserves: BigNumber = new BigNumber(value[0].toBigInt());
        const targetAssetReserves: BigNumber = new BigNumber(value[1].toBigInt());
        const pool = new Pool(record.id.toString() + "_" + baseAssetId + "_" + targetAssetId);

        pool.baseAssetId = baseAssetId;
        pool.targetAssetId = targetAssetId;
        pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAssetId);
        pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAssetId);
        pool.multiplier = DOUBLE_PRICE_POOL.includes(targetAssetId) ? BigInt(2) : BigInt(1);
        pool.poolEntityId = record.id;
        pool.priceUSD = '0';
        pool.strategicBonusApy = '0';
        pool.updated = blockDate;

        pools.push(pool);

        totalXorInPools = totalXorInPools.plus(xorReserves);
        totalXORWithDoublePools = totalXORWithDoublePools.plus(xorReserves.multipliedBy(Number(pool.multiplier)));

        if (targetAssetId === DAI) {
            xorPriceInDAI = targetAssetReserves.div(xorReserves);
        }
    });

    // Update pools priceUSD & strategicBonusApy
    if (!xorPriceInDAI.isZero()) {
        const pswapPool = pools.find(p => p.targetAssetId === PSWAP);

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

    record.totalXORInPools = formatU128ToBalance(totalXorInPools.toFixed(0).toString(), XOR);

    //Add fake XOR Pool in order to add fiat price for it
    const xorPool: Pool = new Pool(record.id.toString() + "_" + XOR + "_" + XOR);
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

    record.updated = blockDate;
    await record.save();

    await Promise.all(pools.map(pool => pool.save()));
}
