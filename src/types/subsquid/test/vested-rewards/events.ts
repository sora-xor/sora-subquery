import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v44 from '../v44'
import * as v52 from '../v52'

export const rewardsVested =  {
    name: 'VestedRewards.RewardsVested',
    /**
     *  Rewards vested, limits were raised. [vested amount]
     */
    v33: new EventType(
        'VestedRewards.RewardsVested',
        v33.Balance
    ),
}

export const actualDoesntMatchAvailable =  {
    name: 'VestedRewards.ActualDoesntMatchAvailable',
    /**
     *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v33: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v33.RewardReason
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
    v44: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v44.RewardReason
    ),
}

export const failedToSaveCalculatedReward =  {
    name: 'VestedRewards.FailedToSaveCalculatedReward',
    /**
     *  Saving reward for account has failed in a distribution series. [account]
     */
    v33: new EventType(
        'VestedRewards.FailedToSaveCalculatedReward',
        v33.AccountId
    ),
}

export const addingZeroMarketMakerReward =  {
    name: 'VestedRewards.AddingZeroMarketMakerReward',
    /**
     *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
     */
    v33: new EventType(
        'VestedRewards.AddingZeroMarketMakerReward',
        v33.AccountId
    ),
}

export const noEligibleMarketMakers =  {
    name: 'VestedRewards.NoEligibleMarketMakers',
    /**
     *  Couldn't find any account with enough transactions to count market maker rewards.
     */
    v33: new EventType(
        'VestedRewards.NoEligibleMarketMakers',
        sts.unit()
    ),
}

export const crowdloanClaimed =  {
    name: 'VestedRewards.CrowdloanClaimed',
    /**
     * Claimed crowdloan rewards
     */
    v52: new EventType(
        'VestedRewards.CrowdloanClaimed',
        sts.tuple([v52.AccountId32, v52.AssetId32, sts.bigint()])
    ),
}
