import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const migrate =  {
    name: 'IrohaMigration.migrate',
    v33: new CallType(
        'IrohaMigration.migrate',
        sts.struct({
            irohaAddress: v33.String,
            irohaPublicKey: v33.String,
            irohaSignature: v33.String,
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
