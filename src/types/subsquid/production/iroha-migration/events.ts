import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const migrated =  {
    name: 'IrohaMigration.Migrated',
    /**
     *  Migrated. [source, target]
     */
    v1: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([v1.String, v1.AccountId])
    ),
    /**
     * Migrated. [source, target]
     */
    v42: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([sts.string(), v42.AccountId32])
    ),
}
