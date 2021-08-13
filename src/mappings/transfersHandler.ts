import {SubstrateEvent} from "@subql/types";
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, getExtrinsicNetworkFee, formatU128ToBalance} from "./utils";

export async function handlerTransfers(event: SubstrateEvent): Promise<void> {
    
    logger.debug("Caught transfer event")
    
    const {event: {data: [from, to, assetId, amount]}} = event;
    
    let transferExtrinsic = event.extrinsic;
    let record = await new HistoryElement(transferExtrinsic.extrinsic.hash.toString());

    record.blockHeight = transferExtrinsic.block.block.header.number.toBigInt()
    record.module = "assets"
    record.method = "transfer"
    record.address = transferExtrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(transferExtrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(transferExtrinsic)
    record.networkFee = getExtrinsicNetworkFee(transferExtrinsic)
    record.timestamp = transferExtrinsic.block.timestamp.toString()
    record.transfer = {
        from: from.toString(),
        to: to.toString(),
        amount: amount.toString(),
        assetId: assetId.toString()
    }

    await record.save();

    logger.debug(`===== Saved transfer with ${transferExtrinsic.extrinsic.hash.toString()} txid =====`);

}