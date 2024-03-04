import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v19 from '../v19'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v57 from '../v57'

export const permissionedTechAccount =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v19: new StorageType('XSTPool.PermissionedTechAccount', 'Default', [], v19.TechAccountId) as PermissionedTechAccountV19,
    /**
     *  Technical account used to store collateral tokens.
     */
    v42: new StorageType('XSTPool.PermissionedTechAccount', 'Default', [], v42.TechAccountId) as PermissionedTechAccountV42,
    /**
     *  Technical account used to store collateral tokens.
     */
    v46: new StorageType('XSTPool.PermissionedTechAccount', 'Default', [], v46.TechAccountId) as PermissionedTechAccountV46,
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface PermissionedTechAccountV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.TechAccountId
    get(block: Block): Promise<(v19.TechAccountId | undefined)>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface PermissionedTechAccountV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.TechAccountId
    get(block: Block): Promise<(v42.TechAccountId | undefined)>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface PermissionedTechAccountV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46.TechAccountId
    get(block: Block): Promise<(v46.TechAccountId | undefined)>
}

export const baseFee =  {
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v19: new StorageType('XSTPool.BaseFee', 'Default', [], v19.Fixed) as BaseFeeV19,
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v42: new StorageType('XSTPool.BaseFee', 'Default', [], v42.FixedPoint) as BaseFeeV42,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Fixed
    get(block: Block): Promise<(v19.Fixed | undefined)>
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.FixedPoint
    get(block: Block): Promise<(v42.FixedPoint | undefined)>
}

export const enabledSynthetics =  {
    /**
     *  XST Assets allowed to be traded using XST.
     */
    v19: new StorageType('XSTPool.EnabledSynthetics', 'Default', [], sts.array(() => v19.AssetId)) as EnabledSyntheticsV19,
    /**
     *  XST Assets allowed to be traded using XST.
     */
    v42: new StorageType('XSTPool.EnabledSynthetics', 'Default', [], sts.array(() => v42.AssetId32)) as EnabledSyntheticsV42,
    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    v57: new StorageType('XSTPool.EnabledSynthetics', 'Optional', [v57.AssetId32], v57.SyntheticInfo) as EnabledSyntheticsV57,
}

/**
 *  XST Assets allowed to be traded using XST.
 */
export interface EnabledSyntheticsV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.AssetId[]
    get(block: Block): Promise<(v19.AssetId[] | undefined)>
}

/**
 *  XST Assets allowed to be traded using XST.
 */
export interface EnabledSyntheticsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32[]
    get(block: Block): Promise<(v42.AssetId32[] | undefined)>
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface EnabledSyntheticsV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v57.AssetId32): Promise<(v57.SyntheticInfo | undefined)>
    getMany(block: Block, keys: v57.AssetId32[]): Promise<(v57.SyntheticInfo | undefined)[]>
    getKeys(block: Block): Promise<v57.AssetId32[]>
    getKeys(block: Block, key: v57.AssetId32): Promise<v57.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.AssetId32): AsyncIterable<v57.AssetId32[]>
    getPairs(block: Block): Promise<[k: v57.AssetId32, v: (v57.SyntheticInfo | undefined)][]>
    getPairs(block: Block, key: v57.AssetId32): Promise<[k: v57.AssetId32, v: (v57.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.AssetId32, v: (v57.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.AssetId32): AsyncIterable<[k: v57.AssetId32, v: (v57.SyntheticInfo | undefined)][]>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v19: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v19.AssetId) as ReferenceAssetIdV19,
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v42: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v42.AssetId32) as ReferenceAssetIdV42,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.AssetId
    get(block: Block): Promise<(v19.AssetId | undefined)>
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32
    get(block: Block): Promise<(v42.AssetId32 | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v19: new StorageType('XSTPool.CollateralReserves', 'Default', [v19.AssetId], v19.Balance) as CollateralReservesV19,
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v42: new StorageType('XSTPool.CollateralReserves', 'Default', [v42.AssetId32], sts.bigint()) as CollateralReservesV42,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block, key: v19.AssetId): Promise<(v19.Balance | undefined)>
    getMany(block: Block, keys: v19.AssetId[]): Promise<(v19.Balance | undefined)[]>
    getKeys(block: Block): Promise<v19.AssetId[]>
    getKeys(block: Block, key: v19.AssetId): Promise<v19.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.AssetId): AsyncIterable<v19.AssetId[]>
    getPairs(block: Block): Promise<[k: v19.AssetId, v: (v19.Balance | undefined)][]>
    getPairs(block: Block, key: v19.AssetId): Promise<[k: v19.AssetId, v: (v19.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.AssetId, v: (v19.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.AssetId): AsyncIterable<[k: v19.AssetId, v: (v19.Balance | undefined)][]>
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v42.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
}

export const syntheticBaseAssetFloorPrice =  {
    /**
     *  Floor price for the synthetic base asset.
     */
    v45: new StorageType('XSTPool.SyntheticBaseAssetFloorPrice', 'Default', [], sts.bigint()) as SyntheticBaseAssetFloorPriceV45,
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface SyntheticBaseAssetFloorPriceV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const enabledSymbols =  {
    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    v57: new StorageType('XSTPool.EnabledSymbols', 'Optional', [v57.SymbolName], v57.AssetId32) as EnabledSymbolsV57,
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface EnabledSymbolsV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v57.SymbolName): Promise<(v57.AssetId32 | undefined)>
    getMany(block: Block, keys: v57.SymbolName[]): Promise<(v57.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v57.SymbolName[]>
    getKeys(block: Block, key: v57.SymbolName): Promise<v57.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.SymbolName): AsyncIterable<v57.SymbolName[]>
    getPairs(block: Block): Promise<[k: v57.SymbolName, v: (v57.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v57.SymbolName): Promise<[k: v57.SymbolName, v: (v57.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.SymbolName, v: (v57.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.SymbolName): AsyncIterable<[k: v57.SymbolName, v: (v57.AssetId32 | undefined)][]>
}
