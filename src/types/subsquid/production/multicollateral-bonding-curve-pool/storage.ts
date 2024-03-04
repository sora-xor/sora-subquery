import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v53 from '../v53'
import * as v57 from '../v57'

export const reservesAcc =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v1.TechAccountId) as ReservesAccV1,
    /**
     *  Technical account used to store collateral tokens.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v42.TechAccountId) as ReservesAccV42,
    /**
     *  Technical account used to store collateral tokens.
     */
    v46: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v46.TechAccountId) as ReservesAccV46,
    /**
     *  Technical account used to store collateral tokens.
     */
    v57: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v57.TechAccountId) as ReservesAccV57,
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.TechAccountId
    get(block: Block): Promise<(v1.TechAccountId | undefined)>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.TechAccountId
    get(block: Block): Promise<(v42.TechAccountId | undefined)>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46.TechAccountId
    get(block: Block): Promise<(v46.TechAccountId | undefined)>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.TechAccountId
    get(block: Block): Promise<(v57.TechAccountId | undefined)>
}

export const freeReservesAccountId =  {
    v1: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Default', [], v1.AccountId) as FreeReservesAccountIdV1,
    v42: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Optional', [], v42.AccountId32) as FreeReservesAccountIdV42,
}

export interface FreeReservesAccountIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block): Promise<(v1.AccountId | undefined)>
}

export interface FreeReservesAccountIdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}

export const pendingFreeReserves =  {
    v1: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [], sts.array(() => sts.tuple(() => [v1.AssetId, v1.Balance]))) as PendingFreeReservesV1,
    v42: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [], sts.array(() => sts.tuple(() => [v42.AssetId32, sts.bigint()]))) as PendingFreeReservesV42,
}

export interface PendingFreeReservesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.AssetId, v1.Balance][]
    get(block: Block): Promise<([v1.AssetId, v1.Balance][] | undefined)>
}

export interface PendingFreeReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v42.AssetId32, bigint][]
    get(block: Block): Promise<([v42.AssetId32, bigint][] | undefined)>
}

export const initialPrice =  {
    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v1.Fixed) as InitialPriceV1,
    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v42.FixedPoint) as InitialPriceV42,
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface InitialPriceV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface InitialPriceV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const priceChangeStep =  {
    /**
     *  Cofficients in buy price function.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v1.Fixed) as PriceChangeStepV1,
    /**
     *  Cofficients in buy price function.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v42.FixedPoint) as PriceChangeStepV42,
}

/**
 *  Cofficients in buy price function.
 */
export interface PriceChangeStepV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Cofficients in buy price function.
 */
export interface PriceChangeStepV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const priceChangeRate =  {
    v1: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v1.Fixed) as PriceChangeRateV1,
    v42: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v42.FixedPoint) as PriceChangeRateV42,
}

export interface PriceChangeRateV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

export interface PriceChangeRateV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const sellPriceCoefficient =  {
    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v1.Fixed) as SellPriceCoefficientV1,
    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v42.FixedPoint) as SellPriceCoefficientV42,
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface SellPriceCoefficientV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface SellPriceCoefficientV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const alwaysDistributeCoefficient =  {
    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    v1: new StorageType('MulticollateralBondingCurvePool.AlwaysDistributeCoefficient', 'Default', [], v1.Fixed) as AlwaysDistributeCoefficientV1,
    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    v42: new StorageType('MulticollateralBondingCurvePool.AlwaysDistributeCoefficient', 'Default', [], v42.FixedPoint) as AlwaysDistributeCoefficientV42,
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface AlwaysDistributeCoefficientV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface AlwaysDistributeCoefficientV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const baseFee =  {
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v1.Fixed) as BaseFeeV1,
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v42.FixedPoint) as BaseFeeV42,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const distributionAccountsEntry =  {
    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v1.DistributionAccounts) as DistributionAccountsEntryV1,
    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v42.DistributionAccounts) as DistributionAccountsEntryV42,
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v46: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v46.DistributionAccounts) as DistributionAccountsEntryV46,
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v53: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v53.DistributionAccounts) as DistributionAccountsEntryV53,
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v57: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v57.DistributionAccounts) as DistributionAccountsEntryV57,
}

/**
 *  Accounts that receive 20% buy/sell margin according predefined proportions.
 */
export interface DistributionAccountsEntryV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.DistributionAccounts
    get(block: Block): Promise<(v1.DistributionAccounts | undefined)>
}

/**
 *  Accounts that receive 20% buy/sell margin according predefined proportions.
 */
