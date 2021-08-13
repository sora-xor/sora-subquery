import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicNetworkFee} from "./utils";

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught liquidity removal extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.module = "poolXyk"
    record.method = "withdrawLiquidity"
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(extrinsic)
    record.timestamp = extrinsic.block.timestamp.toString()

    if (record.success) {
        
        let assetATransferEvent = extrinsic.events.find( e  => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const {event: {data: [inputAsset, , , inputTransferedAmount]}} = assetATransferEvent;

        let AssetBTransferEvent = extrinsic.events.find(e => (e as SubstrateEvent).idx === (assetATransferEvent as SubstrateEvent).idx + 1)
        const {event: {data: [outputAsset, , , outputTransferedAmount]}} = AssetBTransferEvent;
            
        record.liquidityOperation = {
            type: "Removal",
            baseAssetId: inputAsset.toString(),
            targetAssetId: outputAsset.toString(),
            baseAssetAmount: inputTransferedAmount.toString(),
            targetAssetAmount: outputTransferedAmount.toString()

        }
    } 
    
    else {
        
        const {extrinsic: {args: [, assetAId, assetBId, , assetAMin, assetBMin]}} = extrinsic;

        // TODO change the amount from min to real?
        
        record.liquidityOperation = {
            type: "Removal",
            baseAssetId: assetAId.toString(),
            targetAssetId: assetBId.toString(),
            baseAssetAmount: assetAMin.toString(),
            targetAssetAmount: assetBMin.toString()
        }
    }
    
    await record.save();

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

