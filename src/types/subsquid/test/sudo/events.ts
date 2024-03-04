import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     *  A sudo just took place. \[result\]
     */
    v33: new EventType(
        'Sudo.Sudid',
        v33.DispatchResult
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v42: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v52: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v52.DispatchError),
        })
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    v33: new EventType(
        'Sudo.KeyChanged',
        v33.AccountId
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v42: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v42.AccountId32),
        })
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     *  A sudo just took place. \[result\]
     */
    v33: new EventType(
        'Sudo.SudoAsDone',
        v33.DispatchResult
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v42: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v52: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v52.DispatchError),
        })
    ),
}
