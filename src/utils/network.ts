import BigNumber from "bignumber.js";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { SnapshotSecondsMap, XOR, XSTUSD } from './consts';

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
      entity = new NetworkStats(this.id);
      entity.totalFees = BigInt(0);
      entity.totalAccounts = 0;
      entity.totalTransactions = 0;
      entity.totalBridgeIncomingTransactions = 0;
      entity.totalBridgeOutgoingTransactions = 0;
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
    logger.debug(`[NetworkSnapshotsStorage] syncSnapshots ${this.storage.size}`);

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

    logger.debug(`[NetworkSnapshotsStorage] snaphots in storage after sync: ${this.storage.size}`);
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

      snapshot = new NetworkSnapshot(id);
      snapshot.type = type;
      snapshot.timestamp = timestamp;
      snapshot.accounts = 0;
      snapshot.transactions = 0;
      snapshot.fees = BigInt(0);
      snapshot.liquidity = {
        xor: '0',
        xstusd: '0'
      };
      snapshot.liquidityUSD = '0';
      snapshot.volumeUSD = '0';
      snapshot.bridgeIncomingTransactions = 0;
      snapshot.bridgeOutgoingTransactions = 0;
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

  async updateLiquidityStats(liquidities: Record<string, string>, liquiditiesUSD: BigNumber, blockTimestamp: number): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(type, blockTimestamp);
  
      snapshot.liquidity = {
        xor: liquidities[XOR],
        xstusd: liquidities[XSTUSD]
      };

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
