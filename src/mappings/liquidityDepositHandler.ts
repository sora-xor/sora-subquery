import { SubstrateExtrinsic, SubstrateEvent } from '@subql/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo, getAssetId } from "./utils";

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught liquidity adding extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let feeWithdrawaleventIndex = extrinsic.events.findIndex(e => e.event.method === 'FeeWithdrawn')

        let inputCurrencyTransferEvent = extrinsic.events.slice(0, feeWithdrawaleventIndex).find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')

        if (inputCurrencyTransferEvent) {

            const { event: { data: [inputAsset, , , inputTransferedAmount] } } = inputCurrencyTransferEvent;

            let outputCurrencyTransferEvent = extrinsic.events.find(e => (e as SubstrateEvent).idx === (inputCurrencyTransferEvent as SubstrateEvent).idx + 1)
            const { event: { data: [outputAsset, , , outputTransferedAmount] } } = outputCurrencyTransferEvent;

            let baseAssetId = getAssetId(inputAsset);
            let targetAssetId = getAssetId(outputAsset);

            details = {
                type: "Deposit",
                baseAssetId: baseAssetId,
                targetAssetId: targetAssetId,
                baseAssetAmount: formatU128ToBalance(inputTransferedAmount.toString(), baseAssetId),
                targetAssetAmount: formatU128ToBalance(outputTransferedAmount.toString(), targetAssetId)
            }

        }

        else {
            return
        }

    }

    else {

        const { extrinsic: { args: [, assetAId, assetBId, assetADesired, assetBDesired] } } = extrinsic;

        let baseAssetId = getAssetId(assetAId);
        let targetAssetId = getAssetId(assetBId);

        details = {
            type: "Deposit",
            baseAssetId: baseAssetId,
            targetAssetId: targetAssetId,
            baseAssetAmount: formatU128ToBalance(assetADesired.toString(), baseAssetId),
            targetAssetAmount: formatU128ToBalance(assetBDesired.toString(), targetAssetId)
        }

    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
