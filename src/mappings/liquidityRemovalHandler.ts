import { SubstrateExtrinsic, SubstrateEvent } from '@subql/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo, getAssetId, updateHistoryElementAccounts, XOR } from "./utils";

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

const isTransferEvent = (e) => {
    return (
        e.event.method === 'Transfer' && e.event.section === 'balances' ||
        e.event.method === 'Transfer' && e.event.section === 'tokens'
    );
};

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

            const baseAssetId = getAssetId(assetA || XOR);
            const baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
            const targetAssetId = getAssetId(assetB || XOR);
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
    await updateHistoryElementAccounts(record);

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
