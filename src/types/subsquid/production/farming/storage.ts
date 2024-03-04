import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const pools =  {
    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    v7: new StorageType('Farming.Pools', 'Default', [v7.BlockNumber], sts.array(() => v7.AccountId)) as PoolsV7,
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface PoolsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.AccountId[]
    get(block: Block, key: v7.BlockNumber): Promise<(v7.AccountId[] | undefined)>
    getMany(block: Block, keys: v7.BlockNumber[]): Promise<(v7.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v7.BlockNumber[]>
    getKeys(block: Block, key: v7.BlockNumber): Promise<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<v7.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v7.BlockNumber, v: (v7.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v7.BlockNumber): Promise<[k: v7.BlockNumber, v: (v7.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.BlockNumber, v: (v7.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<[k: v7.BlockNumber, v: (v7.AccountId[] | undefined)][]>
}

export const poolFarmers =  {
    /**
     *  Farmers of the pool. Pool => Farmers
     */
    v7: new StorageType('Farming.PoolFarmers', 'Default', [v7.AccountId], sts.array(() => v7.PoolFarmer)) as PoolFarmersV7,
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface PoolFarmersV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.PoolFarmer[]
    get(block: Block, key: v7.AccountId): Promise<(v7.PoolFarmer[] | undefined)>
    getMany(block: Block, keys: v7.AccountId[]): Promise<(v7.PoolFarmer[] | undefined)[]>
    getKeys(block: Block): Promise<v7.AccountId[]>
    getKeys(block: Block, key: v7.AccountId): Promise<v7.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AccountId): AsyncIterable<v7.AccountId[]>
    getPairs(block: Block): Promise<[k: v7.AccountId, v: (v7.PoolFarmer[] | undefined)][]>
    getPairs(block: Block, key: v7.AccountId): Promise<[k: v7.AccountId, v: (v7.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AccountId, v: (v7.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AccountId): AsyncIterable<[k: v7.AccountId, v: (v7.PoolFarmer[] | undefined)][]>
}

export const savedValues =  {
    v7: new StorageType('Farming.SavedValues', 'Default', [v7.BlockNumber], sts.array(() => sts.tuple(() => [v7.AccountId, sts.array(() => v7.PoolFarmer)]))) as SavedValuesV7,
}

export interface SavedValuesV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v7.AccountId, v7.PoolFarmer[]][]
    get(block: Block, key: v7.BlockNumber): Promise<([v7.AccountId, v7.PoolFarmer[]][] | undefined)>
    getMany(block: Block, keys: v7.BlockNumber[]): Promise<([v7.AccountId, v7.PoolFarmer[]][] | undefined)[]>
    getKeys(block: Block): Promise<v7.BlockNumber[]>
    getKeys(block: Block, key: v7.BlockNumber): Promise<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<v7.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v7.BlockNumber, v: ([v7.AccountId, v7.PoolFarmer[]][] | undefined)][]>
    getPairs(block: Block, key: v7.BlockNumber): Promise<[k: v7.BlockNumber, v: ([v7.AccountId, v7.PoolFarmer[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.BlockNumber, v: ([v7.AccountId, v7.PoolFarmer[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<[k: v7.BlockNumber, v: ([v7.AccountId, v7.PoolFarmer[]][] | undefined)][]>
}
