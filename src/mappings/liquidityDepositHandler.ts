import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicNetworkFee} from "./utils";

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught liquidity adding extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.module = "poolXyk"
    record.method = "depositLiquidity"
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
            baseAssetId: inputAsset.toString(),
            targetAssetId: outputAsset.toString(),
            baseAssetAmount: inputTransferedAmount.toString(),
            targetAssetAmount: outputTransferedAmount.toString()

        }
    } 
    
    else {
        
        const {extrinsic: {args: [, assetAId, assetBId, assetADesired, assetBDesired]}} = extrinsic;

        record.liquidityOperation = {
            type: "Deposit",
            baseAssetId: assetAId.toString(),
            targetAssetId: assetBId.toString(),
            baseAssetAmount: assetADesired.toString(),
            targetAssetAmount: assetBDesired.toString()
        }
    }
    
    await record.save();

    logger.debug(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

