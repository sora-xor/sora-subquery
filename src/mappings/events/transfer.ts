import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools';
import { logEventHandler } from "../../utils/log";

export async function handleTransferEvent(event: SubstrateEvent): Promise<void> {
  logEventHandler(event)

  const { assetId, from, to, amount } = getTransferEventData(event);

  const blockNumber = event.block.block.header.number.toNumber();

  if (blockNumber === 90) {
		logger.debug('poolAccounts.has(from): ' + poolAccounts.has(from) + ' ' + from)
		logger.debug('poolAccounts.has(to): ' + poolAccounts.has(to) + ' ' + to)
	}

  // withdraw token from pool
  if (poolAccounts.has(from)) {
    const pool = await poolsStorage.getPoolById(from);

    if (pool.baseAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount);
    }

    logger.debug(`[${blockNumber}]: Update pool ${pool.id}`);
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

    logger.debug(`[${blockNumber}]: Update pool ${pool.id}`);
    PoolsPrices.set(true);
  }
}