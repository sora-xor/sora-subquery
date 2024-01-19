import { SubstrateBlock } from "@subql/types";

import { getAssetId } from '../../utils/assets';
import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools';
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts';
import { getInitializePoolsLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    getInitializePoolsLog(block).debug('Initialize Pool XYK entities');
    const poolsBuffer = new Map();

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
                multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
            })
        }

        for (const [{ args: [baseAsset, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId);
            const pool = poolsBuffer.get(poolAccountId);

            if (pool) {
                pool.baseAssetReserves = BigInt(value[0].toString());
                pool.targetAssetReserves = BigInt(value[1].toString());
            }
        }
    }

    const entities = [...poolsBuffer.values()];

    if (entities.length) {
        // get or create entities in DB & memory
        // We don't use Promise.all here because we need consistent order of requests in the log
        const created = [];
        for (const entity of entities) {
            const pool = await poolsStorage.getPoolById(block, entity.id);
            created.push(pool);
        }
        // update data in memory storage
        created.forEach((entity) => {
            Object.assign(entity, poolsBuffer.get(entity.id))
        });
        // save in DB
        await store.bulkUpdate('PoolXYK', created);
        getInitializePoolsLog(block).debug(`${entities.length} Pool XYKs initialized!`);
    } else {
        getInitializePoolsLog(block).debug('No Pool XYKs to initialize!');
    }

    isFirstBlockIndexed = true;
}
