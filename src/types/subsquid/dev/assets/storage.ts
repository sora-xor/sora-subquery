import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const assetOwners =  {
    /**
     *  Asset Id -> Owner Account Id
     */
    v70: new StorageType('Assets.AssetOwners', 'Optional', [v70.AssetId32], v70.AccountId32) as AssetOwnersV70,
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.AccountId32 | undefined)][]>
}

export const assetInfos =  {
    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v70: new StorageType('Assets.AssetInfos', 'Default', [v70.AssetId32], sts.tuple(() => [v70.AssetSymbol, v70.AssetName, sts.number(), sts.boolean(), sts.option(() => v70.ContentSource), sts.option(() => v70.Description)])) as AssetInfosV70,
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetInfosV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)]
    get(block: Block, key: v70.AssetId32): Promise<([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: ([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: ([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: ([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: ([v70.AssetSymbol, v70.AssetName, number, boolean, (v70.ContentSource | undefined), (v70.Description | undefined)] | undefined)][]>
}

export const assetRecordAssetId =  {
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v70: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v70.AssetId32], v70.AssetRecord) as AssetRecordAssetIdV70,
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.AssetRecord | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.AssetRecord | undefined)][]>
}
