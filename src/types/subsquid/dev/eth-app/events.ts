import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const burned =  {
    name: 'EthApp.Burned',
    v70: new EventType(
        'EthApp.Burned',
        sts.tuple([sts.bigint(), v70.AccountId32, v70.H160, sts.bigint()])
    ),
}

export const minted =  {
    name: 'EthApp.Minted',
    v70: new EventType(
        'EthApp.Minted',
        sts.tuple([sts.bigint(), v70.H160, v70.AccountId32, sts.bigint()])
    ),
}

export const refunded =  {
    name: 'EthApp.Refunded',
    v70: new EventType(
        'EthApp.Refunded',
        sts.tuple([sts.bigint(), v70.AccountId32, sts.bigint()])
    ),
}
