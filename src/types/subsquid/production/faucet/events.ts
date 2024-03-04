import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const transferred =  {
    name: 'Faucet.Transferred',
    v22: new EventType(
        'Faucet.Transferred',
        sts.tuple([v22.AccountId, v22.Balance])
    ),
}
