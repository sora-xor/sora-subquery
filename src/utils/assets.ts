import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { SnapshotSecondsMap, XOR, DAI, XSTUSD, XST } from './consts';
import { networkSnapshotsStorage } from '../utils/network';

export const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];

export let assetPrecisions = new Map<string, number>();

export const formatU128ToBalance = (u128: string, assetId: string): string => {
  let decimals = assetPrecisions.get(assetId);
  let padded = u128.padStart(decimals + 1, "0");
  if (decimals == 0) {
      return padded
  }
  return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
};

export const getAssetId = (asset: any): string => {
  return (asset?.code?.code ?? asset?.code ?? asset).toHuman();
};

const getAssetSupply = async (assetId: string): Promise<bigint> => {
  try {
    const supply = assetId === XOR
      ? await api.query.balances.totalIssuance()
      : await api.query.tokens.totalIssuance(assetId);

    return BigInt(supply.toString());
  } catch (error) {
    logger.error(error);
    return BigInt(0);
  }
}

class AssetStorage {
  private storage!: Map<string, Asset>;

  constructor() {
    this.storage = new Map();
  }

  async getAsset(id: string): Promise<Asset> {
    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let asset = await Asset.get(id);

    if (!asset) {
      asset = new Asset(id);
      asset.priceUSD = '0';
      asset.supply = await getAssetSupply(id);

      await asset.save();
      logger.debug(`[AssetStorage] Created Asset ${id}`);
    }

    this.storage.set(asset.id, asset);

    return asset;
  }

  async updatePrice(id: string, price: string): Promise<void> {
    const asset = await this.getAsset(id);

    if (asset.priceUSD !== price) {
      asset.priceUSD = price;

      await asset.save();
    }
  }
}

class AssetSnapshotsStorage {
  private storage!: Map<string, AssetSnapshot>;
  private assetStorage!: AssetStorage;

  constructor(assetStorage: AssetStorage) {
    this.storage = new Map();
    this.assetStorage = assetStorage;
  }

  private getId(assetId: string, type: SnapshotType, index: number) {
    return [assetId, type, index].join('-');
  }

  async sync(blockTimestamp: number): Promise<void> {
    logger.debug('[AssetSnapshotsStorage] sync');
    await this.syncSnapshots(blockTimestamp);
  }

  private async syncSnapshots(blockTimestamp: number): Promise<void> {
    for (const snapshot of this.storage.values()) {
      await snapshot.save();

      const { type, timestamp } = snapshot;
      const seconds = SnapshotSecondsMap[type];
      const currentShapshotIndex =  Math.floor(blockTimestamp / seconds);
      const currentTimestamp = currentShapshotIndex * seconds;

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }
  }

  async getSnapshot(assetId: string, type: SnapshotType, blockTimestamp: number): Promise<AssetSnapshot> {
    const seconds = SnapshotSecondsMap[type];
    const shapshotIndex = Math.floor(blockTimestamp / seconds); // rounded snapshot index (from 0)
    const id = this.getId(assetId, type, shapshotIndex);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await AssetSnapshot.get(id);

    if (!snapshot) {
      const timestamp = shapshotIndex * seconds; // rounded snapshot timestamp

      snapshot = new AssetSnapshot(id);
      snapshot.assetId = assetId;
      snapshot.timestamp = timestamp;
      snapshot.type = type;
      snapshot.supply = BigInt(0);
      snapshot.mint = BigInt(0);
      snapshot.burn = BigInt(0);
      snapshot.volume = {
        amount: '0',
        amountUSD: '0'
      };
      snapshot.priceUSD = {
        open: '0',
        close: '0',
        high: '0',
        low: '0',
      };

      const asset = await this.assetStorage.getAsset(assetId);
      snapshot.supply = asset.supply;

      // Find prev snapshot:
      // 1) to get it's "close" price, and set it as "open" price for new snapshot
      const prevSnapshotIndex = shapshotIndex - 1;
      const prevSnapshotId = this.getId(assetId, type, prevSnapshotIndex);
      const prevSnapshot = await AssetSnapshot.get(prevSnapshotId);

      if (prevSnapshot) {
        if (prevSnapshot.priceUSD) {
          const snapshotOpenPrice = prevSnapshot.priceUSD.close;

          snapshot.priceUSD = {
            open: snapshotOpenPrice,
            close: snapshotOpenPrice,
            high: snapshotOpenPrice,
            low: snapshotOpenPrice,
          };
        }
      }
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  async updatePrice(assetId: string, price: string, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(assetId, type, blockTimestamp);

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), new BigNumber(price)).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), new BigNumber(price)).toString();
    }
  }

  async updateVolume(assetId: string, amount: string, blockTimestamp: number): Promise<void> {
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

    await networkSnapshotsStorage.updateVolumeStats(volumeUSD, blockTimestamp);
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
