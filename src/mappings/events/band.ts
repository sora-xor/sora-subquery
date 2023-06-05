import { SubstrateEvent } from "@subql/types";

import { tickerSyntheticAssetId, assetSnapshotsStorage, getTickerSymbol, formatU128ToBalance } from '../../utils/assets';
import { formatDateTimestamp } from '../../utils';

export async function handleBandRateUpdate(event: SubstrateEvent): Promise<void> {
  const { event: { data } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);

  for (const vec of data) {
    for (const [ticker, rate] of vec as any) {
      const referenceSymbol = getTickerSymbol(ticker);
      const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol);

      if (syntheticAssetId) {
        const price = formatU128ToBalance(rate.toString(), syntheticAssetId);

        logger.debug(`Synthetic asset price update ${syntheticAssetId}: ${price}`);

        await assetSnapshotsStorage.updatePrice(syntheticAssetId, price, blockTimestamp);
      }
    }
  }
}