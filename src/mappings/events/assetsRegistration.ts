import { SubstrateEvent } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage, tickerSyntheticAssetId } from '../../utils/assets';
import { bytesToString } from '../../utils';
import { getEventData } from '../../utils/events';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";
import { assetRegistrationStream } from '../../utils/stream';

export async function handleAssetRegistration(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const [asset] = getEventData(event);

  const assetId: string = getAssetId(asset);
  const [symbol, name, decimals, _isMintable, content, description] = (await api.query.assets.assetInfos(assetId)).toHuman() as any;

  if (!assetPrecisions.has(assetId)) {
    assetPrecisions.set(assetId, Number(decimals));
  }

  const assetData = { address: assetId, symbol, name, decimals, content, description };

  assetRegistrationStream.update(assetId, JSON.stringify(assetData));

  await assetStorage.getEntity(event.block, assetId);
}

export async function handleSyntheticAssetEnabled(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const [asset, ticker] = getEventData(event);

  const assetId: string = getAssetId(asset);
  const referenceSymbol = bytesToString(ticker);

  tickerSyntheticAssetId.set(referenceSymbol, assetId);
  // synthetic assets always have 18 decimals
  assetPrecisions.set(assetId, 18);

  getEventHandlerLog(event).debug({ assetId, referenceSymbol }, 'Synthetic asset enabled')

  await assetStorage.getEntity(event.block, assetId);
}
