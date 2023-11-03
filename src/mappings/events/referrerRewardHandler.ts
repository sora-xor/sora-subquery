import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../../types";
import { formatDateTimestamp } from '../../utils';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function referrerRewardHandler(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

	const {
		event: {
			data: [referral, referrer, amount],
		},
	} = event;

	const key = `${referral.toString()}-${referrer.toString()}`;

	let referrerReward = await ReferrerReward.get(key);

	if (!referrerReward) {
		referrerReward = new ReferrerReward(key);
		referrerReward.referral = referral.toString();
		referrerReward.referrer = referrer.toString();
		referrerReward.amount = BigInt(0);
	}

	referrerReward.updated = formatDateTimestamp(event.block.timestamp);

	referrerReward.amount = referrerReward.amount + (BigInt(amount.toString()));

	await referrerReward.save();

	getEventHandlerLog(event).debug(
		{ referral, referrer, amount, updated: referrerReward.updated },
		'Referrer reward updated',
	)
}
