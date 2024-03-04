import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const appAddresses =  {
    v70: new StorageType('ERC20App.AppAddresses', 'Optional', [sts.bigint(), v70.Type_609], v70.H160) as AppAddressesV70,
}

export interface AppAddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.Type_609): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: [bigint, v70.Type_609][]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.Type_609][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.Type_609][]>
    getKeys(block: Block, key1: bigint, key2: v70.Type_609): Promise<[bigint, v70.Type_609][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.Type_609][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.Type_609][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.Type_609): AsyncIterable<[bigint, v70.Type_609][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.Type_609): Promise<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.Type_609): AsyncIterable<[k: [bigint, v70.Type_609], v: (v70.H160 | undefined)][]>
}

export const assetKinds =  {
    v70: new StorageType('ERC20App.AssetKinds', 'Optional', [sts.bigint(), v70.AssetId32], v70.Type_609) as AssetKindsV70,
}

export interface AssetKindsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.AssetId32): Promise<(v70.Type_609 | undefined)>
    getMany(block: Block, keys: [bigint, v70.AssetId32][]): Promise<(v70.Type_609 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[bigint, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.Type_609 | undefined)][]>
}

export const tokenAddresses =  {
    v70: new StorageType('ERC20App.TokenAddresses', 'Optional', [sts.bigint(), v70.AssetId32], v70.H160) as TokenAddressesV70,
}

export interface TokenAddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.AssetId32): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: [bigint, v70.AssetId32][]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[bigint, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[k: [bigint, v70.AssetId32], v: (v70.H160 | undefined)][]>
}

export const assetsByAddresses =  {
    v70: new StorageType('ERC20App.AssetsByAddresses', 'Optional', [sts.bigint(), v70.H160], v70.AssetId32) as AssetsByAddressesV70,
}

export interface AssetsByAddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.H160): Promise<(v70.AssetId32 | undefined)>
    getMany(block: Block, keys: [bigint, v70.H160][]): Promise<(v70.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.H160][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.H160][]>
    getKeys(block: Block, key1: bigint, key2: v70.H160): Promise<[bigint, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.H160): AsyncIterable<[bigint, v70.H160][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.H160): Promise<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.H160): AsyncIterable<[k: [bigint, v70.H160], v: (v70.AssetId32 | undefined)][]>
}

export const sidechainPrecision =  {
    v70: new StorageType('ERC20App.SidechainPrecision', 'Optional', [sts.bigint(), v70.AssetId32], sts.number()) as SidechainPrecisionV70,
}

export interface SidechainPrecisionV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [bigint, v70.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.AssetId32][]>
    getKeys(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[bigint, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.AssetId32): Promise<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.AssetId32): AsyncIterable<[k: [bigint, v70.AssetId32], v: (number | undefined)][]>
}
