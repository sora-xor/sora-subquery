import BigNumber from "bignumber.js";

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot, OrderBookDeal } from "../types";

import { SubstrateBlock } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs';
import { formatDateTimestamp, getSnapshotIndex, toFloat } from './index';
import { assetStorage } from './assets';

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

  static readonly LAST_DEALS_LENGTH = 100;

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

  async updateDeal(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    price: string,
    amount: string,
    isBuy: boolean,
  ): Promise<void> {
    const orderBook = await this.getOrderBook(block, dexId, baseAssetId, quoteAssetId);
    const timestamp = formatDateTimestamp(block.timestamp);
    const deal: OrderBookDeal = { timestamp, isBuy, amount, price };

    const lastDeals: OrderBookDeal[] = orderBook.lastDeals ? JSON.parse(orderBook.lastDeals) : [];
    lastDeals.unshift(deal);
    lastDeals.slice(0, OrderBooksStorage.LAST_DEALS_LENGTH);

    orderBook.price = price;
    orderBook.lastDeals = JSON.stringify(lastDeals);

    getOrderBooksStorageLog(block, true).debug({ dexId, baseAssetId, quoteAssetId, price }, 'OrderBook price updated');
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
      snapshot.baseAssetVolume = '0';
      snapshot.quoteAssetVolume = '0';
      snapshot.volumeUSD = 0;
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

  async updateDeal(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    price: string,
    amount: string,
    isBuy: boolean,
  ): Promise<void> {
    const quotePrice = new BigNumber(price);
    const baseAmount = new BigNumber(amount);
    const quoteAmount = baseAmount.multipliedBy(quotePrice);

    const quoteAsset = await assetStorage.getAsset(block, quoteAssetId);
    const quoteVolumeUSD = toFloat(new BigNumber(quoteAsset.priceUSD).multipliedBy(quoteAmount));

    for (const type of OrderBooksSnapshots) {
      const snapshot = await this.getSnapshot(block, dexId, baseAssetId, quoteAssetId, type);
      const baseAssetVolume = new BigNumber(snapshot.baseAssetVolume).plus(baseAmount).toString();
      const quoteAssetVolume = new BigNumber(snapshot.quoteAssetVolume).plus(quoteAmount).toString();
      const volumeUSD = snapshot.volumeUSD + quoteVolumeUSD;

      snapshot.baseAssetVolume = baseAssetVolume;
      snapshot.quoteAssetVolume = quoteAssetVolume;
      snapshot.volumeUSD = volumeUSD;

      snapshot.price.close = price;
      snapshot.price.high = BigNumber.max(new BigNumber(snapshot.price.high), quotePrice).toString();
      snapshot.price.low = BigNumber.min(new BigNumber(snapshot.price.low), quotePrice).toString();

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.price.open) === 0) {
        snapshot.price.open = price;
      }

      getOrderBooksSnapshotsStorageLog(block, true).debug(
        { dexId, baseAssetId, quoteAssetId, price, baseAssetVolume, quoteAssetVolume, volumeUSD },
        'Order Book snapshot price and volume updated',
      )
    }

    await this.orderBooksStorage.updateDeal(block, dexId, baseAssetId, quoteAssetId, price, amount, isBuy);
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
