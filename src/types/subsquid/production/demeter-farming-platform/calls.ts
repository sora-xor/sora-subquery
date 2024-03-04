import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v42 from '../v42'
import * as v43 from '../v43'

export const registerToken =  {
    name: 'DemeterFarmingPlatform.register_token',
    /**
     *  Register token for farming
     */
    v33: new CallType(
        'DemeterFarmingPlatform.register_token',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            tokenPerBlock: v33.Balance,
            farmsAllocation: v33.Balance,
            stakingAllocation: v33.Balance,
            teamAllocation: v33.Balance,
            teamAccount: v33.AccountIdOf,
        })
    ),
    /**
     * Register token for farming
     */
    v42: new CallType(
        'DemeterFarmingPlatform.register_token',
        sts.struct({
            poolAsset: v42.AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: v42.AccountId32,
        })
    ),
}

export const addPool =  {
    name: 'DemeterFarmingPlatform.add_pool',
    /**
     *  Add pool
     */
    v33: new CallType(
        'DemeterFarmingPlatform.add_pool',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
            multiplier: sts.number(),
            depositFee: v33.Balance,
            isCore: sts.boolean(),
        })
    ),
    /**
     * Add pool
     */
    v42: new CallType(
        'DemeterFarmingPlatform.add_pool',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            multiplier: sts.number(),
            depositFee: sts.bigint(),
            isCore: sts.boolean(),
        })
    ),
    /**
     * Add pool
     */
    v43: new CallType(
        'DemeterFarmingPlatform.add_pool',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            multiplier: sts.number(),
            depositFee: sts.bigint(),
            isCore: sts.boolean(),
        })
    ),
}

export const deposit =  {
    name: 'DemeterFarmingPlatform.deposit',
    /**
     *  Deposit to pool
     */
    v33: new CallType(
        'DemeterFarmingPlatform.deposit',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
            pooledTokens: v33.Balance,
        })
    ),
    /**
     * Deposit to pool
     */
    v42: new CallType(
        'DemeterFarmingPlatform.deposit',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            pooledTokens: sts.bigint(),
        })
    ),
    /**
     * Deposit to pool
     */
    v43: new CallType(
        'DemeterFarmingPlatform.deposit',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            pooledTokens: sts.bigint(),
        })
    ),
}

export const getRewards =  {
    name: 'DemeterFarmingPlatform.get_rewards',
    /**
     *  Get rewards
     */
    v33: new CallType(
        'DemeterFarmingPlatform.get_rewards',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Get rewards
     */
    v42: new CallType(
        'DemeterFarmingPlatform.get_rewards',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Get rewards
     */
    v43: new CallType(
        'DemeterFarmingPlatform.get_rewards',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
}

export const withdraw =  {
    name: 'DemeterFarmingPlatform.withdraw',
    /**
     *  Withdraw
     */
    v33: new CallType(
        'DemeterFarmingPlatform.withdraw',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            pooledTokens: v33.Balance,
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Withdraw
     */
    v42: new CallType(
        'DemeterFarmingPlatform.withdraw',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            pooledTokens: sts.bigint(),
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Withdraw
     */
    v43: new CallType(
        'DemeterFarmingPlatform.withdraw',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            pooledTokens: sts.bigint(),
            isFarm: sts.boolean(),
        })
    ),
}

export const removePool =  {
    name: 'DemeterFarmingPlatform.remove_pool',
    /**
     *  Remove pool
     */
    v33: new CallType(
        'DemeterFarmingPlatform.remove_pool',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Remove pool
     */
    v42: new CallType(
        'DemeterFarmingPlatform.remove_pool',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
    /**
     * Remove pool
     */
    v43: new CallType(
        'DemeterFarmingPlatform.remove_pool',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
}

export const changePoolMultiplier =  {
    name: 'DemeterFarmingPlatform.change_pool_multiplier',
    /**
     *  Change pool multiplier
     */
    v33: new CallType(
        'DemeterFarmingPlatform.change_pool_multiplier',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
            newMultiplier: sts.number(),
        })
    ),
    /**
     * Change pool multiplier
     */
    v42: new CallType(
        'DemeterFarmingPlatform.change_pool_multiplier',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            newMultiplier: sts.number(),
        })
    ),
    /**
     * Change pool multiplier
     */
    v43: new CallType(
        'DemeterFarmingPlatform.change_pool_multiplier',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            newMultiplier: sts.number(),
        })
    ),
}

