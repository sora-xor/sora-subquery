import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const createIlo =  {
    name: 'CeresLaunchpad.create_ilo',
    /**
     * Create ILO
     */
    v70: new CallType(
        'CeresLaunchpad.create_ilo',
        sts.struct({
            baseAsset: v70.AssetId32,
            assetId: v70.AssetId32,
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
     * Contribute
     */
    v70: new CallType(
        'CeresLaunchpad.contribute',
        sts.struct({
            assetId: v70.AssetId32,
            fundsToContribute: sts.bigint(),
        })
    ),
}

export const emergencyWithdraw =  {
    name: 'CeresLaunchpad.emergency_withdraw',
    /**
     * Emergency withdraw
     */
    v70: new CallType(
        'CeresLaunchpad.emergency_withdraw',
        sts.struct({
            assetId: v70.AssetId32,
        })
    ),
}

export const finishIlo =  {
    name: 'CeresLaunchpad.finish_ilo',
    /**
     * Finish ILO
     */
    v70: new CallType(
        'CeresLaunchpad.finish_ilo',
        sts.struct({
            assetId: v70.AssetId32,
        })
    ),
}

export const claimLpTokens =  {
    name: 'CeresLaunchpad.claim_lp_tokens',
    /**
     * Claim LP tokens
     */
    v70: new CallType(
        'CeresLaunchpad.claim_lp_tokens',
        sts.struct({
            assetId: v70.AssetId32,
        })
    ),
}

export const claim =  {
    name: 'CeresLaunchpad.claim',
    /**
     * Claim tokens
     */
    v70: new CallType(
        'CeresLaunchpad.claim',
        sts.struct({
            assetId: v70.AssetId32,
        })
    ),
}

export const changeFeePercentForRaisedFunds =  {
    name: 'CeresLaunchpad.change_fee_percent_for_raised_funds',
    /**
     * Change fee percent on raised funds in successful ILO
     */
    v70: new CallType(
        'CeresLaunchpad.change_fee_percent_for_raised_funds',
        sts.struct({
            feePercent: sts.bigint(),
        })
    ),
}

export const changeCeresBurnFee =  {
    name: 'CeresLaunchpad.change_ceres_burn_fee',
    /**
     * Change CERES burn fee
     */
    v70: new CallType(
        'CeresLaunchpad.change_ceres_burn_fee',
        sts.struct({
            ceresFee: sts.bigint(),
        })
    ),
}

export const changeCeresContributionFee =  {
    name: 'CeresLaunchpad.change_ceres_contribution_fee',
    /**
     * Change CERES contribution fee
     */
    v70: new CallType(
        'CeresLaunchpad.change_ceres_contribution_fee',
        sts.struct({
            ceresFee: sts.bigint(),
        })
    ),
}

export const claimPswapRewards =  {
    name: 'CeresLaunchpad.claim_pswap_rewards',
    /**
     * Claim PSWAP rewards
     */
    v70: new CallType(
        'CeresLaunchpad.claim_pswap_rewards',
        sts.unit()
    ),
}

export const addWhitelistedContributor =  {
    name: 'CeresLaunchpad.add_whitelisted_contributor',
    /**
     * Add whitelisted contributor
     */
    v70: new CallType(
        'CeresLaunchpad.add_whitelisted_contributor',
        sts.struct({
            contributor: v70.AccountId32,
        })
    ),
}

export const removeWhitelistedContributor =  {
    name: 'CeresLaunchpad.remove_whitelisted_contributor',
    /**
     * Remove whitelisted contributor
     */
    v70: new CallType(
        'CeresLaunchpad.remove_whitelisted_contributor',
        sts.struct({
            contributor: v70.AccountId32,
        })
    ),
}

export const addWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.add_whitelisted_ilo_organizer',
    /**
     * Add whitelisted ILO organizer
     */
    v70: new CallType(
        'CeresLaunchpad.add_whitelisted_ilo_organizer',
        sts.struct({
            iloOrganizer: v70.AccountId32,
        })
    ),
}

export const removeWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.remove_whitelisted_ilo_organizer',
    /**
     * Remove whitelisted ILO organizer
     */
    v70: new CallType(
        'CeresLaunchpad.remove_whitelisted_ilo_organizer',
        sts.struct({
            iloOrganizer: v70.AccountId32,
        })
    ),
}
