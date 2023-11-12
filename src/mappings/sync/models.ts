import type { SubstrateBlock } from "@subql/types";

import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { orderBooksStorage, orderBooksSnapshotsStorage } from '../../utils/orderBook';
import { poolsStorage } from '../../utils/pools';
import { formatDateTimestamp } from '../../utils';
import { getSyncModelsLog } from "../../utils/logs";

const shouldUpdateAssetsStats = (block: SubstrateBlock) => {
  const blockTimestamp = formatDateTimestamp(block.timestamp);
  const currentTimestamp = formatDateTimestamp(new Date());

  return currentTimestamp - blockTimestamp < 60 * 60;
}

export async function syncModels(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Sync models');

  await poolsStorage.sync(block);
  await assetSnapshotsStorage.sync(block);
  await assetStorage.sync(block);
  await orderBooksSnapshotsStorage.sync(block);
  await orderBooksStorage.sync(block);
  await networkSnapshotsStorage.sync(block);
}

export async function updateAssetsDailyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdateAssetsStats(block)) return;

  getSyncModelsLog(block).debug('Update assets daily stats');

  await assetStorage.updateDailyStats(block);
  await assetStorage.sync(block);
}

export async function updateAssetsWeeklyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdateAssetsStats(block)) return;

  getSyncModelsLog(block).debug('Update assets weekly stats');

  await assetStorage.updateWeeklyStats(block);
  await assetStorage.sync(block);
}
