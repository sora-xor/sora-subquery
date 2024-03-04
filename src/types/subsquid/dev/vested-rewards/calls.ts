import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const claimRewards =  {
    name: 'VestedRewards.claim_rewards',
    /**
     * Claim all available PSWAP rewards by account signing this transaction.
     */
    v70: new CallType(
        'VestedRewards.claim_rewards',
        sts.unit()
    ),
}

export const claimCrowdloanRewards =  {
    name: 'VestedRewards.claim_crowdloan_rewards',
    v70: new CallType(
        'VestedRewards.claim_crowdloan_rewards',
        sts.struct({
            crowdloan: v70.CrowdloanTag,
        })
    ),
}

export const updateRewards =  {
    name: 'VestedRewards.update_rewards',
    v70: new CallType(
        'VestedRewards.update_rewards',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v70.AccountId32, sts.array(() => sts.tuple(() => [v70.RewardReason, sts.bigint()]))])),
        })
    ),
}

export const registerCrowdloan =  {
    name: 'VestedRewards.register_crowdloan',
    v70: new CallType(
        'VestedRewards.register_crowdloan',
        sts.struct({
            tag: v70.CrowdloanTag,
            startBlock: sts.number(),
            length: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v70.AssetId32, sts.bigint()])),
            contributions: sts.array(() => sts.tuple(() => [v70.AccountId32, sts.bigint()])),
        })
    ),
}
