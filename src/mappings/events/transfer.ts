import { SubstrateEvent } from "@subql/types";

import { getTransferEventData } from '../../utils/events';
import { poolAccounts, poolsSnapshotsStorage } from '../../utils/pools';
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
    await poolsSnapshotsStorage.processWithdraw(event.block, from, assetId, amount);
  }
  // deposit token to pool
  if (poolAccounts.has(to)) {
    await poolsSnapshotsStorage.processDeposit(event.block, to, assetId, amount);
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