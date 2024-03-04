import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v8 from '../v8'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v53 from '../v53'

export const feesExchanged =  {
    name: 'PswapDistribution.FeesExchanged',
    /**
     *  Fees successfully exchanged for appropriate amount of pool tokens.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    v1: new EventType(
        'PswapDistribution.FeesExchanged',
        sts.tuple([v1.DEXId, v1.AccountId, v1.AssetId, v1.Balance, v1.AssetId, v1.Balance])
    ),
    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    v42: new EventType(
        'PswapDistribution.FeesExchanged',
        sts.tuple([sts.number(), v42.AccountId32, v42.AssetId32, sts.bigint(), v42.AssetId32, sts.bigint()])
    ),
}

export const feesExchangeFailed =  {
    name: 'PswapDistribution.FeesExchangeFailed',
    /**
     *  Problem occurred that resulted in fees exchange not done.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    v1: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([v1.DEXId, v1.AccountId, v1.AssetId, v1.Balance, v1.AssetId])
    ),
    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    v42: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([sts.number(), v42.AccountId32, v42.AssetId32, sts.bigint(), v42.AssetId32])
    ),
    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    v46: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([sts.number(), v46.AccountId32, v46.AssetId32, sts.bigint(), v46.AssetId32, v46.DispatchError])
    ),
    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    v53: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([sts.number(), v53.AccountId32, v53.AssetId32, sts.bigint(), v53.AssetId32, v53.DispatchError])
    ),
}

export const incentiveDistributed =  {
    name: 'PswapDistribution.IncentiveDistributed',
    /**
     *  Incentives successfully sent out to shareholders.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    v1: new EventType(
        'PswapDistribution.IncentiveDistributed',
        sts.tuple([v1.DEXId, v1.AccountId, v1.AssetId, v1.Balance, sts.bigint()])
    ),
    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    v42: new EventType(
        'PswapDistribution.IncentiveDistributed',
        sts.tuple([sts.number(), v42.AccountId32, v42.AssetId32, sts.bigint(), sts.bigint()])
    ),
}

export const incentiveDistributionFailed =  {
    name: 'PswapDistribution.IncentiveDistributionFailed',
    /**
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Available Incentive Amount]
     */
    v1: new EventType(
        'PswapDistribution.IncentiveDistributionFailed',
        sts.tuple([v1.DEXId, v1.AccountId, v1.AssetId, v1.Balance])
    ),
    /**
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id]
     */
    v8: new EventType(
        'PswapDistribution.IncentiveDistributionFailed',
        sts.tuple([v8.DEXId, v8.AccountId])
    ),
}

export const burnRateChanged =  {
    name: 'PswapDistribution.BurnRateChanged',
    /**
     *  Burn rate updated.
     *  [Current Burn Rate]
     */
    v1: new EventType(
        'PswapDistribution.BurnRateChanged',
        v1.Fixed
    ),
    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    v42: new EventType(
        'PswapDistribution.BurnRateChanged',
        v42.FixedPoint
    ),
}

export const nothingToExchange =  {
    name: 'PswapDistribution.NothingToExchange',
    /**
     *  Fees Account contains zero base tokens, thus exchange is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    v1: new EventType(
        'PswapDistribution.NothingToExchange',
        sts.tuple([v1.DEXId, v1.AccountId])
    ),
}

export const nothingToDistribute =  {
    name: 'PswapDistribution.NothingToDistribute',
    /**
     *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    v1: new EventType(
        'PswapDistribution.NothingToDistribute',
        sts.tuple([v1.DEXId, v1.AccountId])
    ),
}

export const incentivesBurnedAfterExchange =  {
    name: 'PswapDistribution.IncentivesBurnedAfterExchange',
    /**
     *  This is needed for other pallet that will use this variables, for example this is
     *  farming pallet.
     *  [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     *  Incentives burned (Incentives that is not revived (to burn)]).
     */
    v1: new EventType(
        'PswapDistribution.IncentivesBurnedAfterExchange',
        sts.tuple([v1.DEXId, v1.AssetId, v1.Balance, v1.Balance])
    ),
    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    v42: new EventType(
        'PswapDistribution.IncentivesBurnedAfterExchange',
        sts.tuple([sts.number(), v42.AssetId32, sts.bigint(), sts.bigint()])
    ),
}
