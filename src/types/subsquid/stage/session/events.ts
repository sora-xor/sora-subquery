import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const newSession =  {
    name: 'Session.NewSession',
    /**
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    v33: new EventType(
        'Session.NewSession',
        v33.SessionIndex
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
