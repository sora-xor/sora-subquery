import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enabledOracles =  {
    v70: new StorageType('OracleProxy.EnabledOracles', 'Default', [], sts.array(() => v70.Oracle)) as EnabledOraclesV70,
}

export interface EnabledOraclesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Oracle[]
    get(block: Block): Promise<(v70.Oracle[] | undefined)>
}

export const symbolProviders =  {
    v70: new StorageType('OracleProxy.SymbolProviders', 'Optional', [v70.SymbolName], v70.Oracle) as SymbolProvidersV70,
}

export interface SymbolProvidersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SymbolName): Promise<(v70.Oracle | undefined)>
    getMany(block: Block, keys: v70.SymbolName[]): Promise<(v70.Oracle | undefined)[]>
    getKeys(block: Block): Promise<v70.SymbolName[]>
    getKeys(block: Block, key: v70.SymbolName): Promise<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<v70.SymbolName[]>
    getPairs(block: Block): Promise<[k: v70.SymbolName, v: (v70.Oracle | undefined)][]>
    getPairs(block: Block, key: v70.SymbolName): Promise<[k: v70.SymbolName, v: (v70.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SymbolName, v: (v70.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<[k: v70.SymbolName, v: (v70.Oracle | undefined)][]>
}
