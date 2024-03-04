import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v38 from '../v38'
import * as v42 from '../v42'

export const enabledSources =  {
    v1: new StorageType('TradingPair.EnabledSources', 'Optional', [v1.DEXId, v1.TradingPair], sts.array(() => v1.LiquiditySourceType)) as EnabledSourcesV1,
    v42: new StorageType('TradingPair.EnabledSources', 'Optional', [sts.number(), v42.TradingPair], sts.array(() => v42.LiquiditySourceType)) as EnabledSourcesV42,
}

export interface EnabledSourcesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.DEXId, key2: v1.TradingPair): Promise<(v1.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [v1.DEXId, v1.TradingPair][]): Promise<(v1.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[v1.DEXId, v1.TradingPair][]>
    getKeys(block: Block, key1: v1.DEXId): Promise<[v1.DEXId, v1.TradingPair][]>
    getKeys(block: Block, key1: v1.DEXId, key2: v1.TradingPair): Promise<[v1.DEXId, v1.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.DEXId, v1.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.DEXId): AsyncIterable<[v1.DEXId, v1.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.DEXId, key2: v1.TradingPair): AsyncIterable<[v1.DEXId, v1.TradingPair][]>
    getPairs(block: Block): Promise<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: v1.DEXId): Promise<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: v1.DEXId, key2: v1.TradingPair): Promise<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.DEXId): AsyncIterable<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.DEXId, key2: v1.TradingPair): AsyncIterable<[k: [v1.DEXId, v1.TradingPair], v: (v1.LiquiditySourceType[] | undefined)][]>
}

export interface EnabledSourcesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.TradingPair): Promise<(v42.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [number, v42.TradingPair][]): Promise<(v42.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.TradingPair][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.TradingPair][]>
    getKeys(block: Block, key1: number, key2: v42.TradingPair): Promise<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.TradingPair): AsyncIterable<[number, v42.TradingPair][]>
    getPairs(block: Block): Promise<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.TradingPair): Promise<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.TradingPair): AsyncIterable<[k: [number, v42.TradingPair], v: (v42.LiquiditySourceType[] | undefined)][]>
}

export const lockedLiquiditySources =  {
    v38: new StorageType('TradingPair.LockedLiquiditySources', 'Default', [], sts.array(() => v38.LiquiditySourceType)) as LockedLiquiditySourcesV38,
}

export interface LockedLiquiditySourcesV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v38.LiquiditySourceType[]
    get(block: Block): Promise<(v38.LiquiditySourceType[] | undefined)>
}
