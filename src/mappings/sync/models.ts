import type { SubstrateBlock } from "@subql/types";

import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { orderBooksStorage, orderBooksSnapshotsStorage } from '../../utils/orderBook';
import { poolsStorage } from '../../utils/pools';
import { shouldUpdate } from '../../utils';
import { getSyncModelsLog } from "../../utils/logs";

const STATS_UPDATE_DIFF = 60 * 60; // seconds

export async function syncModels(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Sync models');

  await poolsStorage.sync(block);
  await assetSnapshotsStorage.sync(block);
  await assetStorage.sync(block);
  await orderBooksSnapshotsStorage.sync(block);
  await orderBooksStorage.sync(block);
}

export async function updateNetworkStats(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Update network stats');

  await networkSnapshotsStorage.updateLiquidityStats(block);
  await networkSnapshotsStorage.sync(block);
}

export async function updateDailyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdate(block, STATS_UPDATE_DIFF)) return;

  getSyncModelsLog(block).debug('Update daily stats');

  await assetStorage.updateDailyStats(block);
  await orderBooksStorage.updateDailyStats(block);
}

export async function updateAssetsWeeklyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdate(block, STATS_UPDATE_DIFF)) return;

  getSyncModelsLog(block).debug('Update assets weekly stats');

  await assetStorage.updateWeeklyStats(block);
}
