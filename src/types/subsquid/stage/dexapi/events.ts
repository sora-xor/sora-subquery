import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v69 from '../v69'

export const liquiditySourceEnabled =  {
    name: 'DEXAPI.LiquiditySourceEnabled',
    /**
     * Liquidity source is enabled
     */
    v69: new EventType(
        'DEXAPI.LiquiditySourceEnabled',
        v69.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'DEXAPI.LiquiditySourceDisabled',
    /**
     * Liquidity source is disabled
     */
    v69: new EventType(
        'DEXAPI.LiquiditySourceDisabled',
        v69.LiquiditySourceType
    ),
}
