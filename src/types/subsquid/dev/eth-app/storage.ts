import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const addresses =  {
    v70: new StorageType('EthApp.Addresses', 'Optional', [sts.bigint()], sts.tuple(() => [v70.H160, v70.AssetId32, sts.number()])) as AddressesV70,
}

export interface AddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v70.H160, v70.AssetId32, number] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v70.H160, v70.AssetId32, number] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v70.H160, v70.AssetId32, number] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v70.H160, v70.AssetId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v70.H160, v70.AssetId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v70.H160, v70.AssetId32, number] | undefined)][]>
}
