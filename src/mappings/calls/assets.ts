import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from "@subql/types";
import { bytesToString, getExtrinsicSigner } from "../../utils";
import { XOR } from '../../utils/consts';
import { isExchangeEvent } from "../../utils/events";
import { createHistoryElement, getExtrinsicNetworkFee } from "../../utils/history";
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { accountMetaStorage } from '../../utils/account';
import { logStartProcessingCall } from "../../utils/logs";

export async function assetRegistrationHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [symbol] } } = extrinsic;

  const details: any = {
    assetId: symbol.toHuman()
  };

  const assetRegistrationEvent = extrinsic.events.find(e => e.event.method === 'AssetRegistered');

  if (assetRegistrationEvent) {
    const { event: { data: [asset] } } = assetRegistrationEvent;

    const assetId: string = getAssetId(asset);

    details.assetId = assetId;
  }

  await createHistoryElement(extrinsic, details);
}

export async function assetBurnHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [assetCodec, amountCodec] } } = extrinsic;

  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
  };

  await createHistoryElement(extrinsic, details);

  if (assetId === XOR) {
    await accountMetaStorage.updateBurned(
      extrinsic.block,
      getExtrinsicSigner(extrinsic),
      amount,
      amountUSD,
    );
  }
}

export async function assetMintHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [assetCodec, receiver, amountCodec] } } = extrinsic;

  const from = getExtrinsicSigner(extrinsic);
  const to = receiver.toString();
  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
    from,
    to,
  };

  await createHistoryElement(extrinsic, details, { address: from });

  if (from !== to) {
    await createHistoryElement(extrinsic, details, { address: to, useStats: false });
  }
}

export async function handleAssetTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [assetCodec, receiver, amountCodec] } } = extrinsic;

  const from = getExtrinsicSigner(extrinsic);
  const to = receiver.toString();
  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
    from,
    to,
  };

  await createHistoryElement(extrinsic, details, { address: from });

  if (from !== to) {
    await createHistoryElement(extrinsic, details, { address: to, useStats: false });
  }
}

export async function handleXorlessTransfer(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const {
    extrinsic: {
      args: [dexId, assetCodec, receiver, amountCodec, desiredXorAmount, maxAmountIn, selectedSources, filterMode, additionalData ]
    }
  } = extrinsic;

  const from = getExtrinsicSigner(extrinsic);
  const to = receiver.toString();
  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
    from,
    to,
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

  await createHistoryElement(extrinsic, details, { address: from });

  if (from !== to) {
    await createHistoryElement(extrinsic, details, { address: to, useStats: false });
  }
}