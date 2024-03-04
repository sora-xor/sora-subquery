import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'
import * as v47 from '../v47'

export const createIlo =  {
    name: 'CeresLaunchpad.create_ilo',
    /**
     *  Create ILO
     */
    v26: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            assetId: v26.AssetIdOf,
            tokensForIlo: v26.Balance,
            tokensForLiquidity: v26.Balance,
            iloPrice: v26.Balance,
            softCap: v26.Balance,
            hardCap: v26.Balance,
            minContribution: v26.Balance,
            maxContribution: v26.Balance,
            refundType: sts.boolean(),
            liquidityPercent: v26.Balance,
            listingPrice: v26.Balance,
            lockupDays: sts.number(),
            startBlock: v26.BlockNumber,
            endBlock: v26.BlockNumber,
            firstReleasePercent: v26.Balance,
            vestingPeriod: v26.BlockNumber,
            vestingPercent: v26.Balance,
        })
    ),
    /**
     *  Create ILO
     */
    v33: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            assetId: v33.AssetIdOf,
            tokensForIlo: v33.Balance,
            tokensForLiquidity: v33.Balance,
            iloPrice: v33.Balance,
            softCap: v33.Balance,
            hardCap: v33.Balance,
            minContribution: v33.Balance,
            maxContribution: v33.Balance,
            refundType: sts.boolean(),
            liquidityPercent: v33.Balance,
            listingPrice: v33.Balance,
            lockupDays: sts.number(),
            startBlock: v33.BlockNumber,
            endBlock: v33.BlockNumber,
            teamVestingTotalTokens: v33.Balance,
            teamVestingFirstReleasePercent: v33.Balance,
            teamVestingPeriod: v33.BlockNumber,
            teamVestingPercent: v33.Balance,
            firstReleasePercent: v33.Balance,
            vestingPeriod: v33.BlockNumber,
            vestingPercent: v33.Balance,
        })
    ),
    /**
     *  Create ILO
     */
    v37: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            assetId: v37.AssetIdOf,
            tokensForIlo: v37.Balance,
            tokensForLiquidity: v37.Balance,
            iloPrice: v37.Balance,
            softCap: v37.Balance,
            hardCap: v37.Balance,
            minContribution: v37.Balance,
            maxContribution: v37.Balance,
            refundType: sts.boolean(),
            liquidityPercent: v37.Balance,
            listingPrice: v37.Balance,
            lockupDays: sts.number(),
            startTimestamp: v37.Moment,
            endTimestamp: v37.Moment,
            teamVestingTotalTokens: v37.Balance,
            teamVestingFirstReleasePercent: v37.Balance,
            teamVestingPeriod: v37.Moment,
            teamVestingPercent: v37.Balance,
            firstReleasePercent: v37.Balance,
            vestingPeriod: v37.Moment,
            vestingPercent: v37.Balance,
        })
    ),
    /**
     * Create ILO
     */
    v42: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            assetId: v42.AssetId32,
            tokensForIlo: sts.bigint(),
            tokensForLiquidity: sts.bigint(),
            iloPrice: sts.bigint(),
            softCap: sts.bigint(),
            hardCap: sts.bigint(),
            minContribution: sts.bigint(),
            maxContribution: sts.bigint(),
            refundType: sts.boolean(),
            liquidityPercent: sts.bigint(),
            listingPrice: sts.bigint(),
            lockupDays: sts.number(),
            startTimestamp: sts.bigint(),
            endTimestamp: sts.bigint(),
            teamVestingTotalTokens: sts.bigint(),
            teamVestingFirstReleasePercent: sts.bigint(),
            teamVestingPeriod: sts.bigint(),
            teamVestingPercent: sts.bigint(),
            firstReleasePercent: sts.bigint(),
            vestingPeriod: sts.bigint(),
            vestingPercent: sts.bigint(),
        })
    ),
    /**
     * Create ILO
     */
    v47: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            baseAsset: v47.AssetId32,
            assetId: v47.AssetId32,
            tokensForIlo: sts.bigint(),
            tokensForLiquidity: sts.bigint(),
            iloPrice: sts.bigint(),
            softCap: sts.bigint(),
            hardCap: sts.bigint(),
            minContribution: sts.bigint(),
            maxContribution: sts.bigint(),
            refundType: sts.boolean(),
            liquidityPercent: sts.bigint(),
            listingPrice: sts.bigint(),
            lockupDays: sts.number(),
            startTimestamp: sts.bigint(),
            endTimestamp: sts.bigint(),
            teamVestingTotalTokens: sts.bigint(),
            teamVestingFirstReleasePercent: sts.bigint(),
            teamVestingPeriod: sts.bigint(),
            teamVestingPercent: sts.bigint(),
            firstReleasePercent: sts.bigint(),
            vestingPeriod: sts.bigint(),
            vestingPercent: sts.bigint(),
        })
    ),
}

