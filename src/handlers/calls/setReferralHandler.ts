import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { logStartProcessingCall } from "../../utils/logs";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const { extrinsic: { args: [referrer] } } = extrinsic;

    const details: any = {
        from: extrinsic.extrinsic.signer.toString(),
        to: referrer.toString()
    };

    await createHistoryElement(extrinsic, details);
}
