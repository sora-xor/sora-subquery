import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const reservesAcc =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v33.TechAccountId) as ReservesAccV33,
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
    v54: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v54.TechAccountId) as ReservesAccV54,
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.TechAccountId
    get(block: Block): Promise<(v33.TechAccountId | undefined)>
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
export interface ReservesAccV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.TechAccountId
    get(block: Block): Promise<(v54.TechAccountId | undefined)>
}

export const freeReservesAccountId =  {
    v33: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Default', [], v33.AccountId) as FreeReservesAccountIdV33,
    v42: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Optional', [], v42.AccountId32) as FreeReservesAccountIdV42,
}

export interface FreeReservesAccountIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId
    get(block: Block): Promise<(v33.AccountId | undefined)>
}

export interface FreeReservesAccountIdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}

export const pendingFreeReserves =  {
    v33: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [], sts.array(() => sts.tuple(() => [v33.AssetId, v33.Balance]))) as PendingFreeReservesV33,
    v42: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [], sts.array(() => sts.tuple(() => [v42.AssetId32, sts.bigint()]))) as PendingFreeReservesV42,
}

export interface PendingFreeReservesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.AssetId, v33.Balance][]
    get(block: Block): Promise<([v33.AssetId, v33.Balance][] | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v33.Fixed) as InitialPriceV33,
    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v42.FixedPoint) as InitialPriceV42,
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface InitialPriceV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v33.Fixed) as PriceChangeStepV33,
    /**
     *  Cofficients in buy price function.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v42.FixedPoint) as PriceChangeStepV42,
}

/**
 *  Cofficients in buy price function.
 */
export interface PriceChangeStepV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v33.Fixed) as PriceChangeRateV33,
    v42: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v42.FixedPoint) as PriceChangeRateV42,
}

export interface PriceChangeRateV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v33.Fixed) as SellPriceCoefficientV33,
    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v42.FixedPoint) as SellPriceCoefficientV42,
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface SellPriceCoefficientV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.AlwaysDistributeCoefficient', 'Default', [], v33.Fixed) as AlwaysDistributeCoefficientV33,
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
export interface AlwaysDistributeCoefficientV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v33.Fixed) as BaseFeeV33,
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v42.FixedPoint) as BaseFeeV42,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v33.DistributionAccounts) as DistributionAccountsEntryV33,
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
    v52: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v52.DistributionAccounts) as DistributionAccountsEntryV52,
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v54: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v54.DistributionAccounts) as DistributionAccountsEntryV54,
}

/**
 *  Accounts that receive 20% buy/sell margin according predefined proportions.
 */
export interface DistributionAccountsEntryV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.DistributionAccounts
    get(block: Block): Promise<(v33.DistributionAccounts | undefined)>
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
export interface DistributionAccountsEntryV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.DistributionAccounts
    get(block: Block): Promise<(v52.DistributionAccounts | undefined)>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.DistributionAccounts
    get(block: Block): Promise<(v54.DistributionAccounts | undefined)>
}

export const enabledTargets =  {
    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v33.AssetId)) as EnabledTargetsV33,
    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v42.AssetId32)) as EnabledTargetsV42,
}

/**
 *  Collateral Assets allowed to be sold on bonding curve.
 */
export interface EnabledTargetsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetId[]
    get(block: Block): Promise<(v33.AssetId[] | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v33.AssetId) as ReferenceAssetIdV33,
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v42.AssetId32) as ReferenceAssetIdV42,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetId
    get(block: Block): Promise<(v33.AssetId | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.Rewards', 'Default', [v33.AccountId], sts.tuple(() => [v33.Balance, v33.Balance])) as RewardsV33,
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface RewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.Balance, v33.Balance]
    get(block: Block, key: v33.AccountId): Promise<([v33.Balance, v33.Balance] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<([v33.Balance, v33.Balance] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: ([v33.Balance, v33.Balance] | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Total amount of PSWAP owned by accounts.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.TotalRewards', 'Default', [], v33.Balance) as TotalRewardsV33,
}

/**
 *  Total amount of PSWAP owned by accounts.
 */
export interface TotalRewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const incentivisedCurrenciesNum =  {
    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.IncentivisedCurrenciesNum', 'Default', [], sts.number()) as IncentivisedCurrenciesNumV33,
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
 */
export interface IncentivisedCurrenciesNumV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const incentivesAccountId =  {
    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Default', [], v33.AccountId) as IncentivesAccountIdV33,
    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Optional', [], v42.AccountId32) as IncentivesAccountIdV42,
}

/**
 *  Account which stores actual PSWAP intended for rewards.
 */
export interface IncentivesAccountIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId
    get(block: Block): Promise<(v33.AccountId | undefined)>
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
    v33: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v33.AssetId], v33.Fixed) as AssetsWithOptionalRewardMultiplierV33,
    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    v42: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v42.AssetId32], v42.FixedPoint) as AssetsWithOptionalRewardMultiplierV42,
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface AssetsWithOptionalRewardMultiplierV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AssetId): Promise<(v33.Fixed | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.Fixed | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.Fixed | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.Fixed | undefined)][]>
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
    v33: new StorageType('MulticollateralBondingCurvePool.InitialPswapRewardsSupply', 'Default', [], v33.Balance) as InitialPswapRewardsSupplyV33,
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified.
 */
export interface InitialPswapRewardsSupplyV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v33: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v33.AssetId], v33.Balance) as CollateralReservesV33,
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v42: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v42.AssetId32], sts.bigint()) as CollateralReservesV42,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block, key: v33.AssetId): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
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
