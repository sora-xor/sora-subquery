import { SubstrateEvent } from "@subql/types";
import { ClaimableReward } from "../types";

const lpFeesAccount: string = 'cnTQ1kbv7PBNNQrEb1tZpmK7ftiv4yCCpUQy1J2y7Y54Taiaw';
const tbcRewardsAccount: string = 'cnTQ1kbv7PBNNQrEb1tZpmK7easBTbiFMQUUwfLf9LX66ND8u';
const marketMakerRewardsAccount: string = 'cnTQ1kbv7PBNNQrEb1tZpmK7fJT4Awahg1d8aoYoGGv2ATz7m';
// TODO: add farmingRewardsAccount when it'll be implemented
const claimableRewardAccounts = [lpFeesAccount, tbcRewardsAccount, marketMakerRewardsAccount];

export async function handleClaimableReward(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ currencyId, from, , balance ] } } = event;

    if (claimableRewardAccounts.includes(from.toString())) {
        logger.debug(`event claimable reward ${event.event.data}`);

        let claimableReward: ClaimableReward = new ClaimableReward(event.event.hash.toString());
        claimableReward.from = from.toString();

        claimableReward.blockHeight = event.block.block.header.number.toBigInt();
        claimableReward.blockHash = event.block.block.header.hash.toString();
        claimableReward.currencyId = currencyId.toString();
        claimableReward.balance = BigInt(balance.toString());

        await claimableReward.save();
    }
}
