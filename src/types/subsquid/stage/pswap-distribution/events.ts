import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v52 from '../v52'

export const feesExchanged =  {
    name: 'PswapDistribution.FeesExchanged',
    /**
     *  Fees successfully exchanged for appropriate amount of pool tokens.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    v33: new EventType(
        'PswapDistribution.FeesExchanged',
        sts.tuple([v33.DEXId, v33.AccountId, v33.AssetId, v33.Balance, v33.AssetId, v33.Balance])
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
    v33: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([v33.DEXId, v33.AccountId, v33.AssetId, v33.Balance, v33.AssetId])
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
    v52: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([sts.number(), v52.AccountId32, v52.AssetId32, sts.bigint(), v52.AssetId32, v52.DispatchError])
    ),
}

export const incentiveDistributed =  {
    name: 'PswapDistribution.IncentiveDistributed',
    /**
     *  Incentives successfully sent out to shareholders.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    v33: new EventType(
        'PswapDistribution.IncentiveDistributed',
        sts.tuple([v33.DEXId, v33.AccountId, v33.AssetId, v33.Balance, sts.bigint()])
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
     *  [DEX Id, Fees Account Id]
     */
    v33: new EventType(
        'PswapDistribution.IncentiveDistributionFailed',
        sts.tuple([v33.DEXId, v33.AccountId])
    ),
}

export const burnRateChanged =  {
    name: 'PswapDistribution.BurnRateChanged',
    /**
     *  Burn rate updated.
     *  [Current Burn Rate]
     */
    v33: new EventType(
        'PswapDistribution.BurnRateChanged',
        v33.Fixed
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
    v33: new EventType(
        'PswapDistribution.NothingToExchange',
        sts.tuple([v33.DEXId, v33.AccountId])
    ),
}

export const nothingToDistribute =  {
    name: 'PswapDistribution.NothingToDistribute',
    /**
     *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    v33: new EventType(
        'PswapDistribution.NothingToDistribute',
        sts.tuple([v33.DEXId, v33.AccountId])
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
    v33: new EventType(
        'PswapDistribution.IncentivesBurnedAfterExchange',
        sts.tuple([v33.DEXId, v33.AssetId, v33.Balance, v33.Balance])
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
