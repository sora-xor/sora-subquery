import BigNumber from "bignumber.js";

import { Asset, SnapshotType, AssetSnapshot } from "../types";
import { DAI, XOR } from './consts';
import { getSnapshotIndex, getSnapshotTypes, prevSnapshotsIndexesRow, last, calcPriceChange, formatDateTimestamp, toFloat } from './index';
import { getUtilsLog } from './logs';
import { EntityStorage, EntitySnapshotsStorage } from "./storage";
import { priceUpdatesStream } from "./stream";
import { SubstrateBlock } from '@subql/types';

const calcVolumeUSD = (snapshots: AssetSnapshot[]): number => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volume.amountUSD);

    return buffer.plus(volumeUSD);
  }, new BigNumber(0));

  return toFloat(totalVolume);
};

export const calcTvlUSD = (asset: Asset, reserves?: bigint): BigNumber => {
  if (!reserves) return new BigNumber(0);

  const price = new BigNumber(asset.priceUSD);
  const decimals = assetPrecisions.get(asset.id) ?? 18;
  const amount = new BigNumber(reserves.toString()).dividedBy(Math.pow(10, decimals));

  return price.multipliedBy(amount);
};

export const getAmountUSD = async (
  block: SubstrateBlock,
  assetId: string,
  amount: string,
  double = false,
) => {
  const asset = await assetStorage.getEntity(block, assetId);
  const amountUSD = new BigNumber(asset.priceUSD).multipliedBy(new BigNumber(amount));
  const result = double ? amountUSD.multipliedBy(new BigNumber(2)) : amountUSD;

  return result.toFixed(2);
};

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

export const getAssetBalance = async (block: SubstrateBlock, accountId: string, assetId: string) => {
  try {
    getUtilsLog(block).debug({ accountId, assetId }, 'Get Asset balance');

    let data!: any;

    if (assetId === XOR) {
      data = (await api.query.system.account(accountId) as any).data;
    } else {
      data = await api.query.tokens.accounts(accountId, assetId);
    }

    getUtilsLog(block).debug({ accountId, assetId, balance: data.free.toString() }, 'Found Asset balance');

    return BigInt(data.free.toString());
  } catch (e) {
    getUtilsLog(block).error('Error getting Asset balance');
    getUtilsLog(block).error(e);
    return BigInt(0);
  }
};

class AssetStorage extends EntityStorage<Asset> {
  constructor() {
    super('Asset')
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<Asset> {
    return new Asset(id, '0', BigInt(0));
  }

  async updatePrice(block: SubstrateBlock, id: string, priceUSD: string): Promise<void> {
    const asset = await this.getEntity(block, id);

    if (asset.priceUSD === priceUSD) return;

    asset.priceUSD = priceUSD;
    // stream update
    priceUpdatesStream.update(id, priceUSD);

    this.log(block, true).debug({ assetId: id, newPrice: priceUSD }, 'Asset price updated');

    await this.save(block, asset);
  }

  async updateLiquidity(block: SubstrateBlock ,id: string, liquidity: bigint): Promise<Asset> {
    const asset = await this.getEntity(block, id);

    asset.liquidity = liquidity;

    this.log(block, true).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity updated');

    return asset;
  }

  async updateLiquidityBooks(block: SubstrateBlock, id: string, liquidity: bigint): Promise<Asset> {
    const asset = await this.getEntity(block, id);

    asset.liquidityBooks = liquidity;

    this.log(block, true).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity in order books updated');

    return asset;
  }
}

class AssetSnapshotsStorage extends EntitySnapshotsStorage<Asset, AssetSnapshot, AssetStorage> {
  constructor(assetStorage: AssetStorage) {
    super('AssetSnapshot', assetStorage)
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    timestamp: number,
    type: SnapshotType,
    asset: Asset
  ): Promise<AssetSnapshot> {
    const snapshot = new AssetSnapshot(id, asset.id, timestamp, type, asset.supply, BigInt(0), BigInt(0));

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

    return snapshot;
  }

  async updatePrice(block: SubstrateBlock, assetId: string, price: string): Promise<void> {
    const bnPrice = new BigNumber(price);
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, assetId, type);

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = price;
        snapshot.priceUSD.low = price;
      }

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      this.log(block, true).debug(
        { assetId, newPrice: price },
        'Asset snapshot price updated',
      )

