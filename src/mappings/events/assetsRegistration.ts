import { SubstrateBlock, SubstrateEvent } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage, getTickerSymbol, tickerSyntheticAssetId } from '../../utils/assets';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function handleAssetRegistration(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);
  
  const { event: { data: [asset] } } = event;

  const assetId: string = getAssetId(asset);

  if (!assetPrecisions.has(assetId)) {
    const [, , precision,] = await api.query.assets.assetInfos(assetId) as any;
    assetPrecisions.set(assetId, precision.toNumber());
  }

  await assetStorage.getAsset(event.block, assetId);
}

export async function handleSyntheticAssetEnabled(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);
  
  const { event: { data: [asset, ticker] } } = event;

  const assetId: string = getAssetId(asset);
  const referenceSymbol = getTickerSymbol(ticker);

  tickerSyntheticAssetId.set(referenceSymbol, assetId);
  // synthetic assets always have 18 decimals
  assetPrecisions.set(assetId, 18);

  getEventHandlerLog(event).debug({ assetId, referenceSymbol }, 'Synthetic asset enabled')

  await assetStorage.getAsset(event.block, assetId);
}
