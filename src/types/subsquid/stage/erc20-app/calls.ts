import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const mint =  {
    name: 'ERC20App.mint',
    v52: new CallType(
        'ERC20App.mint',
        sts.struct({
            token: v52.H160,
            sender: v52.H160,
            recipient: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const registerAssetInternal =  {
    name: 'ERC20App.register_asset_internal',
    v52: new CallType(
        'ERC20App.register_asset_internal',
        sts.struct({
            assetId: v52.AssetId32,
            contract: v52.H160,
        })
    ),
}

export const burn =  {
    name: 'ERC20App.burn',
    v52: new CallType(
        'ERC20App.burn',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v52.AssetId32,
            recipient: v52.H160,
            amount: sts.bigint(),
        })
    ),
}

export const registerErc20Asset =  {
    name: 'ERC20App.register_erc20_asset',
    v52: new CallType(
        'ERC20App.register_erc20_asset',
        sts.struct({
            networkId: sts.bigint(),
            address: v52.H160,
            symbol: v52.AssetSymbol,
            name: v52.AssetName,
            decimals: sts.number(),
        })
    ),
}

export const registerExistingErc20Asset =  {
    name: 'ERC20App.register_existing_erc20_asset',
    v52: new CallType(
        'ERC20App.register_existing_erc20_asset',
        sts.struct({
            networkId: sts.bigint(),
            address: v52.H160,
            assetId: v52.AssetId32,
        })
    ),
    v54: new CallType(
        'ERC20App.register_existing_erc20_asset',
        sts.struct({
            networkId: sts.bigint(),
            address: v54.H160,
            assetId: v54.AssetId32,
            decimals: sts.number(),
        })
    ),
}

export const registerNativeAsset =  {
    name: 'ERC20App.register_native_asset',
    v52: new CallType(
        'ERC20App.register_native_asset',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v52.AssetId32,
        })
    ),
}

export const registerNativeApp =  {
    name: 'ERC20App.register_native_app',
    v52: new CallType(
        'ERC20App.register_native_app',
        sts.struct({
            networkId: sts.bigint(),
            contract: v52.H160,
        })
    ),
}

export const registerErc20App =  {
    name: 'ERC20App.register_erc20_app',
    v52: new CallType(
        'ERC20App.register_erc20_app',
        sts.struct({
            networkId: sts.bigint(),
            contract: v52.H160,
        })
    ),
}
