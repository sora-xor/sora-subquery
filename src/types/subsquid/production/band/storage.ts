import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v45 from '../v45'
import * as v59 from '../v59'
import * as v60 from '../v60'

export const trustedRelayers =  {
    v45: new StorageType('Band.TrustedRelayers', 'Optional', [], sts.array(() => v45.AccountId32)) as TrustedRelayersV45,
}

export interface TrustedRelayersV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v45.AccountId32[] | undefined)>
}

export const symbolRates =  {
    v45: new StorageType('Band.SymbolRates', 'Default', [v45.SymbolName], sts.option(() => v45.BandRate)) as SymbolRatesV45,
    v59: new StorageType('Band.SymbolRates', 'Default', [v59.SymbolName], sts.option(() => v59.BandRate)) as SymbolRatesV59,
    v60: new StorageType('Band.SymbolRates', 'Default', [v60.SymbolName], sts.option(() => v60.BandRate)) as SymbolRatesV60,
}

export interface SymbolRatesV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v45.BandRate | undefined)
    get(block: Block, key: v45.SymbolName): Promise<((v45.BandRate | undefined) | undefined)>
    getMany(block: Block, keys: v45.SymbolName[]): Promise<((v45.BandRate | undefined) | undefined)[]>
    getKeys(block: Block): Promise<v45.SymbolName[]>
    getKeys(block: Block, key: v45.SymbolName): Promise<v45.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.SymbolName): AsyncIterable<v45.SymbolName[]>
    getPairs(block: Block): Promise<[k: v45.SymbolName, v: ((v45.BandRate | undefined) | undefined)][]>
    getPairs(block: Block, key: v45.SymbolName): Promise<[k: v45.SymbolName, v: ((v45.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.SymbolName, v: ((v45.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.SymbolName): AsyncIterable<[k: v45.SymbolName, v: ((v45.BandRate | undefined) | undefined)][]>
}

export interface SymbolRatesV59  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v59.BandRate | undefined)
    get(block: Block, key: v59.SymbolName): Promise<((v59.BandRate | undefined) | undefined)>
    getMany(block: Block, keys: v59.SymbolName[]): Promise<((v59.BandRate | undefined) | undefined)[]>
    getKeys(block: Block): Promise<v59.SymbolName[]>
    getKeys(block: Block, key: v59.SymbolName): Promise<v59.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v59.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v59.SymbolName): AsyncIterable<v59.SymbolName[]>
    getPairs(block: Block): Promise<[k: v59.SymbolName, v: ((v59.BandRate | undefined) | undefined)][]>
    getPairs(block: Block, key: v59.SymbolName): Promise<[k: v59.SymbolName, v: ((v59.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v59.SymbolName, v: ((v59.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v59.SymbolName): AsyncIterable<[k: v59.SymbolName, v: ((v59.BandRate | undefined) | undefined)][]>
}

export interface SymbolRatesV60  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v60.BandRate | undefined)
    get(block: Block, key: v60.SymbolName): Promise<((v60.BandRate | undefined) | undefined)>
    getMany(block: Block, keys: v60.SymbolName[]): Promise<((v60.BandRate | undefined) | undefined)[]>
    getKeys(block: Block): Promise<v60.SymbolName[]>
    getKeys(block: Block, key: v60.SymbolName): Promise<v60.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v60.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v60.SymbolName): AsyncIterable<v60.SymbolName[]>
    getPairs(block: Block): Promise<[k: v60.SymbolName, v: ((v60.BandRate | undefined) | undefined)][]>
    getPairs(block: Block, key: v60.SymbolName): Promise<[k: v60.SymbolName, v: ((v60.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v60.SymbolName, v: ((v60.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v60.SymbolName): AsyncIterable<[k: v60.SymbolName, v: ((v60.BandRate | undefined) | undefined)][]>
}

export const dynamicFeeParameters =  {
    v59: new StorageType('Band.DynamicFeeParameters', 'Default', [], v59.FeeCalculationParameters) as DynamicFeeParametersV59,
}

export interface DynamicFeeParametersV59  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v59.FeeCalculationParameters
    get(block: Block): Promise<(v59.FeeCalculationParameters | undefined)>
}

export const symbolCheckBlock =  {
    v60: new StorageType('Band.SymbolCheckBlock', 'Default', [sts.number(), v60.SymbolName], sts.boolean()) as SymbolCheckBlockV60,
}

export interface SymbolCheckBlockV60  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key1: number, key2: v60.SymbolName): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [number, v60.SymbolName][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, v60.SymbolName][]>
    getKeys(block: Block, key1: number): Promise<[number, v60.SymbolName][]>
    getKeys(block: Block, key1: number, key2: v60.SymbolName): Promise<[number, v60.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v60.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v60.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v60.SymbolName): AsyncIterable<[number, v60.SymbolName][]>
    getPairs(block: Block): Promise<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number, key2: v60.SymbolName): Promise<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v60.SymbolName): AsyncIterable<[k: [number, v60.SymbolName], v: (boolean | undefined)][]>
}
