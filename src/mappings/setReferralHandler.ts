import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo } from "./utils";

export async function setReferralHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logger.debug("Caught set referral extrinsic");

    const record = assignCommonHistoryElemInfo(extrinsic);

    let details = new Object();

	if (record.execution.success) {
        let setReferralEvent = extrinsic.events.find(e => e.event.method === 'ReferrerRewarded' && e.event.section === 'xorFee');
        const { event: { data: [referral, referrer] } } = setReferralEvent;

        details = {
            from: referral.toString(),
            to: referrer.toString()
        }
    } else {
        const { extrinsic: { args: [referrer] } } = extrinsic;
        
        details = {
            to: referrer.toString()
        }
    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved set referral with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
