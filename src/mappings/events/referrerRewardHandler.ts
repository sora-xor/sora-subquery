import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../../types";
import { formatDateTimestamp } from '../../utils';
import { logEventHandler } from "../../utils/log";

export async function referrerRewardHandler(event: SubstrateEvent): Promise<void> {
    logEventHandler(event)

	const {
		event: {
			data: [referree, referrer, amount],
		},
	} = event;

	logger.debug(`Caught referrer reward`);

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
