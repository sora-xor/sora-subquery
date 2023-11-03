import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function handleTransferEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event)

  const { assetId, from, to, amount } = getTransferEventData(event);

  // withdraw token from pool
  if (poolAccounts.has(from)) {
    const pool = await poolsStorage.getPoolById(event.block, from);

    if (pool.baseAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount);
    }

    getEventHandlerLog(event).debug({ poolId: pool.id }, 'Pool information saved after withdrawal')
    PoolsPrices.set(true);
  }

  // deposit token to pool
  if (poolAccounts.has(to)) {
    const pool = await poolsStorage.getPoolById(event.block, to);

    if (pool.baseAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount);
    }

    getEventHandlerLog(event).debug({ poolId: pool.id }, 'Pool information saved after deposit')
    PoolsPrices.set(true);
  }
}