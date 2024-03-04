import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v57 from '../v57'
import * as v59 from '../v59'

export const mint =  {
    name: 'SubstrateBridgeApp.mint',
    v52: new CallType(
        'SubstrateBridgeApp.mint',
        sts.struct({
            assetId: v52.AssetId32,
            sender: sts.option(() => v52.VersionedMultiLocation),
            recipient: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const finalizeAssetRegistration =  {
    name: 'SubstrateBridgeApp.finalize_asset_registration',
    v52: new CallType(
        'SubstrateBridgeApp.finalize_asset_registration',
        sts.struct({
            assetId: v52.AssetId32,
            assetKind: v52.Type_568,
        })
    ),
}

export const burn =  {
    name: 'SubstrateBridgeApp.burn',
    v52: new CallType(
        'SubstrateBridgeApp.burn',
        sts.struct({
            networkId: v52.SubNetworkId,
            assetId: v52.AssetId32,
            recipient: v52.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const registerThischainAsset =  {
    name: 'SubstrateBridgeApp.register_thischain_asset',
    v52: new CallType(
        'SubstrateBridgeApp.register_thischain_asset',
        sts.struct({
            networkId: v52.SubNetworkId,
            assetId: v52.AssetId32,
            sidechainAsset: v52.V3AssetId,
        })
    ),
    v57: new CallType(
        'SubstrateBridgeApp.register_thischain_asset',
        sts.struct({
            networkId: v57.SubNetworkId,
            assetId: v57.AssetId32,
            sidechainAsset: v57.V3AssetId,
            allowedParachains: sts.array(() => sts.number()),
        })
    ),
    v59: new CallType(
        'SubstrateBridgeApp.register_thischain_asset',
        sts.struct({
            networkId: v59.SubNetworkId,
            assetId: v59.AssetId32,
            sidechainAsset: v59.V3AssetId,
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const registerSidechainAsset =  {
    name: 'SubstrateBridgeApp.register_sidechain_asset',
    v52: new CallType(
        'SubstrateBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v52.SubNetworkId,
            sidechainAsset: v52.V3AssetId,
            symbol: v52.AssetSymbol,
            name: v52.AssetName,
            decimals: sts.number(),
        })
    ),
    v57: new CallType(
        'SubstrateBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v57.SubNetworkId,
            sidechainAsset: v57.V3AssetId,
            symbol: v57.AssetSymbol,
            name: v57.AssetName,
            decimals: sts.number(),
            allowedParachains: sts.array(() => sts.number()),
        })
    ),
    v59: new CallType(
        'SubstrateBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v59.SubNetworkId,
            sidechainAsset: v59.V3AssetId,
            symbol: v59.AssetSymbol,
            name: v59.AssetName,
            decimals: sts.number(),
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const setTransferLimit =  {
    name: 'SubstrateBridgeApp.set_transfer_limit',
    /**
     * Limits amount of tokens to transfer with limit precision
     */
    v57: new CallType(
        'SubstrateBridgeApp.set_transfer_limit',
        sts.struct({
            limitCount: sts.option(() => sts.bigint()),
        })
    ),
}

export const addAssetidParaid =  {
    name: 'SubstrateBridgeApp.add_assetid_paraid',
    v57: new CallType(
        'SubstrateBridgeApp.add_assetid_paraid',
        sts.struct({
            networkId: v57.SubNetworkId,
            paraId: sts.number(),
            assetId: v57.AssetId32,
        })
    ),
}

export const removeAssetidParaid =  {
    name: 'SubstrateBridgeApp.remove_assetid_paraid',
    v57: new CallType(
        'SubstrateBridgeApp.remove_assetid_paraid',
        sts.struct({
            networkId: v57.SubNetworkId,
            paraId: sts.number(),
            assetId: v57.AssetId32,
        })
    ),
}

export const updateTransactionStatus =  {
    name: 'SubstrateBridgeApp.update_transaction_status',
    v59: new CallType(
        'SubstrateBridgeApp.update_transaction_status',
        sts.struct({
            messageId: v59.H256,
            transferStatus: v59.XCMAppTransferStatus,
        })
    ),
}

export const setMinimumXcmIncomingAssetCount =  {
    name: 'SubstrateBridgeApp.set_minimum_xcm_incoming_asset_count',
    v59: new CallType(
        'SubstrateBridgeApp.set_minimum_xcm_incoming_asset_count',
        sts.struct({
            networkId: v59.SubNetworkId,
            assetId: v59.AssetId32,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}
