import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v45 from '../v45'

export const enabledOracles =  {
    v45: new StorageType('OracleProxy.EnabledOracles', 'Default', [], sts.array(() => v45.Oracle)) as EnabledOraclesV45,
}

export interface EnabledOraclesV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v45.Oracle[]
    get(block: Block): Promise<(v45.Oracle[] | undefined)>
}

export const symbolProviders =  {
    v45: new StorageType('OracleProxy.SymbolProviders', 'Optional', [v45.SymbolName], v45.Oracle) as SymbolProvidersV45,
}

export interface SymbolProvidersV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v45.SymbolName): Promise<(v45.Oracle | undefined)>
    getMany(block: Block, keys: v45.SymbolName[]): Promise<(v45.Oracle | undefined)[]>
    getKeys(block: Block): Promise<v45.SymbolName[]>
    getKeys(block: Block, key: v45.SymbolName): Promise<v45.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.SymbolName): AsyncIterable<v45.SymbolName[]>
    getPairs(block: Block): Promise<[k: v45.SymbolName, v: (v45.Oracle | undefined)][]>
    getPairs(block: Block, key: v45.SymbolName): Promise<[k: v45.SymbolName, v: (v45.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.SymbolName, v: (v45.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.SymbolName): AsyncIterable<[k: v45.SymbolName, v: (v45.Oracle | undefined)][]>
}