export const changePoolDepositFee =  {
    name: 'DemeterFarmingPlatform.change_pool_deposit_fee',
    /**
     *  Change pool deposit fee
     */
    v33: new CallType(
        'DemeterFarmingPlatform.change_pool_deposit_fee',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            rewardAsset: v33.AssetIdOf,
            isFarm: sts.boolean(),
            depositFee: v33.Balance,
        })
    ),
    /**
     * Change pool deposit fee
     */
    v42: new CallType(
        'DemeterFarmingPlatform.change_pool_deposit_fee',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            depositFee: sts.bigint(),
        })
    ),
    /**
     * Change pool deposit fee
     */
    v43: new CallType(
        'DemeterFarmingPlatform.change_pool_deposit_fee',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            depositFee: sts.bigint(),
        })
    ),
}

export const changeTokenInfo =  {
    name: 'DemeterFarmingPlatform.change_token_info',
    /**
     *  Change token info
     */
    v33: new CallType(
        'DemeterFarmingPlatform.change_token_info',
        sts.struct({
            poolAsset: v33.AssetIdOf,
            tokenPerBlock: v33.Balance,
            farmsAllocation: v33.Balance,
            stakingAllocation: v33.Balance,
            teamAllocation: v33.Balance,
            teamAccount: v33.AccountIdOf,
        })
    ),
    /**
     * Change token info
     */
    v42: new CallType(
        'DemeterFarmingPlatform.change_token_info',
        sts.struct({
            poolAsset: v42.AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: v42.AccountId32,
        })
    ),
}

export const changeTotalTokens =  {
    name: 'DemeterFarmingPlatform.change_total_tokens',
    /**
     *  Change total tokens
     */
    v35: new CallType(
        'DemeterFarmingPlatform.change_total_tokens',
        sts.struct({
            poolAsset: v35.AssetIdOf,
            rewardAsset: v35.AssetIdOf,
            isFarm: sts.boolean(),
            totalTokens: v35.Balance,
        })
    ),
    /**
     * Change total tokens
     */
    v42: new CallType(
        'DemeterFarmingPlatform.change_total_tokens',
        sts.struct({
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            totalTokens: sts.bigint(),
        })
    ),
    /**
     * Change total tokens
     */
    v43: new CallType(
        'DemeterFarmingPlatform.change_total_tokens',
        sts.struct({
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            totalTokens: sts.bigint(),
        })
    ),
}

export const changeInfo =  {
    name: 'DemeterFarmingPlatform.change_info',
    /**
     *  Change info
     */
    v35: new CallType(
        'DemeterFarmingPlatform.change_info',
        sts.struct({
            changedUser: v35.AccountIdOf,
            poolAsset: v35.AssetIdOf,
            rewardAsset: v35.AssetIdOf,
            isFarm: sts.boolean(),
            poolTokens: v35.Balance,
        })
    ),
    /**
     * Change info
     */
    v42: new CallType(
        'DemeterFarmingPlatform.change_info',
        sts.struct({
            changedUser: v42.AccountId32,
            poolAsset: v42.AssetId32,
            rewardAsset: v42.AssetId32,
            isFarm: sts.boolean(),
            poolTokens: sts.bigint(),
        })
    ),
    /**
     * Change info
     */
    v43: new CallType(
        'DemeterFarmingPlatform.change_info',
        sts.struct({
            changedUser: v43.AccountId32,
            baseAsset: v43.AssetId32,
            poolAsset: v43.AssetId32,
            rewardAsset: v43.AssetId32,
            isFarm: sts.boolean(),
            poolTokens: sts.bigint(),
        })
    ),
}
