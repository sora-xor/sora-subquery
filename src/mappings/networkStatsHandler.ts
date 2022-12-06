import { SubstrateBlock, SubstrateEvent } from "@subql/types";
import { SnapshotType } from "../types";

import { getNetworkSnapshot, NetworkSnapshots, updateFeesStats } from '../utils/network';
import { SnapshotSecondsMap, SECONDS_IN_BLOCK } from '../utils/consts';
import { formatDateTimestamp } from '../utils';

// Hourly interval
const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.HOUR] / SECONDS_IN_BLOCK;

export async function createNetworkSnapshots(block: SubstrateBlock): Promise<void> {
  const blockNumber = block.block.header.number.toNumber();
  const shouldSync = blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

  if (!shouldSync) return;

  const blockTimestamp = formatDateTimestamp(block.timestamp);

  // create new snapshots for HOUR & DAY intervals
  for (const type of NetworkSnapshots) {
    const networkSnapshot = await getNetworkSnapshot(type, blockTimestamp);

    await networkSnapshot.save();
  }
}

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  const { event: { data: [account, fee] } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);
  const formattedFee = BigInt(fee.toString());

  await updateFeesStats(formattedFee, blockTimestamp);
}