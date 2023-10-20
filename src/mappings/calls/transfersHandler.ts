import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from "@subql/types";
import { bytesToString } from "../../utils";
import { XOR } from '../../utils/consts';
import { isExchangeEvent } from "../../utils/events";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';

export async function handleAssetTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught asset transfer extrinsic")

  const { extrinsic: { args: [asset, to, amount] } } = extrinsic;

  const record = assignCommonHistoryElemInfo(extrinsic);
  const assetId = getAssetId(asset);
  const details: any = {
    assetId,
    amount: formatU128ToBalance(amount.toString(), assetId),
    from: extrinsic.extrinsic.signer.toString(),
    to: to.toString(),
  };

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved asset transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function handleXorlessTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught xorless transfer extrinsic");

  const {
    extrinsic: {
      args: [dexId, asset, receiver, amount, desiredXorAmount, maxAmountIn, selectedSources, filterMode, additionalData ]
    }
  } = extrinsic;

  const record = assignCommonHistoryElemInfo(extrinsic);
  const assetId = getAssetId(asset);
  const details: any = {
    assetId,
    amount: formatU128ToBalance(amount.toString(), assetId),
    from: extrinsic.extrinsic.signer.toString(),
    to: receiver.toString(),
    comment: !additionalData.isEmpty ? bytesToString((additionalData as any).unwrap()) : null,
    assetFee: '0', // fee paid in asset
    xorFee: record.networkFee, // fee paid in XOR (by default 100% of network fee)
  };

  if (record.execution.success) {
    const exchangeEvent = extrinsic.events.find(e => isExchangeEvent(e));

    if (exchangeEvent) {
      const { event: { data: [, , , , baseAssetAmount, targetAssetAmount] } } = exchangeEvent;
      const assetSpended = formatU128ToBalance(baseAssetAmount.toString(), assetId); // formatted
      const xorReceived = formatU128ToBalance(targetAssetAmount.toString(), XOR); // formatted
      const xorSpended = new BigNumber(details.xorFee).minus(new BigNumber(xorReceived)).toString(); 

      details.assetFee = assetSpended;
      details.xorFee = xorSpended;
    }
  }

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved xorless transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}