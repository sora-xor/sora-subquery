import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from "@subql/types";
import { bytesToString } from "../../utils";
import { XOR } from '../../utils/consts';
import { isExchangeEvent } from "../../utils/events";
import { createHistoryElement, getExtrinsicNetworkFee } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from "../../utils/logs";

export async function handleAssetTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [asset, to, amount] } } = extrinsic;

  const assetId = getAssetId(asset);
  const details: any = {
    assetId,
    amount: formatU128ToBalance(amount.toString(), assetId),
    from: extrinsic.extrinsic.signer.toString(),
    to: to.toString(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function handleXorlessTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const {
    extrinsic: {
      args: [dexId, asset, receiver, amount, desiredXorAmount, maxAmountIn, selectedSources, filterMode, additionalData ]
    }
  } = extrinsic;

  const assetId = getAssetId(asset);
  const details: any = {
    assetId,
    amount: formatU128ToBalance(amount.toString(), assetId),
    from: extrinsic.extrinsic.signer.toString(),
    to: receiver.toString(),
    comment: !additionalData.isEmpty ? bytesToString((additionalData as any).unwrap()) : null,
    assetFee: '0', // fee paid in asset
    xorFee: getExtrinsicNetworkFee(extrinsic), // fee paid in XOR (by default 100% of network fee)
  };

  const exchangeEvent = extrinsic.events.find(e => isExchangeEvent(e));

  if (exchangeEvent) {
    const { event: { data: [, , , , baseAssetAmount, targetAssetAmount] } } = exchangeEvent;
    const assetSpended = formatU128ToBalance(baseAssetAmount.toString(), assetId); // formatted
    const xorReceived = formatU128ToBalance(targetAssetAmount.toString(), XOR); // formatted
    const xorSpended = new BigNumber(details.xorFee).minus(new BigNumber(xorReceived)).toString(); 

    details.assetFee = assetSpended;
    details.xorFee = xorSpended;
  }

  await createHistoryElement(extrinsic, details);
}