import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {formatU128ToBalance, assignCommonHistoryElemInfo} from "./utils";

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught liquidity removal extrinsic")
    
    const record = assignCommonHistoryElemInfo(extrinsic, extrinsic.extrinsic.method.section, extrinsic.extrinsic.method.method)

    if (record.success) {
        
        let assetATransferEvent = extrinsic.events.find( e  => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const {event: {data: [inputAsset, , , inputTransferedAmount]}} = assetATransferEvent;

        let AssetBTransferEvent = extrinsic.events.find(e => (e as SubstrateEvent).idx === (assetATransferEvent as SubstrateEvent).idx + 1)
        const {event: {data: [outputAsset, , , outputTransferedAmount]}} = AssetBTransferEvent;
            
        record.liquidityOperation = {
            type: "Removal",
            baseAssetId: inputAsset.toString(),
            targetAssetId: outputAsset.toString(),
            baseAssetAmount: formatU128ToBalance(inputTransferedAmount.toString()),
            targetAssetAmount: formatU128ToBalance(outputTransferedAmount.toString())

        }
    } 
    
    else {
        
        const {extrinsic: {args: [, assetAId, assetBId, , assetAMin, assetBMin]}} = extrinsic;

        // TODO change the amount from min to real?
        
        record.liquidityOperation = {
            type: "Removal",
            baseAssetId: assetAId.toString(),
            targetAssetId: assetBId.toString(),
            baseAssetAmount: formatU128ToBalance(assetAMin.toString()),
            targetAssetAmount: formatU128ToBalance(assetBMin.toString())
        }
    }
    
    await record.save();

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

