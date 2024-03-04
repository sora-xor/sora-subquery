import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const eraPayout =  {
    name: 'Staking.EraPayout',
    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    v33: new EventType(
        'Staking.EraPayout',
        sts.tuple([v33.EraIndex, v33.MultiCurrencyBalance])
    ),
}

export const reward =  {
    name: 'Staking.Reward',
    /**
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    v33: new EventType(
        'Staking.Reward',
        sts.tuple([v33.AccountId, v33.MultiCurrencyBalance])
    ),
}

export const slash =  {
    name: 'Staking.Slash',
    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    v33: new EventType(
        'Staking.Slash',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
}

export const oldSlashingReportDiscarded =  {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed. \[session_index\]
     */
    v33: new EventType(
        'Staking.OldSlashingReportDiscarded',
        v33.SessionIndex
    ),
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    v52: new EventType(
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
    v33: new EventType(
        'Staking.StakingElection',
        v33.ElectionCompute
    ),
}

export const solutionStored =  {
    name: 'Staking.SolutionStored',
    /**
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    v33: new EventType(
        'Staking.SolutionStored',
        v33.ElectionCompute
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
    v33: new EventType(
        'Staking.Bonded',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v52: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'Staking.Unbonded',
    /**
     *  An account has unbonded this amount. \[stash, amount\]
     */
    v33: new EventType(
        'Staking.Unbonded',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
    /**
     * An account has unbonded this amount.
     */
    v52: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: v52.AccountId32,
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
    v33: new EventType(
        'Staking.Withdrawn',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    v52: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked =  {
    name: 'Staking.Kicked',
    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    v33: new EventType(
        'Staking.Kicked',
        sts.tuple([v33.AccountId, v33.AccountId])
    ),
    /**
     * A nominator has been kicked from a validator.
     */
    v52: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: v52.AccountId32,
            stash: v52.AccountId32,
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
    v52: new EventType(
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
    v52: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v52.AccountId32,
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
    v52: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: v52.AccountId32,
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
    v52: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: v52.AccountId32,
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
    v52: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: v52.AccountId32,
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
    v52: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: v52.AccountId32,
            prefs: v52.ValidatorPrefs,
        })
    ),
}

export const slashReported =  {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    v52: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: v52.AccountId32,
            fraction: v52.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const forceEra =  {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    v52: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: v52.Forcing,
        })
    ),
}
