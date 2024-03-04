import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v44 from '../v44'

export const priceInfos =  {
    v33: new StorageType('PriceTools.PriceInfos', 'Optional', [v33.AssetId], v33.PriceInfo) as PriceInfosV33,
    v42: new StorageType('PriceTools.PriceInfos', 'Optional', [v42.AssetId32], v42.PriceInfo) as PriceInfosV42,
    v44: new StorageType('PriceTools.PriceInfos', 'Optional', [v44.AssetId32], v44.AggregatedPriceInfo) as PriceInfosV44,
}

export interface PriceInfosV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AssetId): Promise<(v33.PriceInfo | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.PriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.PriceInfo | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.PriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.PriceInfo | undefined)][]>
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

export interface PriceInfosV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v44.AssetId32): Promise<(v44.AggregatedPriceInfo | undefined)>
    getMany(block: Block, keys: v44.AssetId32[]): Promise<(v44.AggregatedPriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v44.AssetId32[]>
    getKeys(block: Block, key: v44.AssetId32): Promise<v44.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.AssetId32): AsyncIterable<v44.AssetId32[]>
    getPairs(block: Block): Promise<[k: v44.AssetId32, v: (v44.AggregatedPriceInfo | undefined)][]>
    getPairs(block: Block, key: v44.AssetId32): Promise<[k: v44.AssetId32, v: (v44.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.AssetId32, v: (v44.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.AssetId32): AsyncIterable<[k: v44.AssetId32, v: (v44.AggregatedPriceInfo | undefined)][]>
}
