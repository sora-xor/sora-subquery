import { SubstrateExtrinsic } from '@subql/types';
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { XOR } from '../utils/consts';

const saveDetails = (extrinsic: SubstrateExtrinsic, details: Object): Object => {
    const { extrinsic: { args: [, assetAId, assetBId, , assetAMin, assetBMin] } } = extrinsic;

    // TODO change the amount from min to real?

    let baseAssetId = getAssetId(assetAId);
    let targetAssetId = getAssetId(assetBId);

    details = {
        type: "Removal",
        baseAssetId: baseAssetId,
        targetAssetId: targetAssetId,
        baseAssetAmount: formatU128ToBalance(assetAMin.toString(), baseAssetId),
        targetAssetAmount: formatU128ToBalance(assetBMin.toString(), targetAssetId)
    }

    return details

}

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught liquidity removal extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        const transfers = extrinsic.events.filter(e =>
            e.event.method === 'Transfer' && e.event.section === 'balances' ||
            e.event.method === 'Transfer' && e.event.section === 'tokens'
        );

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers;

            const [amountA, , , assetA] = baseAssetTransfer.event.data.slice().reverse();
            const [amountB, , , assetB] = targetAssetTransfer.event.data.slice().reverse();

            const baseAssetId = assetA ? getAssetId(assetA) : XOR;
            const baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
            const targetAssetId = assetB ? getAssetId(assetB) : XOR;
            const targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);

            details = {
                type: "Removal",
                baseAssetId,
                targetAssetId,
                baseAssetAmount,
                targetAssetAmount
            }

            record.data = details
        }

        else {
            details = saveDetails(extrinsic, details)
        }

    }

    else {
        details = saveDetails(extrinsic, details)
    }

    record.data = details

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
