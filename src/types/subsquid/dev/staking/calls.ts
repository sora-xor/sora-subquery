import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const bond =  {
    name: 'Staking.bond',
    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    v70: new CallType(
        'Staking.bond',
        sts.struct({
            controller: v70.AccountId32,
            value: sts.bigint(),
            payee: v70.RewardDestination,
        })
    ),
}

export const bondExtra =  {
    name: 'Staking.bond_extra',
    /**
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     * 
     * Emits `Bonded`.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     * # </weight>
     */
    v70: new CallType(
        'Staking.bond_extra',
        sts.struct({
            maxAdditional: sts.bigint(),
        })
    ),
}

export const unbond =  {
    name: 'Staking.unbond',
    /**
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     * 
     * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
     * can co-exists at the same time. If there are no unlocking chunks slots available
     * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
     * 
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     * 
     * Emits `Unbonded`.
     * 
     * See also [`Call::withdraw_unbonded`].
     */
    v70: new CallType(
        'Staking.unbond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'Staking.withdraw_unbonded',
    /**
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller.
     * 
     * Emits `Withdrawn`.
     * 
     * See also [`Call::unbond`].
     * 
     * # <weight>
     * Complexity O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     * # </weight>
     */
    v70: new CallType(
        'Staking.withdraw_unbonded',
        sts.struct({
            numSlashingSpans: sts.number(),
        })
    ),
}

export const validate =  {
    name: 'Staking.validate',
    /**
     * Declare the desire to validate for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    v70: new CallType(
        'Staking.validate',
        sts.struct({
            prefs: v70.ValidatorPrefs,
        })
    ),
}

export const nominate =  {
    name: 'Staking.nominate',
    /**
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    v70: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v70.AccountId32),
        })
    ),
}

export const chill =  {
    name: 'Staking.chill',
    /**
     * Declare no desire to either validate or nominate.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     * # </weight>
     */
    v70: new CallType(
        'Staking.chill',
        sts.unit()
    ),
}

export const setPayee =  {
    name: 'Staking.set_payee',
    /**
     * (Re-)set the payment target for a controller.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     * - Weight: O(1)
     * - DB Weight:
     *     - Read: Ledger
     *     - Write: Payee
     * # </weight>
     */
    v70: new CallType(
        'Staking.set_payee',
        sts.struct({
            payee: v70.RewardDestination,
        })
    ),
}

export const setController =  {
    name: 'Staking.set_controller',
    /**
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    v70: new CallType(
        'Staking.set_controller',
        sts.struct({
            controller: v70.AccountId32,
        })
    ),
}

export const setValidatorCount =  {
    name: 'Staking.set_validator_count',
    /**
     * Sets the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Weight: O(1)
     * Write: Validator Count
     * # </weight>
     */
    v70: new CallType(
        'Staking.set_validator_count',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const increaseValidatorCount =  {
    name: 'Staking.increase_validator_count',
    /**
     * Increments the ideal number of validators upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    v70: new CallType(
        'Staking.increase_validator_count',
        sts.struct({
            additional: sts.number(),
        })
    ),
}

export const scaleValidatorCount =  {
    name: 'Staking.scale_validator_count',
    /**
     * Scale up the ideal number of validators by a factor upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    v70: new CallType(
        'Staking.scale_validator_count',
        sts.struct({
            factor: v70.Percent,
        })
    ),
}

export const forceNoEras =  {
    name: 'Staking.force_no_eras',
    /**
     * Force there to be no new eras indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    v70: new CallType(
        'Staking.force_no_eras',
        sts.unit()
    ),
}

export const forceNewEra =  {
    name: 'Staking.force_new_era',
    /**
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    v70: new CallType(
        'Staking.force_new_era',
        sts.unit()
    ),
}

export const setInvulnerables =  {
    name: 'Staking.set_invulnerables',
    /**
     * Set the validators who cannot be slashed (if any).
     * 
     * The dispatch origin must be Root.
     */
    v70: new CallType(
        'Staking.set_invulnerables',
        sts.struct({
            invulnerables: sts.array(() => v70.AccountId32),
        })
    ),
}

export const forceUnstake =  {
    name: 'Staking.force_unstake',
    /**
     * Force a current staker to become completely unstaked, immediately.
     * 
     * The dispatch origin must be Root.
     */
    v70: new CallType(
        'Staking.force_unstake',
        sts.struct({
            stash: v70.AccountId32,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const forceNewEraAlways =  {
    name: 'Staking.force_new_era_always',
    /**
     * Force there to be a new era at the end of sessions indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     */
    v70: new CallType(
        'Staking.force_new_era_always',
        sts.unit()
    ),
}

export const cancelDeferredSlash =  {
    name: 'Staking.cancel_deferred_slash',
    /**
     * Cancel enactment of a deferred slash.
     * 
     * Can be called by the `T::AdminOrigin`.
     * 
     * Parameters: era and indices of the slashes for that era to kill.
     */
    v70: new CallType(
        'Staking.cancel_deferred_slash',
        sts.struct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        })
    ),
}

export const payoutStakers =  {
    name: 'Staking.payout_stakers',
    /**
     * Pay out all the stakers behind a single validator for a single era.
     * 
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     * 
     * # <weight>
     * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     * - Contains a limited number of reads and writes.
     * -----------
     * N is the Number of payouts for the validator (including the validator)
     * Weight:
     * - Reward Destination Staked: O(N)
     * - Reward Destination Controller (Creating): O(N)
     * 
     *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     * # </weight>
     */
    v70: new CallType(
        'Staking.payout_stakers',
        sts.struct({
            validatorStash: v70.AccountId32,
            era: sts.number(),
        })
    ),
}

export const rebond =  {
    name: 'Staking.rebond',
    /**
     * Rebond a portion of the stash scheduled to be unlocked.
     * 
     * The dispatch origin must be signed by the controller.
     * 
     * # <weight>
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MaxUnlockingChunks`.
     * - Storage changes: Can't increase storage, only decrease it.
     * # </weight>
     */
    v70: new CallType(
        'Staking.rebond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const reapStash =  {
    name: 'Staking.reap_stash',
    /**
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     * 
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     * 
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     * 
     * It can be called by anyone, as long as `stash` meets the above requirements.
     * 
     * Refunds the transaction fees upon successful execution.
     */
    v70: new CallType(
        'Staking.reap_stash',
        sts.struct({
            stash: v70.AccountId32,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const kick =  {
    name: 'Staking.kick',
    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    v70: new CallType(
        'Staking.kick',
        sts.struct({
            who: sts.array(() => v70.AccountId32),
        })
    ),
}

export const setStakingConfigs =  {
    name: 'Staking.set_staking_configs',
    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * RuntimeOrigin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    v70: new CallType(
        'Staking.set_staking_configs',
        sts.struct({
            minNominatorBond: v70.ConfigOp,
            minValidatorBond: v70.ConfigOp,
            maxNominatorCount: v70.Type_299,
            maxValidatorCount: v70.Type_299,
            chillThreshold: v70.Type_300,
            minCommission: v70.Type_301,
        })
    ),
}

export const chillOther =  {
    name: 'Staking.chill_other',
    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    v70: new CallType(
        'Staking.chill_other',
        sts.struct({
            controller: v70.AccountId32,
        })
    ),
}

export const forceApplyMinCommission =  {
    name: 'Staking.force_apply_min_commission',
    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    v70: new CallType(
        'Staking.force_apply_min_commission',
        sts.struct({
            validatorStash: v70.AccountId32,
        })
    ),
}

export const setMinCommission =  {
    name: 'Staking.set_min_commission',
    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    v70: new CallType(
        'Staking.set_min_commission',
        sts.struct({
            new: v70.Perbill,
        })
    ),
}
