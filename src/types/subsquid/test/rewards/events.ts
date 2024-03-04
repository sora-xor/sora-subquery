import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const claimed =  {
    name: 'Rewards.Claimed',
    /**
     *  The account has claimed their rewards. [account]
     */
    v33: new EventType(
        'Rewards.Claimed',
        v33.AccountId
    ),
}

export const migrationCompleted =  {
    name: 'Rewards.MigrationCompleted',
    /**
     *  Storage migration to version 1.2.0 completed
     */
    v33: new EventType(
        'Rewards.MigrationCompleted',
        sts.unit()
    ),
}
