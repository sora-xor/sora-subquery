import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v69 from '../v69'

export const enableLiquiditySource =  {
    name: 'DEXAPI.enable_liquidity_source',
    v69: new CallType(
        'DEXAPI.enable_liquidity_source',
        sts.struct({
            source: v69.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'DEXAPI.disable_liquidity_source',
    v69: new CallType(
        'DEXAPI.disable_liquidity_source',
        sts.struct({
            source: v69.LiquiditySourceType,
        })
    ),
}
