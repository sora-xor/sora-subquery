import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const claimed =  {
    name: 'Rewards.Claimed',
    /**
     * The account has claimed their rewards. [account]
     */
    v70: new EventType(
        'Rewards.Claimed',
        v70.AccountId32
    ),
}

export const migrationCompleted =  {
    name: 'Rewards.MigrationCompleted',
    /**
     * Storage migration to version 1.2.0 completed
     */
    v70: new EventType(
        'Rewards.MigrationCompleted',
        sts.unit()
    ),
}
