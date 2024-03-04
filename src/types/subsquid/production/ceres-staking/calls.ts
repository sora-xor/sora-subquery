import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v19 from '../v19'
import * as v26 from '../v26'

export const deposit =  {
    name: 'CeresStaking.deposit',
    v19: new CallType(
        'CeresStaking.deposit',
        sts.struct({
            amount: v19.Balance,
        })
    ),
}

export const withdraw =  {
    name: 'CeresStaking.withdraw',
    v19: new CallType(
        'CeresStaking.withdraw',
        sts.unit()
    ),
}

export const changeRewardsRemaining =  {
    name: 'CeresStaking.change_rewards_remaining',
    /**
     *  Change RewardsRemaining
     */
    v26: new CallType(
        'CeresStaking.change_rewards_remaining',
        sts.struct({
            rewardsRemaining: v26.Balance,
        })
    ),
}
