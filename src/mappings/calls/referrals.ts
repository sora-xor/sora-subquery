import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { formatU128ToBalance, getAmountUSD } from '../../utils/assets';
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { logStartProcessingCall } from "../../utils/logs";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [referrer] } } = extrinsic;

  const details: any = {
    from: extrinsic.extrinsic.signer.toString(),
    to: referrer.toString()
  };

  await createHistoryElement(extrinsic, details);
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