import {SubstrateEvent} from "@subql/types";
import {HistoryElement} from "../types";
import {checkIfExtrinsicExecuteSuccess, getExtrinsicNetworkFee} from "./utils";

export async function handlerTransfers(event: SubstrateEvent): Promise<void> {
    const {event: {data: [from, to, assetId, amount]}} = event;
    let transferExtrinsic = event.extrinsic;
    let success = checkIfExtrinsicExecuteSuccess(transferExtrinsic);
    let fee = getExtrinsicNetworkFee(transferExtrinsic);

    const record = await HistoryElement.get(event.extrinsic.extrinsic.hash.toString())

    record.transfer = {
        transactionid: event.extrinsic.extrinsic.hash.toString(),
        from: from.toString(),
        to: toString(),
        assetId: assetId.toString(),
        amount: amount.toString()
    }
    
    await record.save();
}