import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const exchange =  {
    name: 'LiquidityProxy.Exchange',
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v70: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v70.AccountId32, sts.number(), v70.AssetId32, v70.AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => v70.LiquiditySourceId)])
    ),
}

export const liquiditySourceEnabled =  {
    name: 'LiquidityProxy.LiquiditySourceEnabled',
    /**
     * Liquidity source was enabled
     */
    v70: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v70.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'LiquidityProxy.LiquiditySourceDisabled',
    /**
     * Liquidity source was disabled
     */
    v70: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v70.LiquiditySourceType
    ),
}

export const batchSwapExecuted =  {
    name: 'LiquidityProxy.BatchSwapExecuted',
    /**
     * Batch of swap transfers has been performed
     * [Input asset ADAR Fee, Input amount]
     */
    v70: new EventType(
        'LiquidityProxy.BatchSwapExecuted',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
}

export const xorlessTransfer =  {
    name: 'LiquidityProxy.XorlessTransfer',
    /**
     * XORless transfer has been performed
     * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
     */
    v70: new EventType(
        'LiquidityProxy.XorlessTransfer',
        sts.tuple([v70.AssetId32, v70.AccountId32, v70.AccountId32, sts.bigint(), sts.option(() => v70.BoundedVec)])
    ),
}

export const adarFeeWithdrawn =  {
    name: 'LiquidityProxy.ADARFeeWithdrawn',
    /**
     * ADAR fee which is withdrawn from reused outcome asset amount
     * [Asset Id, ADAR Fee]
     */
    v70: new EventType(
        'LiquidityProxy.ADARFeeWithdrawn',
        sts.tuple([v70.AssetId32, sts.bigint()])
    ),
}
