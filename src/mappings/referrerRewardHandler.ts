import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../types";

export async function referrerRewardHandler(
	event: SubstrateEvent
): Promise<void> {

	const {
		event: {
			data: [referree, referrer, amount],
		},
	} = event;

	logger.debug(`Caught referrer reward`);

	let referrerReward: ReferrerReward = new ReferrerReward(
		event.event.hash.toString() + event.block.block.header.number.toString()
	);
	referrerReward.blockHeight = event.block.block.header.number.toBigInt();
	referrerReward.referral = referree.toString();
	referrerReward.referrer = referrer.toString();
	referrerReward.timestamp = parseInt(
		(event.block.timestamp.getTime() / 1000).toFixed(0)
	);
	referrerReward.amount = BigInt(amount.toString());
	await referrerReward.save();
}
