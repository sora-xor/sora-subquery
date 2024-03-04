import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v22 from '../v22'
import * as v37 from '../v37'

export const locked =  {
    name: 'CeresLiquidityLocker.Locked',
    /**
     *  Funds Locked [who, amount, block]
     */
    v22: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v22.AccountId, v22.Balance, v22.BlockNumber])
    ),
    /**
     *  Funds Locked [who, amount, timestamp]
     */
    v37: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v37.AccountId, v37.Balance, v37.Moment])
    ),
}
