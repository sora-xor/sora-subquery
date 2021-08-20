import {SubstrateEvent} from "@subql/types";
import {formatU128ToBalance, assignCommonHistoryElemInfo} from "./utils";

export async function handlerTransfers(event: SubstrateEvent): Promise<void> {
    
    logger.debug("Caught transfer event")
    
    const {event: {data: [from, to, assetId, amount]}} = event;
    
    let extrinsic = event.extrinsic;

    const record = assignCommonHistoryElemInfo(extrinsic)
    
    record.transfer = {
        from: from.toString(),
        to: to.toString(),
        amount: formatU128ToBalance(amount.toString()),
        assetId: assetId.toString()
    }

    await record.save();

    logger.debug(`===== Saved transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}