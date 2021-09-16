import { SubstrateExtrinsic, SubstrateEvent } from '@subql/types';
import { HistoryElement } from 'sora/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

const saveExtrinsicParameters = (extrinsic: SubstrateExtrinsic, record: HistoryElement): void => {
    const { extrinsic: { args: [, assetAId, assetBId, , assetAMin, assetBMin] } } = extrinsic;

    // TODO change the amount from min to real?

    record.liquidityOperation = {
        type: "Removal",
        baseAssetId: assetAId.toString(),
        targetAssetId: assetBId.toString(),
        baseAssetAmount: formatU128ToBalance(assetAMin.toString()),
        targetAssetAmount: formatU128ToBalance(assetBMin.toString())
    }
}

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught liquidity removal extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.sucess) {

        let assetATransferEvent = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const { event: { data: [inputAsset, , , inputTransferedAmount] } } = assetATransferEvent;

        let AssetBTransferEvent = extrinsic.events.find(e => (e as SubstrateEvent).idx === (assetATransferEvent as SubstrateEvent).idx + 1)
        const { event: { data: [outputAsset, , , outputTransferedAmount] } } = AssetBTransferEvent;

        if (AssetBTransferEvent.event.method === 'Transferred' && AssetBTransferEvent.event.section === 'currencies') {

            record.liquidityOperation = {
                type: "Removal",
                baseAssetId: inputAsset.toString(),
                targetAssetId: outputAsset.toString(),
                baseAssetAmount: formatU128ToBalance(inputTransferedAmount.toString()),
                targetAssetAmount: formatU128ToBalance(outputTransferedAmount.toString())

            }
        }

        else {
            saveExtrinsicParameters(extrinsic, record)
        }
    }

    else {
        saveExtrinsicParameters(extrinsic, record)
    }

    await record.save();

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}

