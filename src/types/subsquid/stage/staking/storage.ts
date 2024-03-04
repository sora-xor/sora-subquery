import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const historyDepth =  {
    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise. I.e. active era must
     *  always be in history. I.e. `active_era > current_era - history_depth` must be
     *  guaranteed.
     */
    v33: new StorageType('Staking.HistoryDepth', 'Default', [], sts.number()) as HistoryDepthV33,
}

/**
 *  Number of eras to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]`.
 * 
 *  Must be more than the number of eras delayed by session otherwise. I.e. active era must
 *  always be in history. I.e. `active_era > current_era - history_depth` must be
 *  guaranteed.
 */
export interface HistoryDepthV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const timeSinceGenesis =  {
    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    v33: new StorageType('Staking.TimeSinceGenesis', 'Default', [], v33.Duration) as TimeSinceGenesisV33,
    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    v42: new StorageType('Staking.TimeSinceGenesis', 'Default', [], v42.DurationWrapper) as TimeSinceGenesisV42,
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface TimeSinceGenesisV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Duration
    get(block: Block): Promise<(v33.Duration | undefined)>
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface TimeSinceGenesisV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.DurationWrapper
    get(block: Block): Promise<(v42.DurationWrapper | undefined)>
}

export const validatorCount =  {
    /**
     *  The ideal number of staking participants.
     */
    v33: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV33,
}

/**
 *  The ideal number of staking participants.
 */
