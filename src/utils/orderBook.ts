import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot } from "../types";

import { SubstrateBlock, SubstrateExtrinsic } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs';
import { getAssetId, formatU128ToBalance } from './assets';
import { getSnapshotIndex } from './index';

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

class OrderBooksSnapshotsStorage {
  private storage!: Map<string, OrderBookSnapshot>;
  public orderBooksStorage!: OrderBooksStorage;

  constructor(orderBooksStorage: OrderBooksStorage) {
    this.storage = new Map();
    this.orderBooksStorage = orderBooksStorage;
  }

  public static getId(orderBookId: string, type: SnapshotType, index: number) {
    return [orderBookId, type, index].join('-');
  }

  async sync(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(block, blockTimestamp);
  }

  private async syncSnapshots(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    getOrderBooksSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots sync`);

    await store.bulkUpdate('OrderBookSnapshot', [...this.storage.values()]);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    getOrderBooksSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots in storage after sync`);
  }


  async getSnapshot(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    type: SnapshotType,
    blockTimestamp: number
  ): Promise<OrderBookSnapshot> {
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const orderBookId = this.orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
    const id = OrderBooksSnapshotsStorage.getId(orderBookId, type, index);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await OrderBookSnapshot.get(id);

    if (!snapshot) {
      const orderBook = await this.orderBooksStorage.getOrderBook(block, dexId, baseAssetId, quoteAssetId);

      snapshot = new OrderBookSnapshot(id);
      snapshot.orderBookId = orderBookId;
      snapshot.timestamp = timestamp;
      snapshot.type = type;
      snapshot.volume = {
        amount: '0',
        amountUSD: '0'
      };
      snapshot.price = {
        open: orderBook.price,
        close: orderBook.price,
        high: orderBook.price,
        low: orderBook.price,
      };
      getOrderBooksSnapshotsStorageLog(block).debug({ id }, 'Order Book snapshot created and saved')
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
