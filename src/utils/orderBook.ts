import BigNumber from "bignumber.js";

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot, OrderBookDeal } from "../types";

import { SubstrateBlock } from '@subql/types';
import { getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs';
import { formatDateTimestamp, getSnapshotIndex, getSnapshotTypes, prevSnapshotsIndexesRow, last, calcPriceChange, shouldUpdate } from './index';
import { assetStorage, assetSnapshotsStorage, calcTvlUSD } from './assets';
import { XOR } from "./consts";
import { networkSnapshotsStorage } from "./network";
import { predefinedAssets } from './consts';

const calcVolume = (snapshots: OrderBookSnapshot[]): BigNumber => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volumeUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0));

  return totalVolume;
};

export const getAllOrderBooks = async (block: SubstrateBlock) => {
  try {
    getOrderBooksStorageLog(block).debug('Order Books entities request...');
    const entities = await api.query.orderBook.orderBooks.entries();
    getOrderBooksStorageLog(block).debug({ amount: entities?.length }, 'Order Books entities request completed');
    return entities;
  } catch (e) {
    getOrderBooksStorageLog(block).error('Error getting Order Books entities');
		getOrderBooksStorageLog(block).error(e);
    return null;
  }
};

export const getOrderBookAssetBalance = async (block: SubstrateBlock, accountId: string, assetId: string) => {
  try {
    getOrderBooksStorageLog(block).debug({ accountId, assetId }, 'Get Order Book balance');

    let data!: any;

    if (assetId === XOR) {
      data = (await api.query.system.account(accountId) as any).data;
    } else {
      data = await api.query.tokens.accounts(accountId, assetId);
    }

    getOrderBooksStorageLog(block).debug({ accountId, assetId, balance: data.free.toString() }, 'Found Order Book balance');

    return BigInt(data.free.toString());
  } catch (e) {
    getOrderBooksStorageLog(block).error('Error getting Order Book balance');
    getOrderBooksStorageLog(block).error(e);
    return BigInt(0);
  }
};

export const getTechnicalAccounts = async (block: SubstrateBlock) => {
  try {
    getOrderBooksStorageLog(block).debug('Order Books account ids request...');
    const entities = await api.query.technical.techAccounts.entries();
    getOrderBooksStorageLog(block).debug({ amount: `${entities?.length}` }, 'Order Books account ids request completed');
    return entities;
  } catch (e) {
    getOrderBooksStorageLog(block).error('Error getting Order Books account ids');
    getOrderBooksStorageLog(block).error(e);
    return null;
  }
}

const getAssetIdFromTech = (techAsset: any) => {
  if (techAsset.wrapped) {
    if (!(techAsset.wrapped in predefinedAssets)) {
      throw new Error(`${techAsset.wrapped} not exists in predifined assets!`);
    }
    return predefinedAssets[techAsset.wrapped];
  } else {
    return techAsset.escaped;
  }
};

const OrderBooksSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];

export class OrderBooksStorage {
  private storage!: Map<string, OrderBook>;
  public accountIds!: Map<string, string>;

  static readonly LAST_DEALS_LENGTH = 20;

  constructor() {
    this.storage = new Map();
    this.accountIds = new Map();
  }

  async updateAccountIds(block: SubstrateBlock) {
    const entries = await getTechnicalAccounts(block);

    if (!entries) return;

    for (const [key, techAccountId] of entries) {
      const accountId = key.args[0].toString();
      const data = techAccountId.toJSON() as any;

      if (data.pure) {
        const [dexId, techPurpose] = data.pure;

        if (techPurpose.orderBookLiquidityKeeper) {
          const { baseAssetId, targetAssetId } = techPurpose.orderBookLiquidityKeeper;
          const quoteAsset = getAssetIdFromTech(baseAssetId);
          const baseAsset = getAssetIdFromTech(targetAssetId);
          const orderBookId = OrderBooksStorage.getId(dexId, baseAsset, quoteAsset);

					getOrderBooksStorageLog(block, true).debug({ id: orderBookId }, 'Order Book account id added')

          this.accountIds.set(accountId, orderBookId);
        }
      }
    }
  }

  private findAccountId(orderBookId: string) {
    for (const [key, value] of this.accountIds.entries()) {
      if (value === orderBookId) return key;
    }
    return null;
  }

  async getAccountId(block: SubstrateBlock, orderBookId: string) {
    let accountId = this.findAccountId(orderBookId);

    if (!accountId) {
      await this.updateAccountIds(block);

      accountId = this.findAccountId(orderBookId);
    }

    return accountId;
  }

  async sync(block: SubstrateBlock): Promise<void> {
    getOrderBooksStorageLog(block).debug(`Sync ${this.storage.size} order books`);
    await store.bulkUpdate('OrderBook', [...this.storage.values()]);
  }

