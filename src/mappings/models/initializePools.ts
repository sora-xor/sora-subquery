import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from '../../types';

import { getBlockNumber } from '../../utils';
import { getAssetId, getAssetBalance } from '../../utils/assets';
import { poolAccounts, getAllReserves, getAllProperties, getAllBalances, poolsStorage, getChameleonPool, getChameleonPoolBaseAssetId } from '../../utils/pools';
import { BASE_ASSETS } from '../../utils/consts';
import { getInitializePoolsLog } from "../../utils/logs";

export let initializedAtBlock: number | null = null

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (initializedAtBlock !== null) return;

    getInitializePoolsLog(block).debug('Initialize Pool XYK entities');

    const poolsBuffer: Map<string, Partial<PoolXYK>> = new Map();

    for (const baseAssetId of BASE_ASSETS) {
        // We don't use Promise.all here because we need consistent order of requests in the log
        const properties = await getAllProperties(block, baseAssetId);
        const reserves = await getAllReserves(block, baseAssetId);

        if (!properties || !reserves) continue;

        for (const [{ args: [baseAsset, targetAsset] }, results] of properties) {
            const targetAssetId = getAssetId(targetAsset);
            const [poolAccountId] = results.toJSON() as string[];

            poolAccounts.add(baseAssetId, targetAssetId, poolAccountId);

            poolsBuffer.set(poolAccountId, {
                id: poolAccountId,
                baseAssetId,
                targetAssetId,
            })
        }

        for (const [{ args: [baseAsset, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId);
            const pool = poolsBuffer.get(poolAccountId);

            if (!pool) continue;

            const baseAssetReserves = BigInt(value[0].toString());
            const targetAssetReserves = BigInt(value[1].toString());

            pool.baseAssetReserves = baseAssetReserves;
            pool.targetAssetReserves = targetAssetReserves;

            if (!getChameleonPool(pool)) continue;

            const chameleonAssetId = getChameleonPoolBaseAssetId(baseAssetId);
            const chameleonAssetReserves = await getAssetBalance(block, poolAccountId, chameleonAssetId);

            pool.chameleonAssetReserves = chameleonAssetReserves;
        }
    }

    const poolsTokens = await getAllBalances(block);

    for (const [poolId, balance] of Object.entries(poolsTokens)) {
        const pool = poolsBuffer.get(poolId);

        pool.poolTokenSupply = BigInt(balance);
    }

    const entities = [...poolsBuffer.values()];

    if (entities.length) {
        // get or create entities in DB & memory
        // We don't use Promise.all here because we need consistent order of requests in the log
        for (const entity of entities) {
            const pool = await poolsStorage.getEntity(block, entity.id);
            // update data in memory storage
            Object.assign(pool, entity);
        }
        // save in DB
        await poolsStorage.sync(block);
        getInitializePoolsLog(block).info(`${entities.length} Pool XYKs initialized!`);
    } else {
        getInitializePoolsLog(block).info('No Pool XYKs to initialize!');
    }

    initializedAtBlock = getBlockNumber(block);
}
