import { SubstrateExtrinsic } from '@subql/types';

import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets';
import { bytesToString } from '../../utils';
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs';

export async function handleBandRateUpdate(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const {
    extrinsic: {
      args: [rates],
    },
  } = extrinsic as any;

  for (const [ticker, rate] of rates) {
    const referenceSymbol = bytesToString(ticker);
    const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol);

    if (syntheticAssetId) {
      const u64 = rate.toString();
      const u128 = u64 + '0'.repeat(9);
      const price = formatU128ToBalance(u128, syntheticAssetId);

      getCallHandlerLog(extrinsic).debug({ syntheticAssetId, price }, 'Synthetic asset price update');

      await assetSnapshotsStorage.updatePrice(extrinsic.block, syntheticAssetId, price);
    }
  }
}
