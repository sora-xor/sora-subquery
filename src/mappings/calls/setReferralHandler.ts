import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { logCallHandler } from "../../utils/log";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logCallHandler(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic);

    let details = new Object();
    const { extrinsic: { args: [referrer] } } = extrinsic;

    details = {
        from: record.address,
        to: referrer.toString()
    }

    record.data = details

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved set referral with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
