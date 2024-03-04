import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const pools =  {
    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    v70: new StorageType('Farming.Pools', 'Default', [sts.number()], sts.array(() => v70.AccountId32)) as PoolsV70,
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface PoolsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block, key: number): Promise<(v70.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.AccountId32[] | undefined)][]>
}

export const poolFarmers =  {
    /**
     *  Farmers of the pool. Pool => Farmers
     */
    v70: new StorageType('Farming.PoolFarmers', 'Default', [v70.AccountId32], sts.array(() => v70.PoolFarmer)) as PoolFarmersV70,
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface PoolFarmersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.PoolFarmer[]
    get(block: Block, key: v70.AccountId32): Promise<(v70.PoolFarmer[] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.PoolFarmer[] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.PoolFarmer[] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.PoolFarmer[] | undefined)][]>
}
