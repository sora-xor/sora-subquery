import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const pools =  {
    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    v33: new StorageType('Farming.Pools', 'Default', [v33.BlockNumber], sts.array(() => v33.AccountId)) as PoolsV33,
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface PoolsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block, key: v33.BlockNumber): Promise<(v33.AccountId[] | undefined)>
    getMany(block: Block, keys: v33.BlockNumber[]): Promise<(v33.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v33.BlockNumber[]>
    getKeys(block: Block, key: v33.BlockNumber): Promise<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<v33.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v33.BlockNumber, v: (v33.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v33.BlockNumber): Promise<[k: v33.BlockNumber, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BlockNumber, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<[k: v33.BlockNumber, v: (v33.AccountId[] | undefined)][]>
}

export const poolFarmers =  {
    /**
     *  Farmers of the pool. Pool => Farmers
     */
    v33: new StorageType('Farming.PoolFarmers', 'Default', [v33.AccountId], sts.array(() => v33.PoolFarmer)) as PoolFarmersV33,
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface PoolFarmersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.PoolFarmer[]
    get(block: Block, key: v33.AccountId): Promise<(v33.PoolFarmer[] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.PoolFarmer[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.PoolFarmer[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.PoolFarmer[] | undefined)][]>
}
