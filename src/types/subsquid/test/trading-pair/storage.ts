import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v69 from '../v69'

export const enabledSources =  {
    v33: new StorageType('TradingPair.EnabledSources', 'Optional', [v33.DEXId, v33.TradingPair], sts.array(() => v33.LiquiditySourceType)) as EnabledSourcesV33,
    v42: new StorageType('TradingPair.EnabledSources', 'Optional', [sts.number(), v42.TradingPair], sts.array(() => v42.LiquiditySourceType)) as EnabledSourcesV42,
    v69: new StorageType('TradingPair.EnabledSources', 'Optional', [sts.number(), v69.TradingPair], sts.array(() => v69.LiquiditySourceType)) as EnabledSourcesV69,
}

export interface EnabledSourcesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.DEXId, key2: v33.TradingPair): Promise<(v33.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [v33.DEXId, v33.TradingPair][]): Promise<(v33.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[v33.DEXId, v33.TradingPair][]>
    getKeys(block: Block, key1: v33.DEXId): Promise<[v33.DEXId, v33.TradingPair][]>
    getKeys(block: Block, key1: v33.DEXId, key2: v33.TradingPair): Promise<[v33.DEXId, v33.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.DEXId, v33.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.DEXId): AsyncIterable<[v33.DEXId, v33.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.DEXId, key2: v33.TradingPair): AsyncIterable<[v33.DEXId, v33.TradingPair][]>
    getPairs(block: Block): Promise<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: v33.DEXId): Promise<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: v33.DEXId, key2: v33.TradingPair): Promise<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.DEXId): AsyncIterable<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.DEXId, key2: v33.TradingPair): AsyncIterable<[k: [v33.DEXId, v33.TradingPair], v: (v33.LiquiditySourceType[] | undefined)][]>
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

export interface EnabledSourcesV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v69.TradingPair): Promise<(v69.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [number, v69.TradingPair][]): Promise<(v69.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v69.TradingPair][]>
    getKeys(block: Block, key1: number): Promise<[number, v69.TradingPair][]>
    getKeys(block: Block, key1: number, key2: v69.TradingPair): Promise<[number, v69.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v69.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v69.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v69.TradingPair): AsyncIterable<[number, v69.TradingPair][]>
    getPairs(block: Block): Promise<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v69.TradingPair): Promise<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v69.TradingPair): AsyncIterable<[k: [number, v69.TradingPair], v: (v69.LiquiditySourceType[] | undefined)][]>
}

export const lockedLiquiditySources =  {
    v38: new StorageType('TradingPair.LockedLiquiditySources', 'Default', [], sts.array(() => v38.LiquiditySourceType)) as LockedLiquiditySourcesV38,
    v69: new StorageType('TradingPair.LockedLiquiditySources', 'Default', [], sts.array(() => v69.LiquiditySourceType)) as LockedLiquiditySourcesV69,
}

export interface LockedLiquiditySourcesV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v38.LiquiditySourceType[]
    get(block: Block): Promise<(v38.LiquiditySourceType[] | undefined)>
}

export interface LockedLiquiditySourcesV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69.LiquiditySourceType[]
    get(block: Block): Promise<(v69.LiquiditySourceType[] | undefined)>
}
