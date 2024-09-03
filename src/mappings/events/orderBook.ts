import BigNumber from "bignumber.js";

import { SubstrateEvent } from "@subql/types";
import { OrderBookOrder, OrderType, OrderStatus } from '../../types'

import { formatDateTimestamp, getEventId, getBlockNumber } from '../../utils';
import { getAccountEntity } from '../../utils/account';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { orderBooksStorage, orderBooksSnapshotsStorage } from '../../utils/orderBook';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

const getBookData = (orderBookCodec: any) => {
  const dexId = orderBookCodec.dexId.toNumber();
  const baseAssetId = getAssetId(orderBookCodec.base);
  const quoteAssetId = getAssetId(orderBookCodec.quote);

  return { dexId, baseAssetId, quoteAssetId };
}

const getOrderData = (orderBookCodec: any, orderId: string | number) => {
  const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookCodec);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const id = orderBooksStorage.getOrderId(orderBookId, orderId);

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

  const blockNumber = getBlockNumber(event.block);
  const timestamp = formatDateTimestamp(event.block.timestamp);
  const orderLifetime = lifetime.toNumber() / 1000;

  const { dexId, baseAssetId, quoteAssetId, orderId, id } = getOrderData(orderBookCodec, orderIdCodec.toNumber());

  const book = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);
  const account = await getAccountEntity(event.block, ownerId.toString());
  const amountU128 = amount.inner.toString();
  const priceU128 = price.inner.toString();
  const isBuy = side.toHuman() === 'Buy';

  const limitOrder = new OrderBookOrder(
    id,
    OrderType.Limit,
    book.id,
    account.id,
    blockNumber,
    timestamp,
    isBuy,
    formatU128ToBalance(amountU128, baseAssetId),
    formatU128ToBalance(priceU128, quoteAssetId),
    orderLifetime,
    timestamp + orderLifetime,
    '0',
    OrderStatus.Active,
    blockNumber
  );

  limitOrder.orderId = Number(orderId);

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
    const blockNumber = getBlockNumber(event.block);

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
    const blockNumber = getBlockNumber(event.block);
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
    const blockNumber = getBlockNumber(event.block);
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
    const blockNumber = getBlockNumber(event.block);
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

  const blockNumber = getBlockNumber(event.block);
  const timestamp = formatDateTimestamp(event.block.timestamp);

  const orderId = getEventId(event);

  const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookCodec, orderId);

  const book = await orderBooksStorage.getOrderBook(event.block, dexId, baseAssetId, quoteAssetId);
  const account = await getAccountEntity(event.block, ownerId.toString());
  const amount = formatU128ToBalance(amountCodec.asBase.inner.toString(), baseAssetId);

  const marketOrder = new OrderBookOrder(
    id,
    OrderType.Market,
    book.id,
    account.id,
    blockNumber,
    timestamp,
    side.toHuman() === 'Buy',
    amount,
    price ? formatU128ToBalance(price.inner.toString(), quoteAssetId) : '0',
    0,
    timestamp,
    amount,
    OrderStatus.Filled,
    blockNumber,
  );

  await marketOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Market Order Saved');
}
