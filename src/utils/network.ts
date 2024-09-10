import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { getSnapshotTypes } from "./index";
import { getNetworkSnapshotsStorageLog } from "./logs";
import { orderBooksSnapshotsStorage } from './orderBook';
import { poolsSnapshotsStorage } from './pools';

import { EntityStorage, EntitySnapshotsStorage } from './storage';

const NetworkStatsId = '0';

class NetworkStatsStorage extends EntityStorage<NetworkStats>{
  private id!: string;

  constructor(id: string) {
    super('NetworkStats')
    this.id = id;
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
  ): Promise<NetworkStats> {
    const stats = new NetworkStats(id, BigInt(0), 0, 0, 0, 0)

    return stats;
  }

  async getStats(block: SubstrateBlock): Promise<NetworkStats> {
    return await this.getEntity(block, this.id);
  }
};

class NetworkSnapshotsStorage extends EntitySnapshotsStorage<NetworkStats, NetworkSnapshot, NetworkStatsStorage>{
  constructor(networkStatsStorage: NetworkStatsStorage) {
    super('NetworkSnapshot', networkStatsStorage);
  }

  public readonly updateTypes = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH];
  public readonly removeTypes = [SnapshotType.HOUR];

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    timestamp: number,
    type: SnapshotType
  ): Promise<NetworkSnapshot> {
    const snapshot = new NetworkSnapshot(
      id,
      type,
      timestamp,
      0,
      0,
      BigInt(0),
      '0',
      '0',
      0,
      0,
    );

    return snapshot;
  }

  async updateAccountsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update accounts stats in network snapshots')
    const stats = await this.entityStorage.getStats(block);

    stats.totalAccounts = stats.totalAccounts + 1;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);
  
      snapshot.accounts = snapshot.accounts + 1;
    }
  }

  async updateTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update transactions stats in network snapshots')

    const stats = await this.entityStorage.getStats(block);

    stats.totalTransactions = stats.totalTransactions + 1;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);

      snapshot.transactions = snapshot.transactions + 1;
    }
  }

  async updateBridgeIncomingTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update bridge incoming transactions stats in network snapshots')

    const stats = await this.entityStorage.getStats(block);

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;
    }
  }

  async updateBridgeOutgoingTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update bridge outgoing transactions stats in network snapshots')

    const stats = await this.entityStorage.getStats(block);

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;
    }
  }

  async updateFeesStats(block: SubstrateBlock, fee: bigint): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug({ fee }, 'Update fee stats in network snapshots')

    const stats = await this.entityStorage.getStats(block);

    stats.totalFees = stats.totalFees + fee;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);

      snapshot.fees = snapshot.fees + fee;
    }
  }

  async updateLiquidityStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update liquidity stats in network snapshots')

    const stats = await this.entityStorage.getStats(block);

    const poolsLockedUSD = await poolsSnapshotsStorage.getLockedLiquidityUSD(block);
    const booksLockedUSD = await orderBooksSnapshotsStorage.getLockedLiquidityUSD(block);
    const liquiditiesUSD = poolsLockedUSD.plus(booksLockedUSD);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2);
    }
  }

  async updateVolumeStats(block: SubstrateBlock, volumeUSD: BigNumber): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug({ volumeUSD }, 'Update volume stats in network snapshot');

    const stats = await this.entityStorage.getStats(block);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, stats.id, type);
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);
    }
  }
}

export const networkStatsStorage = new NetworkStatsStorage(NetworkStatsId);
export const networkSnapshotsStorage = new NetworkSnapshotsStorage(networkStatsStorage);
