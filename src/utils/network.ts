import BigNumber from "bignumber.js";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { SnapshotSecondsMap, SECONDS_IN_BLOCK, XOR, XSTUSD } from './consts';

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH];

// getters & setter for flag, should we sync network stats
export const NetworkStatsSync = {
  flag: true,
  get() {
      return this.flag;
  },
  set(flag: boolean) {
      this.flag = flag;
  },
};

const NetworkStatsId = '0';

const getNetworkSnapshotId = (type: SnapshotType, index: number) => [type, index].join('-');

export const getNetworkSnapshot = async (type: SnapshotType, blockTimestamp: number, blockNumber: number): Promise<NetworkSnapshot> => {
  const seconds = SnapshotSecondsMap[type];
  const interval = Math.floor(seconds / SECONDS_IN_BLOCK);
  const index =  Math.floor(blockTimestamp / seconds);
  const timestamp = index * seconds; // rounded snapshot timestamp
  const shapshotIndex = Math.floor(blockNumber / interval); // rounded snapshot index (from 0)
  const id = getNetworkSnapshotId(type, shapshotIndex);

  let snapshot = await NetworkSnapshot.get(id);

  if (!snapshot) {
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

  return snapshot;
};

export const getNetworkStats = async (): Promise<NetworkStats> => {
  let entity = await NetworkStats.get(NetworkStatsId);

  if (!entity) {
    entity = new NetworkStats(NetworkStatsId);
    entity.totalFees = BigInt(0);
    entity.totalAccounts = 0;
    entity.totalTransactions = 0;
    entity.totalBridgeIncomingTransactions = 0;
    entity.totalBridgeOutgoingTransactions = 0;
  }

  return entity;
};

export const updateAccountsStats = async (blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.totalAccounts = stats.totalAccounts + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.accounts = snapshot.accounts + 1;

    await snapshot.save();
  }
};

export const updateTransactionsStats = async (blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.totalTransactions = stats.totalTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.transactions = snapshot.transactions + 1;

    await snapshot.save();
  }
};

export const updateBridgeIncomingTransactionsStats = async (blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;

    await snapshot.save();
  }
};

export const updateBridgeOutgoingTransactionsStats = async (blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;

    await snapshot.save();
  }
};

export const updateFeesStats = async (fee: bigint, blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.totalFees = stats.totalFees + fee;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.fees = snapshot.fees + fee;

    await snapshot.save();
  }
};

export const updateLiquidityStats = async (liquidities: Record<string, string>, liquiditiesUSD: BigNumber, blockTimestamp: number, blockNumber: number) => {
  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.liquidity = {
      xor: liquidities[XOR],
      xstusd: liquidities[XSTUSD]
    };
    snapshot.liquidityUSD = liquiditiesUSD.toFixed(2);

    await snapshot.save();
  }
};

export const updateVolumeStats = async (volumeUSD: BigNumber, blockTimestamp: number, blockNumber: number) => {
  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);

    await snapshot.save();
  }
};
