import { SubstrateBlock, SubstrateEvent } from "@subql/types";
import { SnapshotType } from "../types";

import { getNetworkSnapshot, NetworkSnapshots, updateFeesStats, NetworkStatsSync } from '../utils/network';
import { SnapshotSecondsMap, SECONDS_IN_BLOCK } from '../utils/consts';
import { formatDateTimestamp } from '../utils';

// Hourly interval
const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.HOUR] / SECONDS_IN_BLOCK;

export async function createNetworkSnapshots(block: SubstrateBlock): Promise<void> {
  const blockNumber = block.block.header.number.toNumber();
  const shouldSync = NetworkStatsSync.get() || blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

  if (!shouldSync) return;

  const blockTimestamp = formatDateTimestamp(block.timestamp);

  // create new snapshots for HOUR & DAY intervals
  for (const type of NetworkSnapshots) {
    const networkSnapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    await networkSnapshot.save();
  }

  NetworkStatsSync.set(false);
}

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  const { event: { data: [account, fee] } } = event;
  const blockNumber = event.block.block.header.number.toNumber();
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);
  const formattedFee = BigInt(fee.toString());

  await updateFeesStats(formattedFee, blockTimestamp, blockNumber);
}