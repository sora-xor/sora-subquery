import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const migrateTo11 =  {
    name: 'Farming.migrate_to_1_1',
    v33: new CallType(
        'Farming.migrate_to_1_1',
        sts.unit()
    ),
}
