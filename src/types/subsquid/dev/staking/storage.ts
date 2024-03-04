import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const timeSinceGenesis =  {
    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    v70: new StorageType('Staking.TimeSinceGenesis', 'Default', [], v70.DurationWrapper) as TimeSinceGenesisV70,
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface TimeSinceGenesisV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.DurationWrapper
    get(block: Block): Promise<(v70.DurationWrapper | undefined)>
}

export const validatorCount =  {
    /**
     *  The ideal number of active validators.
     */
    v70: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV70,
}

/**
 *  The ideal number of active validators.
 */
export interface ValidatorCountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v70: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV70,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV70  {
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
    v70: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v70.AccountId32)) as InvulnerablesV70,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v70: new StorageType('Staking.Bonded', 'Optional', [v70.AccountId32], v70.AccountId32) as BondedV70,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface BondedV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.AccountId32 | undefined)][]>
}

export const minNominatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    v70: new StorageType('Staking.MinNominatorBond', 'Default', [], sts.bigint()) as MinNominatorBondV70,
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface MinNominatorBondV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minValidatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    v70: new StorageType('Staking.MinValidatorBond', 'Default', [], sts.bigint()) as MinValidatorBondV70,
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface MinValidatorBondV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumActiveStake =  {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    v70: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeV70,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeV70  {
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
    v70: new StorageType('Staking.MinCommission', 'Default', [], v70.Perbill) as MinCommissionV70,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Perbill
    get(block: Block): Promise<(v70.Perbill | undefined)>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v70: new StorageType('Staking.Ledger', 'Optional', [v70.AccountId32], v70.StakingLedger) as LedgerV70,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.StakingLedger | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v70: new StorageType('Staking.Payee', 'Default', [v70.AccountId32], v70.RewardDestination) as PayeeV70,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.RewardDestination
    get(block: Block, key: v70.AccountId32): Promise<(v70.RewardDestination | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v70: new StorageType('Staking.Validators', 'Default', [v70.AccountId32], v70.ValidatorPrefs) as ValidatorsV70,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ValidatorsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.ValidatorPrefs
    get(block: Block, key: v70.AccountId32): Promise<(v70.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.ValidatorPrefs | undefined)][]>
}

export const counterForValidators =  {
    /**
     * Counter for the related counted storage map
     */
    v70: new StorageType('Staking.CounterForValidators', 'Default', [], sts.number()) as CounterForValidatorsV70,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForValidatorsV70  {
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
    v70: new StorageType('Staking.MaxValidatorsCount', 'Optional', [], sts.number()) as MaxValidatorsCountV70,
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxValidatorsCountV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v70: new StorageType('Staking.Nominators', 'Optional', [v70.AccountId32], v70.Nominations) as NominatorsV70,
}

/**
 *  The map from nominator stash key to their nomination preferences, namely the validators that
 *  they wish to support.
 * 
 *  Note that the keys of this storage map might become non-decodable in case the
 *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
 *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
 *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
 *  nominators will effectively not-exist, until they re-submit their preferences such that it
 *  is within the bounds of the newly set `Config::MaxNominations`.
 * 
 *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
 *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
 *  number of keys that exist.
 * 
 *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
 *  [`Call::chill_other`] dispatchable by anyone.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface NominatorsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.Nominations | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.Nominations | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.Nominations | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.Nominations | undefined)][]>
}

export const counterForNominators =  {
    /**
     * Counter for the related counted storage map
     */
    v70: new StorageType('Staking.CounterForNominators', 'Default', [], sts.number()) as CounterForNominatorsV70,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForNominatorsV70  {
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
    v70: new StorageType('Staking.MaxNominatorsCount', 'Optional', [], sts.number()) as MaxNominatorsCountV70,
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxNominatorsCountV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v70: new StorageType('Staking.CurrentEra', 'Optional', [], sts.number()) as CurrentEraV70,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    v70: new StorageType('Staking.ActiveEra', 'Optional', [], v70.ActiveEraInfo) as ActiveEraV70,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface ActiveEraV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    v70: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [sts.number()], sts.number()) as ErasStartSessionIndexV70,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface ErasStartSessionIndexV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
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
    v70: new StorageType('Staking.ErasStakers', 'Default', [sts.number(), v70.AccountId32], v70.Exposure) as ErasStakersV70,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Exposure
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<(v70.Exposure | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<(v70.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
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
    v70: new StorageType('Staking.ErasStakersClipped', 'Default', [sts.number(), v70.AccountId32], v70.Exposure) as ErasStakersClippedV70,
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
export interface ErasStakersClippedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Exposure
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<(v70.Exposure | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<(v70.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v70: new StorageType('Staking.ErasValidatorPrefs', 'Default', [sts.number(), v70.AccountId32], v70.ValidatorPrefs) as ErasValidatorPrefsV70,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.ValidatorPrefs
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<(v70.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<(v70.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v70: new StorageType('Staking.ErasValidatorReward', 'Optional', [sts.number()], sts.bigint()) as ErasValidatorRewardV70,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v70: new StorageType('Staking.ErasRewardPoints', 'Default', [sts.number()], v70.EraRewardPoints) as ErasRewardPointsV70,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.EraRewardPoints
    get(block: Block, key: number): Promise<(v70.EraRewardPoints | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.EraRewardPoints | undefined)][]>
}

export const eraValBurned =  {
    /**
     *  The amount of VAL burned during this era.
     */
    v70: new StorageType('Staking.EraValBurned', 'Default', [], sts.bigint()) as EraValBurnedV70,
}

/**
 *  The amount of VAL burned during this era.
 */
export interface EraValBurnedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v70: new StorageType('Staking.ErasTotalStake', 'Default', [sts.number()], sts.bigint()) as ErasTotalStakeV70,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    v70: new StorageType('Staking.ForceEra', 'Default', [], v70.Forcing) as ForceEraV70,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Forcing
    get(block: Block): Promise<(v70.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v70: new StorageType('Staking.SlashRewardFraction', 'Default', [], v70.Perbill) as SlashRewardFractionV70,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Perbill
    get(block: Block): Promise<(v70.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v70: new StorageType('Staking.CanceledSlashPayout', 'Default', [], sts.bigint()) as CanceledSlashPayoutV70,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v70: new StorageType('Staking.UnappliedSlashes', 'Default', [sts.number()], sts.array(() => v70.UnappliedSlash)) as UnappliedSlashesV70,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.UnappliedSlash[]
    get(block: Block, key: number): Promise<(v70.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    v70: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as BondedErasV70,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block): Promise<([number, number][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v70: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [sts.number(), v70.AccountId32], sts.tuple(() => [v70.Perbill, sts.bigint()])) as ValidatorSlashInEraV70,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<([v70.Perbill, bigint] | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<([v70.Perbill, bigint] | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: ([v70.Perbill, bigint] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v70: new StorageType('Staking.NominatorSlashInEra', 'Optional', [sts.number(), v70.AccountId32], sts.bigint()) as NominatorSlashInEraV70,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: (bigint | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v70: new StorageType('Staking.SlashingSpans', 'Optional', [v70.AccountId32], v70.SlashingSpans) as SlashingSpansV70,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.SlashingSpans | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v70: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v70.AccountId32, sts.number()])], v70.SpanRecord) as SpanSlashV70,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.SpanRecord
    get(block: Block, key: [v70.AccountId32, number]): Promise<(v70.SpanRecord | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, number][]): Promise<(v70.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, number][]>
    getKeys(block: Block, key: [v70.AccountId32, number]): Promise<[v70.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v70.AccountId32, number]): AsyncIterable<[v70.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, number], v: (v70.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [v70.AccountId32, number]): Promise<[k: [v70.AccountId32, number], v: (v70.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, number], v: (v70.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v70.AccountId32, number]): AsyncIterable<[k: [v70.AccountId32, number], v: (v70.SpanRecord | undefined)][]>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    v70: new StorageType('Staking.CurrentPlannedSession', 'Default', [], sts.number()) as CurrentPlannedSessionV70,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface CurrentPlannedSessionV70  {
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
    v70: new StorageType('Staking.OffendingValidators', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.boolean()]))) as OffendingValidatorsV70,
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
export interface OffendingValidatorsV70  {
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
    v70: new StorageType('Staking.ChillThreshold', 'Optional', [], v70.Percent) as ChillThresholdV70,
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface ChillThresholdV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.Percent | undefined)>
}
