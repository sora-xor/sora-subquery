import BigNumber from "bignumber.js";

import { SubstrateEvent } from "@subql/types";
import { OrderBookLimitOrder, OrderBookMarketOrder, OrderStatus } from '../../types'

import { formatDateTimestamp } from '../../utils';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { orderBooksStorage } from '../../utils/orderBook';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function orderBookLimitOrderPlacedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBook, orderIdCodec, ownerId, side, price, amount, lifetime] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();
  const timestamp = formatDateTimestamp(event.block.timestamp);
  const orderLifetime = lifetime.toNumber() / 1000;

  const dexId = orderBook.dexId.toNumber();
  const baseAssetId = getAssetId(orderBook.base);
  const quoteAssetId = getAssetId(orderBook.quote);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const orderId = Number(orderIdCodec.toHuman());
  const id = orderBooksStorage.getOrderId(orderBookId, orderId);

  const limitOrder = new OrderBookLimitOrder(id);
  limitOrder.orderBookId = orderBookId;
  limitOrder.accountId = ownerId.toString();
  limitOrder.createdAtBlock = blockNumber;
  limitOrder.timestamp = timestamp;
  limitOrder.isBuy = side.toHuman() === 'Buy';
  limitOrder.amount = formatU128ToBalance(amount.inner.toString(), baseAssetId);
  limitOrder.price = formatU128ToBalance(price.inner.toString(), quoteAssetId);
  limitOrder.orderId = orderId;
  limitOrder.lifetime = orderLifetime;
  limitOrder.expiresAt = timestamp + orderLifetime;
  limitOrder.amountFilled = '0';
  limitOrder.status = OrderStatus.ACTIVE;
  limitOrder.updatedAtBlock = blockNumber;

  await limitOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Limit Order Saved');
}

export async function orderBookLimitOrderExecutedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBook, orderIdCodec, ownerId, side, price, amount] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();

  const dexId = orderBook.dexId.toNumber();
  const baseAssetId = getAssetId(orderBook.base);
  const quoteAssetId = getAssetId(orderBook.quote);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const orderId = Number(orderIdCodec.toHuman());
  const id = orderBooksStorage.getOrderId(orderBookId, orderId);

  const limitOrder = await OrderBookLimitOrder.get(id);

  if (limitOrder) {
    const amountFilled = formatU128ToBalance(amount.asBase.inner.toString(), baseAssetId);

    limitOrder.amountFilled = new BigNumber(limitOrder.amountFilled).plus(new BigNumber(amountFilled)).toString();
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id }, 'Limit Order Executed');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }
}

export async function orderBookLimitOrderFilledEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBook, orderIdCodec] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();

  const dexId = orderBook.dexId.toNumber();
  const baseAssetId = getAssetId(orderBook.base);
  const quoteAssetId = getAssetId(orderBook.quote);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const orderId = Number(orderIdCodec.toHuman());
  const id = orderBooksStorage.getOrderId(orderBookId, orderId);

  const limitOrder = await OrderBookLimitOrder.get(id);

  if (limitOrder) {
    limitOrder.status = OrderStatus.FILLED;
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id }, 'Limit Order Filled');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }
}

export async function orderBookMarketOrderExecutedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBook, ownerId, side, amount, price] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();
  const eventIndex = event.event.index.toString();
  const id = `${blockNumber}-${eventIndex}`;
  const dexId = orderBook.dexId.toNumber();
  const baseAssetId = getAssetId(orderBook.base);
  const quoteAssetId = getAssetId(orderBook.quote);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const timestamp = formatDateTimestamp(event.block.timestamp);

  const limitOrder = new OrderBookMarketOrder(id);
  limitOrder.orderBookId = orderBookId;
  limitOrder.accountId = ownerId.toString();
  limitOrder.createdAtBlock = blockNumber;
  limitOrder.timestamp = timestamp;
  limitOrder.isBuy = side.toHuman() === 'Buy';
  limitOrder.amount = formatU128ToBalance(amount.asBase.inner.toString(), baseAssetId);
  limitOrder.price = formatU128ToBalance(price.inner.toString(), quoteAssetId);

  await limitOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Market Order Saved');
}
