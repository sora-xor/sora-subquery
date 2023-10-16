import { TextDecoder } from 'util';

import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { DAI } from './consts';
import { getSnapshotIndex } from './index';

const fillIndexes = (index: number, count: number): number[] => {
  return new Array(count).fill(index)
    .reduce((buffer, item, idx) => {
      const prevIndex = item - idx;

      if (prevIndex >= 0) buffer.push(prevIndex);

      return buffer;
    }, []);
};

const getSnapshotsByIds = async (ids: string[]): Promise<AssetSnapshot[]> => {
  const snapshots = await Promise.all(ids.map(id => AssetSnapshot.get(id)));

  return snapshots.filter((item) => !!item);
};

const last = <T>(snapshots: T[]) => {
  if (!snapshots.length) return null;
  return snapshots[snapshots.length - 1];
};

const calcVolumeUSD = (snapshots: AssetSnapshot[]): string => {
  return snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volume.amountUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0)).toFixed(2);
};

const calcPriceChange = (current: BigNumber, prev: BigNumber): string => {
  if (prev.isZero()) return current.isGreaterThan(new BigNumber(0)) ? '100' : '0';

  const change = current.minus(prev).div(prev).multipliedBy(new BigNumber(100));

  return change.toFixed(2);
};

export const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];

export let assetPrecisions = new Map<string, number>();

// <ticker string, assetId string>
export let tickerSyntheticAssetId = new Map<string, string>();

export const formatU128ToBalance = (u128: string, assetId: string): string => {
  let decimals = assetPrecisions.get(assetId) ?? 18;
  let padded = u128.padStart(decimals + 1, "0");
  if (decimals === 0) {
      return padded
  }
  return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
};

export const getAssetId = (asset: any): string => {
  return (asset?.code?.code ?? asset?.code ?? asset).toHuman();
};

export const getTickerSymbol = (ticker: any): string => {
  const result = new TextDecoder().decode(ticker);
  return result;
};

class AssetStorage {
  private storage!: Map<string, Asset>;

  constructor() {
    this.storage = new Map();
  }

  async sync(blockTimestamp: number): Promise<void> {
    logger.debug(`[AssetStorage] ${this.storage.size} entities sync`);
    await this.updateStats(blockTimestamp);
    await store.bulkUpdate('Asset', [...this.storage.values()]);
  }

  async getAsset(id: string): Promise<Asset> {
    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let asset = await Asset.get(id);

    if (!asset) {
      asset = new Asset(id);
      asset.liquidity = BigInt(0);
      asset.priceUSD = '0';
      asset.supply = BigInt(0);

      await asset.save();

      logger.debug(`[AssetStorage] Created Asset ${id}`);
    }

    this.storage.set(asset.id, asset);

    return asset;
  }

  async updatePrice(id: string, priceUSD: string): Promise<void> {
    const asset = await this.getAsset(id);

    if (asset.priceUSD !== priceUSD) {
      asset.priceUSD = priceUSD;
      // update liqudiity usd with new price
      this.calcLiquidityUSD(asset);
      // to update asset price by ws subscription instantly
      await asset.save();
    }
  }

  async updateLiquidity(id: string, liquidity: bigint): Promise<void>  {
    const asset = await this.getAsset(id);

    asset.liquidity = liquidity;
    // update liqudiity usd with new liquidity
    this.calcLiquidityUSD(asset);
  }

  calcLiquidityUSD(asset: Asset): void {
    const price = new BigNumber(asset.priceUSD);
    const decimals = assetPrecisions.get(asset.id) ?? 18;
    const liquidity = new BigNumber(asset.liquidity.toString(), decimals);

    asset.liquidityUSD = price.multipliedBy(liquidity).toFixed(2);
  }

