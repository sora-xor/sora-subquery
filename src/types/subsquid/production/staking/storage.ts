import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
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
    v1: new StorageType('Staking.HistoryDepth', 'Default', [], sts.number()) as HistoryDepthV1,
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
export interface HistoryDepthV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const timeSinceGenesis =  {
    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    v1: new StorageType('Staking.TimeSinceGenesis', 'Default', [], v1.Duration) as TimeSinceGenesisV1,
    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    v42: new StorageType('Staking.TimeSinceGenesis', 'Default', [], v42.DurationWrapper) as TimeSinceGenesisV42,
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface TimeSinceGenesisV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Duration
    get(block: Block): Promise<(v1.Duration | undefined)>
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
    v1: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV1,
}

/**
 *  The ideal number of staking participants.
 */
export interface ValidatorCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v1: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV1,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV1  {
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
    v1: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v1.AccountId)) as InvulnerablesV1,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId[]
    get(block: Block): Promise<(v1.AccountId[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v1: new StorageType('Staking.Bonded', 'Optional', [v1.AccountId], v1.AccountId) as BondedV1,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v1: new StorageType('Staking.Ledger', 'Optional', [v1.AccountId], v1.StakingLedger) as LedgerV1,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.StakingLedger | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    v1: new StorageType('Staking.Payee', 'Default', [v1.AccountId], v1.RewardDestination) as PayeeV1,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface PayeeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.RewardDestination
    get(block: Block, key: v1.AccountId): Promise<(v1.RewardDestination | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v1: new StorageType('Staking.Validators', 'Default', [v1.AccountId], v1.ValidatorPrefs) as ValidatorsV1,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ValidatorPrefs
    get(block: Block, key: v1.AccountId): Promise<(v1.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.ValidatorPrefs | undefined)][]>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    v1: new StorageType('Staking.Nominators', 'Optional', [v1.AccountId], v1.Nominations) as NominatorsV1,
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 */
export interface NominatorsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.Nominations | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.Nominations | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.Nominations | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.Nominations | undefined)][]>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v1: new StorageType('Staking.CurrentEra', 'Optional', [], v1.EraIndex) as CurrentEraV1,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.EraIndex | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    v1: new StorageType('Staking.ActiveEra', 'Optional', [], v1.ActiveEraInfo) as ActiveEraV1,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface ActiveEraV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    v1: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [v1.EraIndex], v1.SessionIndex) as ErasStartSessionIndexV1,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface ErasStartSessionIndexV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.EraIndex): Promise<(v1.SessionIndex | undefined)>
    getMany(block: Block, keys: v1.EraIndex[]): Promise<(v1.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v1.EraIndex[]>
    getKeys(block: Block, key: v1.EraIndex): Promise<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<v1.EraIndex[]>
    getPairs(block: Block): Promise<[k: v1.EraIndex, v: (v1.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v1.EraIndex): Promise<[k: v1.EraIndex, v: (v1.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EraIndex, v: (v1.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<[k: v1.EraIndex, v: (v1.SessionIndex | undefined)][]>
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
    v1: new StorageType('Staking.ErasStakers', 'Default', [v1.EraIndex, v1.AccountId], v1.Exposure) as ErasStakersV1,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Exposure
    get(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<(v1.Exposure | undefined)>
    getMany(block: Block, keys: [v1.EraIndex, v1.AccountId][]): Promise<(v1.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
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
    v1: new StorageType('Staking.ErasStakersClipped', 'Default', [v1.EraIndex, v1.AccountId], v1.Exposure) as ErasStakersClippedV1,
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
export interface ErasStakersClippedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Exposure
    get(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<(v1.Exposure | undefined)>
    getMany(block: Block, keys: [v1.EraIndex, v1.AccountId][]): Promise<(v1.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v1: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v1.EraIndex, v1.AccountId], v1.ValidatorPrefs) as ErasValidatorPrefsV1,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ValidatorPrefs
    get(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<(v1.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v1.EraIndex, v1.AccountId][]): Promise<(v1.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v1: new StorageType('Staking.ErasValidatorReward', 'Optional', [v1.EraIndex], v1.MultiCurrencyBalanceOf) as ErasValidatorRewardV1,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.EraIndex): Promise<(v1.MultiCurrencyBalanceOf | undefined)>
    getMany(block: Block, keys: v1.EraIndex[]): Promise<(v1.MultiCurrencyBalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v1.EraIndex[]>
    getKeys(block: Block, key: v1.EraIndex): Promise<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<v1.EraIndex[]>
    getPairs(block: Block): Promise<[k: v1.EraIndex, v: (v1.MultiCurrencyBalanceOf | undefined)][]>
    getPairs(block: Block, key: v1.EraIndex): Promise<[k: v1.EraIndex, v: (v1.MultiCurrencyBalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EraIndex, v: (v1.MultiCurrencyBalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<[k: v1.EraIndex, v: (v1.MultiCurrencyBalanceOf | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v1: new StorageType('Staking.ErasRewardPoints', 'Default', [v1.EraIndex], v1.EraRewardPoints) as ErasRewardPointsV1,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.EraRewardPoints
    get(block: Block, key: v1.EraIndex): Promise<(v1.EraRewardPoints | undefined)>
    getMany(block: Block, keys: v1.EraIndex[]): Promise<(v1.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<v1.EraIndex[]>
    getKeys(block: Block, key: v1.EraIndex): Promise<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<v1.EraIndex[]>
    getPairs(block: Block): Promise<[k: v1.EraIndex, v: (v1.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: v1.EraIndex): Promise<[k: v1.EraIndex, v: (v1.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EraIndex, v: (v1.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<[k: v1.EraIndex, v: (v1.EraRewardPoints | undefined)][]>
}

export const eraValBurned =  {
    /**
     *  The amount of VAL burned during this era.
     */
    v1: new StorageType('Staking.EraValBurned', 'Default', [], v1.MultiCurrencyBalanceOf) as EraValBurnedV1,
}

/**
 *  The amount of VAL burned during this era.
 */
export interface EraValBurnedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.MultiCurrencyBalanceOf
    get(block: Block): Promise<(v1.MultiCurrencyBalanceOf | undefined)>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v1: new StorageType('Staking.ErasTotalStake', 'Default', [v1.EraIndex], v1.BalanceOf) as ErasTotalStakeV1,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BalanceOf
    get(block: Block, key: v1.EraIndex): Promise<(v1.BalanceOf | undefined)>
    getMany(block: Block, keys: v1.EraIndex[]): Promise<(v1.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v1.EraIndex[]>
    getKeys(block: Block, key: v1.EraIndex): Promise<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<v1.EraIndex[]>
    getPairs(block: Block): Promise<[k: v1.EraIndex, v: (v1.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v1.EraIndex): Promise<[k: v1.EraIndex, v: (v1.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EraIndex, v: (v1.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<[k: v1.EraIndex, v: (v1.BalanceOf | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    v1: new StorageType('Staking.ForceEra', 'Default', [], v1.Forcing) as ForceEraV1,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Forcing
    get(block: Block): Promise<(v1.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v1: new StorageType('Staking.SlashRewardFraction', 'Default', [], v1.Perbill) as SlashRewardFractionV1,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Perbill
    get(block: Block): Promise<(v1.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v1: new StorageType('Staking.CanceledSlashPayout', 'Default', [], v1.BalanceOf) as CanceledSlashPayoutV1,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BalanceOf
    get(block: Block): Promise<(v1.BalanceOf | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v1: new StorageType('Staking.UnappliedSlashes', 'Default', [v1.EraIndex], sts.array(() => v1.UnappliedSlash)) as UnappliedSlashesV1,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.UnappliedSlash[]
    get(block: Block, key: v1.EraIndex): Promise<(v1.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: v1.EraIndex[]): Promise<(v1.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<v1.EraIndex[]>
    getKeys(block: Block, key: v1.EraIndex): Promise<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<v1.EraIndex[]>
    getPairs(block: Block): Promise<[k: v1.EraIndex, v: (v1.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: v1.EraIndex): Promise<[k: v1.EraIndex, v: (v1.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EraIndex, v: (v1.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EraIndex): AsyncIterable<[k: v1.EraIndex, v: (v1.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    v1: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [v1.EraIndex, v1.SessionIndex]))) as BondedErasV1,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.EraIndex, v1.SessionIndex][]
    get(block: Block): Promise<([v1.EraIndex, v1.SessionIndex][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v1: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [v1.EraIndex, v1.AccountId], sts.tuple(() => [v1.Perbill, v1.BalanceOf])) as ValidatorSlashInEraV1,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<([v1.Perbill, v1.BalanceOf] | undefined)>
    getMany(block: Block, keys: [v1.EraIndex, v1.AccountId][]): Promise<([v1.Perbill, v1.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex): Promise<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: ([v1.Perbill, v1.BalanceOf] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v1: new StorageType('Staking.NominatorSlashInEra', 'Optional', [v1.EraIndex, v1.AccountId], v1.BalanceOf) as NominatorSlashInEraV1,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<(v1.BalanceOf | undefined)>
    getMany(block: Block, keys: [v1.EraIndex, v1.AccountId][]): Promise<(v1.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeys(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[v1.EraIndex, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v1.EraIndex, key2: v1.AccountId): Promise<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.EraIndex, key2: v1.AccountId): AsyncIterable<[k: [v1.EraIndex, v1.AccountId], v: (v1.BalanceOf | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v1: new StorageType('Staking.SlashingSpans', 'Optional', [v1.AccountId], v1.SlashingSpans) as SlashingSpansV1,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.SlashingSpans | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v1: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v1.AccountId, v1.SpanIndex])], v1.SpanRecord) as SpanSlashV1,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.SpanRecord
    get(block: Block, key: [v1.AccountId, v1.SpanIndex]): Promise<(v1.SpanRecord | undefined)>
    getMany(block: Block, keys: [v1.AccountId, v1.SpanIndex][]): Promise<(v1.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[v1.AccountId, v1.SpanIndex][]>
    getKeys(block: Block, key: [v1.AccountId, v1.SpanIndex]): Promise<[v1.AccountId, v1.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AccountId, v1.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1.AccountId, v1.SpanIndex]): AsyncIterable<[v1.AccountId, v1.SpanIndex][]>
    getPairs(block: Block): Promise<[k: [v1.AccountId, v1.SpanIndex], v: (v1.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [v1.AccountId, v1.SpanIndex]): Promise<[k: [v1.AccountId, v1.SpanIndex], v: (v1.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AccountId, v1.SpanIndex], v: (v1.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1.AccountId, v1.SpanIndex]): AsyncIterable<[k: [v1.AccountId, v1.SpanIndex], v: (v1.SpanRecord | undefined)][]>
}

export const earliestUnappliedSlash =  {
    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    v1: new StorageType('Staking.EarliestUnappliedSlash', 'Optional', [], v1.EraIndex) as EarliestUnappliedSlashV1,
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface EarliestUnappliedSlashV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.EraIndex | undefined)>
}

export const snapshotValidators =  {
    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v1: new StorageType('Staking.SnapshotValidators', 'Optional', [], sts.array(() => v1.AccountId)) as SnapshotValidatorsV1,
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotValidatorsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId[] | undefined)>
}

export const snapshotNominators =  {
    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v1: new StorageType('Staking.SnapshotNominators', 'Optional', [], sts.array(() => v1.AccountId)) as SnapshotNominatorsV1,
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotNominatorsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId[] | undefined)>
}

export const queuedElected =  {
    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    v1: new StorageType('Staking.QueuedElected', 'Optional', [], v1.ElectionResult) as QueuedElectedV1,
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface QueuedElectedV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.ElectionResult | undefined)>
}

export const queuedScore =  {
    /**
     *  The score of the current [`QueuedElected`].
     */
    v1: new StorageType('Staking.QueuedScore', 'Optional', [], v1.ElectionScore) as QueuedScoreV1,
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface QueuedScoreV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.ElectionScore | undefined)>
}

export const eraElectionStatus =  {
    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    v1: new StorageType('Staking.EraElectionStatus', 'Default', [], v1.ElectionStatus) as EraElectionStatusV1,
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface EraElectionStatusV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ElectionStatus
    get(block: Block): Promise<(v1.ElectionStatus | undefined)>
}

export const isCurrentSessionFinal =  {
    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    v1: new StorageType('Staking.IsCurrentSessionFinal', 'Default', [], sts.boolean()) as IsCurrentSessionFinalV1,
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface IsCurrentSessionFinalV1  {
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
    v1: new StorageType('Staking.StorageVersion', 'Default', [], v1.Releases) as StorageVersionV1,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v42: new StorageType('Staking.StorageVersion', 'Default', [], v42.Type_470) as StorageVersionV42,
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v5.0.0 for new networks.
 */
export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Releases
    get(block: Block): Promise<(v1.Releases | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_470
    get(block: Block): Promise<(v42.Type_470 | undefined)>
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
    v53: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeV53,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
