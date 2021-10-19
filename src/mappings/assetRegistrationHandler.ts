import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function assetRegistrationHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught asset registration extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let assetRegistrationEvent = extrinsic.events.find(e => e.event.method === 'AssetRegistered');
        const { event: { data: [assetId] } } = assetRegistrationEvent;

        details = {
            assetId: assetId.toString()
        }
    }

    else {

        const { extrinsic: { args: [symbol, to, amount, ] } } = extrinsic;

        details = {
            assetId: symbol.toString()
        }

    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved asset registration with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}