import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enableLiquiditySource =  {
    name: 'DEXAPI.enable_liquidity_source',
    v70: new CallType(
        'DEXAPI.enable_liquidity_source',
        sts.struct({
            source: v70.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'DEXAPI.disable_liquidity_source',
    v70: new CallType(
        'DEXAPI.disable_liquidity_source',
        sts.struct({
            source: v70.LiquiditySourceType,
        })
    ),
}
