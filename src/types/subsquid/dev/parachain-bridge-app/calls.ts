import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const mint =  {
    name: 'ParachainBridgeApp.mint',
    v70: new CallType(
        'ParachainBridgeApp.mint',
        sts.struct({
            assetId: v70.AssetId32,
            sender: sts.option(() => v70.VersionedMultiLocation),
            recipient: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const finalizeAssetRegistration =  {
    name: 'ParachainBridgeApp.finalize_asset_registration',
    v70: new CallType(
        'ParachainBridgeApp.finalize_asset_registration',
        sts.struct({
            assetId: v70.AssetId32,
            assetKind: v70.Type_609,
        })
    ),
}

export const burn =  {
    name: 'ParachainBridgeApp.burn',
    v70: new CallType(
        'ParachainBridgeApp.burn',
        sts.struct({
            networkId: v70.SubNetworkId,
            assetId: v70.AssetId32,
            recipient: v70.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const registerThischainAsset =  {
    name: 'ParachainBridgeApp.register_thischain_asset',
    v70: new CallType(
        'ParachainBridgeApp.register_thischain_asset',
        sts.struct({
            networkId: v70.SubNetworkId,
            assetId: v70.AssetId32,
            sidechainAsset: v70.V3AssetId,
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const registerSidechainAsset =  {
    name: 'ParachainBridgeApp.register_sidechain_asset',
    v70: new CallType(
        'ParachainBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v70.SubNetworkId,
            sidechainAsset: v70.V3AssetId,
            symbol: v70.AssetSymbol,
            name: v70.AssetName,
            decimals: sts.number(),
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const addAssetidParaid =  {
    name: 'ParachainBridgeApp.add_assetid_paraid',
    v70: new CallType(
        'ParachainBridgeApp.add_assetid_paraid',
        sts.struct({
            networkId: v70.SubNetworkId,
            paraId: sts.number(),
            assetId: v70.AssetId32,
        })
    ),
}

export const removeAssetidParaid =  {
    name: 'ParachainBridgeApp.remove_assetid_paraid',
    v70: new CallType(
        'ParachainBridgeApp.remove_assetid_paraid',
        sts.struct({
            networkId: v70.SubNetworkId,
            paraId: sts.number(),
            assetId: v70.AssetId32,
        })
    ),
}

export const updateTransactionStatus =  {
    name: 'ParachainBridgeApp.update_transaction_status',
    v70: new CallType(
        'ParachainBridgeApp.update_transaction_status',
        sts.struct({
            messageId: v70.H256,
            transferStatus: v70.XCMAppTransferStatus,
        })
    ),
}

export const setMinimumXcmIncomingAssetCount =  {
    name: 'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count',
    v70: new CallType(
        'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count',
        sts.struct({
            networkId: v70.SubNetworkId,
            assetId: v70.AssetId32,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}
