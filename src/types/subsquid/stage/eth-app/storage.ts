import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const addresses =  {
    v52: new StorageType('EthApp.Addresses', 'Optional', [sts.bigint()], sts.tuple(() => [v52.H160, v52.AssetId32])) as AddressesV52,
    v54: new StorageType('EthApp.Addresses', 'Optional', [sts.bigint()], sts.tuple(() => [v54.H160, v54.AssetId32, sts.number()])) as AddressesV54,
}

export interface AddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v52.H160, v52.AssetId32] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v52.H160, v52.AssetId32] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v52.H160, v52.AssetId32] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v52.H160, v52.AssetId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v52.H160, v52.AssetId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v52.H160, v52.AssetId32] | undefined)][]>
}

export interface AddressesV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v54.H160, v54.AssetId32, number] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v54.H160, v54.AssetId32, number] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v54.H160, v54.AssetId32, number] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v54.H160, v54.AssetId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v54.H160, v54.AssetId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v54.H160, v54.AssetId32, number] | undefined)][]>
}
