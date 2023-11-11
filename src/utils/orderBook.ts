import BigNumber from "bignumber.js";

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot } from "../types";

import { SubstrateBlock } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs';
import { formatDateTimestamp, getSnapshotIndex } from './index';

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

const OrderBooksSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];

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

  async updatePrice(block: SubstrateBlock, dexId: number, baseAssetId: string, quoteAssetId: string, price: string): Promise<void> {
    const orderBook = await this.getOrderBook(block, dexId, baseAssetId, quoteAssetId);

    orderBook.price = price;

    getOrderBooksStorageLog(block, true).debug({ dexId, baseAssetId, quoteAssetId, price }, 'OrderBook price updated')
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

  async sync(block: SubstrateBlock): Promise<void> {
    await this.syncSnapshots(block);
  }

  private async syncSnapshots(block: SubstrateBlock): Promise<void> {
    getOrderBooksSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots sync`);

    await store.bulkUpdate('OrderBookSnapshot', [...this.storage.values()]);

    const blockTimestamp = formatDateTimestamp(block.timestamp);

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
  ): Promise<OrderBookSnapshot> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
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

  async updatePrice(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    price: string,
  ): Promise<void> {
    const bnPrice = new BigNumber(price);

    for (const type of OrderBooksSnapshots) {
      const snapshot = await this.getSnapshot(block, dexId, baseAssetId, quoteAssetId, type);

      snapshot.price.close = price;
      snapshot.price.high = BigNumber.max(new BigNumber(snapshot.price.high), bnPrice).toString();
      snapshot.price.low = BigNumber.min(new BigNumber(snapshot.price.low), bnPrice).toString();

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.price.open) === 0) {
        snapshot.price.open = price;
      }
      getOrderBooksSnapshotsStorageLog(block, true).debug(
        { dexId, baseAssetId, quoteAssetId, price },
        'Order Book snapshot price updated',
      )
    }
    await this.orderBooksStorage.updatePrice(block, dexId, baseAssetId, quoteAssetId, price);
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
