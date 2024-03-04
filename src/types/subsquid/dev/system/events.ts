import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    v70: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v70.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    v70: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v70.DispatchError,
            dispatchInfo: v70.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v70: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    v70: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v70.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    v70: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v70.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    v70: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v70.AccountId32,
            hash: v70.H256,
        })
    ),
}
