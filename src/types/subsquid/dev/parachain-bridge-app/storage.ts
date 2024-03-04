import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const assetKinds =  {
    v70: new StorageType('ParachainBridgeApp.AssetKinds', 'Optional', [v70.SubNetworkId, v70.AssetId32], v70.Type_609) as AssetKindsV70,
}

export interface AssetKindsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<(v70.Type_609 | undefined)>
    getMany(block: Block, keys: [v70.SubNetworkId, v70.AssetId32][]): Promise<(v70.Type_609 | undefined)[]>
    getKeys(block: Block): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
}

export const sidechainPrecision =  {
    v70: new StorageType('ParachainBridgeApp.SidechainPrecision', 'Optional', [v70.SubNetworkId, v70.AssetId32], sts.number()) as SidechainPrecisionV70,
}

export interface SidechainPrecisionV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v70.SubNetworkId, v70.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (number | undefined)][]>
}

export const allowedParachainAssets =  {
    v70: new StorageType('ParachainBridgeApp.AllowedParachainAssets', 'Default', [v70.SubNetworkId, sts.number()], sts.array(() => v70.AssetId32)) as AllowedParachainAssetsV70,
}

export interface AllowedParachainAssetsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AssetId32[]
    get(block: Block, key1: v70.SubNetworkId, key2: number): Promise<(v70.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v70.SubNetworkId, number][]): Promise<(v70.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.SubNetworkId, number][]>
    getKeys(block: Block, key1: v70.SubNetworkId): Promise<[v70.SubNetworkId, number][]>
    getKeys(block: Block, key1: v70.SubNetworkId, key2: number): Promise<[v70.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[v70.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: number): AsyncIterable<[v70.SubNetworkId, number][]>
    getPairs(block: Block): Promise<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId): Promise<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId, key2: number): Promise<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: number): AsyncIterable<[k: [v70.SubNetworkId, number], v: (v70.AssetId32[] | undefined)][]>
}

export const relaychainAsset =  {
    v70: new StorageType('ParachainBridgeApp.RelaychainAsset', 'Optional', [v70.SubNetworkId], v70.AssetId32) as RelaychainAssetV70,
}

export interface RelaychainAssetV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.AssetId32 | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.AssetId32 | undefined)][]>
}
