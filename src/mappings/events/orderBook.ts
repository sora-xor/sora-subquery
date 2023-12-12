import BigNumber from "bignumber.js";

import { SubstrateEvent } from "@subql/types";
import { OrderBookOrder, OrderType, OrderStatus } from '../../types'

import { formatDateTimestamp } from '../../utils';
import { getAccountEntity } from '../../utils/account';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { OrderBooksStorage, orderBooksStorage, orderBooksSnapshotsStorage } from '../../utils/orderBook';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

const getBookData = (orderBookCodec: any) => {
  const dexId = orderBookCodec.dexId.toNumber();
  const baseAssetId = getAssetId(orderBookCodec.base);
  const quoteAssetId = getAssetId(orderBookCodec.quote);

  return { dexId, baseAssetId, quoteAssetId };
}

const getOrderData = (orderBookCodec: any, orderId: string | number) => {
  const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookCodec);
  const orderBookId = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const id = OrderBooksStorage.getOrderId(orderBookId, orderId);

  return { dexId, baseAssetId, quoteAssetId, orderBookId, orderId, id };
}

export async function orderBookCreatedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec] } } = event as any;
  const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookCodec);
  const { id } = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);

  getEventHandlerLog(event).debug({ id }, 'Order Book Created');
}

export async function orderBookStatusChangedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, statusCodec] } } = event as any;
  const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookCodec);
  const orderBook = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);
  const status = statusCodec.toHuman();

  orderBook.status = status;

  await orderBook.save();

  getEventHandlerLog(event).debug({ id: orderBook.id, status }, 'Order Book Status Changed');
}

export async function limitOrderPlacedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, orderIdCodec, ownerId, side, price, amount, lifetime] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();
  const timestamp = formatDateTimestamp(event.block.timestamp);
  const orderLifetime = lifetime.toNumber() / 1000;

  const { dexId, baseAssetId, quoteAssetId, orderId, id } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const book = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);
  const account = await getAccountEntity(event.block, ownerId.toString());

  const limitOrder = new OrderBookOrder(id);
  limitOrder.type = OrderType.Limit;
  limitOrder.orderId = Number(orderId);
  limitOrder.orderBookId = book.id;
  limitOrder.accountId = account.id;
  limitOrder.createdAtBlock = blockNumber;
  limitOrder.timestamp = timestamp;
  limitOrder.isBuy = side.toHuman() === 'Buy';
  limitOrder.amount = formatU128ToBalance(amount.inner.toString(), baseAssetId);
  limitOrder.price = formatU128ToBalance(price.inner.toString(), quoteAssetId);
  limitOrder.lifetime = orderLifetime;
  limitOrder.expiresAt = timestamp + orderLifetime;
  limitOrder.amountFilled = '0';
  limitOrder.status = OrderStatus.Active;
  limitOrder.updatedAtBlock = blockNumber;

  await limitOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Limit Order Saved');
}

export async function limitOrderExecutedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, orderIdCodec, _ownerId, side, price, amount] } } = event as any;
  const { id, dexId, baseAssetId, quoteAssetId, orderId } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const newPrice = formatU128ToBalance(price.inner.toString(), quoteAssetId);
  const newAmount = formatU128ToBalance(amount.asBase.inner.toString(), baseAssetId);
  const isBuy = side.toHuman() === 'Buy';

  const limitOrder = await OrderBookOrder.get(id);

  if (limitOrder) {
    const blockNumber = event.block.block.header.number.toNumber();

    limitOrder.amountFilled = new BigNumber(limitOrder.amountFilled).plus(new BigNumber(newAmount)).toString();
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id }, 'Limit Order Executed');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }

  await orderBooksSnapshotsStorage.updateDeal(event.block, dexId, baseAssetId, quoteAssetId, Number(orderId), newPrice, newAmount, isBuy);
}

export async function limitOrderUpdatedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, orderIdCodec, _ownerId, amount] } } = event as any;
  const { id, baseAssetId } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const limitOrder = await OrderBookOrder.get(id);

  if (limitOrder) {
    const blockNumber = event.block.block.header.number.toNumber();
    const newAmount = formatU128ToBalance(amount.inner.toString(), baseAssetId);

    limitOrder.amount = newAmount;
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id, amount: newAmount }, 'Limit Order Updated');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }
}

export async function limitOrderFilledEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, orderIdCodec] } } = event as any;
  const { id } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const limitOrder = await OrderBookOrder.get(id);

  if (limitOrder) {
    const blockNumber = event.block.block.header.number.toNumber();
    limitOrder.status = OrderStatus.Filled;
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id }, 'Limit Order Filled');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }
}

export async function limitOrderCanceledEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, orderIdCodec, _ownerId, reasonCodec] } } = event as any;
  const { id } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const limitOrder = await OrderBookOrder.get(id);

  if (limitOrder) {
    const blockNumber = event.block.block.header.number.toNumber();
    const reason = reasonCodec.toHuman();
    const status = reason === 'Manual' ? OrderStatus.Canceled : reason;
    limitOrder.status = status;
    limitOrder.updatedAtBlock = blockNumber;

    await limitOrder.save();

    getEventHandlerLog(event).debug({ id, reason }, 'Limit Order Canceled');
  } else {
    getEventHandlerLog(event).debug({ id }, 'Limit Order not found');
  }
}

export async function marketOrderEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBookCodec, ownerId, side, amountCodec, price] } } = event as any;

  const blockNumber = event.block.block.header.number.toNumber();
  const timestamp = formatDateTimestamp(event.block.timestamp);

  const eventIndex = event.event.index.toString();
  const orderId = `${blockNumber}-${eventIndex}`;

  const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookCodec, orderId);

  const book = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);
  const account = await getAccountEntity(event.block, ownerId.toString());
  const amount = formatU128ToBalance(amountCodec.asBase.inner.toString(), baseAssetId);

  const marketOrder = new OrderBookOrder(id);
  marketOrder.type = OrderType.Market;
  marketOrder.orderId = null;
  marketOrder.orderBookId = book.id;
  marketOrder.accountId = account.id;
  marketOrder.createdAtBlock = blockNumber;
  marketOrder.timestamp = timestamp;
  marketOrder.isBuy = side.toHuman() === 'Buy';
  marketOrder.amount = amount;
  marketOrder.lifetime = 0;
  marketOrder.expiresAt = timestamp;
  marketOrder.amountFilled = amount;
  marketOrder.status = OrderStatus.Filled;
  marketOrder.updatedAtBlock = blockNumber;

  if (price) {
    marketOrder.price = formatU128ToBalance(price.inner.toString(), quoteAssetId);
  } else {
    // should be added in backend
    marketOrder.price = '0';
  }

  await marketOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Market Order Saved');
}
