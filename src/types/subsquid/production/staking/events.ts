import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const eraPayout =  {
    name: 'Staking.EraPayout',
    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    v1: new EventType(
        'Staking.EraPayout',
        sts.tuple([v1.EraIndex, v1.MultiCurrencyBalance])
    ),
}

export const reward =  {
    name: 'Staking.Reward',
    /**
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    v1: new EventType(
        'Staking.Reward',
        sts.tuple([v1.AccountId, v1.MultiCurrencyBalance])
    ),
}

export const slash =  {
    name: 'Staking.Slash',
    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    v1: new EventType(
        'Staking.Slash',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
}

export const oldSlashingReportDiscarded =  {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed. \[session_index\]
     */
    v1: new EventType(
        'Staking.OldSlashingReportDiscarded',
        v1.SessionIndex
    ),
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    v53: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const stakingElection =  {
    name: 'Staking.StakingElection',
    /**
     *  A new set of stakers was elected with the given \[compute\].
     */
    v1: new EventType(
        'Staking.StakingElection',
        v1.ElectionCompute
    ),
}

export const solutionStored =  {
    name: 'Staking.SolutionStored',
    /**
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    v1: new EventType(
        'Staking.SolutionStored',
        v1.ElectionCompute
    ),
}

export const bonded =  {
    name: 'Staking.Bonded',
    /**
     *  An account has bonded this amount. \[stash, amount\]
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    v1: new EventType(
        'Staking.Bonded',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v53: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: v53.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'Staking.Unbonded',
    /**
     *  An account has unbonded this amount. \[stash, amount\]
     */
    v1: new EventType(
        'Staking.Unbonded',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * An account has unbonded this amount.
     */
    v53: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: v53.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Staking.Withdrawn',
    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue. \[stash, amount\]
     */
    v1: new EventType(
        'Staking.Withdrawn',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    v53: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: v53.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked =  {
    name: 'Staking.Kicked',
    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    v1: new EventType(
        'Staking.Kicked',
        sts.tuple([v1.AccountId, v1.AccountId])
    ),
    /**
     * A nominator has been kicked from a validator.
     */
    v53: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: v53.AccountId32,
            stash: v53.AccountId32,
        })
    ),
}

export const eraPaid =  {
    name: 'Staking.EraPaid',
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    v42: new EventType(
        'Staking.EraPaid',
        sts.tuple([sts.number(), sts.bigint()])
    ),
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    v53: new EventType(
        'Staking.EraPaid',
        sts.struct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
        })
    ),
}

export const rewarded =  {
    name: 'Staking.Rewarded',
    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    v42: new EventType(
        'Staking.Rewarded',
        sts.tuple([v42.AccountId32, sts.bigint()])
    ),
    /**
     * The nominator has been rewarded by this amount.
     */
    v53: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v53.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Staking.Slashed',
    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    v42: new EventType(
        'Staking.Slashed',
        sts.tuple([v42.AccountId32, sts.bigint()])
    ),
    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    v53: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: v53.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const stakersElected =  {
    name: 'Staking.StakersElected',
    /**
     * A new set of stakers was elected.
     */
    v42: new EventType(
        'Staking.StakersElected',
        sts.unit()
    ),
}

export const stakingElectionFailed =  {
    name: 'Staking.StakingElectionFailed',
    /**
     * The election failed. No new era is planned.
     */
    v42: new EventType(
        'Staking.StakingElectionFailed',
        sts.unit()
    ),
}

export const chilled =  {
    name: 'Staking.Chilled',
    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    v42: new EventType(
        'Staking.Chilled',
        v42.AccountId32
    ),
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    v53: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: v53.AccountId32,
        })
    ),
}

export const payoutStarted =  {
    name: 'Staking.PayoutStarted',
    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    v42: new EventType(
        'Staking.PayoutStarted',
        sts.tuple([sts.number(), v42.AccountId32])
    ),
    /**
     * The stakers' rewards are getting paid.
     */
    v53: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: v53.AccountId32,
        })
    ),
}

export const validatorPrefsSet =  {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    v42: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.tuple([v42.AccountId32, v42.ValidatorPrefs])
    ),
    /**
     * A validator has set their preferences.
     */
    v53: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: v53.AccountId32,
            prefs: v53.ValidatorPrefs,
        })
    ),
}

export const slashReported =  {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    v53: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: v53.AccountId32,
            fraction: v53.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const forceEra =  {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    v53: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: v53.Forcing,
        })
    ),
}
