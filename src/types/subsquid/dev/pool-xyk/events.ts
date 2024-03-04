import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const poolIsInitialized =  {
    name: 'PoolXYK.PoolIsInitialized',
    v70: new EventType(
        'PoolXYK.PoolIsInitialized',
        v70.AccountId32
    ),
}
