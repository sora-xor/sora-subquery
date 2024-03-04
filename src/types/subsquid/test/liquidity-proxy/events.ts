import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v66 from '../v66'
import * as v67 from '../v67'
import * as v69 from '../v69'

export const exchange =  {
    name: 'LiquidityProxy.Exchange',
    /**
     *  Exchange of tokens has been performed
     *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v33: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v33.AccountId, v33.DEXId, v33.AssetId, v33.AssetId, v33.Balance, v33.Balance, v33.Balance])
    ),
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v42: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v42.AccountId32, sts.number(), v42.AssetId32, v42.AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => v42.LiquiditySourceId)])
    ),
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v69: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v69.AccountId32, sts.number(), v69.AssetId32, v69.AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => v69.LiquiditySourceId)])
    ),
}

export const liquiditySourceEnabled =  {
    name: 'LiquidityProxy.LiquiditySourceEnabled',
    /**
     *  Liquidity source was enabled
     */
    v38: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v38.LiquiditySourceType
    ),
    /**
     * Liquidity source was enabled
     */
    v69: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v69.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'LiquidityProxy.LiquiditySourceDisabled',
    /**
     *  Liquidity source was disabled
     */
    v38: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v38.LiquiditySourceType
    ),
    /**
     * Liquidity source was disabled
     */
    v69: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v69.LiquiditySourceType
    ),
}

export const batchSwapExecuted =  {
    name: 'LiquidityProxy.BatchSwapExecuted',
    /**
     * Batch of swap transfers has been performed
     * [ADAR Fee, Input amount]
     */
    v55: new EventType(
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
    v66: new EventType(
        'LiquidityProxy.XorlessTransfer',
        sts.tuple([v66.AssetId32, v66.AccountId32, v66.AccountId32, sts.bigint(), sts.option(() => v66.BoundedVec)])
    ),
}

export const adarFeeWithdrawn =  {
    name: 'LiquidityProxy.ADARFeeWithdrawn',
    /**
     * ADAR fee which is withdrawn from reused outcome asset amount
     * [Asset Id, ADAR Fee]
     */
    v67: new EventType(
        'LiquidityProxy.ADARFeeWithdrawn',
        sts.tuple([v67.AssetId32, sts.bigint()])
    ),
}
