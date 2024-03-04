import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v54 from '../v54'

export const permissionedTechAccount =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v33: new StorageType('XSTPool.PermissionedTechAccount', 'Default', [], v33.TechAccountId) as PermissionedTechAccountV33,
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
export interface PermissionedTechAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.TechAccountId
    get(block: Block): Promise<(v33.TechAccountId | undefined)>
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
    v33: new StorageType('XSTPool.BaseFee', 'Default', [], v33.Fixed) as BaseFeeV33,
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    v42: new StorageType('XSTPool.BaseFee', 'Default', [], v42.FixedPoint) as BaseFeeV42,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface BaseFeeV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Fixed
    get(block: Block): Promise<(v33.Fixed | undefined)>
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
    v33: new StorageType('XSTPool.EnabledSynthetics', 'Default', [], sts.array(() => v33.AssetId)) as EnabledSyntheticsV33,
    /**
     *  XST Assets allowed to be traded using XST.
     */
    v42: new StorageType('XSTPool.EnabledSynthetics', 'Default', [], sts.array(() => v42.AssetId32)) as EnabledSyntheticsV42,
    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    v54: new StorageType('XSTPool.EnabledSynthetics', 'Optional', [v54.AssetId32], v54.SyntheticInfo) as EnabledSyntheticsV54,
}

/**
 *  XST Assets allowed to be traded using XST.
 */
export interface EnabledSyntheticsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetId[]
    get(block: Block): Promise<(v33.AssetId[] | undefined)>
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
export interface EnabledSyntheticsV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.AssetId32): Promise<(v54.SyntheticInfo | undefined)>
    getMany(block: Block, keys: v54.AssetId32[]): Promise<(v54.SyntheticInfo | undefined)[]>
    getKeys(block: Block): Promise<v54.AssetId32[]>
    getKeys(block: Block, key: v54.AssetId32): Promise<v54.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.AssetId32): AsyncIterable<v54.AssetId32[]>
    getPairs(block: Block): Promise<[k: v54.AssetId32, v: (v54.SyntheticInfo | undefined)][]>
    getPairs(block: Block, key: v54.AssetId32): Promise<[k: v54.AssetId32, v: (v54.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.AssetId32, v: (v54.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.AssetId32): AsyncIterable<[k: v54.AssetId32, v: (v54.SyntheticInfo | undefined)][]>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v33: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v33.AssetId) as ReferenceAssetIdV33,
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v42: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v42.AssetId32) as ReferenceAssetIdV42,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetId
    get(block: Block): Promise<(v33.AssetId | undefined)>
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
    v33: new StorageType('XSTPool.CollateralReserves', 'Default', [v33.AssetId], v33.Balance) as CollateralReservesV33,
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v42: new StorageType('XSTPool.CollateralReserves', 'Default', [v42.AssetId32], sts.bigint()) as CollateralReservesV42,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block, key: v33.AssetId): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.AssetId[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetId[]>
    getKeys(block: Block, key: v33.AssetId): Promise<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<v33.AssetId[]>
    getPairs(block: Block): Promise<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.AssetId): Promise<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetId): AsyncIterable<[k: v33.AssetId, v: (v33.Balance | undefined)][]>
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
    v44: new StorageType('XSTPool.SyntheticBaseAssetFloorPrice', 'Default', [], sts.bigint()) as SyntheticBaseAssetFloorPriceV44,
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface SyntheticBaseAssetFloorPriceV44  {
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
    v54: new StorageType('XSTPool.EnabledSymbols', 'Optional', [v54.SymbolName], v54.AssetId32) as EnabledSymbolsV54,
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface EnabledSymbolsV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.SymbolName): Promise<(v54.AssetId32 | undefined)>
    getMany(block: Block, keys: v54.SymbolName[]): Promise<(v54.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v54.SymbolName[]>
    getKeys(block: Block, key: v54.SymbolName): Promise<v54.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.SymbolName): AsyncIterable<v54.SymbolName[]>
    getPairs(block: Block): Promise<[k: v54.SymbolName, v: (v54.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v54.SymbolName): Promise<[k: v54.SymbolName, v: (v54.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.SymbolName, v: (v54.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.SymbolName): AsyncIterable<[k: v54.SymbolName, v: (v54.AssetId32 | undefined)][]>
}
