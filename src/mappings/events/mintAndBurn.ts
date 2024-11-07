import { SubstrateEvent } from '@subql/types';
import { getBlockNumber } from '../../utils';
import { getAssetId, assetSnapshotsStorage } from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { getEventData } from '../../utils/events';
import { logStartProcessingEvent } from '../../utils/logs';
import { initializedAtBlock } from '../models/initializePools';

export async function handleTokenBurn(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  if (initializedAtBlock === getBlockNumber(event.block)) {
    return;
  }

  const [balance, who, currencyId] = getEventData(event, true);

  const assetId = currencyId ? getAssetId(currencyId) : XOR;
  const amount = BigInt(balance.toString());

  await assetSnapshotsStorage.updateBurned(event.block, assetId, amount);
}

export async function handleTokenMint(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  if (initializedAtBlock === getBlockNumber(event.block)) {
    return;
  }

  const [balance, who, currencyId] = getEventData(event, true);

  const assetId = currencyId ? getAssetId(currencyId) : XOR;
  const amount = BigInt(balance.toString());

  await assetSnapshotsStorage.updateMinted(event.block, assetId, amount);
}
