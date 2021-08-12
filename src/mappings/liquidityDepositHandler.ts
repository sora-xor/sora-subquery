import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicId, getExtrinsicNetworkFee, ReceiveSwapAmounts} from "./utils";

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.warn("Caught liquidity adding extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(extrinsic)
    record.timestamp = extrinsic.block.timestamp.toString()

    if (record.success) {
        
        let inputCurrencyTransferEvent = extrinsic.events.find( e  => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const {event: {data: [inputAsset, , , inputTransferedAmount]}} = inputCurrencyTransferEvent;

        let outputCurrencyTransferEvent = extrinsic.events.find(e => (e as SubstrateEvent).idx === (inputCurrencyTransferEvent as SubstrateEvent).idx + 1)
        const {event: {data: [outputAsset, , , outputTransferedAmount]}} = outputCurrencyTransferEvent;
            
        record.liquidityOperation = {
            type: "Deposit",
            AssetAId: inputAsset.toString(),
            AssetBId: outputAsset.toString(),
            AssetAAmount: inputTransferedAmount.toString(),
            AssetBAmmount: outputTransferedAmount.toString()

        }
    } 
    
    else {
        
        const {extrinsic: {args: [, assetAId, assetBId, assetADesired, assetBDesired]}} = extrinsic;

        record.liquidityOperation = {
            type: "Deposit",
            AssetAId: assetAId.toString(),
            AssetBId: assetBId.toString(),
            AssetAAmount: assetADesired.toString(),
            AssetBAmmount: assetBDesired.toString()
        }
    }
    
    await record.save();

    logger.warn(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

