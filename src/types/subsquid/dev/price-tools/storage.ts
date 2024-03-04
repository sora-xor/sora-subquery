import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const priceInfos =  {
    v70: new StorageType('PriceTools.PriceInfos', 'Optional', [v70.AssetId32], v70.AggregatedPriceInfo) as PriceInfosV70,
}

export interface PriceInfosV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.AggregatedPriceInfo | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.AggregatedPriceInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.AggregatedPriceInfo | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.AggregatedPriceInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.AggregatedPriceInfo | undefined)][]>
}
