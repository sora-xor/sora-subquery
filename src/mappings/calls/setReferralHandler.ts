import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

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

    getCallHandlerLog(extrinsic).debug('Saved set referral')

}
