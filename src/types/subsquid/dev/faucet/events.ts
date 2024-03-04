import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const transferred =  {
    name: 'Faucet.Transferred',
    v70: new EventType(
        'Faucet.Transferred',
        sts.tuple([v70.AccountId32, sts.bigint()])
    ),
}

export const limitUpdated =  {
    name: 'Faucet.LimitUpdated',
    v70: new EventType(
        'Faucet.LimitUpdated',
        sts.bigint()
    ),
}
