import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const locked =  {
    name: 'CeresLiquidityLocker.Locked',
    /**
     * Funds Locked [who, amount, timestamp]
     */
    v70: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v70.AccountId32, sts.bigint(), sts.bigint()])
    ),
}
