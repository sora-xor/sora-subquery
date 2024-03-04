import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'
import * as v47 from '../v47'

export const penaltiesAccount =  {
    /**
     *  Account for collecting penalties
     */
    v26: new StorageType('CeresLaunchpad.PenaltiesAccount', 'Default', [], v26.AccountIdOf) as PenaltiesAccountV26,
}

/**
 *  Account for collecting penalties
 */
export interface PenaltiesAccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountIdOf
    get(block: Block): Promise<(v26.AccountIdOf | undefined)>
}

export const ceresBurnFeeAmount =  {
    /**
     *  Amount of CERES for burn fee
     */
    v26: new StorageType('CeresLaunchpad.CeresBurnFeeAmount', 'Default', [], v26.Balance) as CeresBurnFeeAmountV26,
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresBurnFeeAmountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.Balance
    get(block: Block): Promise<(v26.Balance | undefined)>
}

export const ceresForContributionInIlo =  {
    /**
     *  Amount of CERES for contribution in ILO
     */
    v26: new StorageType('CeresLaunchpad.CeresForContributionInILO', 'Default', [], v26.Balance) as CeresForContributionInIloV26,
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresForContributionInIloV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.Balance
    get(block: Block): Promise<(v26.Balance | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    v26: new StorageType('CeresLaunchpad.AuthorityAccount', 'Default', [], v26.AccountIdOf) as AuthorityAccountV26,
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface AuthorityAccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountIdOf
    get(block: Block): Promise<(v26.AccountIdOf | undefined)>
}

export const ilOs =  {
    v26: new StorageType('CeresLaunchpad.ILOs', 'Default', [v26.AssetIdOf], v26.ILOInfo) as IlOsV26,
    v33: new StorageType('CeresLaunchpad.ILOs', 'Default', [v33.AssetIdOf], v33.ILOInfo) as IlOsV33,
    v37: new StorageType('CeresLaunchpad.ILOs', 'Default', [v37.AssetIdOf], v37.ILOInfo) as IlOsV37,
    v42: new StorageType('CeresLaunchpad.ILOs', 'Optional', [v42.AssetId32], v42.ILOInfo) as IlOsV42,
    v47: new StorageType('CeresLaunchpad.ILOs', 'Optional', [v47.AssetId32], v47.ILOInfo) as IlOsV47,
}

export interface IlOsV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.ILOInfo
    get(block: Block, key: v26.AssetIdOf): Promise<(v26.ILOInfo | undefined)>
    getMany(block: Block, keys: v26.AssetIdOf[]): Promise<(v26.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v26.AssetIdOf[]>
    getKeys(block: Block, key: v26.AssetIdOf): Promise<v26.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AssetIdOf): AsyncIterable<v26.AssetIdOf[]>
    getPairs(block: Block): Promise<[k: v26.AssetIdOf, v: (v26.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v26.AssetIdOf): Promise<[k: v26.AssetIdOf, v: (v26.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AssetIdOf, v: (v26.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AssetIdOf): AsyncIterable<[k: v26.AssetIdOf, v: (v26.ILOInfo | undefined)][]>
}

export interface IlOsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ILOInfo
    get(block: Block, key: v33.AssetIdOf): Promise<(v33.ILOInfo | undefined)>
    getMany(block: Block, keys: v33.AssetIdOf[]): Promise<(v33.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetIdOf[]>
    getKeys(block: Block, key: v33.AssetIdOf): Promise<v33.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetIdOf): AsyncIterable<v33.AssetIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AssetIdOf, v: (v33.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v33.AssetIdOf): Promise<[k: v33.AssetIdOf, v: (v33.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetIdOf, v: (v33.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetIdOf): AsyncIterable<[k: v33.AssetIdOf, v: (v33.ILOInfo | undefined)][]>
}

export interface IlOsV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.ILOInfo
    get(block: Block, key: v37.AssetIdOf): Promise<(v37.ILOInfo | undefined)>
    getMany(block: Block, keys: v37.AssetIdOf[]): Promise<(v37.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v37.AssetIdOf[]>
    getKeys(block: Block, key: v37.AssetIdOf): Promise<v37.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.AssetIdOf): AsyncIterable<v37.AssetIdOf[]>
    getPairs(block: Block): Promise<[k: v37.AssetIdOf, v: (v37.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v37.AssetIdOf): Promise<[k: v37.AssetIdOf, v: (v37.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.AssetIdOf, v: (v37.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.AssetIdOf): AsyncIterable<[k: v37.AssetIdOf, v: (v37.ILOInfo | undefined)][]>
}

export interface IlOsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.ILOInfo | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.ILOInfo | undefined)][]>
}

export interface IlOsV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47.AssetId32): Promise<(v47.ILOInfo | undefined)>
    getMany(block: Block, keys: v47.AssetId32[]): Promise<(v47.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v47.AssetId32[]>
    getKeys(block: Block, key: v47.AssetId32): Promise<v47.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v47.AssetId32): AsyncIterable<v47.AssetId32[]>
    getPairs(block: Block): Promise<[k: v47.AssetId32, v: (v47.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v47.AssetId32): Promise<[k: v47.AssetId32, v: (v47.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47.AssetId32, v: (v47.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47.AssetId32): AsyncIterable<[k: v47.AssetId32, v: (v47.ILOInfo | undefined)][]>
}

export const contributions =  {
    v26: new StorageType('CeresLaunchpad.Contributions', 'Default', [v26.AssetIdOf, v26.AccountIdOf], v26.ContributionInfo) as ContributionsV26,
    v42: new StorageType('CeresLaunchpad.Contributions', 'Default', [v42.AssetId32, v42.AccountId32], v42.ContributionInfo) as ContributionsV42,
}

export interface ContributionsV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.ContributionInfo
    get(block: Block, key1: v26.AssetIdOf, key2: v26.AccountIdOf): Promise<(v26.ContributionInfo | undefined)>
    getMany(block: Block, keys: [v26.AssetIdOf, v26.AccountIdOf][]): Promise<(v26.ContributionInfo | undefined)[]>
    getKeys(block: Block): Promise<[v26.AssetIdOf, v26.AccountIdOf][]>
    getKeys(block: Block, key1: v26.AssetIdOf): Promise<[v26.AssetIdOf, v26.AccountIdOf][]>
    getKeys(block: Block, key1: v26.AssetIdOf, key2: v26.AccountIdOf): Promise<[v26.AssetIdOf, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v26.AssetIdOf, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v26.AssetIdOf): AsyncIterable<[v26.AssetIdOf, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v26.AssetIdOf, key2: v26.AccountIdOf): AsyncIterable<[v26.AssetIdOf, v26.AccountIdOf][]>
    getPairs(block: Block): Promise<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v26.AssetIdOf): Promise<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v26.AssetIdOf, key2: v26.AccountIdOf): Promise<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v26.AssetIdOf): AsyncIterable<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v26.AssetIdOf, key2: v26.AccountIdOf): AsyncIterable<[k: [v26.AssetIdOf, v26.AccountIdOf], v: (v26.ContributionInfo | undefined)][]>
}

