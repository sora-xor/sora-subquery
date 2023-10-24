import type { SubstrateBlock } from "@subql/types";

import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolsStorage } from '../../utils/pools';
import { formatDateTimestamp } from '../../utils';

export async function syncModels(block: SubstrateBlock): Promise<void> {
  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  await poolsStorage.sync();
  await assetStorage.sync();
  await assetSnapshotsStorage.sync(blockTimestamp);
  await networkSnapshotsStorage.sync(blockTimestamp);
}
