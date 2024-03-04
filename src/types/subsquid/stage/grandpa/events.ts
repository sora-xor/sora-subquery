import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const newAuthorities =  {
    name: 'Grandpa.NewAuthorities',
    /**
     *  New authority set has been applied. \[authority_set\]
     */
    v33: new EventType(
        'Grandpa.NewAuthorities',
        sts.array(() => v33.NextAuthority)
    ),
    /**
     * New authority set has been applied.
     */
    v42: new EventType(
        'Grandpa.NewAuthorities',
        sts.struct({
            authoritySet: sts.array(() => sts.tuple(() => [v42.Public, sts.bigint()])),
        })
    ),
}

export const paused =  {
    name: 'Grandpa.Paused',
    /**
     *  Current authority set has been paused.
     */
    v33: new EventType(
        'Grandpa.Paused',
        sts.unit()
    ),
}

export const resumed =  {
    name: 'Grandpa.Resumed',
    /**
     *  Current authority set has been resumed.
     */
    v33: new EventType(
        'Grandpa.Resumed',
        sts.unit()
    ),
}
