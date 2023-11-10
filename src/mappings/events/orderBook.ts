import { SubstrateEvent } from "@subql/types";
import { OrderBookLimitOrder, OrderStatus } from '../../types'

import { formatDateTimestamp } from '../../utils';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { orderBooksStorage } from '../../utils/orderBook';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function orderBookLimitOrderPlacedEvent(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { event: { data: [orderBook, orderId, ownerId, side, price, amount, lifetime] } } = event as any;

  const id = orderId.toHuman();
  const dexId = orderBook.dexId.toNumber();
  const baseAssetId = getAssetId(orderBook.base);
  const quoteAssetId = getAssetId(orderBook.quote);
  const orderBookId = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
  const timestamp = formatDateTimestamp(event.block.timestamp);
  const orderLifetime = lifetime.toNumber() / 1000;
  const blockNumber = event.block.block.header.number.toNumber();

  const limitOrder = new OrderBookLimitOrder(id);
  limitOrder.orderBookId = orderBookId;
  limitOrder.accountId = ownerId.toString();
  limitOrder.createdAtBlock = blockNumber;
  limitOrder.timestamp = timestamp;
  limitOrder.isBuy = side.toHuman() === 'Buy';
  limitOrder.amount = formatU128ToBalance(amount.toString(), baseAssetId);
  limitOrder.price = formatU128ToBalance(price.toString(), quoteAssetId);
  limitOrder.lifetime = orderLifetime;
  limitOrder.expiresAt = timestamp + orderLifetime;
  limitOrder.amountFilled = '0';
  limitOrder.status = OrderStatus.ACTIVE;
  limitOrder.updatedAtBlock = blockNumber;

  await limitOrder.save();

  getEventHandlerLog(event).debug({ id }, 'Limit Order Saved');
}
