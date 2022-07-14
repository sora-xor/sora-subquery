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

        details = {
            assetId: assetId.toHuman()
        }

        if (!assetPrecisions.has(assetId.toString())) {
            const [, , precision,] = await api.query.assets.assetInfos(assetId.toString()) as any;
            assetPrecisions.set(assetId.toString(), precision.toNumber());
        }

    }

    else {

        const { extrinsic: { args: [symbol, , ,] } } = extrinsic;

        details = {
            assetId: symbol.toHuman()
        }

    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved asset registration with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}