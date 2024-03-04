import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const assetKinds =  {
    v64: new StorageType('ParachainBridgeApp.AssetKinds', 'Optional', [v64.SubNetworkId, v64.AssetId32], v64.Type_543) as AssetKindsV64,
    v70: new StorageType('ParachainBridgeApp.AssetKinds', 'Optional', [v70.SubNetworkId, v70.AssetId32], v70.Type_556) as AssetKindsV70,
}

export interface AssetKindsV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<(v64.Type_543 | undefined)>
    getMany(block: Block, keys: [v64.SubNetworkId, v64.AssetId32][]): Promise<(v64.Type_543 | undefined)[]>
    getKeys(block: Block): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (v64.Type_543 | undefined)][]>
}

export interface AssetKindsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<(v70.Type_556 | undefined)>
    getMany(block: Block, keys: [v70.SubNetworkId, v70.AssetId32][]): Promise<(v70.Type_556 | undefined)[]>
    getKeys(block: Block): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[v70.SubNetworkId, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
    getPairs(block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): Promise<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.SubNetworkId, key2: v70.AssetId32): AsyncIterable<[k: [v70.SubNetworkId, v70.AssetId32], v: (v70.Type_556 | undefined)][]>
}

export const sidechainPrecision =  {
    v64: new StorageType('ParachainBridgeApp.SidechainPrecision', 'Optional', [v64.SubNetworkId, v64.AssetId32], sts.number()) as SidechainPrecisionV64,
    v70: new StorageType('ParachainBridgeApp.SidechainPrecision', 'Optional', [v70.SubNetworkId, v70.AssetId32], sts.number()) as SidechainPrecisionV70,
}

export interface SidechainPrecisionV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v64.SubNetworkId, v64.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: (number | undefined)][]>
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
    v64: new StorageType('ParachainBridgeApp.AllowedParachainAssets', 'Default', [v64.SubNetworkId, sts.number()], sts.array(() => v64.AssetId32)) as AllowedParachainAssetsV64,
    v70: new StorageType('ParachainBridgeApp.AllowedParachainAssets', 'Default', [v70.SubNetworkId, sts.number()], sts.array(() => v70.AssetId32)) as AllowedParachainAssetsV70,
}

export interface AllowedParachainAssetsV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64.AssetId32[]
    get(block: Block, key1: v64.SubNetworkId, key2: number): Promise<(v64.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v64.SubNetworkId, number][]): Promise<(v64.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v64.SubNetworkId, number][]>
    getKeys(block: Block, key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, number][]>
    getKeys(block: Block, key1: v64.SubNetworkId, key2: number): Promise<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: number): AsyncIterable<[v64.SubNetworkId, number][]>
    getPairs(block: Block): Promise<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v64.SubNetworkId, key2: number): Promise<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.SubNetworkId, key2: number): AsyncIterable<[k: [v64.SubNetworkId, number], v: (v64.AssetId32[] | undefined)][]>
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
    v64: new StorageType('ParachainBridgeApp.RelaychainAsset', 'Optional', [v64.SubNetworkId], v64.AssetId32) as RelaychainAssetV64,
    v70: new StorageType('ParachainBridgeApp.RelaychainAsset', 'Optional', [v70.SubNetworkId], v70.AssetId32) as RelaychainAssetV70,
}

export interface RelaychainAssetV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64.SubNetworkId): Promise<(v64.AssetId32 | undefined)>
    getMany(block: Block, keys: v64.SubNetworkId[]): Promise<(v64.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v64.SubNetworkId[]>
    getKeys(block: Block, key: v64.SubNetworkId): Promise<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<v64.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.SubNetworkId, v: (v64.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v64.SubNetworkId): Promise<[k: v64.SubNetworkId, v: (v64.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.SubNetworkId, v: (v64.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<[k: v64.SubNetworkId, v: (v64.AssetId32 | undefined)][]>
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
