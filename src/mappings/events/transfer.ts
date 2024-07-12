import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsStorage, PoolsPrices, getChameleonPool, getChameleonPoolBaseAssetId } from '../../utils/pools';
import { orderBooksStorage } from "../../utils/orderBook";
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";
import { initializedAtBlock } from '../models/initializePools'

export async function handleTransferEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event)

  if (initializedAtBlock === event.block.block.header.number.toNumber()) {
		return
	}

  const { assetId, from, to, amount } = getTransferEventData(event);

  // withdraw token from pool
  if (poolAccounts.has(from)) {
    const pool = await poolsStorage.getPoolById(event.block, from);
    const isChameleonPool = getChameleonPool(pool);
    const chameleonAssetId = isChameleonPool ? getChameleonPoolBaseAssetId(pool.baseAssetId) : null;

    if (pool.baseAssetId === assetId || chameleonAssetId === assetId) {
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
    const isChameleonPool = getChameleonPool(pool);
    const chameleonAssetId = isChameleonPool ? getChameleonPoolBaseAssetId(pool.baseAssetId) : null;

    if (pool.baseAssetId === assetId || chameleonAssetId === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount);
    } else if (pool.targetAssetId === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount);
    }

    getEventHandlerLog(event).debug({ poolId: pool.id }, 'Pool information saved after deposit')
    PoolsPrices.set(true);
  }

  // withdraw token from order book
  if (orderBooksStorage.accountIds.has(from)) {
    const book = await orderBooksStorage.getOrderBookByAccountId(event.block, from);

    if (book.baseAssetId === assetId) {
      book.baseAssetReserves = book.baseAssetReserves - BigInt(amount);
    } else if (book.quoteAssetId === assetId) {
      book.quoteAssetReserves = book.quoteAssetReserves - BigInt(amount);
    }

    getEventHandlerLog(event).debug({ id: book.id }, 'Order Book information saved after withdrawal');
  }
  // deposit token to order book
  if (orderBooksStorage.accountIds.has(to)) {
    const book = await orderBooksStorage.getOrderBookByAccountId(event.block, to)

    if (book.baseAssetId === assetId) {
      book.baseAssetReserves = book.baseAssetReserves + BigInt(amount);
    } else if (book.quoteAssetId === assetId) {
      book.quoteAssetReserves = book.quoteAssetReserves + BigInt(amount);
    }

    getEventHandlerLog(event).debug({ id: book.id }, 'Order Book information saved after deposit')
  }
}