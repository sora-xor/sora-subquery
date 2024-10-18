import { SubstrateExtrinsic } from "@subql/types";

import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets';
import { bytesToString } from '../../utils';
import { BASE_ASSETS } from '../../utils/consts';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";
import { poolAccounts } from '../../utils/pools';
import { isPriceV2 } from "../../utils/price";

export async function handleBandRateUpdate(extrinsic: SubstrateExtrinsic): Promise<void> {
  const blockNumber = extrinsic.block.block.header.number.toNumber();

  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [rates] } } = extrinsic as any;

  for (const [ticker, rate] of rates) {
    const referenceSymbol = bytesToString(ticker);
    const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol);

    if (!syntheticAssetId) continue;

    let price = '0';

    if (isPriceV2(blockNumber)) {
      const hasPool = BASE_ASSETS.some((baseAssetId) => {
        return !!poolAccounts.getMap(baseAssetId)?.has(syntheticAssetId);
      });
      // the price must be updated from pool reserves, otherwise it will be zero.
      if (hasPool) return;
    } else {
      const u64 = rate.toString();
      const u128 = u64 + '0'.repeat(9);
      price = formatU128ToBalance(u128, syntheticAssetId);
    }

    await assetSnapshotsStorage.updatePrice(extrinsic.block, syntheticAssetId, price);

    getCallHandlerLog(extrinsic).debug({ syntheticAssetId, price }, 'Synthetic asset price update')
  }
}