export const contribute =  {
    name: 'CeresLaunchpad.contribute',
    /**
     *  Contribute
     */
    v26: new CallType(
        'CeresLaunchpad.contribute',
        sts.struct({
            assetId: v26.AssetIdOf,
            fundsToContribute: v26.Balance,
        })
    ),
    /**
     * Contribute
     */
    v42: new CallType(
        'CeresLaunchpad.contribute',
        sts.struct({
            assetId: v42.AssetId32,
            fundsToContribute: sts.bigint(),
        })
    ),
}

export const emergencyWithdraw =  {
    name: 'CeresLaunchpad.emergency_withdraw',
    /**
     *  Emergency withdraw
     */
    v26: new CallType(
        'CeresLaunchpad.emergency_withdraw',
        sts.struct({
            assetId: v26.AssetIdOf,
        })
    ),
    /**
     * Emergency withdraw
     */
    v42: new CallType(
        'CeresLaunchpad.emergency_withdraw',
        sts.struct({
            assetId: v42.AssetId32,
        })
    ),
}

export const finishIlo =  {
    name: 'CeresLaunchpad.finish_ilo',
    /**
     *  Finish ILO
     */
    v26: new CallType(
        'CeresLaunchpad.finish_ilo',
        sts.struct({
            assetId: v26.AssetIdOf,
        })
    ),
    /**
     * Finish ILO
     */
    v42: new CallType(
        'CeresLaunchpad.finish_ilo',
        sts.struct({
            assetId: v42.AssetId32,
        })
    ),
}

export const claimLpTokens =  {
    name: 'CeresLaunchpad.claim_lp_tokens',
    /**
     *  Claim LP tokens
     */
    v26: new CallType(
        'CeresLaunchpad.claim_lp_tokens',
        sts.struct({
            assetId: v26.AssetIdOf,
        })
    ),
    /**
     * Claim LP tokens
     */
    v42: new CallType(
        'CeresLaunchpad.claim_lp_tokens',
        sts.struct({
            assetId: v42.AssetId32,
        })
    ),
}

export const claim =  {
    name: 'CeresLaunchpad.claim',
    /**
     *  Claim tokens
     */
    v26: new CallType(
        'CeresLaunchpad.claim',
        sts.struct({
            assetId: v26.AssetIdOf,
        })
    ),
    /**
     * Claim tokens
     */
    v42: new CallType(
        'CeresLaunchpad.claim',
        sts.struct({
            assetId: v42.AssetId32,
        })
    ),
}

export const changeCeresBurnFee =  {
    name: 'CeresLaunchpad.change_ceres_burn_fee',
    /**
     *  Change CERES burn fee
     */
    v26: new CallType(
        'CeresLaunchpad.change_ceres_burn_fee',
        sts.struct({
            ceresFee: v26.Balance,
        })
    ),
}

export const changeCeresContributionFee =  {
    name: 'CeresLaunchpad.change_ceres_contribution_fee',
    /**
     *  Change CERES contribution fee
     */
    v26: new CallType(
        'CeresLaunchpad.change_ceres_contribution_fee',
        sts.struct({
            ceresFee: v26.Balance,
        })
    ),
}

export const claimPswapRewards =  {
    name: 'CeresLaunchpad.claim_pswap_rewards',
    /**
     *  Claim PSWAP rewards
     */
    v26: new CallType(
        'CeresLaunchpad.claim_pswap_rewards',
        sts.unit()
    ),
}

export const addWhitelistedContributor =  {
    name: 'CeresLaunchpad.add_whitelisted_contributor',
    /**
     *  Add whitelisted contributor
     */
    v33: new CallType(
        'CeresLaunchpad.add_whitelisted_contributor',
        sts.struct({
            contributor: v33.AccountIdOf,
        })
    ),
}

export const removeWhitelistedContributor =  {
    name: 'CeresLaunchpad.remove_whitelisted_contributor',
    /**
     *  Remove whitelisted contributor
     */
    v33: new CallType(
        'CeresLaunchpad.remove_whitelisted_contributor',
        sts.struct({
            contributor: v33.AccountIdOf,
        })
    ),
}

export const addWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.add_whitelisted_ilo_organizer',
    /**
     *  Add whitelisted ILO organizer
     */
    v33: new CallType(
        'CeresLaunchpad.add_whitelisted_ilo_organizer',
        sts.struct({
            iloOrganizer: v33.AccountIdOf,
        })
    ),
}

export const removeWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.remove_whitelisted_ilo_organizer',
    /**
     *  Remove whitelisted ILO organizer
     */
    v33: new CallType(
        'CeresLaunchpad.remove_whitelisted_ilo_organizer',
        sts.struct({
            iloOrganizer: v33.AccountIdOf,
        })
    ),
}

export const changeFeePercentForRaisedFunds =  {
    name: 'CeresLaunchpad.change_fee_percent_for_raised_funds',
    /**
     * Change fee percent on raised funds in successful ILO
     */
    v47: new CallType(
        'CeresLaunchpad.change_fee_percent_for_raised_funds',
        sts.struct({
            feePercent: sts.bigint(),
        })
    ),
}
