import { SubstrateEvent } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage, getTickerSymbol, tickerSyntheticAssetId } from '../../utils/assets';
import { logEventHandler } from "../../utils/logs";

export async function handleAssetRegistration(event: SubstrateEvent): Promise<void> {
  logEventHandler(event);
  
  const { event: { data: [asset] } } = event;

  const assetId: string = getAssetId(asset);

  if (!assetPrecisions.has(assetId)) {
    const [, , precision,] = await api.query.assets.assetInfos(assetId) as any;
    assetPrecisions.set(assetId, precision.toNumber());
  }

  await assetStorage.getAsset(assetId);
}

export async function handleSyntheticAssetEnabled(event: SubstrateEvent): Promise<void> {
  logEventHandler(event);
  
  const { event: { data: [asset, ticker] } } = event;

  const assetId: string = getAssetId(asset);
  const referenceSymbol = getTickerSymbol(ticker);

  tickerSyntheticAssetId.set(referenceSymbol, assetId);
  // synthetic assets always have 18 decimals
  assetPrecisions.set(assetId, 18);

  logger.debug(`Synthetic asset enabled ${assetId}, referenceSymbol ${referenceSymbol}`);

  await assetStorage.getAsset(assetId);
}
