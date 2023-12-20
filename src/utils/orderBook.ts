import BigNumber from "bignumber.js";

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot, OrderBookDeal } from "../types";

import { SubstrateBlock } from '@subql/types';
import { getInitializeOrderBooksLog, getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs';
import { formatDateTimestamp, getSnapshotIndex, prevSnapshotsIndexesRow, last, calcPriceChange, shouldUpdate } from './index';
import { assetStorage, assetPrecisions } from './assets';
import { networkSnapshotsStorage } from "./network";

const calcVolume = (snapshots: OrderBookSnapshot[]): BigNumber => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volumeUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0));

  return totalVolume;
};

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

export class OrderBooksStorage {
  private storage!: Map<string, OrderBook>;

  static readonly LAST_DEALS_LENGTH = 10;

  constructor() {
    this.storage = new Map();
  }

  async sync(block: SubstrateBlock): Promise<void> {
    getOrderBooksStorageLog(block).debug(`Sync ${this.storage.size} order books`);
    await store.bulkUpdate('OrderBook', [...this.storage.values()]);
  }

  static getId(dexId: number, baseAssetId: string, quoteAssetId: string): string {
    return [dexId, baseAssetId, quoteAssetId].join('-');
  }

  static getOrderId(orderBookId: string, orderId: string | number): string {
    return [orderBookId, orderId].join('_');
  }

  private async save(block: SubstrateBlock, orderBook: OrderBook, force = false): Promise<void> {
    orderBook.updatedAtBlock = block.block.header.number.toNumber();

    if (force || shouldUpdate(block, 60)) {
      await orderBook.save();

      getOrderBooksStorageLog(block).debug({ id: orderBook.id }, 'Order Book saved');
    }
  }

  async getOrderBook(block: SubstrateBlock, dexId: number, baseAssetId: string, quoteAssetId: string): Promise<OrderBook> {
    const id = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);

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
      orderBook.price = '0';

      await this.save(block, orderBook, true);
    }

    this.storage.set(orderBook.id, orderBook);

    return orderBook;
  }

  async updateDeal(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    orderId: number,
    price: string,
    amount: string,
    isBuy: boolean,
  ): Promise<void> {
    const orderBook = await this.getOrderBook(block, dexId, baseAssetId, quoteAssetId);
    const timestamp = formatDateTimestamp(block.timestamp);
    const deal: OrderBookDeal = { orderId, timestamp, isBuy, amount, price };

    const lastDeals: OrderBookDeal[] = orderBook.lastDeals ? JSON.parse(orderBook.lastDeals) : [];
    lastDeals.unshift(deal);

    orderBook.price = price;
    orderBook.lastDeals = JSON.stringify(lastDeals.slice(0, OrderBooksStorage.LAST_DEALS_LENGTH));

    await this.save(block, orderBook);

    getOrderBooksStorageLog(block, true).debug({ dexId, baseAssetId, quoteAssetId, price }, 'OrderBook price updated');
  }

  private async calcStats(block: SubstrateBlock, orderBook: OrderBook, type: SnapshotType, snapshotsCount: number) {
    const { id, price } = orderBook;
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index } = getSnapshotIndex(blockTimestamp, type);
    const indexes = prevSnapshotsIndexesRow(index, snapshotsCount);

    const ids = indexes.map((idx) => OrderBooksSnapshotsStorage.getId(id, type, idx));
    const snapshots = await OrderBooksSnapshotsStorage.getSnapshotsByIds(ids);

    const currentPrice = new BigNumber(price);
    const startPrice = new BigNumber(last(snapshots)?.price?.open ?? '0');

    const priceChange = calcPriceChange(currentPrice, startPrice);
    const volumeUSD = calcVolume(snapshots).toString();

    return {
      priceChange,
      volumeUSD,
    }
  }

  async updateDailyStats(block: SubstrateBlock): Promise<void> {
    getOrderBooksStorageLog(block).debug(`Order Books Daily stats updating...`);

    for (const orderBook of this.storage.values()) {
      const { priceChange, volumeUSD } = await this.calcStats(block, orderBook, SnapshotType.HOUR, 24);

      orderBook.priceChangeDay = priceChange;
      orderBook.volumeDayUSD = volumeUSD;
      getOrderBooksStorageLog(block, true).debug(
        { orderBookId: orderBook.id, priceChange, volumeUSD },
        'Order Book daily stats updated',
      )
    }
  }

  public async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    let lockedUSD = new BigNumber(0);

    for (const orderBook of this.storage.values()) {
      const [baseAsset, quoteAsset] = await Promise.all([
        assetStorage.getAsset(block, orderBook.baseAssetId),
        assetStorage.getAsset(block, orderBook.quoteAssetId),
      ]);
      const baseAssetLocked = orderBook.baseAssetLocked || BigInt(0);
      const baseAssetLockedUSD = new BigNumber(baseAssetLocked.toString())
        .multipliedBy(new BigNumber(baseAsset.priceUSD))
        .dividedBy(Math.pow(10, assetPrecisions.get(baseAsset.id)));

      const quoteAssetLocked = orderBook.quoteAssetLocked || BigInt(0);
      const quoteAssetLockedUSD = new BigNumber(quoteAssetLocked.toString())
        .multipliedBy(new BigNumber(quoteAsset.priceUSD))
        .dividedBy(Math.pow(10, assetPrecisions.get(quoteAsset.id)));

      lockedUSD = lockedUSD.plus(baseAssetLockedUSD).plus(quoteAssetLockedUSD);
    }

    return lockedUSD;
  }
}

