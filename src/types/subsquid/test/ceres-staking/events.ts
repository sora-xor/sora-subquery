import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const deposited =  {
    name: 'CeresStaking.Deposited',
    /**
     *  Ceres deposited. [who, amount]
     */
    v33: new EventType(
        'CeresStaking.Deposited',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
}

export const withdrawn =  {
    name: 'CeresStaking.Withdrawn',
    /**
     *  Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    v33: new EventType(
        'CeresStaking.Withdrawn',
        sts.tuple([v33.AccountId, v33.Balance, v33.Balance])
    ),
}

export const rewardsChanged =  {
    name: 'CeresStaking.RewardsChanged',
    /**
     *  Rewards changed [balance]
     */
    v33: new EventType(
        'CeresStaking.RewardsChanged',
        v33.Balance
    ),
}
