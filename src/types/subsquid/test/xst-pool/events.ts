import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v44 from '../v44'
import * as v54 from '../v54'
import * as v60 from '../v60'

export const poolInitialized =  {
    name: 'XSTPool.PoolInitialized',
    /**
     *  Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    v33: new EventType(
        'XSTPool.PoolInitialized',
        sts.tuple([v33.DEXId, v33.AssetId])
    ),
    /**
     * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    v42: new EventType(
        'XSTPool.PoolInitialized',
        sts.tuple([sts.number(), v42.AssetId32])
    ),
}

export const referenceAssetChanged =  {
    name: 'XSTPool.ReferenceAssetChanged',
    /**
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v33: new EventType(
        'XSTPool.ReferenceAssetChanged',
        v33.AssetId
    ),
    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v42: new EventType(
        'XSTPool.ReferenceAssetChanged',
        v42.AssetId32
    ),
}

export const syntheticAssetEnabled =  {
    name: 'XSTPool.SyntheticAssetEnabled',
    /**
     * Synthetic asset was enabled. [Synthetic Asset Id]
     */
    v44: new EventType(
        'XSTPool.SyntheticAssetEnabled',
        v44.AssetId32
    ),
    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    v54: new EventType(
        'XSTPool.SyntheticAssetEnabled',
        sts.tuple([v54.AssetId32, v54.SymbolName])
    ),
}

export const syntheticBaseAssetFloorPriceChanged =  {
    name: 'XSTPool.SyntheticBaseAssetFloorPriceChanged',
    /**
     * Floor price of the synthetic base asset has been changed. [New Floor Price]
     */
    v44: new EventType(
        'XSTPool.SyntheticBaseAssetFloorPriceChanged',
        sts.bigint()
    ),
}

export const syntheticAssetDisabled =  {
    name: 'XSTPool.SyntheticAssetDisabled',
    /**
     * Synthetic asset has been disabled. [Synthetic Asset Id]
     */
    v54: new EventType(
        'XSTPool.SyntheticAssetDisabled',
        v54.AssetId32
    ),
}

export const syntheticAssetFeeChanged =  {
    name: 'XSTPool.SyntheticAssetFeeChanged',
    /**
     * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
     */
    v54: new EventType(
        'XSTPool.SyntheticAssetFeeChanged',
        sts.tuple([v54.AssetId32, v54.FixedPoint])
    ),
}

export const syntheticAssetRemoved =  {
    name: 'XSTPool.SyntheticAssetRemoved',
    /**
     * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
     */
    v60: new EventType(
        'XSTPool.SyntheticAssetRemoved',
        sts.tuple([v60.AssetId32, v60.SymbolName])
    ),
}
