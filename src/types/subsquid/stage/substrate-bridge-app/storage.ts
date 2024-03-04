import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v57 from '../v57'

export const assetKinds =  {
    v52: new StorageType('SubstrateBridgeApp.AssetKinds', 'Optional', [v52.SubNetworkId, v52.AssetId32], v52.Type_568) as AssetKindsV52,
}

export interface AssetKindsV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<(v52.Type_568 | undefined)>
    getMany(block: Block, keys: [v52.SubNetworkId, v52.AssetId32][]): Promise<(v52.Type_568 | undefined)[]>
    getKeys(block: Block): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeys(block: Block, key1: v52.SubNetworkId): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeys(block: Block, key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.SubNetworkId): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.SubNetworkId, key2: v52.AssetId32): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairs(block: Block, key1: v52.SubNetworkId): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairs(block: Block, key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.SubNetworkId): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.SubNetworkId, key2: v52.AssetId32): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
}

export const sidechainPrecision =  {
    v54: new StorageType('SubstrateBridgeApp.SidechainPrecision', 'Optional', [v54.SubNetworkId, v54.AssetId32], sts.number()) as SidechainPrecisionV54,
}

export interface SidechainPrecisionV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v54.SubNetworkId, v54.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeys(block: Block, key1: v54.SubNetworkId): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeys(block: Block, key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.SubNetworkId): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.SubNetworkId, key2: v54.AssetId32): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v54.SubNetworkId): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.SubNetworkId): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.SubNetworkId, key2: v54.AssetId32): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: (number | undefined)][]>
}

export const bridgeTransferLimit =  {
    v57: new StorageType('SubstrateBridgeApp.BridgeTransferLimit', 'Optional', [], sts.bigint()) as BridgeTransferLimitV57,
}

export interface BridgeTransferLimitV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(bigint | undefined)>
}

export const allowedParachainAssets =  {
    v57: new StorageType('SubstrateBridgeApp.AllowedParachainAssets', 'Default', [v57.SubNetworkId, sts.number()], sts.array(() => v57.AssetId32)) as AllowedParachainAssetsV57,
}

export interface AllowedParachainAssetsV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.AssetId32[]
    get(block: Block, key1: v57.SubNetworkId, key2: number): Promise<(v57.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v57.SubNetworkId, number][]): Promise<(v57.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v57.SubNetworkId, number][]>
    getKeys(block: Block, key1: v57.SubNetworkId): Promise<[v57.SubNetworkId, number][]>
    getKeys(block: Block, key1: v57.SubNetworkId, key2: number): Promise<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v57.SubNetworkId): AsyncIterable<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v57.SubNetworkId, key2: number): AsyncIterable<[v57.SubNetworkId, number][]>
    getPairs(block: Block): Promise<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v57.SubNetworkId): Promise<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v57.SubNetworkId, key2: number): Promise<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v57.SubNetworkId): AsyncIterable<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v57.SubNetworkId, key2: number): AsyncIterable<[k: [v57.SubNetworkId, number], v: (v57.AssetId32[] | undefined)][]>
}

export const relaychainAsset =  {
    v57: new StorageType('SubstrateBridgeApp.RelaychainAsset', 'Optional', [v57.SubNetworkId], v57.AssetId32) as RelaychainAssetV57,
}

export interface RelaychainAssetV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v57.SubNetworkId): Promise<(v57.AssetId32 | undefined)>
    getMany(block: Block, keys: v57.SubNetworkId[]): Promise<(v57.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v57.SubNetworkId[]>
    getKeys(block: Block, key: v57.SubNetworkId): Promise<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.SubNetworkId): AsyncIterable<v57.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v57.SubNetworkId, v: (v57.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v57.SubNetworkId): Promise<[k: v57.SubNetworkId, v: (v57.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.SubNetworkId, v: (v57.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.SubNetworkId): AsyncIterable<[k: v57.SubNetworkId, v: (v57.AssetId32 | undefined)][]>
}
