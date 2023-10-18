import { SubstrateExtrinsic } from '@subql/types';

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { isAssetTransferEvent } from '../../utils/events';
import { poolsStorage } from '../../utils/pools';
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs';

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic)

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

    if (record.execution.success) {

        const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers;

            const [amountA] = baseAssetTransfer.event.data.slice().reverse();
            const [amountB] = targetAssetTransfer.event.data.slice().reverse();

            details.baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
            details.targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);
        }
    }

    record.data = details as any;

    await record.save();

    getCallHandlerLog(extrinsic).debug(`Saved liquidity removal`)

    await poolsStorage.getPool(baseAssetId, targetAssetId);
    await updateHistoryElementStats(record);
}
