import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const liquiditySourceEnabled =  {
    name: 'DEXAPI.LiquiditySourceEnabled',
    /**
     * Liquidity source is enabled
     */
    v70: new EventType(
        'DEXAPI.LiquiditySourceEnabled',
        v70.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'DEXAPI.LiquiditySourceDisabled',
    /**
     * Liquidity source is disabled
     */
    v70: new EventType(
        'DEXAPI.LiquiditySourceDisabled',
        v70.LiquiditySourceType
    ),
}
