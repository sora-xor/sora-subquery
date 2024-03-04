import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v62 from '../v62'
import * as v70 from '../v70'

export const burn =  {
    name: 'BridgeProxy.burn',
    v54: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v54.GenericNetworkId,
            assetId: v54.AssetId32,
            recipient: v54.GenericAccount,
            amount: sts.bigint(),
        })
    ),
    v70: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v70.GenericNetworkId,
            assetId: v70.AssetId32,
            recipient: v70.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const addLimitedAsset =  {
    name: 'BridgeProxy.add_limited_asset',
    v62: new CallType(
        'BridgeProxy.add_limited_asset',
        sts.struct({
            assetId: v62.AssetId32,
        })
    ),
}

export const removeLimitedAsset =  {
    name: 'BridgeProxy.remove_limited_asset',
    v62: new CallType(
        'BridgeProxy.remove_limited_asset',
        sts.struct({
            assetId: v62.AssetId32,
        })
    ),
}

export const updateTransferLimit =  {
    name: 'BridgeProxy.update_transfer_limit',
    v62: new CallType(
        'BridgeProxy.update_transfer_limit',
        sts.struct({
            settings: v62.TransferLimitSettings,
        })
    ),
}
