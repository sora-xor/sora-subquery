import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const burned =  {
    name: 'EthApp.Burned',
    v52: new EventType(
        'EthApp.Burned',
        sts.tuple([sts.bigint(), v52.AccountId32, v52.H160, sts.bigint()])
    ),
}

export const minted =  {
    name: 'EthApp.Minted',
    v52: new EventType(
        'EthApp.Minted',
        sts.tuple([sts.bigint(), v52.H160, v52.AccountId32, sts.bigint()])
    ),
}

export const refunded =  {
    name: 'EthApp.Refunded',
    v52: new EventType(
        'EthApp.Refunded',
        sts.tuple([sts.bigint(), v52.AccountId32, sts.bigint()])
    ),
}
