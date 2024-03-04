import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     *  A sudo just took place. \[result\]
     */
    v22: new EventType(
        'Sudo.Sudid',
        v22.DispatchResult
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    v22: new EventType(
        'Sudo.KeyChanged',
        v22.AccountId
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     *  A sudo just took place. \[result\]
     */
    v22: new EventType(
        'Sudo.SudoAsDone',
        v22.DispatchResult
    ),
}
