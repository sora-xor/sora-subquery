import { SubstrateExtrinsic } from '@subql/types';
import { getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { createHistoryElement } from '../../utils/history';
import { isAssetTransferEvent, getTransferEventData } from '../../utils/events';
import { logStartProcessingCall } from '../../utils/logs';

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = [];

  for (const e of extrinsic.events) {
    if (!isAssetTransferEvent(e)) continue;

    const { assetId, amount: amountData } = getTransferEventData(e);
    const amount = formatU128ToBalance(amountData, assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);
    details.push({
      assetId,
      amount,
      amountUSD,
    });
  }

  await createHistoryElement(extrinsic, details);
}
