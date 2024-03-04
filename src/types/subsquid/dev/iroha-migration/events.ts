import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const migrated =  {
    name: 'IrohaMigration.Migrated',
    /**
     * Migrated. [source, target]
     */
    v70: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([sts.string(), v70.AccountId32])
    ),
}
