import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const rewardsVested =  {
    name: 'VestedRewards.RewardsVested',
    /**
     * Rewards vested, limits were raised. [vested amount]
     */
    v70: new EventType(
        'VestedRewards.RewardsVested',
        sts.bigint()
    ),
}

export const actualDoesntMatchAvailable =  {
    name: 'VestedRewards.ActualDoesntMatchAvailable',
    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v70: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v70.RewardReason
    ),
}

export const failedToSaveCalculatedReward =  {
    name: 'VestedRewards.FailedToSaveCalculatedReward',
    /**
     * Saving reward for account has failed in a distribution series. [account]
     */
    v70: new EventType(
        'VestedRewards.FailedToSaveCalculatedReward',
        v70.AccountId32
    ),
}

export const crowdloanClaimed =  {
    name: 'VestedRewards.CrowdloanClaimed',
    /**
     * Claimed crowdloan rewards
     */
    v70: new EventType(
        'VestedRewards.CrowdloanClaimed',
        sts.tuple([v70.AccountId32, v70.AssetId32, sts.bigint()])
    ),
}
