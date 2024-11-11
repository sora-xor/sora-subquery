import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs } from '../../utils';
import { createHistoryElement } from '../../utils/history';
import { formatU128ToBalance, getAmountUSD } from '../../utils/assets';
import { isXorTransferEvent, isReferrerRewardedEvent, getTransferEventData } from '../../utils/events';
import { XOR } from '../../utils/consts';
import { logStartProcessingCall } from '../../utils/logs';

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [referrer] = getExtrinsicArgs(extrinsic);

  const from = getExtrinsicSigner(extrinsic);
  const to = referrer.toString();

  const details: any = {
    from,
    to,
  };

  await createHistoryElement(extrinsic, details);

  const rewardedEvent = extrinsic.events.find((e) => isReferrerRewardedEvent(e));

  if (rewardedEvent && from !== to) {
    await createHistoryElement(rewardedEvent as any, details, { address: to, useStats: false });
  }
}

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [amount] = getExtrinsicArgs(extrinsic);

  const details: any = {
    amount: formatU128ToBalance(amount.toString(), XOR),
  };

  const referralReserveEvent = extrinsic.events.find((e) => isXorTransferEvent(e));

  if (referralReserveEvent) {
    const { from, to, amount: assetAmount } = getTransferEventData(referralReserveEvent);

    const assetId = XOR;
    const amount = formatU128ToBalance(assetAmount, assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.from = from;
    details.to = to;
    details.amount = amount;
    details.amountUSD = amountUSD;
  }

  await createHistoryElement(extrinsic, details);
}
