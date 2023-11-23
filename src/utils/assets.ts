import { TextDecoder } from 'util';

import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { DAI } from './consts';
import { getSnapshotIndex, prevSnapshotsIndexesRow, last, calcPriceChange, shouldUpdate, formatDateTimestamp, toFloat } from './index';
import { getAssetSnapshotsStorageLog, getAssetStorageLog } from './logs';
import { priceUpdatesStream } from "./stream";
import { SubstrateBlock } from '@subql/types';

const calcVolumeUSD = (snapshots: AssetSnapshot[]): number => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volume.amountUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0));

  return toFloat(totalVolume);
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

  async sync(block: SubstrateBlock): Promise<void> {
    getAssetStorageLog(block).debug(`Sync ${this.storage.size} assets`);
    await store.bulkUpdate('Asset', [...this.storage.values()]);
  }

  private async save(block: SubstrateBlock, asset: Asset, force = false): Promise<void> {
    if (force || shouldUpdate(block, 60)) {
      await asset.save();

      getAssetStorageLog(block).debug({ id: asset.id }, 'Asset saved');
    }
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

      await this.save(block, asset, true);
    }

    this.storage.set(asset.id, asset);

    return asset;
  }

  async updatePrice(block: SubstrateBlock, id: string, priceUSD: string): Promise<void> {
    const asset = await this.getAsset(block, id);

    asset.priceUSD = priceUSD;
    getAssetStorageLog(block, true).debug({ assetId: id, newPrice: priceUSD }, 'Asset price updated')
    // update liquidity usd with new price
    this.calcLiquidityUSD(asset);
    // stream update
    priceUpdatesStream.update(id, priceUSD);
    await this.save(block, asset);
  }

  async updateLiquidity(block: SubstrateBlock ,id: string, liquidity: bigint): Promise<void>  {
    const asset = await this.getAsset(block, id);

    asset.liquidity = liquidity;
    // update liquidity usd with new liquidity
    this.calcLiquidityUSD(asset);
    getAssetStorageLog(block, true).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity updated')
  }

  calcLiquidityUSD(asset: Asset): void {
    const price = new BigNumber(asset.priceUSD);
    const decimals = assetPrecisions.get(asset.id) ?? 18;
    const liquidity = new BigNumber(asset.liquidity.toString()).dividedBy(Math.pow(10, decimals));

    asset.liquidityUSD = toFloat(price.multipliedBy(liquidity));
  }

  private async calcStats(block: SubstrateBlock, asset: Asset, type: SnapshotType, snapshotsCount: number) {
    const { id, priceUSD, liquidityUSD } = asset;
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index } = getSnapshotIndex(blockTimestamp, type);
    const indexes = prevSnapshotsIndexesRow(index, snapshotsCount);

    const ids = indexes.map((idx) => AssetSnapshotsStorage.getId(id, type, idx));
    const snapshots = await AssetSnapshotsStorage.getSnapshotsByIds(ids);

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

  async updateDailyStats(block: SubstrateBlock): Promise<void> {
    getAssetStorageLog(block).debug(`Assets Daily stats updating...`);

    for (const asset of this.storage.values()) {
      const { priceChange, volumeUSD } = await this.calcStats(block, asset, SnapshotType.HOUR, 24);

      asset.priceChangeDay = priceChange;
      asset.volumeDayUSD = volumeUSD;
      getAssetStorageLog(block, true).debug(
        { assetId: asset.id, priceChange, volumeUSD },
        'Asset daily stats updated',
      )
    }
  }

  async updateWeeklyStats(block: SubstrateBlock): Promise<void> {
    getAssetStorageLog(block).debug(`Assets Weekly stats updating...`);
    for (const asset of this.storage.values()) {
      const { priceChange, volumeUSD, velocity } = await this.calcStats(block, asset, SnapshotType.DAY, 7);

      asset.priceChangeWeek = priceChange;
      asset.volumeWeekUSD = volumeUSD;
      asset.velocity = velocity;
      getAssetStorageLog(block, true).debug(
        { assetId: asset.id, priceChange, volumeUSD, velocity },
        'Asset weekly stats updated',
      )
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

  async sync(block: SubstrateBlock): Promise<void> {
    await this.syncSnapshots(block);
  }

  private async syncSnapshots(block: SubstrateBlock): Promise<void> {
    getAssetSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots sync`);

    await store.bulkUpdate('AssetSnapshot', [...this.storage.values()]);

    const blockTimestamp = formatDateTimestamp(block.timestamp);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    getAssetSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots in storage after sync`);
  }

  async getSnapshot(block: SubstrateBlock, assetId: string, type: SnapshotType): Promise<AssetSnapshot> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
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
			getAssetSnapshotsStorageLog(block).debug({ assetId: id }, 'Asset snapshot created and saved')
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  static async getSnapshotsByIds(ids: string[]): Promise<AssetSnapshot[]> {
    const snapshots = await Promise.all(ids.map(id => AssetSnapshot.get(id)));

    return snapshots.filter((item) => !!item);
  };

  async updatePrice(block: SubstrateBlock, assetId: string, price: string): Promise<void> {
    const bnPrice = new BigNumber(price);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type);

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = price;
        snapshot.priceUSD.low = price;
      }

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      getAssetSnapshotsStorageLog(block, true).debug(
        { assetId, newPrice: price },
        'Asset snapshot price updated',
      )
    }
    await this.assetStorage.updatePrice(block, assetId, price);
  }

  async updateVolume(block: SubstrateBlock, assetId: string, amount: string): Promise<BigNumber> {
    const asset = await this.assetStorage.getAsset(block, assetId);

    const assetPrice = DAI === assetId
      ? new BigNumber(1)
      : new BigNumber(asset?.priceUSD ?? 0);

    const volume = new BigNumber(amount);
    const volumeUSD = volume.multipliedBy(assetPrice);

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type);
			getAssetSnapshotsStorageLog(block, true).debug({ oldVolume: snapshot.volume?.amount }, 'Updating asset snapshot volume')

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toFixed(2);

      getAssetSnapshotsStorageLog(block, true).debug(
        { assetId: assetId, newVolume: volume.toString() },
        'Asset snapshot volume updated',
      )
    }

    return volumeUSD;
  }

  async updateLiquidity(block: SubstrateBlock, assetId: string, liquidity: bigint): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type);

      snapshot.liquidity = liquidity;
      getAssetSnapshotsStorageLog(block, true).debug(
        { assetId: assetId, newLiquidity: liquidity.toString() },
        'Asset snapshot liquidity updated',
      )
    }

    await this.assetStorage.updateLiquidity(block, assetId, liquidity);
  }

  async updateMinted(block: SubstrateBlock, assetId: string, amount: bigint): Promise<void> {
    for (const type of AssetSnapshots) {
			getAssetSnapshotsStorageLog(block).debug({ type }, 'Type')
      const snapshot = await this.getSnapshot(block, assetId, type);

      snapshot.mint = snapshot.mint + amount;

      getAssetSnapshotsStorageLog(block, true).debug(
        { assetId: assetId, newMinted: amount.toString() },
        'Asset snapshot mint updated',
      )
    }

    const asset = await this.assetStorage.getAsset(block, assetId);

    asset.supply = asset.supply + amount;
		getAssetSnapshotsStorageLog(block).debug({ assetId: assetId, minted: amount.toString() }, 'Asset minted')
  }

  async updateBurned(block: SubstrateBlock, assetId: string, amount: bigint): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(block, assetId, type);

      snapshot.burn = snapshot.burn + amount;
      getAssetSnapshotsStorageLog(block, true).debug(
        { assetId: assetId, newBurned: snapshot.burn.toString() },
        'Asset snapshot burn updated',
      )
    }

    const asset = await this.assetStorage.getAsset(block, assetId);

    asset.supply = asset.supply - amount;

    getAssetSnapshotsStorageLog(block).debug({ assetId: assetId, supply: asset.supply.toString() }, 'Asset supply updated')
  }
}

export const assetStorage = new AssetStorage();
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage);
