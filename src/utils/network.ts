import BigNumber from "bignumber.js";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { SnapshotSecondsMap } from './consts';

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH];

const NetworkStatsId = '0';

class NetworkStatsStorage {
  private storage!: NetworkStats | null;
  private id!: string;

  constructor(id: string) {
    this.id = id;
    this.storage = null;
  }

  async sync(): Promise<void> {
    await this.storage?.save();
  }

  async getStats(): Promise<NetworkStats> {
    if (this.storage) return this.storage;

    let entity = await NetworkStats.get(this.id);

    if (!entity) {
      entity = new NetworkStats(
        this.id,
        BigInt(0),
        0,
        0,
        0,
        0,
      );
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

  async sync(blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(blockTimestamp);
    await this.syncStats();
  }

  private async syncStats(): Promise<void> {
    this.networkStatsStorage.sync();
  }

  private async syncSnapshots(blockTimestamp: number): Promise<void> {
    logger.debug(`[NetworkSnapshotsStorage] ${this.storage.size} snapshots sync`);

    await store.bulkUpdate('NetworkSnapshot', [...this.storage.values()]);

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot;
      const seconds = SnapshotSecondsMap[type];
      const currentShapshotIndex =  Math.floor(blockTimestamp / seconds);
      const currentTimestamp = currentShapshotIndex * seconds;

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    logger.debug(`[NetworkSnapshotsStorage] ${this.storage.size} snaphots in storage after sync`);
  }

  private getId(type: SnapshotType, index: number): string {
    return [type, index].join('-');
  }

  async getSnapshot(type: SnapshotType, blockTimestamp: number): Promise<NetworkSnapshot> {
    const seconds = SnapshotSecondsMap[type];
    const shapshotIndex =  Math.floor(blockTimestamp / seconds);
    const id = this.getId(type, shapshotIndex);

    if (this.storage.has(id)) {
      return this.storage.get(id);
    }

    let snapshot = await NetworkSnapshot.get(id);

    if (!snapshot) {
      const timestamp = shapshotIndex * seconds; // rounded snapshot timestamp

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

  async updateAccountsStats(blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats();

    stats.totalAccounts = stats.totalAccounts + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);
  
      snapshot.accounts = snapshot.accounts + 1;
    }
  }

  async updateTransactionsStats(blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats();

    stats.totalTransactions = stats.totalTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);

      snapshot.transactions = snapshot.transactions + 1;
    }
  }

  async updateBridgeIncomingTransactionsStats(blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats();

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;
    }
  }

  async updateBridgeOutgoingTransactionsStats(blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats();

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;
    }
  }

  async updateFeesStats(fee: bigint, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats();

    stats.totalFees = stats.totalFees + fee;

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);

      snapshot.fees = snapshot.fees + fee;
    }
  }

  async updateLiquidityStats(liquiditiesUSD: BigNumber, blockTimestamp: number): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2);
    }
  }

  async updateVolumeStats(volumeUSD: BigNumber, blockTimestamp: number): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);
    }
  }
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage();
