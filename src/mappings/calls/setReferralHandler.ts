import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic);

    let details = new Object();
    const { extrinsic: { args: [referrer] } } = extrinsic;

    details = {
        from: historyElement.address,
        to: referrer.toString()
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);

    getCallHandlerLog(extrinsic).debug('Saved set referral')

}
