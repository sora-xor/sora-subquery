import { SubstrateExtrinsic } from '@subql/types';

import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { poolsStorage } from '../../utils/pools';
import { isAssetTransferEvent } from '../../utils/events';
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

    await poolsStorage.getPool(extrinsic.block, baseAssetId, targetAssetId);

    await createHistoryElement(extrinsic, details);
}
