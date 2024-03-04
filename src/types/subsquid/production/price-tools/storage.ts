import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'
import * as v42 from '../v42'
import * as v45 from '../v45'

export const priceInfos =  {
    v7: new StorageType('PriceTools.PriceInfos', 'Optional', [v7.AssetId], v7.PriceInfo) as PriceInfosV7,
    v42: new StorageType('PriceTools.PriceInfos', 'Optional', [v42.AssetId32], v42.PriceInfo) as PriceInfosV42,
    v45: new StorageType('PriceTools.PriceInfos', 'Optional', [v45.AssetId32], v45.AggregatedPriceInfo) as PriceInfosV45,
}

export interface PriceInfosV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.AssetId): Promise<(v7.PriceInfo | undefined)>
    getMany(block: Block, keys: v7.AssetId[]): Promise<(v7.PriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v7.AssetId[]>
    getKeys(block: Block, key: v7.AssetId): Promise<v7.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AssetId): AsyncIterable<v7.AssetId[]>
    getPairs(block: Block): Promise<[k: v7.AssetId, v: (v7.PriceInfo | undefined)][]>
    getPairs(block: Block, key: v7.AssetId): Promise<[k: v7.AssetId, v: (v7.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AssetId, v: (v7.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AssetId): AsyncIterable<[k: v7.AssetId, v: (v7.PriceInfo | undefined)][]>
}

export interface PriceInfosV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.PriceInfo | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.PriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.PriceInfo | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.PriceInfo | undefined)][]>
}

export interface PriceInfosV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v45.AssetId32): Promise<(v45.AggregatedPriceInfo | undefined)>
    getMany(block: Block, keys: v45.AssetId32[]): Promise<(v45.AggregatedPriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v45.AssetId32[]>
    getKeys(block: Block, key: v45.AssetId32): Promise<v45.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.AssetId32): AsyncIterable<v45.AssetId32[]>
    getPairs(block: Block): Promise<[k: v45.AssetId32, v: (v45.AggregatedPriceInfo | undefined)][]>
    getPairs(block: Block, key: v45.AssetId32): Promise<[k: v45.AssetId32, v: (v45.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.AssetId32, v: (v45.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.AssetId32): AsyncIterable<[k: v45.AssetId32, v: (v45.AggregatedPriceInfo | undefined)][]>
}
