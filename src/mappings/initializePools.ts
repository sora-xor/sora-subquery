import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../types";

import { getAssetId } from '../utils/assets';
import { getAllReserves, getOrCreatePoolXYKEntity } from '../utils/pools';
import { BASE_ASSETS } from '../utils/consts';

let isFirstBlockIndexed = false;

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Pool XYK entities`);

    for (const baseAssetId of BASE_ASSETS) {
        const pools: Array<PoolXYK> = [];

        const reserves = await getAllReserves(baseAssetId);

        if (!reserves) continue;

        for (const [{ args: [, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const pool = await getOrCreatePoolXYKEntity(baseAssetId, targetAssetId);

            pool.baseAssetReserves = value[0].toBigInt();
            pool.targetAssetReserves = value[1].toBigInt()

            pools.push(pool);
        }

        await Promise.all(pools.map(pool => pool.save()));
    }

    isFirstBlockIndexed = true;
}