export interface ValidatorCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v33: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV33,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const invulnerables =  {
    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    v33: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v33.AccountId)) as InvulnerablesV33,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block): Promise<(v33.AccountId[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v33: new StorageType('Staking.Bonded', 'Optional', [v33.AccountId], v33.AccountId) as BondedV33,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v33: new StorageType('Staking.Ledger', 'Optional', [v33.AccountId], v33.StakingLedger) as LedgerV33,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.StakingLedger | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    v33: new StorageType('Staking.Payee', 'Default', [v33.AccountId], v33.RewardDestination) as PayeeV33,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface PayeeV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.RewardDestination
    get(block: Block, key: v33.AccountId): Promise<(v33.RewardDestination | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v33: new StorageType('Staking.Validators', 'Default', [v33.AccountId], v33.ValidatorPrefs) as ValidatorsV33,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ValidatorPrefs
    get(block: Block, key: v33.AccountId): Promise<(v33.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.ValidatorPrefs | undefined)][]>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    v33: new StorageType('Staking.Nominators', 'Optional', [v33.AccountId], v33.Nominations) as NominatorsV33,
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 */
export interface NominatorsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.Nominations | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Nominations | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Nominations | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Nominations | undefined)][]>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v33: new StorageType('Staking.CurrentEra', 'Optional', [], v33.EraIndex) as CurrentEraV33,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.EraIndex | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    v33: new StorageType('Staking.ActiveEra', 'Optional', [], v33.ActiveEraInfo) as ActiveEraV33,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface ActiveEraV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    v33: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [v33.EraIndex], v33.SessionIndex) as ErasStartSessionIndexV33,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface ErasStartSessionIndexV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.EraIndex): Promise<(v33.SessionIndex | undefined)>
    getMany(block: Block, keys: v33.EraIndex[]): Promise<(v33.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v33.EraIndex[]>
    getKeys(block: Block, key: v33.EraIndex): Promise<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<v33.EraIndex[]>
    getPairs(block: Block): Promise<[k: v33.EraIndex, v: (v33.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v33.EraIndex): Promise<[k: v33.EraIndex, v: (v33.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EraIndex, v: (v33.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<[k: v33.EraIndex, v: (v33.SessionIndex | undefined)][]>
}

export const erasStakers =  {
    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    v33: new StorageType('Staking.ErasStakers', 'Default', [v33.EraIndex, v33.AccountId], v33.Exposure) as ErasStakersV33,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Exposure
    get(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<(v33.Exposure | undefined)>
    getMany(block: Block, keys: [v33.EraIndex, v33.AccountId][]): Promise<(v33.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
}

export const erasStakersClipped =  {
    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    v33: new StorageType('Staking.ErasStakersClipped', 'Default', [v33.EraIndex, v33.AccountId], v33.Exposure) as ErasStakersClippedV33,
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersClippedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Exposure
    get(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<(v33.Exposure | undefined)>
    getMany(block: Block, keys: [v33.EraIndex, v33.AccountId][]): Promise<(v33.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v33: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v33.EraIndex, v33.AccountId], v33.ValidatorPrefs) as ErasValidatorPrefsV33,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ValidatorPrefs
    get(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<(v33.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v33.EraIndex, v33.AccountId][]): Promise<(v33.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v33: new StorageType('Staking.ErasValidatorReward', 'Optional', [v33.EraIndex], v33.MultiCurrencyBalanceOf) as ErasValidatorRewardV33,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.EraIndex): Promise<(v33.MultiCurrencyBalanceOf | undefined)>
    getMany(block: Block, keys: v33.EraIndex[]): Promise<(v33.MultiCurrencyBalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v33.EraIndex[]>
    getKeys(block: Block, key: v33.EraIndex): Promise<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<v33.EraIndex[]>
    getPairs(block: Block): Promise<[k: v33.EraIndex, v: (v33.MultiCurrencyBalanceOf | undefined)][]>
    getPairs(block: Block, key: v33.EraIndex): Promise<[k: v33.EraIndex, v: (v33.MultiCurrencyBalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EraIndex, v: (v33.MultiCurrencyBalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<[k: v33.EraIndex, v: (v33.MultiCurrencyBalanceOf | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v33: new StorageType('Staking.ErasRewardPoints', 'Default', [v33.EraIndex], v33.EraRewardPoints) as ErasRewardPointsV33,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EraRewardPoints
    get(block: Block, key: v33.EraIndex): Promise<(v33.EraRewardPoints | undefined)>
    getMany(block: Block, keys: v33.EraIndex[]): Promise<(v33.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<v33.EraIndex[]>
    getKeys(block: Block, key: v33.EraIndex): Promise<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<v33.EraIndex[]>
    getPairs(block: Block): Promise<[k: v33.EraIndex, v: (v33.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: v33.EraIndex): Promise<[k: v33.EraIndex, v: (v33.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EraIndex, v: (v33.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<[k: v33.EraIndex, v: (v33.EraRewardPoints | undefined)][]>
}

export const eraValBurned =  {
    /**
     *  The amount of VAL burned during this era.
     */
    v33: new StorageType('Staking.EraValBurned', 'Default', [], v33.MultiCurrencyBalanceOf) as EraValBurnedV33,
}

/**
 *  The amount of VAL burned during this era.
 */
export interface EraValBurnedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.MultiCurrencyBalanceOf
    get(block: Block): Promise<(v33.MultiCurrencyBalanceOf | undefined)>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v33: new StorageType('Staking.ErasTotalStake', 'Default', [v33.EraIndex], v33.BalanceOf) as ErasTotalStakeV33,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BalanceOf
    get(block: Block, key: v33.EraIndex): Promise<(v33.BalanceOf | undefined)>
    getMany(block: Block, keys: v33.EraIndex[]): Promise<(v33.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v33.EraIndex[]>
    getKeys(block: Block, key: v33.EraIndex): Promise<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<v33.EraIndex[]>
    getPairs(block: Block): Promise<[k: v33.EraIndex, v: (v33.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v33.EraIndex): Promise<[k: v33.EraIndex, v: (v33.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EraIndex, v: (v33.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<[k: v33.EraIndex, v: (v33.BalanceOf | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    v33: new StorageType('Staking.ForceEra', 'Default', [], v33.Forcing) as ForceEraV33,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Forcing
    get(block: Block): Promise<(v33.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v33: new StorageType('Staking.SlashRewardFraction', 'Default', [], v33.Perbill) as SlashRewardFractionV33,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Perbill
    get(block: Block): Promise<(v33.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v33: new StorageType('Staking.CanceledSlashPayout', 'Default', [], v33.BalanceOf) as CanceledSlashPayoutV33,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BalanceOf
    get(block: Block): Promise<(v33.BalanceOf | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v33: new StorageType('Staking.UnappliedSlashes', 'Default', [v33.EraIndex], sts.array(() => v33.UnappliedSlash)) as UnappliedSlashesV33,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.UnappliedSlash[]
    get(block: Block, key: v33.EraIndex): Promise<(v33.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: v33.EraIndex[]): Promise<(v33.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<v33.EraIndex[]>
    getKeys(block: Block, key: v33.EraIndex): Promise<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<v33.EraIndex[]>
    getPairs(block: Block): Promise<[k: v33.EraIndex, v: (v33.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: v33.EraIndex): Promise<[k: v33.EraIndex, v: (v33.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EraIndex, v: (v33.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EraIndex): AsyncIterable<[k: v33.EraIndex, v: (v33.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    v33: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [v33.EraIndex, v33.SessionIndex]))) as BondedErasV33,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.EraIndex, v33.SessionIndex][]
    get(block: Block): Promise<([v33.EraIndex, v33.SessionIndex][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v33: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [v33.EraIndex, v33.AccountId], sts.tuple(() => [v33.Perbill, v33.BalanceOf])) as ValidatorSlashInEraV33,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<([v33.Perbill, v33.BalanceOf] | undefined)>
    getMany(block: Block, keys: [v33.EraIndex, v33.AccountId][]): Promise<([v33.Perbill, v33.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex): Promise<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: ([v33.Perbill, v33.BalanceOf] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v33: new StorageType('Staking.NominatorSlashInEra', 'Optional', [v33.EraIndex, v33.AccountId], v33.BalanceOf) as NominatorSlashInEraV33,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<(v33.BalanceOf | undefined)>
    getMany(block: Block, keys: [v33.EraIndex, v33.AccountId][]): Promise<(v33.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeys(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[v33.EraIndex, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v33.EraIndex, key2: v33.AccountId): Promise<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.EraIndex, key2: v33.AccountId): AsyncIterable<[k: [v33.EraIndex, v33.AccountId], v: (v33.BalanceOf | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v33: new StorageType('Staking.SlashingSpans', 'Optional', [v33.AccountId], v33.SlashingSpans) as SlashingSpansV33,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.SlashingSpans | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v33: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v33.AccountId, v33.SpanIndex])], v33.SpanRecord) as SpanSlashV33,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SpanRecord
    get(block: Block, key: [v33.AccountId, v33.SpanIndex]): Promise<(v33.SpanRecord | undefined)>
    getMany(block: Block, keys: [v33.AccountId, v33.SpanIndex][]): Promise<(v33.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountId, v33.SpanIndex][]>
    getKeys(block: Block, key: [v33.AccountId, v33.SpanIndex]): Promise<[v33.AccountId, v33.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountId, v33.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block, key: [v33.AccountId, v33.SpanIndex]): AsyncIterable<[v33.AccountId, v33.SpanIndex][]>
    getPairs(block: Block): Promise<[k: [v33.AccountId, v33.SpanIndex], v: (v33.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [v33.AccountId, v33.SpanIndex]): Promise<[k: [v33.AccountId, v33.SpanIndex], v: (v33.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountId, v33.SpanIndex], v: (v33.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v33.AccountId, v33.SpanIndex]): AsyncIterable<[k: [v33.AccountId, v33.SpanIndex], v: (v33.SpanRecord | undefined)][]>
}

export const earliestUnappliedSlash =  {
    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    v33: new StorageType('Staking.EarliestUnappliedSlash', 'Optional', [], v33.EraIndex) as EarliestUnappliedSlashV33,
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface EarliestUnappliedSlashV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.EraIndex | undefined)>
}

export const snapshotValidators =  {
    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v33: new StorageType('Staking.SnapshotValidators', 'Optional', [], sts.array(() => v33.AccountId)) as SnapshotValidatorsV33,
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotValidatorsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.AccountId[] | undefined)>
}

export const snapshotNominators =  {
    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v33: new StorageType('Staking.SnapshotNominators', 'Optional', [], sts.array(() => v33.AccountId)) as SnapshotNominatorsV33,
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotNominatorsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.AccountId[] | undefined)>
}

export const queuedElected =  {
    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    v33: new StorageType('Staking.QueuedElected', 'Optional', [], v33.ElectionResult) as QueuedElectedV33,
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface QueuedElectedV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.ElectionResult | undefined)>
}

export const queuedScore =  {
    /**
     *  The score of the current [`QueuedElected`].
     */
    v33: new StorageType('Staking.QueuedScore', 'Optional', [], v33.ElectionScore) as QueuedScoreV33,
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface QueuedScoreV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.ElectionScore | undefined)>
}

export const eraElectionStatus =  {
    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    v33: new StorageType('Staking.EraElectionStatus', 'Default', [], v33.ElectionStatus) as EraElectionStatusV33,
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface EraElectionStatusV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ElectionStatus
    get(block: Block): Promise<(v33.ElectionStatus | undefined)>
}

export const isCurrentSessionFinal =  {
    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    v33: new StorageType('Staking.IsCurrentSessionFinal', 'Default', [], sts.boolean()) as IsCurrentSessionFinalV33,
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface IsCurrentSessionFinalV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const storageVersion =  {
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v5.0.0 for new networks.
     */
    v33: new StorageType('Staking.StorageVersion', 'Default', [], v33.Releases) as StorageVersionV33,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v42: new StorageType('Staking.StorageVersion', 'Default', [], v42.Type_475) as StorageVersionV42,
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v5.0.0 for new networks.
 */
export interface StorageVersionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Releases
    get(block: Block): Promise<(v33.Releases | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_475
    get(block: Block): Promise<(v42.Type_475 | undefined)>
}

export const minNominatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    v42: new StorageType('Staking.MinNominatorBond', 'Default', [], sts.bigint()) as MinNominatorBondV42,
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface MinNominatorBondV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minValidatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    v42: new StorageType('Staking.MinValidatorBond', 'Default', [], sts.bigint()) as MinValidatorBondV42,
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface MinValidatorBondV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCommission =  {
    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    v42: new StorageType('Staking.MinCommission', 'Default', [], v42.Perbill) as MinCommissionV42,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Perbill
    get(block: Block): Promise<(v42.Perbill | undefined)>
}

export const counterForValidators =  {
    /**
     * Counter for the related counted storage map
     */
    v42: new StorageType('Staking.CounterForValidators', 'Default', [], sts.number()) as CounterForValidatorsV42,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForValidatorsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxValidatorsCount =  {
    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v42: new StorageType('Staking.MaxValidatorsCount', 'Optional', [], sts.number()) as MaxValidatorsCountV42,
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxValidatorsCountV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const counterForNominators =  {
    /**
     * Counter for the related counted storage map
     */
    v42: new StorageType('Staking.CounterForNominators', 'Default', [], sts.number()) as CounterForNominatorsV42,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForNominatorsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxNominatorsCount =  {
    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v42: new StorageType('Staking.MaxNominatorsCount', 'Optional', [], sts.number()) as MaxNominatorsCountV42,
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxNominatorsCountV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    v42: new StorageType('Staking.CurrentPlannedSession', 'Default', [], sts.number()) as CurrentPlannedSessionV42,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface CurrentPlannedSessionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const offendingValidators =  {
    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    v42: new StorageType('Staking.OffendingValidators', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.boolean()]))) as OffendingValidatorsV42,
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface OffendingValidatorsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, boolean][]
    get(block: Block): Promise<([number, boolean][] | undefined)>
}

export const chillThreshold =  {
    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    v42: new StorageType('Staking.ChillThreshold', 'Optional', [], v42.Percent) as ChillThresholdV42,
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface ChillThresholdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.Percent | undefined)>
}

export const minimumActiveStake =  {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    v52: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeV52,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
