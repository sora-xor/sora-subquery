import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const poolIsInitialized =  {
    name: 'PoolXYK.PoolIsInitialized',
    v1: new EventType(
        'PoolXYK.PoolIsInitialized',
        v1.AccountId
    ),
}
