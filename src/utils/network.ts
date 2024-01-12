import BigNumber from "bignumber.js";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { getSnapshotIndex, formatDateTimestamp } from "./index";
import { SubstrateBlock } from "@subql/types";
import { getNetworkSnapshotsStorageLog } from "./logs";

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH];

const NetworkStatsId = '0';

class NetworkStatsStorage {
  private storage!: NetworkStats | null;
  private id!: string;

  constructor(id: string) {
    this.id = id;
    this.storage = null;
  }

  async sync(block: SubstrateBlock): Promise<void> {
    if(this.storage) {
      getNetworkSnapshotsStorageLog(block).debug('Network stats sync')
      await this.storage.save();
    }
  }

  async getStats(): Promise<NetworkStats> {
    if (this.storage) return this.storage;

    let entity = await NetworkStats.get(this.id);

    if (!entity) {
      entity = new NetworkStats(this.id, BigInt(0), 0, 0, 0, 0);
    }

    this.storage = entity;

    return entity;
  }
};

class NetworkSnapshotsStorage {
  private storage!: Map<string, NetworkSnapshot>;
  private networkStatsStorage!: NetworkStatsStorage;

  constructor() {
    this.storage = new Map();
    this.networkStatsStorage = new NetworkStatsStorage(NetworkStatsId);
  }

  async sync(block: SubstrateBlock): Promise<void> {
    await this.syncSnapshots(block);
    await this.syncStats(block);
  }

  private async syncStats(block: SubstrateBlock): Promise<void> {
    this.networkStatsStorage.sync(block);
  }

  private async syncSnapshots(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug(`Sync ${this.storage.size} snapshots`);

    await store.bulkUpdate('NetworkSnapshot', [...this.storage.values()]);

    const blockTimestamp = formatDateTimestamp(block.timestamp);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    getNetworkSnapshotsStorageLog(block).debug(`${this.storage.size} snapshots in storage after sync`);
  }

  public static getId(type: SnapshotType, index: number): string {
    return [type, index].join('-');
  }

  async getSnapshot(block: SubstrateBlock, type: SnapshotType): Promise<NetworkSnapshot> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const id = NetworkSnapshotsStorage.getId(type, index);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await NetworkSnapshot.get(id);

    if (!snapshot) {
      snapshot = new NetworkSnapshot(
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
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  async updateAccountsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update accounts stats in network snapshots')
    const stats = await this.networkStatsStorage.getStats();

    stats.totalAccounts = stats.totalAccounts + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);
  
      snapshot.accounts = snapshot.accounts + 1;
    }
  }

  async updateTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update transactions stats in network snapshots')

    const stats = await this.networkStatsStorage.getStats();

    stats.totalTransactions = stats.totalTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);

      snapshot.transactions = snapshot.transactions + 1;
    }
  }

  async updateBridgeIncomingTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update bridge incoming transactions stats in network snapshots')

    const stats = await this.networkStatsStorage.getStats();

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;
    }
  }

  async updateBridgeOutgoingTransactionsStats(block: SubstrateBlock): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug('Update bridge outgoing transactions stats in network snapshots')

    const stats = await this.networkStatsStorage.getStats();

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;
    }
  }

  async updateFeesStats(block: SubstrateBlock, fee: bigint): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug({ fee }, 'Update fee stats in network snapshots')

    const stats = await this.networkStatsStorage.getStats();

    stats.totalFees = stats.totalFees + fee;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);

      snapshot.fees = snapshot.fees + fee;
    }
  }

  async updateLiquidityStats(block: SubstrateBlock, liquiditiesUSD: BigNumber): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug({ liquiditiesUSD }, 'Update liquidity stats in network snapshots')

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2);
    }
  }

  async updateVolumeStats(block: SubstrateBlock, volumeUSD: BigNumber): Promise<void> {
    getNetworkSnapshotsStorageLog(block).debug({ volumeUSD }, 'Update volume stats in network snapshot')

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(block, type);
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);
    }
  }
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage();
