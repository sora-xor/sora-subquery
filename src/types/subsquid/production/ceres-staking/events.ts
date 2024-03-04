import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v19 from '../v19'
import * as v26 from '../v26'

export const deposited =  {
    name: 'CeresStaking.Deposited',
    /**
     *  Ceres deposited. [who, amount]
     */
    v19: new EventType(
        'CeresStaking.Deposited',
        sts.tuple([v19.AccountId, v19.Balance])
    ),
}

export const withdrawn =  {
    name: 'CeresStaking.Withdrawn',
    /**
     *  Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    v19: new EventType(
        'CeresStaking.Withdrawn',
        sts.tuple([v19.AccountId, v19.Balance, v19.Balance])
    ),
}

export const rewardsChanged =  {
    name: 'CeresStaking.RewardsChanged',
    /**
     *  Rewards changed [balance]
     */
    v26: new EventType(
        'CeresStaking.RewardsChanged',
        v26.Balance
    ),
}
