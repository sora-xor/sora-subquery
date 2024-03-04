import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'

export const locked =  {
    name: 'CeresLiquidityLocker.Locked',
    /**
     *  Funds Locked [who, amount, block]
     */
    v33: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v33.AccountId, v33.Balance, v33.BlockNumber])
    ),
    /**
     *  Funds Locked [who, amount, timestamp]
     */
    v37: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v37.AccountId, v37.Balance, v37.Moment])
    ),
}
