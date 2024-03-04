import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'
import * as v67 from '../v67'

export const subscribedAccounts =  {
    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    v33: new StorageType('PswapDistribution.SubscribedAccounts', 'Optional', [v33.AccountId], sts.tuple(() => [v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber])) as SubscribedAccountsV33,
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface SubscribedAccountsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: ([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: ([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: ([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: ([v33.DEXId, v33.AccountIdOf, v33.BlockNumber, v33.BlockNumber] | undefined)][]>
}

export const burnRate =  {
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v33: new StorageType('PswapDistribution.BurnRate', 'Default', [], v33.Fixed) as BurnRateV33,
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v42: new StorageType('PswapDistribution.BurnRate', 'Default', [], v42.FixedPoint) as BurnRateV42,
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface BurnRateV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v33.Fixed, v33.Fixed])) as BurnUpdateInfoV33,
    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    v42: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v42.FixedPoint, v42.FixedPoint])) as BurnUpdateInfoV42,
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface BurnUpdateInfoV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.Fixed, v33.Fixed]
    get(block: Block): Promise<([v33.Fixed, v33.Fixed] | undefined)>
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
    v33: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v33.AccountId], v33.Fixed) as ShareholderAccountsV33,
    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    v42: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v42.AccountId32], v42.FixedPoint) as ShareholderAccountsV42,
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface ShareholderAccountsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block, key: v33.AccountId): Promise<(v33.Fixed | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Fixed | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Fixed | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Fixed | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Fixed | undefined)][]>
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
    v33: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v33.Fixed) as ClaimableSharesV33,
    /**
     *  Sum of all shares of incentive token owners.
     */
    v42: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v42.FixedPoint) as ClaimableSharesV42,
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface ClaimableSharesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('PswapDistribution.ParliamentPswapFraction', 'Default', [], v33.Fixed) as ParliamentPswapFractionV33,
    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    v42: new StorageType('PswapDistribution.ParliamentPswapFraction', 'Default', [], v42.FixedPoint) as ParliamentPswapFractionV42,
}

/**
 *  Fraction of PSWAP that could be reminted for parliament.
 */
export interface ParliamentPswapFractionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v52: new StorageType('PswapDistribution.BuyBackXSTFraction', 'Default', [], v52.FixedPoint) as BuyBackXstFractionV52,
}

/**
 *  Fraction of PSWAP that could be buy backed to XST
 */
export interface BuyBackXstFractionV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.FixedPoint
    get(block: Block): Promise<(v52.FixedPoint | undefined)>
}

export const buyBackTbcdFraction =  {
    /**
     *  Fraction of PSWAP that could be buy backed to TBCD
     */
    v67: new StorageType('PswapDistribution.BuyBackTBCDFraction', 'Default', [], v67.FixedPoint) as BuyBackTbcdFractionV67,
}

/**
 *  Fraction of PSWAP that could be buy backed to TBCD
 */
export interface BuyBackTbcdFractionV67  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v67.FixedPoint
    get(block: Block): Promise<(v67.FixedPoint | undefined)>
}
