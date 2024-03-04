import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'
import * as v22 from '../v22'
import * as v26 from '../v26'
import * as v42 from '../v42'

export const assetOwners =  {
    /**
     *  Asset Id -> Owner Account Id
     */
    v1: new StorageType('Assets.AssetOwners', 'Default', [v1.AssetId], v1.AccountId) as AssetOwnersV1,
    /**
     *  Asset Id -> Owner Account Id
     */
    v7: new StorageType('Assets.AssetOwners', 'Optional', [v7.AssetId], v7.AccountId) as AssetOwnersV7,
    /**
     *  Asset Id -> Owner Account Id
     */
    v42: new StorageType('Assets.AssetOwners', 'Optional', [v42.AssetId32], v42.AccountId32) as AssetOwnersV42,
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block, key: v1.AssetId): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.AssetId[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.AssetId[]>
    getKeys(block: Block, key: v1.AssetId): Promise<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<v1.AssetId[]>
    getPairs(block: Block): Promise<[k: v1.AssetId, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.AssetId): Promise<[k: v1.AssetId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AssetId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<[k: v1.AssetId, v: (v1.AccountId | undefined)][]>
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.AssetId): Promise<(v7.AccountId | undefined)>
    getMany(block: Block, keys: v7.AssetId[]): Promise<(v7.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v7.AssetId[]>
    getKeys(block: Block, key: v7.AssetId): Promise<v7.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AssetId): AsyncIterable<v7.AssetId[]>
    getPairs(block: Block): Promise<[k: v7.AssetId, v: (v7.AccountId | undefined)][]>
    getPairs(block: Block, key: v7.AssetId): Promise<[k: v7.AssetId, v: (v7.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AssetId, v: (v7.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AssetId): AsyncIterable<[k: v7.AssetId, v: (v7.AccountId | undefined)][]>
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.AccountId32 | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.AccountId32 | undefined)][]>
}

export const assetInfos =  {
    /**
     *  Asset Id -> (Symbol, Precision, Is Mintable)
     */
    v1: new StorageType('Assets.AssetInfos', 'Default', [v1.AssetId], sts.tuple(() => [v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, sts.boolean()])) as AssetInfosV1,
    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v26: new StorageType('Assets.AssetInfos', 'Default', [v26.AssetId], sts.tuple(() => [v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, sts.boolean(), sts.option(() => v26.ContentSource), sts.option(() => v26.Description)])) as AssetInfosV26,
    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v42: new StorageType('Assets.AssetInfos', 'Default', [v42.AssetId32], sts.tuple(() => [v42.AssetSymbol, v42.AssetName, sts.number(), sts.boolean(), sts.option(() => v42.ContentSource), sts.option(() => v42.Description)])) as AssetInfosV42,
}

/**
 *  Asset Id -> (Symbol, Precision, Is Mintable)
 */
export interface AssetInfosV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean]
    get(block: Block, key: v1.AssetId): Promise<([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)>
    getMany(block: Block, keys: v1.AssetId[]): Promise<([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)[]>
    getKeys(block: Block): Promise<v1.AssetId[]>
    getKeys(block: Block, key: v1.AssetId): Promise<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<v1.AssetId[]>
    getPairs(block: Block): Promise<[k: v1.AssetId, v: ([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)][]>
    getPairs(block: Block, key: v1.AssetId): Promise<[k: v1.AssetId, v: ([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AssetId, v: ([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<[k: v1.AssetId, v: ([v1.AssetSymbol, v1.AssetName, v1.BalancePrecision, boolean] | undefined)][]>
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetInfosV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)]
    get(block: Block, key: v26.AssetId): Promise<([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)>
    getMany(block: Block, keys: v26.AssetId[]): Promise<([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v26.AssetId[]>
    getKeys(block: Block, key: v26.AssetId): Promise<v26.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AssetId): AsyncIterable<v26.AssetId[]>
    getPairs(block: Block): Promise<[k: v26.AssetId, v: ([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)][]>
    getPairs(block: Block, key: v26.AssetId): Promise<[k: v26.AssetId, v: ([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AssetId, v: ([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AssetId): AsyncIterable<[k: v26.AssetId, v: ([v26.AssetSymbol, v26.AssetName, v26.BalancePrecision, boolean, (v26.ContentSource | undefined), (v26.Description | undefined)] | undefined)][]>
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetInfosV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)]
    get(block: Block, key: v42.AssetId32): Promise<([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: ([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: ([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: ([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: ([v42.AssetSymbol, v42.AssetName, number, boolean, (v42.ContentSource | undefined), (v42.Description | undefined)] | undefined)][]>
}

export const assetRecordAssetId =  {
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v1: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v1.AssetId], v1.AssetRecord) as AssetRecordAssetIdV1,
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v42: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v42.AssetId32], v42.AssetRecord) as AssetRecordAssetIdV42,
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AssetId): Promise<(v1.AssetRecord | undefined)>
    getMany(block: Block, keys: v1.AssetId[]): Promise<(v1.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v1.AssetId[]>
    getKeys(block: Block, key: v1.AssetId): Promise<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<v1.AssetId[]>
    getPairs(block: Block): Promise<[k: v1.AssetId, v: (v1.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v1.AssetId): Promise<[k: v1.AssetId, v: (v1.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AssetId, v: (v1.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AssetId): AsyncIterable<[k: v1.AssetId, v: (v1.AssetRecord | undefined)][]>
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.AssetRecord | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.AssetRecord | undefined)][]>
}

export const assetContentSource =  {
    /**
     *  Asset Id -> Content Source
     */
    v22: new StorageType('Assets.AssetContentSource', 'Optional', [v22.AssetId], v22.ContentSource) as AssetContentSourceV22,
}

/**
 *  Asset Id -> Content Source
 */
export interface AssetContentSourceV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.AssetId): Promise<(v22.ContentSource | undefined)>
    getMany(block: Block, keys: v22.AssetId[]): Promise<(v22.ContentSource | undefined)[]>
    getKeys(block: Block): Promise<v22.AssetId[]>
    getKeys(block: Block, key: v22.AssetId): Promise<v22.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AssetId): AsyncIterable<v22.AssetId[]>
    getPairs(block: Block): Promise<[k: v22.AssetId, v: (v22.ContentSource | undefined)][]>
    getPairs(block: Block, key: v22.AssetId): Promise<[k: v22.AssetId, v: (v22.ContentSource | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AssetId, v: (v22.ContentSource | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AssetId): AsyncIterable<[k: v22.AssetId, v: (v22.ContentSource | undefined)][]>
}

export const assetDescription =  {
    /**
     *  Asset Id -> Description
     */
    v22: new StorageType('Assets.AssetDescription', 'Optional', [v22.AssetId], v22.Description) as AssetDescriptionV22,
}

/**
 *  Asset Id -> Description
 */
export interface AssetDescriptionV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.AssetId): Promise<(v22.Description | undefined)>
    getMany(block: Block, keys: v22.AssetId[]): Promise<(v22.Description | undefined)[]>
    getKeys(block: Block): Promise<v22.AssetId[]>
    getKeys(block: Block, key: v22.AssetId): Promise<v22.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AssetId): AsyncIterable<v22.AssetId[]>
    getPairs(block: Block): Promise<[k: v22.AssetId, v: (v22.Description | undefined)][]>
    getPairs(block: Block, key: v22.AssetId): Promise<[k: v22.AssetId, v: (v22.Description | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AssetId, v: (v22.Description | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AssetId): AsyncIterable<[k: v22.AssetId, v: (v22.Description | undefined)][]>
}
