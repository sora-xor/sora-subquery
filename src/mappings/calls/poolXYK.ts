import { SubstrateExtrinsic } from '@subql/types';

import { getExtrinsicSigner } from '../../utils';
import { createHistoryElement } from "../../utils/history";
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { isAssetTransferEvent } from '../../utils/events';
import { updatePoolLiquidity } from '../../utils/pools';
import { logStartProcessingCall } from '../../utils/logs';

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [, assetAId, assetBId, assetADesired, assetBDesired] } } = extrinsic;

  const baseAssetId = getAssetId(assetAId);
  const targetAssetId = getAssetId(assetBId);

  const details: any = {
    type: "Deposit",
    baseAssetId,
    targetAssetId,
    baseAssetAmount: formatU128ToBalance(assetADesired.toString(), baseAssetId),
    targetAssetAmount: formatU128ToBalance(assetBDesired.toString(), targetAssetId)
  };

  const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

  if (transfers.length === 2) {
    const [baseAssetTransfer, targetAssetTransfer] = transfers;

    const [amountA] = baseAssetTransfer.event.data.slice().reverse();
    const [amountB] = targetAssetTransfer.event.data.slice().reverse();

    details.baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
    details.targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);
  }

  details.baseAssetAmountUSD = await getAmountUSD(extrinsic.block, details.baseAssetId, details.baseAssetAmount);
  details.targetAssetAmountUSD = await getAmountUSD(extrinsic.block, details.targetAssetId, details.targetAssetAmount);

  await updatePoolLiquidity(extrinsic.block, baseAssetId, targetAssetId, getExtrinsicSigner(extrinsic));

  await createHistoryElement(extrinsic, details);
}

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [dexId, assetAId, assetBId, poolTokensDesired, outputAMin, outputBMin] } } = extrinsic;

  const baseAssetId = getAssetId(assetAId);
  const targetAssetId = getAssetId(assetBId);

  const details: any = {
    type: "Removal",
    baseAssetId,
    targetAssetId,
    baseAssetAmount: formatU128ToBalance(outputAMin.toString(), baseAssetId),
    targetAssetAmount: formatU128ToBalance(outputBMin.toString(), targetAssetId)
  };

  const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

  if (transfers.length === 2) {
    const [baseAssetTransfer, targetAssetTransfer] = transfers;

    const [amountA] = baseAssetTransfer.event.data.slice().reverse();
    const [amountB] = targetAssetTransfer.event.data.slice().reverse();

    details.baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
    details.targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);
  }

  details.baseAssetAmountUSD = await getAmountUSD(extrinsic.block, details.baseAssetId, details.baseAssetAmount);
  details.targetAssetAmountUSD = await getAmountUSD(extrinsic.block, details.targetAssetId, details.targetAssetAmount);

  await updatePoolLiquidity(extrinsic.block, baseAssetId, targetAssetId, getExtrinsicSigner(extrinsic));

  await createHistoryElement(extrinsic, details);
}
