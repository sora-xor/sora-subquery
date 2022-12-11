import { SubstrateBlock } from "@subql/types";

import { getAssetId } from '../../utils/assets';
import { poolAccounts, getAllReserves, getAllProperties } from '../../utils/pools';
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts';

let isFirstBlockIndexed = false;

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Pool XYK entities`);

    const poolsBuffer = new Map();

    for (const baseAssetId of BASE_ASSETS) {
        const [properties, reserves] = await Promise.all([getAllProperties(baseAssetId),getAllReserves(baseAssetId)]);

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

    await store.bulkUpdate('PoolXYK', [...poolsBuffer.values()]);

    isFirstBlockIndexed = true;
}
