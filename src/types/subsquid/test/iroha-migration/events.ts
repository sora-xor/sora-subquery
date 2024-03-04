import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const migrated =  {
    name: 'IrohaMigration.Migrated',
    /**
     *  Migrated. [source, target]
     */
    v33: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([v33.String, v33.AccountId])
    ),
    /**
     * Migrated. [source, target]
     */
    v42: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([sts.string(), v42.AccountId32])
    ),
}
