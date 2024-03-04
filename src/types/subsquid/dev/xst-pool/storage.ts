import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enabledSynthetics =  {
    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    v70: new StorageType('XSTPool.EnabledSynthetics', 'Optional', [v70.AssetId32], v70.SyntheticInfo) as EnabledSyntheticsV70,
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface EnabledSyntheticsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.SyntheticInfo | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.SyntheticInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.SyntheticInfo | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.SyntheticInfo | undefined)][]>
}

export const enabledSymbols =  {
    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    v70: new StorageType('XSTPool.EnabledSymbols', 'Optional', [v70.SymbolName], v70.AssetId32) as EnabledSymbolsV70,
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface EnabledSymbolsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SymbolName): Promise<(v70.AssetId32 | undefined)>
    getMany(block: Block, keys: v70.SymbolName[]): Promise<(v70.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v70.SymbolName[]>
    getKeys(block: Block, key: v70.SymbolName): Promise<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<v70.SymbolName[]>
    getPairs(block: Block): Promise<[k: v70.SymbolName, v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v70.SymbolName): Promise<[k: v70.SymbolName, v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SymbolName, v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SymbolName): AsyncIterable<[k: v70.SymbolName, v: (v70.AssetId32 | undefined)][]>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v70: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v70.AssetId32) as ReferenceAssetIdV70,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AssetId32
    get(block: Block): Promise<(v70.AssetId32 | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v70: new StorageType('XSTPool.CollateralReserves', 'Default', [v70.AssetId32], sts.bigint()) as CollateralReservesV70,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
}

export const syntheticBaseAssetFloorPrice =  {
    /**
     *  Floor price for the synthetic base asset.
     */
    v70: new StorageType('XSTPool.SyntheticBaseAssetFloorPrice', 'Default', [], sts.bigint()) as SyntheticBaseAssetFloorPriceV70,
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface SyntheticBaseAssetFloorPriceV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
