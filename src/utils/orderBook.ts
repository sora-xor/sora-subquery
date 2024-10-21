import BigNumber from 'bignumber.js';

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot, OrderBookDeal } from '../types';

import { SubstrateBlock } from '@subql/types';
import { getUtilsLog } from './logs';
import {
  formatDateTimestamp,
  getSnapshotIndex,
  getSnapshotTypes,
  prevSnapshotsIndexesRow,
  last,
  calcPriceChange,
  getBlockNumber,
} from './index';
import { assetStorage, assetSnapshotsStorage, calcTvlUSD } from './assets';
import { networkSnapshotsStorage } from './network';
import { EntityStorage, EntitySnapshotsStorage } from './storage';
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
    getUtilsLog(block).debug('Order Books entities request...');
    const entities = await api.query.orderBook.orderBooks.entries();
    getUtilsLog(block).debug('Order Books entities request completed');
    return entities;
  } catch (e) {
    getUtilsLog(block).error('Error getting Order Books entities');
    getUtilsLog(block).error(e);
    return null;
  }
};

export const getTechnicalAccounts = async (block: SubstrateBlock) => {
  try {
    getUtilsLog(block).debug('Order Books account ids request...');
    const entities = await api.query.technical.techAccounts.entries();
    getUtilsLog(block).debug('Order Books account ids request completed');
    return entities;
  } catch (e) {
    getUtilsLog(block).error('Error getting Order Books account ids');
    getUtilsLog(block).error(e);
    return null;
  }
};

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

export class OrderBooksStorage extends EntityStorage<OrderBook> {
  public accountIds!: Map<string, string>;

  static readonly LAST_DEALS_LENGTH = 20;

  constructor() {
    super('OrderBook');
    this.accountIds = new Map();
  }

  protected override async save(block: SubstrateBlock, orderBook: OrderBook, force = false): Promise<void> {
    orderBook.updatedAtBlock = getBlockNumber(block);

    super.save(block, orderBook, force);
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
          const orderBookId = this.getId(dexId, baseAsset, quoteAsset);

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

  public getOrderId(orderBookId: string, orderId: string | number): string {
    return [orderBookId, orderId].join('_');
  }

  protected override async loadEntity(id: string): Promise<OrderBook> {
    return await OrderBook.get(id);
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<OrderBook> {
    const [dexId, baseAssetId, quoteAssetId] = this.parseId(id);

    const baseAsset = await assetStorage.getEntity(block, baseAssetId);
    const quoteAsset = await assetStorage.getEntity(block, quoteAssetId);

    return new OrderBook(
      id,
      Number(dexId),
      baseAsset.id,
      quoteAsset.id,
      BigInt(0),
      BigInt(0),
      OrderBookStatus.Trade,
      getBlockNumber(block)
    );
  }

  override async getEntity(block: SubstrateBlock, id: string): Promise<OrderBook> {
    await this.getAccountId(block, id);

    return await super.getEntity(block, id);
  }

  async getOrderBook(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string
  ): Promise<OrderBook> {
    const id = this.getId(dexId, baseAssetId, quoteAssetId);

    return await this.getEntity(block, id);
  }

  async getOrderBookByAccountId(block: SubstrateBlock, accountId: string) {
    const orderBookId = this.accountIds.get(accountId);

    if (orderBookId) {
      return await this.getEntity(block, orderBookId);
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
    isBuy: boolean
  ): Promise<void> {
    const orderBook = await this.getOrderBook(block, dexId, baseAssetId, quoteAssetId);
    const timestamp = formatDateTimestamp(block.timestamp);
    const deal: OrderBookDeal = { orderId, timestamp, isBuy, amount, price };

    const lastDeals: OrderBookDeal[] = orderBook.lastDeals ? JSON.parse(orderBook.lastDeals) : [];
    lastDeals.unshift(deal);

    orderBook.price = price;
    orderBook.lastDeals = JSON.stringify(lastDeals.slice(0, OrderBooksStorage.LAST_DEALS_LENGTH));

    await this.save(block, orderBook);

    this.log(block, true).debug({ dexId, baseAssetId, quoteAssetId, price }, 'OrderBook price updated');
  }
}

export class OrderBooksSnapshotsStorage extends EntitySnapshotsStorage<
  OrderBook,
  OrderBookSnapshot,
  OrderBooksStorage
> {
  constructor(orderBooksStorage: OrderBooksStorage) {
    super('OrderBookSnapshot', orderBooksStorage);
  }

  public readonly updateTypes = [SnapshotType.HOUR, SnapshotType.DAY];
  public readonly removeTypes = [SnapshotType.HOUR];

  protected override async loadEntity(id: string): Promise<OrderBookSnapshot> {
    return await OrderBookSnapshot.get(id);
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    timestamp: number,
    type: SnapshotType,
    orderBook: OrderBook
  ): Promise<OrderBookSnapshot> {
    const price = {
      open: orderBook.price,
      close: orderBook.price,
      high: orderBook.price,
      low: orderBook.price,
    };

    return new OrderBookSnapshot(id, orderBook.id, timestamp, type, price, '0', '0', '0', '0');
  }

  async updateDeal(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    orderId: number,
    price: string,
    amount: string,
    isBuy: boolean
  ): Promise<void> {
    const orderBookId = this.getId(dexId, baseAssetId, quoteAssetId);

    const quotePrice = new BigNumber(price);
    const baseAmount = new BigNumber(amount);
    const quoteAmount = baseAmount.multipliedBy(quotePrice);

    const quoteAsset = await assetStorage.getEntity(block, quoteAssetId);
    const quoteAssetPriceUSD = quoteAsset.priceUSD ?? '0';
    const quoteVolumeUSD = new BigNumber(quoteAssetPriceUSD).multipliedBy(quoteAmount);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, orderBookId, type);
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

      this.log(block, true).debug(
        {
          dexId,
          baseAssetId,
          quoteAssetId,
          price,
          amount,
          isBuy: isBuy.toString(),
          baseAssetVolume,
          quoteAssetVolume,
          volumeUSD,
          quoteAssetPriceUSD,
        },
        'Order Book snapshot price and volume updated'
      );

      await this.save(block, snapshot);
    }

    await this.entityStorage.updateDeal(block, dexId, baseAssetId, quoteAssetId, orderId, price, amount, isBuy);

    await assetSnapshotsStorage.updateVolume(block, baseAssetId, baseAmount.toString());
    await assetSnapshotsStorage.updateVolume(block, quoteAssetId, quoteAmount.toString());
    await networkSnapshotsStorage.updateVolumeStats(block, quoteVolumeUSD);
  }

  protected async syncLiquidityUSD(block: SubstrateBlock): Promise<Map<string, bigint>> {
    const lockedAssets = new Map<string, bigint>();

    for (const { dexId, baseAssetId, quoteAssetId, baseAssetReserves, quoteAssetReserves } of this.entityStorage
      .entities) {
      const a = lockedAssets.get(baseAssetId) ?? BigInt(0);
      const b = lockedAssets.get(quoteAssetId) ?? BigInt(0);

      lockedAssets.set(baseAssetId, a + baseAssetReserves);
      lockedAssets.set(quoteAssetId, b + quoteAssetReserves);

      const baseAsset = await assetStorage.getEntity(block, baseAssetId);
      const quoteAsset = await assetStorage.getEntity(block, quoteAssetId);
      const baseAssetLiquidityUSD = calcTvlUSD(baseAsset.id, baseAsset.priceUSD, baseAssetReserves);
      const quoteAssetLiquidityUSD = calcTvlUSD(quoteAsset.id, quoteAsset.priceUSD, quoteAssetReserves);
      const liquidityUSD = baseAssetLiquidityUSD.plus(quoteAssetLiquidityUSD);

      await orderBooksSnapshotsStorage.updateLiquidityUSD(block, dexId, baseAssetId, quoteAssetId, liquidityUSD);
    }

    return lockedAssets;
  }

  async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    const lockedAssets = await this.syncLiquidityUSD(block);

    let lockedUSD = new BigNumber(0);

    // update locked luqidity for assets
    for (const [assetId, liquidity] of lockedAssets.entries()) {
      const asset = await assetStorage.updateLiquidity(block, assetId, liquidity);
      const assetLockedUSD = calcTvlUSD(asset.id, asset.priceUSD, asset.liquidity);

      lockedUSD = lockedUSD.plus(assetLockedUSD);
    }

    return lockedUSD;
  }

