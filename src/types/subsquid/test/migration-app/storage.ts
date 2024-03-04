import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const addresses =  {
    v52: new StorageType('MigrationApp.Addresses', 'Optional', [sts.bigint()], v52.H160) as AddressesV52,
}

export interface AddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.H160 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.H160 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
}
