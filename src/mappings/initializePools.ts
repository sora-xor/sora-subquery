import { SubstrateBlock } from "@subql/types";
import { PoolXYK } from "../types";

import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { getAllReserves, getPoolAccountId } from '../utils/pools';
import { XOR, DOUBLE_PRICE_POOL, BASE_ASSETS } from '../utils/consts';

let isFirstBlockIndexed = false;

export async function initializePools(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    for (const baseAsset of BASE_ASSETS) {
        const pools: Array<PoolXYK> = [];

        const reserves = await getAllReserves(baseAsset);

        if (!reserves) continue;

        for (const [{ args: [, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset);
            const poolId = await getPoolAccountId(baseAsset, targetAssetId);

            if (!poolId) continue;

            const pool = (await PoolXYK.get(poolId)) || new PoolXYK(poolId);

            pool.baseAsset = baseAsset;
            pool.targetAsset = targetAssetId;
            pool.baseAssetReserves = formatU128ToBalance(value[0].toString(), baseAsset);
            pool.targetAssetReserves = formatU128ToBalance(value[1].toString(), targetAssetId);
            pool.multiplier = baseAsset === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
            pool.priceUSD = '0';
            pool.strategicBonusApy = '0';

            pools.push(pool);
        }

        await Promise.all(pools.map(pool => pool.save()));
    }

    isFirstBlockIndexed = true;
}
