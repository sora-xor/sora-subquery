import { SubstrateBlock } from "@subql/types";
import { SnapshotType } from "../types";

import { SnapshotSecondsMap, SECONDS_IN_BLOCK } from '../utils/consts';

const NEW_SNAPSHOTS_INTERVAL = SnapshotSecondsMap[SnapshotType.HOUR] / SECONDS_IN_BLOCK;

export async function syncNetworkStats(block: SubstrateBlock): Promise<void> {
    const blockNumber = block.block.header.number.toNumber();
    const shouldSync = blockNumber % NEW_SNAPSHOTS_INTERVAL === 0;

    if (!shouldSync) return;
}