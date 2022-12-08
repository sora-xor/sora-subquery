import { SubstrateBlock, SubstrateEvent } from "@subql/types";

import { NetworkSnapshots, networkSnapshotsStorage } from '../utils/network';
import { formatDateTimestamp } from '../utils';

export async function createNetworkSnapshots(block: SubstrateBlock): Promise<void> {
  const blockTimestamp = formatDateTimestamp(block.timestamp);

  // create new snapshots for HOUR & DAY intervals
  for (const type of NetworkSnapshots) {
    const networkSnapshot = await networkSnapshotsStorage.getSnapshot(type, blockTimestamp);

    await networkSnapshot.save();
  }
}

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  const { event: { data: [account, fee] } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);
  const formattedFee = BigInt(fee.toString());

  await networkSnapshotsStorage.updateFeesStats(formattedFee, blockTimestamp);
}