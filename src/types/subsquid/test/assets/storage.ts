import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v69 from '../v69'

export const assetOwners =  {
    /**
     *  Asset Id -> Owner Account Id
     */
    v33: new StorageType('Assets.AssetOwners', 'Optional', [v33.AssetId], v33.AccountId) as AssetOwnersV33,
    /**
     *  Asset Id -> Owner Account Id
     */
    v42: new StorageType('Assets.AssetOwners', 'Optional', [v42.AssetId32], v42.AccountId32) as AssetOwnersV42,
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AssetId): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.AccountId | undefined)][]>
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
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v33: new StorageType('Assets.AssetInfos', 'Default', [v33.AssetId], sts.tuple(() => [v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, sts.boolean(), sts.option(() => v33.ContentSource), sts.option(() => v33.Description)])) as AssetInfosV33,
    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v42: new StorageType('Assets.AssetInfos', 'Default', [v42.AssetId32], sts.tuple(() => [v42.AssetSymbol, v42.AssetName, sts.number(), sts.boolean(), sts.option(() => v42.ContentSource), sts.option(() => v42.Description)])) as AssetInfosV42,
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetInfosV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)]
    get(block: Block, key: v33.AssetId): Promise<([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: ([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: ([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: ([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: ([v33.AssetSymbol, v33.AssetName, v33.BalancePrecision, boolean, (v33.ContentSource | undefined), (v33.Description | undefined)] | undefined)][]>
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
    v33: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v33.AssetId], v33.AssetRecord) as AssetRecordAssetIdV33,
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v42: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v42.AssetId32], v42.AssetRecord) as AssetRecordAssetIdV42,
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v69: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v69.AssetId32], v69.AssetRecord) as AssetRecordAssetIdV69,
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AssetId): Promise<(v33.AssetRecord | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.AssetRecord | undefined)][]>
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

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.AssetId32): Promise<(v69.AssetRecord | undefined)>
    getMany(block: Block, keys: v69.AssetId32[]): Promise<(v69.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v69.AssetId32[]>
    getKeys(block: Block, key: v69.AssetId32): Promise<v69.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.AssetId32): AsyncIterable<v69.AssetId32[]>
    getPairs(block: Block): Promise<[k: v69.AssetId32, v: (v69.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v69.AssetId32): Promise<[k: v69.AssetId32, v: (v69.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.AssetId32, v: (v69.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.AssetId32): AsyncIterable<[k: v69.AssetId32, v: (v69.AssetRecord | undefined)][]>
}