  protected async updateLiquidityUSD(
    block: SubstrateBlock,
    dexId: number,
    baseAssetId: string,
    quoteAssetId: string,
    liquidityUSD: BigNumber
  ): Promise<void> {
    const orderBookId = this.getId(dexId, baseAssetId, quoteAssetId);
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, orderBookId, type);

      snapshot.liquidityUSD = liquidityUSD.toFixed(2);
    }
  }

  private async calcStats(block: SubstrateBlock, orderBook: OrderBook, type: SnapshotType, snapshotsCount: number) {
    const { id, price } = orderBook;
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index } = getSnapshotIndex(blockTimestamp, type);
    const indexes = prevSnapshotsIndexesRow(index, snapshotsCount);

    const ids = indexes.map((idx) => this.getId(id, type, idx));
    const snapshots = await this.getSnapshotsByIds(block, ids);

    const currentPrice = new BigNumber(price ?? 0);
    const startPrice = new BigNumber(last(snapshots)?.price?.open ?? '0');

    const priceChange = calcPriceChange(currentPrice, startPrice);
    const volumeUSD = calcVolume(snapshots).toString();

    return {
      priceChange,
      volumeUSD,
    };
  }

  async updateDailyStats(block: SubstrateBlock): Promise<void> {
    this.log(block).debug(`Order Books Daily stats updating...`);

    for (const orderBook of this.entityStorage.entities) {
      const { priceChange, volumeUSD } = await this.calcStats(block, orderBook, SnapshotType.HOUR, 24);

      orderBook.priceChangeDay = priceChange;
      orderBook.volumeDayUSD = volumeUSD;
      this.log(block, true).debug(
        { orderBookId: orderBook.id, priceChange, volumeUSD },
        'Order Book daily stats updated'
      );
    }
  }
}

export const orderBooksStorage = new OrderBooksStorage();
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage);
