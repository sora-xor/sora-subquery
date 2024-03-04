import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const penaltiesAccount =  {
    /**
     *  Account for collecting penalties
     */
    v70: new StorageType('CeresLaunchpad.PenaltiesAccount', 'Default', [], v70.AccountId32) as PenaltiesAccountV70,
}

/**
 *  Account for collecting penalties
 */
export interface PenaltiesAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const ceresBurnFeeAmount =  {
    /**
     *  Amount of CERES for burn fee
     */
    v70: new StorageType('CeresLaunchpad.CeresBurnFeeAmount', 'Default', [], sts.bigint()) as CeresBurnFeeAmountV70,
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresBurnFeeAmountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const ceresForContributionInIlo =  {
    /**
     *  Amount of CERES for contribution in ILO
     */
    v70: new StorageType('CeresLaunchpad.CeresForContributionInILO', 'Default', [], sts.bigint()) as CeresForContributionInIloV70,
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresForContributionInIloV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const feePercentOnRaisedFunds =  {
    /**
     *  Fee percent on raised funds in successful ILO
     */
    v70: new StorageType('CeresLaunchpad.FeePercentOnRaisedFunds', 'Default', [], sts.bigint()) as FeePercentOnRaisedFundsV70,
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface FeePercentOnRaisedFundsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    v70: new StorageType('CeresLaunchpad.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const ilOs =  {
    v70: new StorageType('CeresLaunchpad.ILOs', 'Optional', [v70.AssetId32], v70.ILOInfo) as IlOsV70,
}

export interface IlOsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.ILOInfo | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.ILOInfo | undefined)][]>
}

export const contributions =  {
    v70: new StorageType('CeresLaunchpad.Contributions', 'Default', [v70.AssetId32, v70.AccountId32], v70.ContributionInfo) as ContributionsV70,
}

export interface ContributionsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.ContributionInfo
    get(block: Block, key1: v70.AssetId32, key2: v70.AccountId32): Promise<(v70.ContributionInfo | undefined)>
    getMany(block: Block, keys: [v70.AssetId32, v70.AccountId32][]): Promise<(v70.ContributionInfo | undefined)[]>
    getKeys(block: Block): Promise<[v70.AssetId32, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.AssetId32): Promise<[v70.AssetId32, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.AssetId32, key2: v70.AccountId32): Promise<[v70.AssetId32, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AssetId32, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AssetId32): AsyncIterable<[v70.AssetId32, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AssetId32, key2: v70.AccountId32): AsyncIterable<[v70.AssetId32, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v70.AssetId32): Promise<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v70.AssetId32, key2: v70.AccountId32): Promise<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AssetId32): AsyncIterable<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AssetId32, key2: v70.AccountId32): AsyncIterable<[k: [v70.AssetId32, v70.AccountId32], v: (v70.ContributionInfo | undefined)][]>
}

export const whitelistedContributors =  {
    v70: new StorageType('CeresLaunchpad.WhitelistedContributors', 'Default', [], sts.array(() => v70.AccountId32)) as WhitelistedContributorsV70,
}

export interface WhitelistedContributorsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const whitelistedIloOrganizers =  {
    v70: new StorageType('CeresLaunchpad.WhitelistedIloOrganizers', 'Default', [], sts.array(() => v70.AccountId32)) as WhitelistedIloOrganizersV70,
}

export interface WhitelistedIloOrganizersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}
