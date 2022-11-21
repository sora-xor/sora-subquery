import { SubstrateBlock } from "@subql/types";
import { SnapshotType } from "../types";

import { getNetworkSnapshot, NetworkSnapshots } from '../utils/network';
import { SnapshotSecondsMap, SECONDS_IN_BLOCK } from '../utils/consts';

// Hourly interval
const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.HOUR] / SECONDS_IN_BLOCK;

export async function createNetworkSnapshots(block: SubstrateBlock): Promise<void> {
  const blockNumber = block.block.header.number.toNumber();
  const shouldSync = blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

  if (!shouldSync) return;

  const blockTimestamp = parseInt(((block.timestamp).getTime() / 1000).toFixed(0));

  // create new snapshots for HOUR & DAY intervals
  for (const type of NetworkSnapshots) {
    const networkSnapshot = await getNetworkSnapshot(type, blockTimestamp, blockNumber);

    await networkSnapshot.save();
  }
}