  async updateStats(blockTimestamp: number): Promise<void> {
    logger.debug(`[AssetStorage] Update assets stats...`);

    const { index: currentHourIndex } = getSnapshotIndex(blockTimestamp, SnapshotType.HOUR);
    const { index: currentDayIndex } = getSnapshotIndex(blockTimestamp, SnapshotType.DAY);
    const hoursInDayIndexes = fillIndexes(currentHourIndex, 24);
    const daysInWeekIndexes = fillIndexes(currentDayIndex, 7);

    for (const asset of this.storage.values()) {
      const { id, priceUSD, liquidityUSD } = asset;
      const hourIds = hoursInDayIndexes.map((idx) => AssetSnapshotsStorage.getId(id, SnapshotType.HOUR, idx));
      const dayIds = daysInWeekIndexes.map((idx) => AssetSnapshotsStorage.getId(id, SnapshotType.DAY, idx));

      const [hourSnapshots, daySnapshots] = await Promise.all([
        getSnapshotsByIds(hourIds),
        getSnapshotsByIds(dayIds),
      ]);

      const currentPriceUSD = new BigNumber(priceUSD);
      const startPriceDay = new BigNumber(last(hourSnapshots)?.priceUSD?.open ?? '0');
      const startPriceWeek = new BigNumber(last(daySnapshots)?.priceUSD?.open ?? '0');
      const tvl = new BigNumber(liquidityUSD ?? '0');

      asset.priceChangeDay = calcPriceChange(currentPriceUSD, startPriceDay);
      asset.priceChangeWeek = calcPriceChange(currentPriceUSD, startPriceWeek);
      asset.volumeDayUSD = calcVolumeUSD(hourSnapshots);
      asset.volumeWeekUSD = calcVolumeUSD(daySnapshots);
      asset.velocity = tvl.isZero() ? 0 : Number(new BigNumber(asset.volumeWeekUSD).div(tvl).toFixed(2));
    }
  }
}

class AssetSnapshotsStorage {
  private storage!: Map<string, AssetSnapshot>;
  public assetStorage!: AssetStorage;

  constructor(assetStorage: AssetStorage) {
    this.storage = new Map();
    this.assetStorage = assetStorage;
  }

  public static getId(assetId: string, type: SnapshotType, index: number) {
    return [assetId, type, index].join('-');
  }

  async sync(blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(blockTimestamp);
  }

  private async syncSnapshots(blockTimestamp: number): Promise<void> {
    logger.debug(`[AssetSnapshotsStorage] ${this.storage.size} snapshots sync`);

    await store.bulkUpdate('AssetSnapshot', [...this.storage.values()]);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    logger.debug(`[AssetSnapshotsStorage] ${this.storage.size} snaphots in storage after sync`);
  }

  async getSnapshot(assetId: string, type: SnapshotType, blockTimestamp: number): Promise<AssetSnapshot> {
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const id = AssetSnapshotsStorage.getId(assetId, type, index);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await AssetSnapshot.get(id);

    if (!snapshot) {
      const asset = await this.assetStorage.getAsset(assetId);

      snapshot = new AssetSnapshot(id);
      snapshot.assetId = assetId;
      snapshot.timestamp = timestamp;
      snapshot.type = type;
      // set current asset supply & liquidity on creation
      snapshot.liquidity = asset.liquidity;
      snapshot.supply = asset.supply;
      snapshot.mint = BigInt(0);
      snapshot.burn = BigInt(0);
      snapshot.volume = {
        amount: '0',
        amountUSD: '0'
      };
      // set current asset price on creation
      snapshot.priceUSD = {
        open: asset.priceUSD,
        close: asset.priceUSD,
        high: asset.priceUSD,
        low: asset.priceUSD,
      };
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  async updatePrice(assetId: string, price: string, blockTimestamp: number): Promise<void> {
    const bnPrice = new BigNumber(price);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = price;
      }
    }

    await this.assetStorage.updatePrice(assetId, price);
  }

  async updateVolume(assetId: string, amount: string, blockTimestamp: number): Promise<BigNumber> {
    const asset = await this.assetStorage.getAsset(assetId);

    const assetPrice = DAI === assetId
      ? new BigNumber(1)
      : new BigNumber(asset?.priceUSD ?? 0);

    const volume = new BigNumber(amount);
    const volumeUSD = volume.multipliedBy(assetPrice);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toFixed(2);
    }

    return volumeUSD;
  }

  async updateLiquidity(assetId: string, liquidity: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.liquidity = liquidity;
    }

    await this.assetStorage.updateLiquidity(assetId, liquidity);
  }

  async updateMinted(assetId: string, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.mint = snapshot.mint + amount;
    }

    const asset = await this.assetStorage.getAsset(assetId);

    asset.supply = asset.supply + amount;
  }

  async updateBurned(assetId: string, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.burn = snapshot.burn + amount;
    }

    const asset = await this.assetStorage.getAsset(assetId);

    asset.supply = asset.supply - amount;
  }
}

export const assetStorage = new AssetStorage();
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage);
