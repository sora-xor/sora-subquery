import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const newSession =  {
    name: 'Session.NewSession',
    /**
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    v1: new EventType(
        'Session.NewSession',
        v1.SessionIndex
    ),
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    v42: new EventType(
        'Session.NewSession',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}
