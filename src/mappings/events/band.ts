import { SubstrateEvent } from "@subql/types";

import { tickerSyntheticAssetId, assetSnapshotsStorage, getTickerSymbol, formatU128ToBalance } from '../../utils/assets';
import { formatDateTimestamp } from '../../utils';

export async function handleBandRateUpdate(event: SubstrateEvent): Promise<void> {
  const { event: { data } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);

  for (const eventItem of data) {
    const [ticker, rate] = eventItem as any;
    const referenceSymbol = getTickerSymbol(ticker);
    const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol);
    const price = formatU128ToBalance(rate.toString(), syntheticAssetId);

    await assetSnapshotsStorage.updatePrice(syntheticAssetId, price, blockTimestamp);
  }
}