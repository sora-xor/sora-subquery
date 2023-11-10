import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot } from "../types";

import { SubstrateBlock, SubstrateExtrinsic } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog } from './logs';
import { getAssetId, formatU128ToBalance } from './assets';

export const getAllOrderBooks = async (block: SubstrateBlock) => {
  try {
    getInitializeOrderBooksLog(block).debug('Order Books entities request...');
    const entities = await api.query.orderBook.orderBooks.entries();
    getInitializeOrderBooksLog(block).debug('Order Books entities request completed');
    return entities;
  } catch (e) {
    getInitializeOrderBooksLog(block).error('Error getting Order Books entities');
		getInitializeOrderBooksLog(block).error(e);
    return null;
  }
};

export const placeLimitOrderExtrinsicData = (extrinsic: SubstrateExtrinsic) => {
  const { extrinsic: { args: [orderBookId, price, amount, side, lifetimeOption] } } = extrinsic as any;

  const baseAssetId = getAssetId(orderBookId.base);
  const quoteAssetId = getAssetId(orderBookId.quote);
  const details = {
    dexId: orderBookId.dexId.toNumber(),
    baseAssetId,
    quoteAssetId,
    orderId: null,
    price: formatU128ToBalance(price.toString(), quoteAssetId),
    amount: formatU128ToBalance(amount.toString(), baseAssetId),
    side: side.toHuman(),
    lifetime: !lifetimeOption.isEmpty ? Number(lifetimeOption.unwrap()) / 1000 : null,
  };

  return details;
};

class OrderBooksStorage {
  private storage!: Map<string, OrderBook>;

  constructor() {
    this.storage = new Map();
  }

  async sync(block: SubstrateBlock): Promise<void> {
    getOrderBooksStorageLog(block).debug(`Sync ${this.storage.size} order books`);
    await store.bulkUpdate('OrderBook', [...this.storage.values()]);
  }

  getId(dexId: number, baseAssetId: string, quoteAssetId: string): string {
    return [dexId, baseAssetId, quoteAssetId].join('-');
  }

  getOrderId(orderBookId: string, orderId: string | number): string {
    return [orderBookId, orderId].join('_');
  }

  private async save(block: SubstrateBlock, orderBook: OrderBook): Promise<void> {
    orderBook.updatedAtBlock = block.block.header.number.toNumber();

    await orderBook.save();
  }

  async getOrderBook(block: SubstrateBlock, dexId: number, baseAssetId: string, quoteAssetId: string): Promise<OrderBook> {
    const id  = this.getId(dexId, baseAssetId, quoteAssetId);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let orderBook = await OrderBook.get(id);

    if (!orderBook) {
      orderBook = new OrderBook(id);
      orderBook.dexId = dexId;
      orderBook.baseAssetId = baseAssetId;
      orderBook.quoteAssetId = quoteAssetId;
      orderBook.status = OrderBookStatus.Trade;

      await this.save(block, orderBook);

      getOrderBooksStorageLog(block).debug({ orderBook: id }, 'Order Book created and saved');
    }

    this.storage.set(orderBook.id, orderBook);

    return orderBook;
  }
}

export const orderBooksStorage = new OrderBooksStorage();