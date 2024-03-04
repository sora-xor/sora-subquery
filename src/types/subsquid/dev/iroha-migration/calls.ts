import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const migrate =  {
    name: 'IrohaMigration.migrate',
    v70: new CallType(
        'IrohaMigration.migrate',
        sts.struct({
            irohaAddress: sts.string(),
            irohaPublicKey: sts.string(),
            irohaSignature: sts.string(),
        })
    ),
}
