import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'

export const transferred =  {
    name: 'Faucet.Transferred',
    v33: new EventType(
        'Faucet.Transferred',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
}

export const limitUpdated =  {
    name: 'Faucet.LimitUpdated',
    v37: new EventType(
        'Faucet.LimitUpdated',
        v37.Balance
    ),
}
