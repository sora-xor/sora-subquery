import { SubstrateExtrinsic } from '@subql/types';

import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { isAssetTransferEvent } from '../../utils/events';
import { poolsStorage, accountLiquiditySnapshotsStorage } from '../../utils/pools';
import { logStartProcessingCall } from '../../utils/logs';

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [, assetAId, assetBId, assetADesired, assetBDesired] } } = extrinsic;

  const baseAssetId = getAssetId(assetAId);
  const targetAssetId = getAssetId(assetBId);

  const details = {
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

  const pool = await poolsStorage.getPool(extrinsic.block, baseAssetId, targetAssetId);
  await accountLiquiditySnapshotsStorage.syncPoolTokens(extrinsic.block, extrinsic.extrinsic.signer.toString(), pool.id);

  await createHistoryElement(extrinsic, details);
}

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [dexId, assetAId, assetBId, poolTokensDesired, outputAMin, outputBMin] } } = extrinsic;

  const baseAssetId = getAssetId(assetAId);
  const targetAssetId = getAssetId(assetBId);

  const details = {
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

  const pool = await poolsStorage.getPool(extrinsic.block, baseAssetId, targetAssetId);
  await accountLiquiditySnapshotsStorage.syncPoolTokens(extrinsic.block, extrinsic.extrinsic.signer.toString(), pool.id);

  await createHistoryElement(extrinsic, details);
}
