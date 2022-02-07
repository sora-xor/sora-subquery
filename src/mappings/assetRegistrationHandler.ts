import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
import { assetPrecisions } from "./utils";

export async function assetRegistrationHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught asset registration extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let assetRegistrationEvent = extrinsic.events.find(e => e.event.method === 'AssetRegistered');
        const { event: { data: [assetId] } } = assetRegistrationEvent;

        const {extrinsic: { args: [ , , , , is_nft ]}} = extrinsic;

        details = {
            assetId: assetId.toString()
        }

        if (!assetPrecisions.has(assetId.toString())) {

            let assetPrecision = (is_nft): number => {
                if(is_nft) {
                    return 0;
                }
                return 18;
              }

            assetPrecisions.set(assetId.toString(), assetPrecision(is_nft));

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