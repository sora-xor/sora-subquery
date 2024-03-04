import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'
import * as v68 from '../v68'

export const subscribedAccounts =  {
    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    v1: new StorageType('PswapDistribution.SubscribedAccounts', 'Optional', [v1.AccountId], sts.tuple(() => [v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber])) as SubscribedAccountsV1,
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface SubscribedAccountsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: ([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: ([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: ([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: ([v1.DEXId, v1.AssetId, v1.BlockNumber, v1.BlockNumber] | undefined)][]>
}

export const burnRate =  {
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v1: new StorageType('PswapDistribution.BurnRate', 'Default', [], v1.Fixed) as BurnRateV1,
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v42: new StorageType('PswapDistribution.BurnRate', 'Default', [], v42.FixedPoint) as BurnRateV42,
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface BurnRateV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface BurnRateV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const burnUpdateInfo =  {
    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    v1: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v1.Fixed, v1.Fixed])) as BurnUpdateInfoV1,
    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    v42: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v42.FixedPoint, v42.FixedPoint])) as BurnUpdateInfoV42,
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface BurnUpdateInfoV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.Fixed, v1.Fixed]
    get(block: Block): Promise<([v1.Fixed, v1.Fixed] | undefined)>
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface BurnUpdateInfoV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v42.FixedPoint, v42.FixedPoint]
    get(block: Block): Promise<([v42.FixedPoint, v42.FixedPoint] | undefined)>
}

export const shareholderAccounts =  {
    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    v1: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v1.AccountId], v1.Fixed) as ShareholderAccountsV1,
    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    v42: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v42.AccountId32], v42.FixedPoint) as ShareholderAccountsV42,
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface ShareholderAccountsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block, key: v1.AccountId): Promise<(v1.Fixed | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.Fixed | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.Fixed | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.Fixed | undefined)][]>
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface ShareholderAccountsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block, key: v42.AccountId32): Promise<(v42.FixedPoint | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.FixedPoint | undefined)][]>
}

export const claimableShares =  {
    /**
     *  Sum of all shares of incentive token owners.
     */
    v1: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v1.Fixed) as ClaimableSharesV1,
    /**
     *  Sum of all shares of incentive token owners.
     */
    v42: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v42.FixedPoint) as ClaimableSharesV42,
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface ClaimableSharesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface ClaimableSharesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const parliamentPswapFraction =  {
    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    v1: new StorageType('PswapDistribution.ParliamentPswapFraction', 'Default', [], v1.Fixed) as ParliamentPswapFractionV1,
    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    v42: new StorageType('PswapDistribution.ParliamentPswapFraction', 'Default', [], v42.FixedPoint) as ParliamentPswapFractionV42,
}

/**
 *  Fraction of PSWAP that could be reminted for parliament.
 */
export interface ParliamentPswapFractionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Fixed
    get(block: Block): Promise<(v1.Fixed | undefined)>
}

/**
 *  Fraction of PSWAP that could be reminted for parliament.
 */
export interface ParliamentPswapFractionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const buyBackXstFraction =  {
    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    v53: new StorageType('PswapDistribution.BuyBackXSTFraction', 'Default', [], v53.FixedPoint) as BuyBackXstFractionV53,
}

/**
 *  Fraction of PSWAP that could be buy backed to XST
 */
export interface BuyBackXstFractionV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53.FixedPoint
    get(block: Block): Promise<(v53.FixedPoint | undefined)>
}

export const buyBackTbcdFraction =  {
    /**
     *  Fraction of PSWAP that could be buy backed to TBCD
     */
    v68: new StorageType('PswapDistribution.BuyBackTBCDFraction', 'Default', [], v68.FixedPoint) as BuyBackTbcdFractionV68,
}

/**
 *  Fraction of PSWAP that could be buy backed to TBCD
 */
export interface BuyBackTbcdFractionV68  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v68.FixedPoint
    get(block: Block): Promise<(v68.FixedPoint | undefined)>
}
