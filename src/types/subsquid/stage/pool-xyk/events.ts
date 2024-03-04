import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const poolIsInitialized =  {
    name: 'PoolXYK.PoolIsInitialized',
    v33: new EventType(
        'PoolXYK.PoolIsInitialized',
        v33.AccountId
    ),
}
