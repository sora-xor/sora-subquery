import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enabledSources =  {
    v70: new StorageType('TradingPair.EnabledSources', 'Optional', [sts.number(), v70.TradingPair], sts.array(() => v70.LiquiditySourceType)) as EnabledSourcesV70,
}

export interface EnabledSourcesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.TradingPair): Promise<(v70.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [number, v70.TradingPair][]): Promise<(v70.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.TradingPair][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.TradingPair][]>
    getKeys(block: Block, key1: number, key2: v70.TradingPair): Promise<[number, v70.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.TradingPair): AsyncIterable<[number, v70.TradingPair][]>
    getPairs(block: Block): Promise<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.TradingPair): Promise<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.TradingPair): AsyncIterable<[k: [number, v70.TradingPair], v: (v70.LiquiditySourceType[] | undefined)][]>
}

export const lockedLiquiditySources =  {
    v70: new StorageType('TradingPair.LockedLiquiditySources', 'Default', [], sts.array(() => v70.LiquiditySourceType)) as LockedLiquiditySourcesV70,
}

export interface LockedLiquiditySourcesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.LiquiditySourceType[]
    get(block: Block): Promise<(v70.LiquiditySourceType[] | undefined)>
}
