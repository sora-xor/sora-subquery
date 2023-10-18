import { SubstrateBlock } from "@subql/types";

import { getAssetId } from '../../utils/assets';
import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools';
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts';
import { getInitializePoolsLog } from "sora/utils/logs";

let isFirstBlockIndexed = false;

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    getInitializePoolsLog(block).debug('Initialize Pool XYK entities');
    const poolsBuffer = new Map();

    for (const baseAssetId of BASE_ASSETS) {
        const [properties, reserves] = await Promise.all([getAllProperties(block, baseAssetId),getAllReserves(block, baseAssetId)]);

        if (!properties || !reserves) continue;

        for (const [{ args: [baseAsset, targetAsset] }, results] of properties) {
            const targetAssetId = getAssetId(targetAsset);
            const [poolAccountId] = results.toJSON() as string[];

            poolAccounts.add(baseAssetId, targetAssetId, poolAccountId);

            poolsBuffer.set(poolAccountId, {
                id: poolAccountId,
                baseAssetId,
                targetAssetId,
                baseAssetReserves: BigInt(0),
                targetAssetReserves: BigInt(0),
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
        await store.bulkUpdate('PoolXYK', entities);
        await Promise.all(entities.map(entity => poolsStorage.getPoolById(block, entity.id)));
        getInitializePoolsLog(block).debug(`${entities.length} Pool XYKs initialized!`);
    } else {
        getInitializePoolsLog(block).debug('No Pool XYKs to initialize!');
    }

    isFirstBlockIndexed = true;
}
