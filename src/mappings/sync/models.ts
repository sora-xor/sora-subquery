import type { SubstrateBlock } from '@subql/types';

import { accountMetaStorage } from '../../utils/account';
import { accountLiquidityStorage, accountLiquiditySnapshotsStorage } from '../../utils/accountLiquidity';
import { assetSnapshotsStorage, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage, networkStatsStorage } from '../../utils/network';
import { orderBooksStorage, orderBooksSnapshotsStorage } from '../../utils/orderBook';
import { poolsStorage, poolsSnapshotsStorage } from '../../utils/pools';
import { shouldUpdate } from '../../utils';
import { getSyncModelsLog } from '../../utils/logs';

const STATS_UPDATE_DIFF = 60 * 60; // seconds

export async function syncAssets(block: SubstrateBlock): Promise<void> {
  await assetSnapshotsStorage.sync(block);
  await assetStorage.sync(block);
}

export async function syncOrderBooks(block: SubstrateBlock): Promise<void> {
  await orderBooksSnapshotsStorage.sync(block);
  await orderBooksStorage.sync(block);
}

export async function syncPools(block: SubstrateBlock): Promise<void> {
  await poolsSnapshotsStorage.sync(block);
  await poolsStorage.sync(block);
}

export async function syncAccountLiquidities(block: SubstrateBlock): Promise<void> {
  await accountLiquiditySnapshotsStorage.sync(block);
  await accountLiquidityStorage.sync(block);
}

export async function syncAccountMeta(block: SubstrateBlock): Promise<void> {
  await accountMetaStorage.sync(block);
}

export async function updateNetworkStats(block: SubstrateBlock): Promise<void> {
  getSyncModelsLog(block).debug('Update network stats');

  await networkSnapshotsStorage.updateLiquidityStats(block);
  await networkSnapshotsStorage.sync(block);
  await networkStatsStorage.sync(block);
}

export async function updateDailyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdate(block, STATS_UPDATE_DIFF)) return;

  getSyncModelsLog(block).debug('Update daily stats');

  await assetSnapshotsStorage.updateDailyStats(block);
  await orderBooksSnapshotsStorage.updateDailyStats(block);
}

export async function updateAssetsWeeklyStats(block: SubstrateBlock): Promise<void> {
  if (!shouldUpdate(block, STATS_UPDATE_DIFF)) return;

  getSyncModelsLog(block).debug('Update assets weekly stats');

  await assetSnapshotsStorage.updateWeeklyStats(block);
}