export interface ContributionsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.ContributionInfo
    get(block: Block, key1: v42.AssetId32, key2: v42.AccountId32): Promise<(v42.ContributionInfo | undefined)>
    getMany(block: Block, keys: [v42.AssetId32, v42.AccountId32][]): Promise<(v42.ContributionInfo | undefined)[]>
    getKeys(block: Block): Promise<[v42.AssetId32, v42.AccountId32][]>
    getKeys(block: Block, key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AccountId32][]>
    getKeys(block: Block, key1: v42.AssetId32, key2: v42.AccountId32): Promise<[v42.AssetId32, v42.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AssetId32, v42.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AccountId32): AsyncIterable<[v42.AssetId32, v42.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32, key2: v42.AccountId32): Promise<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AccountId32): AsyncIterable<[k: [v42.AssetId32, v42.AccountId32], v: (v42.ContributionInfo | undefined)][]>
}

export const whitelistedContributors =  {
    v33: new StorageType('CeresLaunchpad.WhitelistedContributors', 'Default', [], sts.array(() => v33.AccountIdOf)) as WhitelistedContributorsV33,
}

export interface WhitelistedContributorsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf[]
    get(block: Block): Promise<(v33.AccountIdOf[] | undefined)>
}

export const whitelistedIloOrganizers =  {
    v33: new StorageType('CeresLaunchpad.WhitelistedIloOrganizers', 'Default', [], sts.array(() => v33.AccountIdOf)) as WhitelistedIloOrganizersV33,
}

export interface WhitelistedIloOrganizersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf[]
    get(block: Block): Promise<(v33.AccountIdOf[] | undefined)>
}

export const feePercentOnRaisedFunds =  {
    /**
     *  Fee percent on raised funds in successful ILO
     */
    v47: new StorageType('CeresLaunchpad.FeePercentOnRaisedFunds', 'Default', [], sts.bigint()) as FeePercentOnRaisedFundsV47,
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface FeePercentOnRaisedFundsV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
