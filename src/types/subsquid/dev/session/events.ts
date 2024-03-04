import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const newSession =  {
    name: 'Session.NewSession',
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    v70: new EventType(
        'Session.NewSession',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}
