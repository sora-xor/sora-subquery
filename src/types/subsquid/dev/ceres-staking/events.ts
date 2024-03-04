import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const deposited =  {
    name: 'CeresStaking.Deposited',
    /**
     * Ceres deposited. [who, amount]
     */
    v70: new EventType(
        'CeresStaking.Deposited',
        sts.tuple([v70.AccountId32, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'CeresStaking.Withdrawn',
    /**
     * Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    v70: new EventType(
        'CeresStaking.Withdrawn',
        sts.tuple([v70.AccountId32, sts.bigint(), sts.bigint()])
    ),
}

export const rewardsChanged =  {
    name: 'CeresStaking.RewardsChanged',
    /**
     * Rewards changed [balance]
     */
    v70: new EventType(
        'CeresStaking.RewardsChanged',
        sts.bigint()
    ),
}
