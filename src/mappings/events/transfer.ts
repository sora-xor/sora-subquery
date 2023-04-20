import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools';

export async function handleTransferEvent(event: SubstrateEvent): Promise<void> {
  const { assetId, from, to, amount } = getTransferEventData(event);

  // withdraw token from pool
  if (poolAccounts.has(from)) {
    const pool = await poolsStorage.getPoolById(from);

    if (pool.baseAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount);
    }

    PoolsPrices.set(true);
  }

  // deposit token to pool
  if (poolAccounts.has(to)) {
    const pool = await poolsStorage.getPoolById(to);

    if (pool.baseAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount);
    }

    PoolsPrices.set(true);
  }
}