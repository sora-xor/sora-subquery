import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const appAddresses =  {
    v52: new StorageType('ERC20App.AppAddresses', 'Optional', [sts.bigint(), v52.Type_568], v52.H160) as AppAddressesV52,
}

export interface AppAddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v52.Type_568): Promise<(v52.H160 | undefined)>
    getMany(block: Block, keys: [bigint, v52.Type_568][]): Promise<(v52.H160 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v52.Type_568][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v52.Type_568][]>
    getKeys(block: Block, key1: bigint, key2: v52.Type_568): Promise<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v52.Type_568): AsyncIterable<[bigint, v52.Type_568][]>
    getPairs(block: Block): Promise<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v52.Type_568): Promise<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v52.Type_568): AsyncIterable<[k: [bigint, v52.Type_568], v: (v52.H160 | undefined)][]>
}

export const assetKinds =  {
    v52: new StorageType('ERC20App.AssetKinds', 'Optional', [sts.bigint(), v52.AssetId32], v52.Type_568) as AssetKindsV52,
}

export interface AssetKindsV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v52.AssetId32): Promise<(v52.Type_568 | undefined)>
    getMany(block: Block, keys: [bigint, v52.AssetId32][]): Promise<(v52.Type_568 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v52.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v52.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v52.AssetId32): Promise<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v52.AssetId32): AsyncIterable<[bigint, v52.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v52.AssetId32): Promise<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v52.AssetId32): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.Type_568 | undefined)][]>
}

export const tokenAddresses =  {
    v52: new StorageType('ERC20App.TokenAddresses', 'Optional', [sts.bigint(), v52.AssetId32], v52.H160) as TokenAddressesV52,
}

export interface TokenAddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v52.AssetId32): Promise<(v52.H160 | undefined)>
    getMany(block: Block, keys: [bigint, v52.AssetId32][]): Promise<(v52.H160 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v52.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v52.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v52.AssetId32): Promise<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v52.AssetId32): AsyncIterable<[bigint, v52.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v52.AssetId32): Promise<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v52.AssetId32): AsyncIterable<[k: [bigint, v52.AssetId32], v: (v52.H160 | undefined)][]>
}

export const assetsByAddresses =  {
    v52: new StorageType('ERC20App.AssetsByAddresses', 'Optional', [sts.bigint(), v52.H160], v52.AssetId32) as AssetsByAddressesV52,
}

export interface AssetsByAddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v52.H160): Promise<(v52.AssetId32 | undefined)>
    getMany(block: Block, keys: [bigint, v52.H160][]): Promise<(v52.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v52.H160][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v52.H160][]>
    getKeys(block: Block, key1: bigint, key2: v52.H160): Promise<[bigint, v52.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v52.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v52.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v52.H160): AsyncIterable<[bigint, v52.H160][]>
    getPairs(block: Block): Promise<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v52.H160): Promise<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v52.H160): AsyncIterable<[k: [bigint, v52.H160], v: (v52.AssetId32 | undefined)][]>
}

export const sidechainPrecision =  {
    v54: new StorageType('ERC20App.SidechainPrecision', 'Optional', [sts.bigint(), v54.AssetId32], sts.number()) as SidechainPrecisionV54,
}

export interface SidechainPrecisionV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v54.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [bigint, v54.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v54.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v54.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v54.AssetId32): Promise<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v54.AssetId32): AsyncIterable<[bigint, v54.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v54.AssetId32): Promise<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v54.AssetId32): AsyncIterable<[k: [bigint, v54.AssetId32], v: (number | undefined)][]>
}
