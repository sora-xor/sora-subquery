import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v52 from '../v52'

export const claimRewards =  {
    name: 'VestedRewards.claim_rewards',
    /**
     *  Claim all available PSWAP rewards by account signing this transaction.
     */
    v33: new CallType(
        'VestedRewards.claim_rewards',
        sts.unit()
    ),
}

export const claimCrowdloanRewards =  {
    name: 'VestedRewards.claim_crowdloan_rewards',
    v33: new CallType(
        'VestedRewards.claim_crowdloan_rewards',
        sts.struct({
            assetId: v33.AssetId,
        })
    ),
    v42: new CallType(
        'VestedRewards.claim_crowdloan_rewards',
        sts.struct({
            assetId: v42.AssetId32,
        })
    ),
    v52: new CallType(
        'VestedRewards.claim_crowdloan_rewards',
        sts.struct({
            crowdloan: v52.CrowdloanTag,
        })
    ),
}

export const injectMarketMakers =  {
    name: 'VestedRewards.inject_market_makers',
    /**
     *  Inject market makers snapshot into storage.
     */
    v33: new CallType(
        'VestedRewards.inject_market_makers',
        sts.struct({
            snapshot: sts.array(() => sts.tuple(() => [v33.AccountId, sts.number(), v33.Balance])),
        })
    ),
}

export const setAssetPair =  {
    name: 'VestedRewards.set_asset_pair',
    /**
     *  Allow/disallow a market making pair.
     */
    v33: new CallType(
        'VestedRewards.set_asset_pair',
        sts.struct({
            fromAssetId: v33.AssetId,
            toAssetId: v33.AssetId,
            marketMakingRewardsAllowed: sts.boolean(),
        })
    ),
    /**
     * Allow/disallow a market making pair.
     */
    v42: new CallType(
        'VestedRewards.set_asset_pair',
        sts.struct({
            fromAssetId: v42.AssetId32,
            toAssetId: v42.AssetId32,
            marketMakingRewardsAllowed: sts.boolean(),
        })
    ),
}

export const updateRewards =  {
    name: 'VestedRewards.update_rewards',
    v46: new CallType(
        'VestedRewards.update_rewards',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v46.AccountId32, sts.array(() => sts.tuple(() => [v46.RewardReason, sts.bigint()]))])),
        })
    ),
}

export const registerCrowdloan =  {
    name: 'VestedRewards.register_crowdloan',
    v52: new CallType(
        'VestedRewards.register_crowdloan',
        sts.struct({
            tag: v52.CrowdloanTag,
            startBlock: sts.number(),
            length: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [v52.AssetId32, sts.bigint()])),
            contributions: sts.array(() => sts.tuple(() => [v52.AccountId32, sts.bigint()])),
        })
    ),
}
