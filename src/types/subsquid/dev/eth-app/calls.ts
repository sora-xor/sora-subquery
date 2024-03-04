import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const burn =  {
    name: 'EthApp.burn',
    v70: new CallType(
        'EthApp.burn',
        sts.struct({
            networkId: sts.bigint(),
            recipient: v70.H160,
            amount: sts.bigint(),
        })
    ),
}

export const mint =  {
    name: 'EthApp.mint',
    v70: new CallType(
        'EthApp.mint',
        sts.struct({
            sender: v70.H160,
            recipient: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const registerNetwork =  {
    name: 'EthApp.register_network',
    v70: new CallType(
        'EthApp.register_network',
        sts.struct({
            networkId: sts.bigint(),
            name: v70.AssetName,
            symbol: v70.AssetSymbol,
            sidechainPrecision: sts.number(),
            contract: v70.H160,
        })
    ),
}

export const registerNetworkWithExistingAsset =  {
    name: 'EthApp.register_network_with_existing_asset',
    v70: new CallType(
        'EthApp.register_network_with_existing_asset',
        sts.struct({
            networkId: sts.bigint(),
            assetId: v70.AssetId32,
            contract: v70.H160,
            sidechainPrecision: sts.number(),
        })
    ),
}
