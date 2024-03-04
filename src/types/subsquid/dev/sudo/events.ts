import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    v70: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v70.DispatchError),
        })
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v70: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v70.AccountId32),
        })
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    v70: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v70.DispatchError),
        })
    ),
}