  static getId(dexId: number, baseAssetId: string, quoteAssetId: string): string {
    return [dexId, baseAssetId, quoteAssetId].join('-');
  }

  static parseId(id: string) {
    const [dexId, baseAssetId, quoteAssetId] = id.split('-');

    return {
      dexId: Number(dexId),
      baseAssetId,
      quoteAssetId,
    };
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

  async getOrderBookById(block: SubstrateBlock, id: string): Promise<OrderBook> {
    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let orderBook = await OrderBook.get(id);

    if (!orderBook) {
      await this.getAccountId(block, id);
      const { dexId, baseAssetId, quoteAssetId } = OrderBooksStorage.parseId(id);

      orderBook = new OrderBook(id, dexId, baseAssetId, quoteAssetId, BigInt(0), BigInt(0), OrderBookStatus.Trade, block.block.header.number.toNumber());

      await this.save(block, orderBook, true);
    }

    this.storage.set(orderBook.id, orderBook);

    return orderBook;
  }

  async getOrderBook(block: SubstrateBlock, dexId: number, baseAssetId: string, quoteAssetId: string): Promise<OrderBook> {
    const id = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);

    return await this.getOrderBookById(block, id);
  }

  async getOrderBookByAccountId(block: SubstrateBlock, accountId: string) {
    const orderBookId = this.accountIds.get(accountId);

    if (orderBookId) {
      return await this.getOrderBookById(block, orderBookId);
    }

    return null;
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

    const currentPrice = new BigNumber(price ?? 0);
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
    const lockedAssets = new Map<string, bigint>();

    let lockedUSD = new BigNumber(0);

    for (const { dexId, baseAssetId, quoteAssetId, baseAssetReserves, quoteAssetReserves } of this.storage.values()) {
      const a = lockedAssets.get(baseAssetId);
      const b = lockedAssets.get(quoteAssetId);

      lockedAssets.set(baseAssetId, (a || BigInt(0)) + baseAssetReserves);
      lockedAssets.set(quoteAssetId, (b || BigInt(0)) + quoteAssetReserves);

      const baseAsset = await assetStorage.getAsset(block, baseAssetId);
      const quoteAsset = await assetStorage.getAsset(block, quoteAssetId);
      const baseAssetLiquidityUSD = calcTvlUSD(baseAsset, baseAssetReserves);
      const quoteAssetLiquidityUSD = calcTvlUSD(quoteAsset, quoteAssetReserves);
      const liquidityUSD = baseAssetLiquidityUSD.plus(quoteAssetLiquidityUSD);

      await orderBooksSnapshotsStorage.updateLiquidityUSD(block, dexId, baseAssetId, quoteAssetId, liquidityUSD);
    }

    // update locked luqidity for assets
    for (const [assetId, liquidity] of lockedAssets.entries()) {
      await assetStorage.updateLiquidityBooks(block, assetId, liquidity);
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

  private async save(block: SubstrateBlock, snapshot: OrderBookSnapshot, force = false): Promise<void> {
    if (force || shouldUpdate(block, 60)) {
      await snapshot.save();

      getOrderBooksSnapshotsStorageLog(block).debug({ id: snapshot.id }, 'Order book snapshot saved');
    }
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
      const price = {
        open: orderBook.price,
        close: orderBook.price,
        high: orderBook.price,
        low: orderBook.price,
      };

      snapshot = new OrderBookSnapshot(id, orderBookId, timestamp, type, price, '0', '0', '0', '0');

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

    const snapshotTypes = getSnapshotTypes(block, OrderBooksSnapshots);

    for (const type of snapshotTypes) {
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
        { dexId, baseAssetId, quoteAssetId, price, amount, isBuy: isBuy.toString(), baseAssetVolume, quoteAssetVolume, volumeUSD, quoteAssetPriceUSD },
        'Order Book snapshot price and volume updated',
      )

      await this.save(block, snapshot);
    }

    await this.orderBooksStorage.updateDeal(block, dexId, baseAssetId, quoteAssetId, orderId, price, amount, isBuy);

    await assetSnapshotsStorage.updateVolume(block, baseAssetId, baseAmount.toString());
    await assetSnapshotsStorage.updateVolume(block, quoteAssetId, quoteAmount.toString());
    await networkSnapshotsStorage.updateVolumeStats(block, quoteVolumeUSD);
  }

  async updateLiquidityUSD(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    liquidityUSD: BigNumber,
  ): Promise<void> {
    const snapshotTypes = getSnapshotTypes(block, OrderBooksSnapshots);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, dexId, baseAssetId, quoteAssetId, type);

      snapshot.liquidityUSD = liquidityUSD.toFixed(2);
    }
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
