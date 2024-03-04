import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const mint =  {
    name: 'ERC20App.mint',
    v70: new CallType(
        'ERC20App.mint',
        sts.struct({
            token: v70.H160,
            sender: v70.H160,
            recipient: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const registerAssetInternal =  {
    name: 'ERC20App.register_asset_internal',
    v70: new CallType(
        'ERC20App.register_asset_internal',
        sts.struct({
            assetId: v70.AssetId32,
            contract: v70.H160,
        })
    ),
}

export const burn =  {
    name: 'ERC20App.burn',
    v70: new CallType(
        'ERC20App.burn',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v70.AssetId32,
            recipient: v70.H160,
            amount: sts.bigint(),
        })
    ),
}

export const registerErc20Asset =  {
    name: 'ERC20App.register_erc20_asset',
    v70: new CallType(
        'ERC20App.register_erc20_asset',
        sts.struct({
            networkId: sts.bigint(),
            address: v70.H160,
            symbol: v70.AssetSymbol,
            name: v70.AssetName,
            decimals: sts.number(),
        })
    ),
}

export const registerExistingErc20Asset =  {
    name: 'ERC20App.register_existing_erc20_asset',
    v70: new CallType(
        'ERC20App.register_existing_erc20_asset',
        sts.struct({
            networkId: sts.bigint(),
            address: v70.H160,
            assetId: v70.AssetId32,
            decimals: sts.number(),
        })
    ),
}

export const registerNativeAsset =  {
    name: 'ERC20App.register_native_asset',
    v70: new CallType(
        'ERC20App.register_native_asset',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v70.AssetId32,
        })
    ),
}

export const registerNativeApp =  {
    name: 'ERC20App.register_native_app',
    v70: new CallType(
        'ERC20App.register_native_app',
        sts.struct({
            networkId: sts.bigint(),
            contract: v70.H160,
        })
    ),
}

export const registerErc20App =  {
    name: 'ERC20App.register_erc20_app',
    v70: new CallType(
        'ERC20App.register_erc20_app',
        sts.struct({
            networkId: sts.bigint(),
            contract: v70.H160,
        })
    ),
}
