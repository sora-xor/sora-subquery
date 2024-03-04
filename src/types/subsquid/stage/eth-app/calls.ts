import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const burn =  {
    name: 'EthApp.burn',
    v52: new CallType(
        'EthApp.burn',
        sts.struct({
            networkId: sts.bigint(),
            recipient: v52.H160,
            amount: sts.bigint(),
        })
    ),
}

export const mint =  {
    name: 'EthApp.mint',
    v52: new CallType(
        'EthApp.mint',
        sts.struct({
            sender: v52.H160,
            recipient: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const registerNetwork =  {
    name: 'EthApp.register_network',
    v52: new CallType(
        'EthApp.register_network',
        sts.struct({
            networkId: sts.bigint(),
            name: v52.AssetName,
            symbol: v52.AssetSymbol,
            decimals: sts.number(),
            contract: v52.H160,
        })
    ),
    v54: new CallType(
        'EthApp.register_network',
        sts.struct({
            networkId: sts.bigint(),
            name: v54.AssetName,
            symbol: v54.AssetSymbol,
            sidechainPrecision: sts.number(),
            contract: v54.H160,
        })
    ),
}

export const registerNetworkWithExistingAsset =  {
    name: 'EthApp.register_network_with_existing_asset',
    v52: new CallType(
        'EthApp.register_network_with_existing_asset',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v52.AssetId32,
            contract: v52.H160,
        })
    ),
    v54: new CallType(
        'EthApp.register_network_with_existing_asset',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v54.AssetId32,
            contract: v54.H160,
            sidechainPrecision: sts.number(),
        })
    ),
}
