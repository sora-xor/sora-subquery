import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     *  An extrinsic completed successfully. \[info\]
     */
    v33: new EventType(
        'System.ExtrinsicSuccess',
        v33.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v42: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v42.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v52: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v52.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     *  An extrinsic failed. \[error, info\]
     */
    v33: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v33.DispatchError, v33.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v42: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v42.DispatchError,
            dispatchInfo: v42.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v52: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v52.DispatchError,
            dispatchInfo: v52.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     *  `:code` was updated.
     */
    v33: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     *  A new \[account\] was created.
     */
    v33: new EventType(
        'System.NewAccount',
        v33.AccountId
    ),
    /**
     * A new account was created.
     */
    v42: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v42.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     *  An \[account\] was reaped.
     */
    v33: new EventType(
        'System.KilledAccount',
        v33.AccountId
    ),
    /**
     * An account was reaped.
     */
    v42: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v42.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    v42: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v42.AccountId32,
            hash: v42.H256,
        })
    ),
}
