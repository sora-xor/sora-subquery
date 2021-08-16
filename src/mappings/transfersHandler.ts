import {SubstrateEvent} from "@subql/types";
import {formatU128ToBalance, assignCommonHistoryElemInfo} from "./utils";

export async function handlerTransfers(event: SubstrateEvent): Promise<void> {
    
    logger.debug("Caught transfer event")
    
    const {event: {data: [from, to, assetId, amount]}} = event;
    
    let transferExtrinsic = event.extrinsic;

    const record = assignCommonHistoryElemInfo(transferExtrinsic)

    record.module = "assets"
    record.method = "transfer"
    
    record.transfer = {
        from: from.toString(),
        to: to.toString(),
        amount: formatU128ToBalance(amount.toString()),
        assetId: assetId.toString()
    }

    await record.save();

    logger.debug(`===== Saved transfer with ${transferExtrinsic.extrinsic.hash.toString()} txid =====`);

}