export class OrderBooksSnapshotsStorage {
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
    const orderBookId = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
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
      snapshot.volumeUSD = '0';
      snapshot.price = {
        open: orderBook.price,
        close: orderBook.price,
        high: orderBook.price,
        low: orderBook.price,
      };

      getOrderBooksSnapshotsStorageLog(block).debug({ id }, 'Order Book snapshot created');
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  static async getSnapshotsByIds(ids: string[]): Promise<OrderBookSnapshot[]> {
    const snapshots = await Promise.all(ids.map(id => OrderBookSnapshot.get(id)));

    return snapshots.filter((item) => !!item);
  };

  async updateDeal(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    orderId: number,
    price: string,
    amount: string,
    isBuy: boolean,
  ): Promise<void> {
    const quotePrice = new BigNumber(price);
    const baseAmount = new BigNumber(amount);
    const quoteAmount = baseAmount.multipliedBy(quotePrice);

    const quoteAsset = await assetStorage.getAsset(block, quoteAssetId);
    const quoteAssetPriceUSD = quoteAsset.priceUSD ?? '0';
    const quoteVolumeUSD = new BigNumber(quoteAssetPriceUSD).multipliedBy(quoteAmount);

    for (const type of OrderBooksSnapshots) {
      const snapshot = await this.getSnapshot(block, dexId, baseAssetId, quoteAssetId, type);
      const baseAssetVolume = new BigNumber(snapshot.baseAssetVolume).plus(baseAmount).toString();
      const quoteAssetVolume = new BigNumber(snapshot.quoteAssetVolume).plus(quoteAmount).toString();
      const volumeUSD = new BigNumber(snapshot.volumeUSD).plus(quoteVolumeUSD).toString();

      snapshot.baseAssetVolume = baseAssetVolume;
      snapshot.quoteAssetVolume = quoteAssetVolume;
      snapshot.volumeUSD = volumeUSD;

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.price.open) === 0) {
        snapshot.price.open = price;
        snapshot.price.low = price;
      }

      snapshot.price.close = price;
      snapshot.price.high = BigNumber.max(new BigNumber(snapshot.price.high), quotePrice).toString();
      snapshot.price.low = BigNumber.min(new BigNumber(snapshot.price.low), quotePrice).toString();

      getOrderBooksSnapshotsStorageLog(block, true).debug(
        { dexId, baseAssetId, quoteAssetId, price, amount, isBuy, baseAssetVolume, quoteAssetVolume, volumeUSD, quoteAssetPriceUSD },
        'Order Book snapshot price and volume updated',
      )
    }

    await this.orderBooksStorage.updateDeal(block, dexId, baseAssetId, quoteAssetId, orderId, price, amount, isBuy);

    await networkSnapshotsStorage.updateVolumeStats(block, quoteVolumeUSD);
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
