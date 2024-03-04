import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const heartbeatReceived =  {
    name: 'ImOnline.HeartbeatReceived',
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    v70: new EventType(
        'ImOnline.HeartbeatReceived',
        sts.struct({
            authorityId: sts.bytes(),
        })
    ),
}

export const allGood =  {
    name: 'ImOnline.AllGood',
    /**
     * At the end of the session, no offence was committed.
     */
    v70: new EventType(
        'ImOnline.AllGood',
        sts.unit()
    ),
}

export const someOffline =  {
    name: 'ImOnline.SomeOffline',
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    v70: new EventType(
        'ImOnline.SomeOffline',
        sts.struct({
            offline: sts.array(() => sts.tuple(() => [v70.AccountId32, v70.Exposure])),
        })
    ),
}
