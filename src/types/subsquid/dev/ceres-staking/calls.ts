import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const deposit =  {
    name: 'CeresStaking.deposit',
    v70: new CallType(
        'CeresStaking.deposit',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'CeresStaking.withdraw',
    v70: new CallType(
        'CeresStaking.withdraw',
        sts.unit()
    ),
}

export const changeRewardsRemaining =  {
    name: 'CeresStaking.change_rewards_remaining',
    /**
     * Change RewardsRemaining
     */
    v70: new CallType(
        'CeresStaking.change_rewards_remaining',
        sts.struct({
            rewardsRemaining: sts.bigint(),
        })
    ),
}
