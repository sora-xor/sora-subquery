import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const deposit =  {
    name: 'CeresStaking.deposit',
    v33: new CallType(
        'CeresStaking.deposit',
        sts.struct({
            amount: v33.Balance,
        })
    ),
}

export const withdraw =  {
    name: 'CeresStaking.withdraw',
    v33: new CallType(
        'CeresStaking.withdraw',
        sts.unit()
    ),
}

export const changeRewardsRemaining =  {
    name: 'CeresStaking.change_rewards_remaining',
    /**
     *  Change RewardsRemaining
     */
    v33: new CallType(
        'CeresStaking.change_rewards_remaining',
        sts.struct({
            rewardsRemaining: v33.Balance,
        })
    ),
}
