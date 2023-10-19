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
    comment: bytesToString(additionalData),
    assetFee: '0', // paid for fee in asset
    xorFee: '0', // paid for fee in XOR
  };

  if (record.execution.success) {
    const exchangeEvent = extrinsic.events.find(e => isExchangeEvent(e));

    if (exchangeEvent) {
      const { event: { data: [, , , , baseAssetAmount, targetAssetAmount] } } = exchangeEvent;
      const assetFee = formatU128ToBalance(baseAssetAmount.toString(), assetId); // formatted
      const xorNetworkFee = record.networkFee; // already formatted
      const xorConverted = formatU128ToBalance(targetAssetAmount.toString(), XOR); // formatted
      const xorFee = new BigNumber(xorNetworkFee).minus(new BigNumber(xorConverted)).toString(); 

      details.assetFee = assetFee;
      details.xorFee = xorFee;
    }
  }

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved xorless transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}