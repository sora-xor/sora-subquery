import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicId, getExtrinsicNetworkFee, ReceiveSwapAmounts} from "./utils";

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.warn("Caught liquidity removal extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
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
            AssetAId: inputAsset.toString(),
            AssetBId: outputAsset.toString(),
            AssetAAmount: inputTransferedAmount.toString(),
            AssetBAmmount: outputTransferedAmount.toString()

        }
    } 
    
    else {
        
        const {extrinsic: {args: [, assetAId, assetBId, , assetAMin, assetBMin]}} = extrinsic;

        // TODO change the amount from min to real?
        
        record.liquidityOperation = {
            type: "Removal",
            AssetAId: assetAId.toString(),
            AssetBId: assetBId.toString(),
            AssetAAmount: assetAMin.toString(),
            AssetBAmmount: assetBMin.toString()
        }
    }
    
    await record.save();

    logger.warn(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

