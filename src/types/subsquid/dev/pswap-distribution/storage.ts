import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const subscribedAccounts =  {
    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    v70: new StorageType('PswapDistribution.SubscribedAccounts', 'Optional', [v70.AccountId32], sts.tuple(() => [sts.number(), v70.AccountId32, sts.number(), sts.number()])) as SubscribedAccountsV70,
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface SubscribedAccountsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<([number, v70.AccountId32, number, number] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<([number, v70.AccountId32, number, number] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: ([number, v70.AccountId32, number, number] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: ([number, v70.AccountId32, number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: ([number, v70.AccountId32, number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: ([number, v70.AccountId32, number, number] | undefined)][]>
}

export const burnRate =  {
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v70: new StorageType('PswapDistribution.BurnRate', 'Default', [], v70.FixedPoint) as BurnRateV70,
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface BurnRateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const burnUpdateInfo =  {
    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    v70: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v70.FixedPoint, v70.FixedPoint])) as BurnUpdateInfoV70,
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface BurnUpdateInfoV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.FixedPoint, v70.FixedPoint]
    get(block: Block): Promise<([v70.FixedPoint, v70.FixedPoint] | undefined)>
}

export const shareholderAccounts =  {
    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    v70: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v70.AccountId32], v70.FixedPoint) as ShareholderAccountsV70,
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface ShareholderAccountsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block, key: v70.AccountId32): Promise<(v70.FixedPoint | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.FixedPoint | undefined)][]>
}

export const claimableShares =  {
    /**
     *  Sum of all shares of incentive token owners.
     */
    v70: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v70.FixedPoint) as ClaimableSharesV70,
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface ClaimableSharesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}

export const buyBackTbcdFraction =  {
    /**
     *  Fraction of PSWAP that could be buy backed to TBCD
     */
    v70: new StorageType('PswapDistribution.BuyBackTBCDFraction', 'Default', [], v70.FixedPoint) as BuyBackTbcdFractionV70,
}

/**
 *  Fraction of PSWAP that could be buy backed to TBCD
 */
export interface BuyBackTbcdFractionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedPoint
    get(block: Block): Promise<(v70.FixedPoint | undefined)>
}
