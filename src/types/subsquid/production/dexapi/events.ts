import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v70 from '../v70'

export const directExchange =  {
    name: 'DEXAPI.DirectExchange',
    /**
     *  Exchange of tokens has been performed
     *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v1: new EventType(
        'DEXAPI.DirectExchange',
        sts.tuple([v1.AccountId, v1.AccountId, v1.DEXId, v1.LiquiditySourceType, v1.AssetId, v1.AssetId, v1.Balance, v1.Balance, v1.Balance])
    ),
}

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
