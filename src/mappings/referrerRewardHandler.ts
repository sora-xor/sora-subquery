import { SubstrateEvent } from "@subql/types";
import { ReferrerReward } from "../types";
import { formatU128ToBalance } from "./utils";

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
		event.event.hash.toString()
	);
	referrerReward.blockHeight = event.block.block.header.number.toBigInt();
	referrerReward.referral = referree.toString();
	referrerReward.referrer = referrer.toString();
	referrerReward.timestamp = parseInt(
		(event.block.timestamp.getTime() / 1000).toFixed(0)
	);
	referrerReward.amount = formatU128ToBalance(amount.toString());

	await referrerReward.save();
}
