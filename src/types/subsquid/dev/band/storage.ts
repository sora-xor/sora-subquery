import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const trustedRelayers =  {
    v70: new StorageType('Band.TrustedRelayers', 'Optional', [], sts.array(() => v70.AccountId32)) as TrustedRelayersV70,
}

export interface TrustedRelayersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const symbolRates =  {
    v70: new StorageType('Band.SymbolRates', 'Default', [v70.SymbolName], sts.option(() => v70.BandRate)) as SymbolRatesV70,
}

export interface SymbolRatesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v70.BandRate | undefined)
    get(block: Block, key: v70.SymbolName): Promise<((v70.BandRate | undefined) | undefined)>
    getMany(block: Block, keys: v70.SymbolName[]): Promise<((v70.BandRate | undefined) | undefined)[]>
    getKeys(block: Block): Promise<v70.SymbolName[]>
    getKeys(block: Block, key: v70.SymbolName): Promise<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<v70.SymbolName[]>
    getPairs(block: Block): Promise<[k: v70.SymbolName, v: ((v70.BandRate | undefined) | undefined)][]>
    getPairs(block: Block, key: v70.SymbolName): Promise<[k: v70.SymbolName, v: ((v70.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SymbolName, v: ((v70.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<[k: v70.SymbolName, v: ((v70.BandRate | undefined) | undefined)][]>
}

export const symbolCheckBlock =  {
    v70: new StorageType('Band.SymbolCheckBlock', 'Default', [sts.number(), v70.SymbolName], sts.boolean()) as SymbolCheckBlockV70,
}

export interface SymbolCheckBlockV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key1: number, key2: v70.SymbolName): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [number, v70.SymbolName][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.SymbolName][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.SymbolName][]>
    getKeys(block: Block, key1: number, key2: v70.SymbolName): Promise<[number, v70.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.SymbolName): AsyncIterable<[number, v70.SymbolName][]>
    getPairs(block: Block): Promise<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.SymbolName): Promise<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.SymbolName): AsyncIterable<[k: [number, v70.SymbolName], v: (boolean | undefined)][]>
}

export const dynamicFeeParameters =  {
    v70: new StorageType('Band.DynamicFeeParameters', 'Default', [], v70.FeeCalculationParameters) as DynamicFeeParametersV70,
}

export interface DynamicFeeParametersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FeeCalculationParameters
    get(block: Block): Promise<(v70.FeeCalculationParameters | undefined)>
}
