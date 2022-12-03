import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { SnapshotSecondsMap, XOR, XSTUSD, DAI } from './consts';
import { updateVolumeStats } from '../utils/network';

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

export const getOrCreateAssetEntity = async (assetId: string) => {
  let asset = await Asset.get(assetId);

  if (!asset) {
      asset = new Asset(assetId);
      await asset.save();
  }

  return asset;
};

const getAssetSnapshotId = (assetId: string, type: SnapshotType, index: number) => [assetId, type, index].join('-');

const getAssetSnapshot = async (assetId: string, type: SnapshotType, blockTimestamp: number): Promise<AssetSnapshot> => {
  const seconds = SnapshotSecondsMap[type];
  const shapshotIndex = Math.floor(blockTimestamp / seconds); // rounded snapshot index (from 0)
  const id = getAssetSnapshotId(assetId, type, shapshotIndex);

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

      snapshot.supply = await getAssetSupply(assetId);

      // Find prev snapshot:
      // 1) to get it's "close" price, and set it as "open" price for new snapshot
      const prevSnapshotIndex = shapshotIndex - 1;
      const prevSnapshotId = getAssetSnapshotId(assetId, type, prevSnapshotIndex);
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

  return snapshot;
};

export const updateAssetPrice = async (assetId: string, price: string): Promise<void> => {
  const asset = await getOrCreateAssetEntity(assetId);

  asset.priceUSD = price;

  await asset.save();
};

export const updateAssetSnapshotsPrice = async (assetId: string, price: string, blockTimestamp: number): Promise<void> => {
  const snapshots = [];

  for (const type of AssetSnapshots) {
      const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp);

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), new BigNumber(price)).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), new BigNumber(price)).toString();

      snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateAssetSnapshotsVolume = async (assetId: string, amount: string, blockTimestamp: number, blockNumber: number): Promise<void> => {
  const asset = await getOrCreateAssetEntity(assetId);
  const snapshots = [];

  const assetPrice = DAI === assetId
      ? new BigNumber(1)
      : new BigNumber(asset?.priceUSD ?? 0);

  const volume = new BigNumber(amount);
  const volumeUSD = volume.multipliedBy(assetPrice);

  for (const type of AssetSnapshots) {
      const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp);

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toFixed(2);

      snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
  await updateVolumeStats(volumeUSD, blockTimestamp);
};

export const updateAssetSnapshotsMintedAmount = async (assetId: string, amount: bigint, blockTimestamp: number): Promise<void> => {
  await getOrCreateAssetEntity(assetId);
  const snapshots = [];

  for (const type of AssetSnapshots) {
    const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp);

    snapshot.mint = snapshot.mint + amount;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
}

export const updateAssetSnapshotsBurnedAmount = async (assetId: string, amount: bigint, blockTimestamp: number): Promise<void> => {
  await getOrCreateAssetEntity(assetId);
  const snapshots = [];

  for (const type of AssetSnapshots) {
    const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp);

    snapshot.burn = snapshot.burn + amount;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
}
