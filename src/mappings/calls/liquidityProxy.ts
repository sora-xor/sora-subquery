import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from '@subql/types';

import { bytesToString, getExtrinsicSigner } from "../../utils";
import { isExchangeEvent } from '../../utils/events';
import { createHistoryElement } from "../../utils/history";
import { getAssetId, getAmountUSD, formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolsSnapshotsStorage } from '../../utils/pools';
import { XOR } from '../../utils/consts';
import { logStartProcessingCall } from '../../utils/logs';

import type { Vec } from "@polkadot/types";
import type { Enum, Struct } from "@polkadot/types/codec";
import type { Balance } from "@polkadot/types/interfaces/runtime"

interface SwapAmount extends Enum {
  readonly isWithDesiredInput: boolean;
  readonly asWithDesiredInput: SwapWithDesiredInput;
  readonly isWithDesiredOutput: boolean;
  readonly asWithDesiredOutput: SwapWithDesiredOutput;
}

/** @name SwapWithDesiredInput */
export interface SwapWithDesiredInput extends Struct {
  readonly desiredAmountIn: Balance;
  readonly minAmountOut: Balance;
}

/** @name SwapWithDesiredOutput */
export interface SwapWithDesiredOutput extends Struct {
  readonly desiredAmountOut: Balance;
  readonly maxAmountIn: Balance;
}

/** @name LiquiditySourceType */
export interface LiquiditySourceType extends Enum {
  readonly isXykPool: boolean;
  readonly isBondingCurvePool: boolean;
  readonly isMulticollateralBondingCurvePool: boolean;
  readonly isMockPool: boolean;
  readonly isMockPool2: boolean;
  readonly isMockPool3: boolean;
  readonly isMockPool4: boolean;
}

const getEventData = (extrinsic: SubstrateExtrinsic, method: string, section: string) => {
  const event = extrinsic.events.find(e => e.event.method === method && e.event.section === section);
  return event?.event?.data;
}

const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: string): string[] => {
  switch (swapAmount.isWithDesiredOutput) {
    case true: {
      return [
        formatU128ToBalance(swapAmount.asWithDesiredOutput.maxAmountIn.toString(), assetId),
        formatU128ToBalance(swapAmount.asWithDesiredOutput.desiredAmountOut.toString(), assetId)
      ];
    }
    case false: {
      return [
        formatU128ToBalance(swapAmount.asWithDesiredInput.desiredAmountIn.toString(), assetId),
        formatU128ToBalance(swapAmount.asWithDesiredInput.minAmountOut.toString(), assetId)
      ];
    }
  }
}

const handleAndSaveSwapExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
  const [filterMode, liquiditySources, swapAmount, targetAsset, baseAsset, dexId, to] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};
  const baseAssetId = getAssetId(baseAsset);
  const targetAssetId = getAssetId(targetAsset);

  details.baseAssetId = baseAssetId;
  details.targetAssetId = targetAssetId;
  details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();
  details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId)[0];
  details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId)[1];

  if (to) {
    details.to = to.toString()
  }

  const exchangeEvent = extrinsic.events.find(e => isExchangeEvent(e));

  if (exchangeEvent) {
    const { event: { data: [, , , , baseAssetAmount, targetAssetAmount] } } = exchangeEvent;

    details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId);
    details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId);
  }

  details.baseAssetAmountUSD = await getAmountUSD(extrinsic.block, details.baseAssetId, details.baseAssetAmount);
  details.targetAssetAmountUSD = await getAmountUSD(extrinsic.block, details.targetAssetId, details.targetAssetAmount);

  if (exchangeEvent) {
    // update assets volume
    const aVolumeUSD = await assetSnapshotsStorage.updateVolume(extrinsic.block, baseAssetId, details.baseAssetAmount);
    const bVolumeUSD = await assetSnapshotsStorage.updateVolume(extrinsic.block, targetAssetId, details.targetAssetAmount);
    // get the minimal volume (sell\buy)
    const volumeUSD = BigNumber.min(aVolumeUSD, bVolumeUSD);

    await networkSnapshotsStorage.updateVolumeStats(extrinsic.block, volumeUSD);
  }

  await createHistoryElement(extrinsic, details);
}

const handleAndSaveBatchExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise <void> => {
  const [swapBatches, inputAsset, maxInputAmount, liquiditySources, filterMode, additionalData] = extrinsic.extrinsic.args.slice();

  const inputAssetId = getAssetId(inputAsset);
  const extrinsicSigner = getExtrinsicSigner(extrinsic);

  const details: any = {};

  details.assetId = inputAssetId;
  details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();
  details.maxInputAmount = formatU128ToBalance(maxInputAmount.toString(), inputAssetId);
  details.from = extrinsicSigner;
  details.receivers = [];
  details.comment = !!additionalData && !additionalData.isEmpty ? bytesToString((additionalData as any).unwrap()) : null;

  // fill receivers with assetId and amount
  for (const swapBatchInfo of (swapBatches as any)) {
    const assetId = getAssetId(swapBatchInfo.outcomeAssetId);

    for (const receiverInfo of swapBatchInfo.receivers) {
      const amount = formatU128ToBalance(receiverInfo.targetAmount.toString(), assetId);
      const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

      details.receivers.push({
        assetId,
        amount,
        amountUSD,
        accountId: receiverInfo.accountId.toString(),
      });
    }
  }

  const batchSwapExecutedEvent = getEventData(extrinsic, 'BatchSwapExecuted', 'liquidityProxy');
  if (batchSwapExecutedEvent) {
    const [adarFee, inputAmount] = batchSwapExecutedEvent;
    details.adarFee = formatU128ToBalance(adarFee.toString(), inputAssetId);
    details.inputAmount = formatU128ToBalance(inputAmount.toString(), inputAssetId);
  }

  const transactionFeePaidEvent = getEventData(extrinsic, 'TransactionFeePaid', 'transactionPayment');
  if (transactionFeePaidEvent) {
    const [, actualFee] = transactionFeePaidEvent;
    details.actualFee = formatU128ToBalance(actualFee.toString(), XOR);
  }

  const assetTransferEvents = extrinsic.events.filter(e => e.event.method === 'Transfer' && e.event.section === 'assets');
  const receiverIds = details.receivers.map((receiver) => receiver.accountId);

  for (const assetTransferEvent of assetTransferEvents) {
    const { event: { data: [from, to, asset, amountCodec] } } = assetTransferEvent;
    const sender = from.toString();
    const receiver = to.toString();
    // if technical transfer, skip
    if (!(sender === extrinsicSigner && receiverIds.includes(receiver))) continue;

    const assetId =  getAssetId(asset);
    const amount = formatU128ToBalance(amountCodec.toString(), assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    const transfer = {
      assetId,
      amount,
      amountUSD,
      from: sender,
      to: receiver,
    };

    // create history element for receiver
    await createHistoryElement(assetTransferEvent as any, transfer, { address: receiver, useStats: false });
  }

  await createHistoryElement(extrinsic, details);
}

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  await handleAndSaveSwapExtrinsic(extrinsic);
  await poolsSnapshotsStorage.processSwap(extrinsic);
}

export async function handleSwapTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  await handleAndSaveSwapExtrinsic(extrinsic);
  await poolsSnapshotsStorage.processSwap(extrinsic);
}

export async function handleSwapTransferBatch(extrinsic: SubstrateExtrinsic): Promise <void> {
  logStartProcessingCall(extrinsic);

  await handleAndSaveBatchExtrinsic(extrinsic);
  await poolsSnapshotsStorage.processSwap(extrinsic);
}