import { SubstrateExtrinsic, SubstrateEvent } from '@subql/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

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

            details = {
                type: "Deposit",
                baseAssetId: inputAsset.toString(),
                targetAssetId: outputAsset.toString(),
                baseAssetAmount: formatU128ToBalance(inputTransferedAmount.toString()),
                targetAssetAmount: formatU128ToBalance(outputTransferedAmount.toString())
            }

        }

        else {
            return
        }

    }

    else {

        const { extrinsic: { args: [, assetAId, assetBId, assetADesired, assetBDesired] } } = extrinsic;

        details = {
            type: "Deposit",
            baseAssetId: assetAId.toString(),
            targetAssetId: assetBId.toString(),
            baseAssetAmount: formatU128ToBalance(assetADesired.toString()),
            targetAssetAmount: formatU128ToBalance(assetBDesired.toString())
        }

    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