export interface DistributionAccountsEntryV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.DistributionAccounts
    get(block: Block): Promise<(v42.DistributionAccounts | undefined)>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46.DistributionAccounts
    get(block: Block): Promise<(v46.DistributionAccounts | undefined)>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53.DistributionAccounts
    get(block: Block): Promise<(v53.DistributionAccounts | undefined)>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.DistributionAccounts
    get(block: Block): Promise<(v57.DistributionAccounts | undefined)>
}

export const enabledTargets =  {
    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v1.AssetId)) as EnabledTargetsV1,
    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v42.AssetId32)) as EnabledTargetsV42,
}

/**
 *  Collateral Assets allowed to be sold on bonding curve.
 */
export interface EnabledTargetsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AssetId[]
    get(block: Block): Promise<(v1.AssetId[] | undefined)>
}

/**
 *  Collateral Assets allowed to be sold on bonding curve.
 */
export interface EnabledTargetsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32[]
    get(block: Block): Promise<(v42.AssetId32[] | undefined)>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v1.AssetId) as ReferenceAssetIdV1,
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v42.AssetId32) as ReferenceAssetIdV42,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AssetId
    get(block: Block): Promise<(v1.AssetId | undefined)>
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32
    get(block: Block): Promise<(v42.AssetId32 | undefined)>
}

export const rewards =  {
    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    v1: new StorageType('MulticollateralBondingCurvePool.Rewards', 'Default', [v1.AccountId], sts.tuple(() => [v1.Balance, v1.Balance])) as RewardsV1,
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface RewardsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.Balance, v1.Balance]
    get(block: Block, key: v1.AccountId): Promise<([v1.Balance, v1.Balance] | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<([v1.Balance, v1.Balance] | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: ([v1.Balance, v1.Balance] | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Total amount of PSWAP owned by accounts.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.TotalRewards', 'Default', [], v1.Balance) as TotalRewardsV1,
}

/**
 *  Total amount of PSWAP owned by accounts.
 */
export interface TotalRewardsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block): Promise<(v1.Balance | undefined)>
}

export const incentivisedCurrenciesNum =  {
    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.IncentivisedCurrenciesNum', 'Default', [], sts.number()) as IncentivisedCurrenciesNumV1,
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
 */
export interface IncentivisedCurrenciesNumV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const incentivesAccountId =  {
    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Default', [], v1.AccountId) as IncentivesAccountIdV1,
    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Optional', [], v42.AccountId32) as IncentivesAccountIdV42,
}

/**
 *  Account which stores actual PSWAP intended for rewards.
 */
export interface IncentivesAccountIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block): Promise<(v1.AccountId | undefined)>
}

/**
 *  Account which stores actual PSWAP intended for rewards.
 */
export interface IncentivesAccountIdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}

export const assetsWithOptionalRewardMultiplier =  {
    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    v1: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v1.AssetId], v1.Fixed) as AssetsWithOptionalRewardMultiplierV1,
    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    v42: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v42.AssetId32], v42.FixedPoint) as AssetsWithOptionalRewardMultiplierV42,
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface AssetsWithOptionalRewardMultiplierV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AssetId): Promise<(v1.Fixed | undefined)>
    getMany(block: Block, keys: v1.AssetId[]): Promise<(v1.Fixed | undefined)[]>
    getKeys(block: Block): Promise<v1.AssetId[]>
    getKeys(block: Block, key: v1.AssetId): Promise<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<v1.AssetId[]>
    getPairs(block: Block): Promise<[k: v1.AssetId, v: (v1.Fixed | undefined)][]>
    getPairs(block: Block, key: v1.AssetId): Promise<[k: v1.AssetId, v: (v1.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AssetId, v: (v1.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<[k: v1.AssetId, v: (v1.Fixed | undefined)][]>
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface AssetsWithOptionalRewardMultiplierV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.FixedPoint | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.FixedPoint | undefined)][]>
}

export const initialPswapRewardsSupply =  {
    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.InitialPswapRewardsSupply', 'Default', [], v1.Balance) as InitialPswapRewardsSupplyV1,
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified.
 */
export interface InitialPswapRewardsSupplyV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block): Promise<(v1.Balance | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v1: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v1.AssetId], v1.Balance) as CollateralReservesV1,
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v42.AssetId32], sts.bigint()) as CollateralReservesV42,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block, key: v1.AssetId): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.AssetId[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.AssetId[]>
    getKeys(block: Block, key: v1.AssetId): Promise<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<v1.AssetId[]>
    getPairs(block: Block): Promise<[k: v1.AssetId, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.AssetId): Promise<[k: v1.AssetId, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AssetId, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<[k: v1.AssetId, v: (v1.Balance | undefined)][]>
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v42.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
}
