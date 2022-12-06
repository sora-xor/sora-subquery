import BigNumber from "bignumber.js";

import { SnapshotType, NetworkSnapshot, NetworkStats } from "../types";
import { SnapshotSecondsMap, XOR, XSTUSD } from './consts';

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH];

const NetworkStatsId = '0';

const getNetworkSnapshotId = (type: SnapshotType, index: number) => [type, index].join('-');

export const getNetworkSnapshot = async (type: SnapshotType, blockTimestamp: number): Promise<NetworkSnapshot> => {
  logger.debug('getNetworkSnapshot');

  const seconds = SnapshotSecondsMap[type];
  const shapshotIndex =  Math.floor(blockTimestamp / seconds);
  const id = getNetworkSnapshotId(type, shapshotIndex);

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

  return snapshot;
};

export const getNetworkStats = async (): Promise<NetworkStats> => {
  logger.debug('getNetworkStats');

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

export const updateAccountsStats = async (blockTimestamp: number): Promise<void> => {
  logger.debug('updateAccountsStats');

  const stats = await getNetworkStats();
  const snapshots = [];

  stats.totalAccounts = stats.totalAccounts + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.accounts = snapshot.accounts + 1;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateTransactionsStats = async (blockTimestamp: number): Promise<void> => {
  logger.debug('updateTransactionsStats');

  const stats = await getNetworkStats();
  const snapshots = [];

  stats.totalTransactions = stats.totalTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.transactions = snapshot.transactions + 1;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateBridgeIncomingTransactionsStats = async (blockTimestamp: number): Promise<void> => {
  logger.debug('updateBridgeIncomingTransactionsStats');

  const stats = await getNetworkStats();
  const snapshots = [];

  stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateBridgeOutgoingTransactionsStats = async (blockTimestamp: number): Promise<void> => {
  logger.debug('updateBridgeOutgoingTransactionsStats');

  const stats = await getNetworkStats();
  const snapshots = [];

  stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateFeesStats = async (fee: bigint, blockTimestamp: number): Promise<void> => {
  logger.debug('updateFeesStats');

  const stats = await getNetworkStats();
  const snapshots = [];

  stats.totalFees = stats.totalFees + fee;

  await stats.save();

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.fees = snapshot.fees + fee;

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateLiquidityStats = async (liquidities: Record<string, string>, liquiditiesUSD: BigNumber, blockTimestamp: number) => {
  logger.debug('updateLiquidityStats');

  const snapshots = [];

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.liquidity = {
      xor: liquidities[XOR],
      xstusd: liquidities[XSTUSD]
    };
    snapshot.liquidityUSD = liquiditiesUSD.toFixed(2);

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};

export const updateVolumeStats = async (volumeUSD: BigNumber, blockTimestamp: number) => {
  logger.debug('updateVolumeStats');

  const snapshots = [];

  for (const type of NetworkSnapshots) {
    const snapshot = await getNetworkSnapshot(type, blockTimestamp);

    snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);

    snapshots.push(snapshot);
  }

  await Promise.all(snapshots.map(snapshot => snapshot.save()));
};
