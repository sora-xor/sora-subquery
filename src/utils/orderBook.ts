import { OrderBook, SnapshotType, OrderBookSnapshot } from "../types";

import { SubstrateBlock } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog } from './logs';

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

class OrderBooksStorage {
  private storage!: Map<string, OrderBook>;
  private idDelimeter = '-';

  constructor() {
    this.storage = new Map();
  }

  async sync(block: SubstrateBlock): Promise<void> {
    getOrderBooksStorageLog(block).debug(`Sync ${this.storage.size} order books`);
    await store.bulkUpdate('OrderBook', [...this.storage.values()]);
  }

  getId(dexId: number, baseAssetId: string, quoteAssetId: string): string {
    return [dexId, baseAssetId, quoteAssetId].join(this.idDelimeter);
  }

  getOrderId(orderBookId: string, orderId: string | number): string {
    return [orderBookId, orderId].join(this.idDelimeter);
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
      orderBook.price = '0';

      await this.save(block, orderBook);

      getOrderBooksStorageLog(block).debug({ orderBook: id }, 'Order Book created and saved');
    }

    this.storage.set(orderBook.id, orderBook);

    return orderBook;
  }
}

export const orderBooksStorage = new OrderBooksStorage();