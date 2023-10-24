import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../../types";
import { formatDateTimestamp } from '../../utils';
import { logStartProcessingEvent } from "../../utils/logs";

export async function referrerRewardHandler(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

	const {
		event: {
			data: [referree, referrer, amount],
		},
	} = event;

	const key = `${referree.toString()}-${referrer.toString()}`;

	let referrerReward = await ReferrerReward.get(key);

	if (!referrerReward) {
		referrerReward = new ReferrerReward(key);
		referrerReward.referral = referree.toString();
		referrerReward.referrer = referrer.toString();
		referrerReward.amount = BigInt(0);
	}

	referrerReward.updated = formatDateTimestamp(event.block.timestamp);

	referrerReward.amount = referrerReward.amount + (BigInt(amount.toString()));

	await referrerReward.save();
}
