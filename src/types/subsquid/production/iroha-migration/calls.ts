import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const migrate =  {
    name: 'IrohaMigration.migrate',
    v1: new CallType(
        'IrohaMigration.migrate',
        sts.struct({
            irohaAddress: v1.String,
            irohaPublicKey: v1.String,
            irohaSignature: v1.String,
        })
    ),
    v42: new CallType(
        'IrohaMigration.migrate',
        sts.struct({
            irohaAddress: sts.string(),
            irohaPublicKey: sts.string(),
            irohaSignature: sts.string(),
        })
    ),
}
