import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { SnapshotSecondsMap, SECONDS_IN_BLOCK } from './consts';

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY];

const NetworkStatsId = 'network-stats';

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
    snapshot.tvlUSD = BigInt(0);
    snapshot.volumeUSD = BigInt(0);
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
    entity.bridgeIncomingTransactions = 0;
    entity.bridgeOutgoingTransactions = 0;
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

  stats.bridgeIncomingTransactions = stats.bridgeIncomingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;

    await snapshot.save();
  }
};

export const updateBridgeOutgoingTransactionsStats = async (blockTimestamp: number, blockNumber: number): Promise<void> => {
  const stats = await getNetworkStats();

  stats.bridgeOutgoingTransactions = stats.bridgeOutgoingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;

    await snapshot.save();
  }
};
