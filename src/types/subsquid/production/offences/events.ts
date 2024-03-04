import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const offence =  {
    name: 'Offences.Offence',
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false)
     *  \[kind, timeslot, applied\].
     */
    v1: new EventType(
        'Offences.Offence',
        sts.tuple([v1.Kind, v1.OpaqueTimeSlot, sts.boolean()])
    ),
    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    v42: new EventType(
        'Offences.Offence',
        sts.struct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        })
    ),
}
