import { SubstrateExtrinsic } from "@subql/types";
import { getExtrinsicSigner } from '../../utils';
import { createHistoryElement } from "../../utils/history";
import { formatU128ToBalance, getAmountUSD } from '../../utils/assets';
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { logStartProcessingCall } from "../../utils/logs";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [referrer] } } = extrinsic;

  const from = getExtrinsicSigner(extrinsic);
  const to = referrer.toString();

  const details: any = {
    from,
    to,
  };

  await createHistoryElement(extrinsic, details);

  if (from !== to) {
    await createHistoryElement(extrinsic, details, { address: to, useStats: false });
  }
}

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [amount] } } = extrinsic;

  const details: any = {
    amount: formatU128ToBalance(amount.toString(), XOR)
  };

  const referralReserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));

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