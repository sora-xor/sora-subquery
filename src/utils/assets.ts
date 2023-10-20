import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { DAI } from './consts';
import { getSnapshotIndex } from './index';
import { getAssetSnapshotsStorageLog, getAssetStorageLog } from './logs';
import { SubstrateBlock } from '@subql/types';

const prevIndexesRow = (index: number, count: number): number[] => {
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

const toFloat = (value: BigNumber) => Number(value.toFixed(2));

const calcVolumeUSD = (snapshots: AssetSnapshot[]): number => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volume.amountUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0));

  return toFloat(totalVolume);
};

const calcPriceChange = (current: BigNumber, prev: BigNumber): number => {
  if (prev.isZero()) return current.isGreaterThan(new BigNumber(0)) ? 100 : 0;

  const change = current.minus(prev).div(prev).multipliedBy(new BigNumber(100));

  return toFloat(change);
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

class AssetStorage {
  private storage!: Map<string, Asset>;

  constructor() {
    this.storage = new Map();
  }

  async sync(block: SubstrateBlock): Promise<void> {
    getAssetStorageLog(block).debug(`Sync ${this.storage.size} assets`);
    await store.bulkUpdate('Asset', [...this.storage.values()]);
  }

  async getAsset(block: SubstrateBlock, id: string): Promise<Asset> {
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

      getAssetStorageLog(block).debug({ assetId: id }, 'Created Asset');
    }

    this.storage.set(asset.id, asset);

    return asset;
  }

  async updatePrice(block: SubstrateBlock, id: string, priceUSD: string): Promise<void> {
    const asset = await this.getAsset(block ,id);

    if (asset.priceUSD !== priceUSD) {
      asset.priceUSD = priceUSD;
      // update liqudiity usd with new price
      this.calcLiquidityUSD(asset);
      // to update asset price by ws subscription instantly
      await asset.save();
    }
  }

  async updateLiquidity(block: SubstrateBlock ,id: string, liquidity: bigint): Promise<void>  {
    const asset = await this.getAsset(block ,id);

    asset.liquidity = liquidity;
    // update liqudiity usd with new liquidity
    this.calcLiquidityUSD(asset);
  }

  calcLiquidityUSD(asset: Asset): void {
    const price = new BigNumber(asset.priceUSD);
    const decimals = assetPrecisions.get(asset.id) ?? 18;
    const liquidity = new BigNumber(asset.liquidity.toString()).dividedBy(Math.pow(10, decimals));

    asset.liquidityUSD = toFloat(price.multipliedBy(liquidity));
  }

  private async calcAssetStats(asset: Asset, type: SnapshotType, snapshotsCount: number, blockTimestamp: number) {
    const { id, priceUSD, liquidityUSD } = asset;
    const { index } = getSnapshotIndex(blockTimestamp, type);
    const indexes = prevIndexesRow(index, snapshotsCount);

    const ids = indexes.map((idx) => AssetSnapshotsStorage.getId(id, type, idx));
    const snapshots = await getSnapshotsByIds(ids);

    const currentPriceUSD = new BigNumber(priceUSD);
    const startPriceUSD = new BigNumber(last(snapshots)?.priceUSD?.open ?? '0');
    const tvl = new BigNumber(liquidityUSD ?? 0);

    const priceChange = calcPriceChange(currentPriceUSD, startPriceUSD);
    const volumeUSD = calcVolumeUSD(snapshots);
    const velocity = tvl.isZero() ? 0 : toFloat(new BigNumber(volumeUSD).div(tvl));
	
    return {
      priceChange,
      volumeUSD,
      velocity,
    }
  }

  async updateDailyStats(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    getAssetStorageLog(block).debug(`Assets Daily stats updating...`);
    for (const asset of this.storage.values()) {
      const { priceChange, volumeUSD } = await this.calcAssetStats(asset, SnapshotType.HOUR, 24, blockTimestamp);

      asset.priceChangeDay = priceChange;
      asset.volumeDayUSD = volumeUSD;
    }
    getAssetStorageLog(block).debug(`Assets Daily stats updated!`);
  }

  async updateWeeklyStats(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    getAssetStorageLog(block).debug(`Assets Weekly stats updating...`);
    for (const asset of this.storage.values()) {
      const { priceChange, volumeUSD, velocity } = await this.calcAssetStats(asset, SnapshotType.DAY, 7, blockTimestamp);

      asset.priceChangeWeek = priceChange;
      asset.volumeWeekUSD = volumeUSD;
      asset.velocity = velocity;
    }
    getAssetStorageLog(block).debug(`Assets Weekly stats updated!`);
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

  async sync(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(block, blockTimestamp);
  }

  private async syncSnapshots(block: SubstrateBlock, blockTimestamp: number): Promise<void> {
    getAssetSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots sync`);

    await store.bulkUpdate('AssetSnapshot', [...this.storage.values()]);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    getAssetSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots in storage after sync`);
  }

  async getSnapshot(block: SubstrateBlock, assetId: string, type: SnapshotType, blockTimestamp: number): Promise<AssetSnapshot> {
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const id = AssetSnapshotsStorage.getId(assetId, type, index);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await AssetSnapshot.get(id);

    if (!snapshot) {
      const asset = await this.assetStorage.getAsset(block ,assetId);

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

  async updatePrice(block: SubstrateBlock, assetId: string, price: string, blockTimestamp: number): Promise<void> {
    const bnPrice = new BigNumber(price);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type, blockTimestamp);

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = price;
      }
    }

    await this.assetStorage.updatePrice(block, assetId, price);
  }

  async updateVolume(block: SubstrateBlock, assetId: string, amount: string, blockTimestamp: number): Promise<BigNumber> {
    const asset = await this.assetStorage.getAsset(block, assetId);

    const assetPrice = DAI === assetId
      ? new BigNumber(1)
      : new BigNumber(asset?.priceUSD ?? 0);

    const volume = new BigNumber(amount);
    const volumeUSD = volume.multipliedBy(assetPrice);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type, blockTimestamp);

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toFixed(2);
    }

    return volumeUSD;
  }

  async updateLiquidity(block: SubstrateBlock, assetId: string, liquidity: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type, blockTimestamp);

      snapshot.liquidity = liquidity;
    }

    await this.assetStorage.updateLiquidity(block, assetId, liquidity);
  }

  async updateMinted(block: SubstrateBlock, assetId: string, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type, blockTimestamp);

      snapshot.mint = snapshot.mint + amount;
    }

    const asset = await this.assetStorage.getAsset(block, assetId);

    asset.supply = asset.supply + amount;
  }

  async updateBurned(block: SubstrateBlock, assetId: string, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type, blockTimestamp);

      snapshot.burn = snapshot.burn + amount;
    }

    const asset = await this.assetStorage.getAsset(block, assetId);

    asset.supply = asset.supply - amount;
  }
}

export const assetStorage = new AssetStorage();
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage);
