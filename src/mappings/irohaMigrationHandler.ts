import {SubstrateExtrinsic, SubstrateEvent} from '@subql/types';
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicId, getExtrinsicNetworkFee, ReceiveSwapAmounts} from "./utils";

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.warn("Caught iroha migration extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(extrinsic)
    record.timestamp = extrinsic.block.timestamp.toString()

    if (record.success) {
        
        let assetTransferEvent = extrinsic.events.find( e  => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const {event: {data: [asset, , , amount]}} = assetTransferEvent;
            
        record.irohaMigration = {
            assetid: asset.toString(),
            amount: amount.toString()
        }
    } 
    
    await record.save();

    logger.warn(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

