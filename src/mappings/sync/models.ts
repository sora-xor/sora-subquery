import type { SubstrateBlock } from "@subql/types";

import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolsStorage } from '../../utils/pools';
import { formatDateTimestamp } from '../../utils';

export async function syncModels(block: SubstrateBlock): Promise<void> {
  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  const blockNumber = block.block.header.number.toNumber();
  logger.debug(`[${blockNumber}] Sync models`);

  await poolsStorage.sync();
  await assetSnapshotsStorage.sync(blockTimestamp);
  await assetStorage.sync();
  await networkSnapshotsStorage.sync(blockTimestamp);
}

export async function updateAssetsDailyStats(block: SubstrateBlock): Promise<void> {
  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  await assetStorage.updateDailyStats(blockTimestamp);
  await assetStorage.sync();
}

export async function updateAssetsWeeklyStats(block: SubstrateBlock): Promise<void> {
  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  await assetStorage.updateWeeklyStats(blockTimestamp);
  await assetStorage.sync();
}