      await this.save(block, snapshot);
    }

    await this.entityStorage.updatePrice(block, assetId, price);
  }

  async updateVolume(block: SubstrateBlock, assetId: string, amount: string): Promise<BigNumber> {
    const asset = await this.entityStorage.getEntity(block, assetId);

    const assetPrice = DAI === assetId
      ? new BigNumber(1)
      : new BigNumber(asset?.priceUSD ?? 0);

    const volume = new BigNumber(amount);
    const volumeUSD = volume.multipliedBy(assetPrice);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, assetId, type);
			this.log(block, true).debug({ oldVolume: snapshot.volume?.amount }, 'Updating asset snapshot volume');

      snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
      snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toFixed(2);

      this.log(block, true).debug(
        { assetId: assetId, newVolume: volume.toString() },
        'Asset snapshot volume updated',
      )
    }

    return volumeUSD;
  }

  async updateMinted(block: SubstrateBlock, assetId: string, amount: bigint): Promise<void> {
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
			this.log(block).debug({ type }, 'Type')
      const snapshot = await this.getSnapshot(block, assetId, type);

      snapshot.mint = snapshot.mint + amount;

      this.log(block, true).debug(
        { assetId: assetId, newMinted: amount.toString() },
        'Asset snapshot mint updated',
      )
    }

    const asset = await this.entityStorage.getEntity(block, assetId);

    asset.supply = asset.supply + amount;
		this.log(block).debug({ assetId: assetId, minted: amount.toString() }, 'Asset minted');
  }

  async updateBurned(block: SubstrateBlock, assetId: string, amount: bigint): Promise<void> {
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, assetId, type);

      snapshot.burn = snapshot.burn + amount;
      this.log(block, true).debug(
        { assetId: assetId, burned: snapshot.burn.toString() },
        'Asset snapshot burn updated',
      )
    }

    const asset = await this.entityStorage.getEntity(block, assetId);

    asset.supply = asset.supply - amount;

    this.log(block).debug({ assetId: assetId, supply: asset.supply.toString() }, 'Asset supply updated');
  }

  private async calcStats(block: SubstrateBlock, asset: Asset, type: SnapshotType, snapshotsCount: number) {
    const { id, priceUSD } = asset;
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index } = getSnapshotIndex(blockTimestamp, type);
    const indexes = prevSnapshotsIndexesRow(index, snapshotsCount);

    const ids = indexes.map((idx) => this.getId(id, type, idx));
    const snapshots = await this.getSnapshotsByIds(ids);

    const currentPriceUSD = new BigNumber(priceUSD);
    const startPriceUSD = new BigNumber(last(snapshots)?.priceUSD?.open ?? '0');
    const tvlPools = calcTvlUSD(asset, asset.liquidity);
    const tvlOrderBooks = calcTvlUSD(asset, asset.liquidityBooks);
    const tvl = tvlPools.plus(tvlOrderBooks);

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
    this.log(block).debug(`Assets Daily stats updating...`);

    for (const asset of this.entityStorage.values) {
      const { priceChange, volumeUSD } = await this.calcStats(block, asset, SnapshotType.HOUR, 24);

      asset.priceChangeDay = priceChange;
      asset.volumeDayUSD = volumeUSD;
      this.log(block, true).debug(
        { assetId: asset.id, priceChange, volumeUSD },
        'Asset daily stats updated',
      )
    }
  }

  async updateWeeklyStats(block: SubstrateBlock): Promise<void> {
    this.log(block).debug(`Assets Weekly stats updating...`);
    for (const asset of this.entityStorage.values) {
      const { priceChange, volumeUSD, velocity } = await this.calcStats(block, asset, SnapshotType.DAY, 7);

      asset.priceChangeWeek = priceChange;
      asset.volumeWeekUSD = volumeUSD;
      asset.velocity = velocity;
      this.log(block, true).debug(
        { assetId: asset.id, priceChange, volumeUSD, velocity },
        'Asset weekly stats updated',
      )
    }
  }
}

export const assetStorage = new AssetStorage();
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage);
