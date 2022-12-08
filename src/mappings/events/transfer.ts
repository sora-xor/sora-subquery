import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools';

export async function handleTransferEvent(event: SubstrateEvent): Promise<void> {
  const { assetId, from, to, amount } = getTransferEventData(event);

  // withdraw token from pool
  if (poolAccounts.has(from)) {
    const pool = poolsStorage.getPoolById(from);

    if (pool.baseAsset === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount.toString());
    } else if (pool.targetAsset === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount.toString());
    }

    PoolsPrices.set(true);
  }

  // deposit token to pool
  if (poolAccounts.has(to)) {
    const pool = poolsStorage.getPoolById(to);

    if (pool.baseAsset === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount.toString());
    } else if (pool.targetAsset === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount.toString());
    }

    PoolsPrices.set(true);
  }
}