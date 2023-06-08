import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../../types";
import { formatDateTimestamp } from '../../utils';

export async function referrerRewardHandler(
	event: SubstrateEvent
): Promise<void> {

	const {
		event: {
			data: [referree, referrer, amount],
		},
	} = event;

	logger.debug(`Caught referrer reward`);

	const key = `${referree.toString()}-${referrer.toString()}`;

	let referrerReward = await ReferrerReward.get(key);

	if (!referrerReward) {
		referrerReward = new ReferrerReward(
			key,
			referree.toString(),
			referrer.toString(),
			formatDateTimestamp(event.block.timestamp),
			BigInt(0)
		);
	}

	referrerReward.updated = formatDateTimestamp(event.block.timestamp);
	referrerReward.amount = referrerReward.amount + (BigInt(amount.toString()));

	await referrerReward.save();
}
