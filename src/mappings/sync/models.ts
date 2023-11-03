import type { SubstrateBlock } from "@subql/types";

import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolsStorage } from '../../utils/pools';
import { formatDateTimestamp } from '../../utils';
import { getSyncModelsLog } from "../../utils/logs";

const shouldUpdateAssetsStats = (blockTimestamp: number) => {
  const currentTimestamp = formatDateTimestamp(new Date());

  return currentTimestamp - blockTimestamp < 60 * 60;
}

export async function syncModels(block: SubstrateBlock): Promise<void> {
  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  getSyncModelsLog(block).debug('Sync models');

  await poolsStorage.sync(block);
  await assetSnapshotsStorage.sync(block, blockTimestamp);
  await assetStorage.sync(block);
  await networkSnapshotsStorage.sync(block, blockTimestamp);
}

export async function updateAssetsDailyStats(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Update assets daily stats');

  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  if (!shouldUpdateAssetsStats(blockTimestamp)) return;

  await assetStorage.updateDailyStats(block, blockTimestamp);
  await assetStorage.sync(block);
}

export async function updateAssetsWeeklyStats(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Update assets weekly stats');

  const blockTimestamp: number = formatDateTimestamp(block.timestamp);

  if (!shouldUpdateAssetsStats(blockTimestamp)) return;

  await assetStorage.updateWeeklyStats(block, blockTimestamp);
  await assetStorage.sync(block);
}
