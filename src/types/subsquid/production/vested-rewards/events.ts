import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'
import * as v42 from '../v42'
import * as v45 from '../v45'
import * as v53 from '../v53'

export const rewardsVested =  {
    name: 'VestedRewards.RewardsVested',
    /**
     *  Rewards vested, limits were raised. [vested amount]
     */
    v1: new EventType(
        'VestedRewards.RewardsVested',
        v1.Balance
    ),
}

export const actualDoesntMatchAvailable =  {
    name: 'VestedRewards.ActualDoesntMatchAvailable',
    /**
     *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v7: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v7.RewardReason
    ),
    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v42: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v42.RewardReason
    ),
    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v45: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v45.RewardReason
    ),
}

export const failedToSaveCalculatedReward =  {
    name: 'VestedRewards.FailedToSaveCalculatedReward',
    /**
     *  Saving reward for account has failed in a distribution series. [account]
     */
    v7: new EventType(
        'VestedRewards.FailedToSaveCalculatedReward',
        v7.AccountId
    ),
}

export const addingZeroMarketMakerReward =  {
    name: 'VestedRewards.AddingZeroMarketMakerReward',
    /**
     *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
     */
    v7: new EventType(
        'VestedRewards.AddingZeroMarketMakerReward',
        v7.AccountId
    ),
}

export const noEligibleMarketMakers =  {
    name: 'VestedRewards.NoEligibleMarketMakers',
    /**
     *  Couldn't find any account with enough transactions to count market maker rewards.
     */
    v7: new EventType(
        'VestedRewards.NoEligibleMarketMakers',
        sts.unit()
    ),
}

export const crowdloanClaimed =  {
    name: 'VestedRewards.CrowdloanClaimed',
    /**
     * Claimed crowdloan rewards
     */
    v53: new EventType(
        'VestedRewards.CrowdloanClaimed',
        sts.tuple([v53.AccountId32, v53.AssetId32, sts.bigint()])
    ),
}
