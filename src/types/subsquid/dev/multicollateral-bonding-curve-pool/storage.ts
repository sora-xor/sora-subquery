import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const reservesAcc =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v70: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v70.TechAccountId) as ReservesAccV70,
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.TechAccountId
    get(block: Block): Promise<(v70.TechAccountId | undefined)>
}

export const freeReservesAccountId =  {
    v70: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Optional', [], v70.AccountId32) as FreeReservesAccountIdV70,
}

export interface FreeReservesAccountIdV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const pendingFreeReserves =  {
    v70: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [], sts.array(() => sts.tuple(() => [v70.AssetId32, sts.bigint()]))) as PendingFreeReservesV70,
}

export interface PendingFreeReservesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.AssetId32, bigint][]
    get(block: Block): Promise<([v70.AssetId32, bigint][] | undefined)>
}

export const initialPrice =  {
    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    v70: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v70.FixedPoint) as InitialPriceV70,
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface InitialPriceV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const priceChangeStep =  {
    /**
     *  Cofficients in buy price function.
     */
    v70: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v70.FixedPoint) as PriceChangeStepV70,
}

/**
 *  Cofficients in buy price function.
 */
export interface PriceChangeStepV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const priceChangeRate =  {
    v70: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v70.FixedPoint) as PriceChangeRateV70,
}

export interface PriceChangeRateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const sellPriceCoefficient =  {
    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    v70: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v70.FixedPoint) as SellPriceCoefficientV70,
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface SellPriceCoefficientV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const alwaysDistributeCoefficient =  {
    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    v70: new StorageType('MulticollateralBondingCurvePool.AlwaysDistributeCoefficient', 'Default', [], v70.FixedPoint) as AlwaysDistributeCoefficientV70,
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface AlwaysDistributeCoefficientV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const baseFee =  {
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
     */
    v70: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v70.FixedPoint) as BaseFeeV70,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
 */
export interface BaseFeeV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const distributionAccountsEntry =  {
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v70: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v70.DistributionAccounts) as DistributionAccountsEntryV70,
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.DistributionAccounts
    get(block: Block): Promise<(v70.DistributionAccounts | undefined)>
}

export const enabledTargets =  {
    /**
     *  Collateral Assets allowed to be sold by the token bonding curve
     */
    v70: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v70.AssetId32)) as EnabledTargetsV70,
}

/**
 *  Collateral Assets allowed to be sold by the token bonding curve
 */
export interface EnabledTargetsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AssetId32[]
    get(block: Block): Promise<(v70.AssetId32[] | undefined)>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI
     */
    v70: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v70.AssetId32) as ReferenceAssetIdV70,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI
 */
export interface ReferenceAssetIdV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AssetId32
    get(block: Block): Promise<(v70.AssetId32 | undefined)>
}

export const rewards =  {
    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    v70: new StorageType('MulticollateralBondingCurvePool.Rewards', 'Default', [v70.AccountId32], sts.tuple(() => [sts.bigint(), sts.bigint()])) as RewardsV70,
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface RewardsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, bigint]
    get(block: Block, key: v70.AccountId32): Promise<([bigint, bigint] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<([bigint, bigint] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: ([bigint, bigint] | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Total amount of PSWAP owned by accounts
     */
    v70: new StorageType('MulticollateralBondingCurvePool.TotalRewards', 'Default', [], sts.bigint()) as TotalRewardsV70,
}

/**
 *  Total amount of PSWAP owned by accounts
 */
export interface TotalRewardsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const incentivisedCurrenciesNum =  {
    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
     */
    v70: new StorageType('MulticollateralBondingCurvePool.IncentivisedCurrenciesNum', 'Default', [], sts.number()) as IncentivisedCurrenciesNumV70,
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
 */
export interface IncentivisedCurrenciesNumV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const incentivesAccountId =  {
    /**
     *  Account which stores actual PSWAP intended for rewards
     */
    v70: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Optional', [], v70.AccountId32) as IncentivesAccountIdV70,
}

/**
 *  Account which stores actual PSWAP intended for rewards
 */
export interface IncentivesAccountIdV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const assetsWithOptionalRewardMultiplier =  {
    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    v70: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v70.AssetId32], v70.FixedPoint) as AssetsWithOptionalRewardMultiplierV70,
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface AssetsWithOptionalRewardMultiplierV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.FixedPoint | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.FixedPoint | undefined)][]>
}

export const initialPswapRewardsSupply =  {
    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified
     */
    v70: new StorageType('MulticollateralBondingCurvePool.InitialPswapRewardsSupply', 'Default', [], sts.bigint()) as InitialPswapRewardsSupplyV70,
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified
 */
export interface InitialPswapRewardsSupplyV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v70: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v70.AssetId32], sts.bigint()) as CollateralReservesV70,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
}
