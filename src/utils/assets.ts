import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot, PoolXYK } from "../types";
import { SnapshotSecondsMap, SECONDS_IN_BLOCK, XSTUSD, DAI } from './consts';

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

export const getOrCreateAssetEntity = async (assetId: string) => {
  let asset = await Asset.get(assetId);

  if (!asset) {
      asset = new Asset(assetId);
      await asset.save();
  }

  return asset;
};

const getAssetSnapshotId = (assetId: string, type: SnapshotType, index: number) => [assetId, type, index].join('-');

const getAssetSnapshot = async (assetId: string, type: SnapshotType, blockTimestamp: number, blockNumber: number): Promise<AssetSnapshot> => {
  const seconds = SnapshotSecondsMap[type];
  const interval = Math.floor(seconds / SECONDS_IN_BLOCK);
  const index =  Math.floor(blockTimestamp / seconds);
  const timestamp = index * seconds; // rounded snapshot timestamp
  const shapshotIndex = Math.floor(blockNumber / interval); // rounded snapshot index (from 0)
  const id = getAssetSnapshotId(assetId, type, shapshotIndex);

  let snapshot = await AssetSnapshot.get(id);

  if (!snapshot) {
      snapshot = new AssetSnapshot(id);
      snapshot.assetId = assetId;
      snapshot.timestamp = timestamp;
      snapshot.type = type;
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

      // find prev snapshot, to get it's "close" price, and set it as "open" price for new snapshot
      let prevSnapshotIndex = shapshotIndex - 1;

      while (prevSnapshotIndex >= 0) {
          const prevSnapshotId = getAssetSnapshotId(assetId, type, prevSnapshotIndex);
          const prevSnapshot = await AssetSnapshot.get(prevSnapshotId);

          if (prevSnapshot?.priceUSD) {
              const snapshotOpenPrice = prevSnapshot?.priceUSD?.close;

              snapshot.priceUSD = {
                  open: snapshotOpenPrice,
                  close: snapshotOpenPrice,
                  high: snapshotOpenPrice,
                  low: snapshotOpenPrice,
              };

              break;
          }

          prevSnapshotIndex = prevSnapshotIndex - 1;
      }
  }

  return snapshot;
};

export const updateAssetPrice = async (assetId: string, price: string, blockTimestamp: number, blockNumber: number): Promise<void> => {
  const asset = await getOrCreateAssetEntity(assetId);

  asset.priceUSD = price;

  await asset.save();

  for (const type of Object.values(SnapshotType)) {
      const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp, blockNumber);

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), new BigNumber(price)).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), new BigNumber(price)).toString();

      await snapshot.save();
  }
};

export const updateAssetVolume = async (assetId: string, amount: string, blockTimestamp: number, blockNumber: number): Promise<void> => {
  await getOrCreateAssetEntity(assetId);

  const assetPrice = [XSTUSD, DAI].includes(assetId)
      ? new BigNumber(1)
      : new BigNumber((await PoolXYK.get(assetId))?.priceUSD ?? 0);

  for (const type of Object.values(SnapshotType)) {
      const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp, blockNumber);

      const volume = new BigNumber(amount);
      const volumeUSD = volume.multipliedBy(assetPrice);

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toString();

      await snapshot.save();
  }
};