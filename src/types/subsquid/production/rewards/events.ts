import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const claimed =  {
    name: 'Rewards.Claimed',
    /**
     *  The account has claimed their rewards. [account]
     */
    v1: new EventType(
        'Rewards.Claimed',
        v1.AccountId
    ),
}

export const migrationCompleted =  {
    name: 'Rewards.MigrationCompleted',
    /**
     *  Storage migration to version 1.2.0 completed
     */
    v19: new EventType(
        'Rewards.MigrationCompleted',
        sts.unit()
    ),
}
