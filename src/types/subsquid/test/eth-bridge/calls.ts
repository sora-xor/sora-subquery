import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const registerBridge =  {
    name: 'EthBridge.register_bridge',
    /**
     *  Register a new bridge.
     * 
     *  Parameters:
     *  - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     *  network.
     *  - `initial_peers` - a set of initial network peers.
     */
    v33: new CallType(
        'EthBridge.register_bridge',
        sts.struct({
            bridgeContractAddress: v33.EthAddress,
            initialPeers: sts.array(() => v33.AccountId),
        })
    ),
    /**
     *  Register a new bridge.
     * 
     *  Parameters:
     *  - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     *  network.
     *  - `initial_peers` - a set of initial network peers.
     */
    v38: new CallType(
        'EthBridge.register_bridge',
        sts.struct({
            bridgeContractAddress: v38.EthAddress,
            initialPeers: sts.array(() => v38.AccountId),
            signatureVersion: v38.BridgeSignatureVersion,
        })
    ),
}

export const addAsset =  {
    name: 'EthBridge.add_asset',
    /**
     *  Add a Thischain asset to the bridge whitelist.
     * 
     *  Can only be called by root.
     * 
     *  Parameters:
     *  - `asset_id` - Thischain asset identifier.
     *  - `network_id` - network identifier to which the asset should be added.
     */
    v33: new CallType(
        'EthBridge.add_asset',
        sts.struct({
            assetId: v33.AssetIdOf,
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Add a Thischain asset to the bridge whitelist.
     * 
     * Can only be called by root.
     * 
     * Parameters:
     * - `asset_id` - Thischain asset identifier.
     * - `network_id` - network identifier to which the asset should be added.
     */
    v42: new CallType(
        'EthBridge.add_asset',
        sts.struct({
            assetId: v42.AssetId32,
            networkId: sts.number(),
        })
    ),
}

export const addSidechainToken =  {
    name: 'EthBridge.add_sidechain_token',
    /**
     *  Add a Sidechain token to the bridge whitelist.
     * 
     *  Parameters:
     *  - `token_address` - token contract address.
     *  - `symbol` - token symbol (ticker).
     *  - `name` - token name.
     *  - `decimals` -  token precision.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.add_sidechain_token',
        sts.struct({
            tokenAddress: v33.EthAddress,
            symbol: v33.String,
            name: v33.String,
            decimals: sts.number(),
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Add a Sidechain token to the bridge whitelist.
     * 
     * Parameters:
     * - `token_address` - token contract address.
     * - `symbol` - token symbol (ticker).
     * - `name` - token name.
     * - `decimals` -  token precision.
     * - `network_id` - network identifier.
     */
    v42: new CallType(
        'EthBridge.add_sidechain_token',
        sts.struct({
            tokenAddress: v42.H160,
            symbol: sts.string(),
            name: sts.string(),
            decimals: sts.number(),
            networkId: sts.number(),
        })
    ),
}

export const transferToSidechain =  {
    name: 'EthBridge.transfer_to_sidechain',
    /**
     *  Transfer some amount of the given asset to Sidechain address.
     * 
     *  Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     *  on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     *  some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     *  `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     *  the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     *  correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     *  Parameters:
     *  - `asset_id` - thischain asset id.
     *  - `to` - sidechain account id.
     *  - `amount` - amount of the asset.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.transfer_to_sidechain',
        sts.struct({
            assetId: v33.AssetIdOf,
            to: v33.EthAddress,
            amount: v33.Balance,
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Transfer some amount of the given asset to Sidechain address.
     * 
     * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     * correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     * Parameters:
     * - `asset_id` - thischain asset id.
     * - `to` - sidechain account id.
     * - `amount` - amount of the asset.
     * - `network_id` - network identifier.
     */
    v42: new CallType(
        'EthBridge.transfer_to_sidechain',
        sts.struct({
            assetId: v42.AssetId32,
            to: v42.H160,
            amount: sts.bigint(),
            networkId: sts.number(),
        })
    ),
}

export const requestFromSidechain =  {
    name: 'EthBridge.request_from_sidechain',
    /**
     *  Load incoming request from Sidechain by the given transaction hash.
     * 
     *  Parameters:
     *  - `eth_tx_hash` - transaction hash on Sidechain.
     *  - `kind` - incoming request type.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.request_from_sidechain',
        sts.struct({
            ethTxHash: v33.H256,
            kind: v33.IncomingRequestKind,
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const finalizeIncomingRequest =  {
    name: 'EthBridge.finalize_incoming_request',
    /**
     *  Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
     * 
     *  Can be only called from a bridge account.
     * 
     *  Parameters:
     *  - `request` - an incoming request.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.finalize_incoming_request',
        sts.struct({
            hash: v33.H256,
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const addPeer =  {
    name: 'EthBridge.add_peer',
    /**
     *  Add a new peer to the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `address` - account id on sidechain.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.add_peer',
        sts.struct({
            accountId: v33.AccountId,
            address: v33.EthAddress,
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const removePeer =  {
    name: 'EthBridge.remove_peer',
    /**
     *  Remove peer from the the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `network_id` - network identifier.
     */
    v33: new CallType(
        'EthBridge.remove_peer',
        sts.struct({
            accountId: v33.AccountId,
            peerAddress: sts.option(() => v33.EthAddress),
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const prepareForMigration =  {
    name: 'EthBridge.prepare_for_migration',
    /**
     *  Prepare the given bridge for migration.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `network_id` - bridge network identifier.
     */
    v33: new CallType(
        'EthBridge.prepare_for_migration',
        sts.struct({
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const migrate =  {
    name: 'EthBridge.migrate',
    /**
     *  Migrate the given bridge to a new smart-contract.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `new_contract_address` - new sidechain ocntract address.
     *  - `erc20_native_tokens` - migrated assets ids.
     *  - `network_id` - bridge network identifier.
     */
    v33: new CallType(
        'EthBridge.migrate',
        sts.struct({
            newContractAddress: v33.EthAddress,
            erc20NativeTokens: sts.array(() => v33.EthAddress),
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     *  Migrate the given bridge to a new smart-contract.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `new_contract_address` - new sidechain ocntract address.
     *  - `erc20_native_tokens` - migrated assets ids.
     *  - `network_id` - bridge network identifier.
     */
    v38: new CallType(
        'EthBridge.migrate',
        sts.struct({
            newContractAddress: v38.EthAddress,
            erc20NativeTokens: sts.array(() => v38.EthAddress),
            networkId: v38.BridgeNetworkId,
            newSignatureVersion: v38.BridgeSignatureVersion,
        })
    ),
}

export const registerIncomingRequest =  {
    name: 'EthBridge.register_incoming_request',
    /**
     *  Register the given incoming request and add it to the queue.
     * 
     *  Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     *  corresponding load-incoming-request and removes the load-request from the queue.
     * 
     *  Can only be called by a bridge account.
     */
    v33: new CallType(
        'EthBridge.register_incoming_request',
        sts.struct({
            incomingRequest: v33.IncomingRequest,
        })
    ),
    /**
     * Register the given incoming request and add it to the queue.
     * 
     * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     * corresponding load-incoming-request and removes the load-request from the queue.
     * 
     * Can only be called by a bridge account.
     */
    v42: new CallType(
        'EthBridge.register_incoming_request',
        sts.struct({
            incomingRequest: v42.IncomingRequest,
        })
    ),
}

export const importIncomingRequest =  {
    name: 'EthBridge.import_incoming_request',
    /**
     *  Import the given incoming request.
     * 
     *  Register's the load request, then registers and finalizes the incoming request if it
     *  succeeded, otherwise aborts the load request.
     * 
     *  Can only be called by a bridge account.
     */
    v33: new CallType(
        'EthBridge.import_incoming_request',
        sts.struct({
            loadIncomingRequest: v33.LoadIncomingRequest,
            incomingRequestResult: sts.result(() => v33.IncomingRequest, () => v33.DispatchError),
        })
    ),
    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    v42: new CallType(
        'EthBridge.import_incoming_request',
        sts.struct({
            loadIncomingRequest: v42.LoadIncomingRequest,
            incomingRequestResult: sts.result(() => v42.IncomingRequest, () => v42.DispatchError),
        })
    ),
    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    v52: new CallType(
        'EthBridge.import_incoming_request',
        sts.struct({
            loadIncomingRequest: v52.LoadIncomingRequest,
            incomingRequestResult: sts.result(() => v52.IncomingRequest, () => v52.DispatchError),
        })
    ),
}

export const approveRequest =  {
    name: 'EthBridge.approve_request',
    /**
     *  Approve the given outgoing request. The function is used by bridge peers.
     * 
     *  Verifies the peer signature of the given request and adds it to `RequestApprovals`.
     *  Once quorum is collected, the request gets finalized and removed from request queue.
     */
    v33: new CallType(
        'EthBridge.approve_request',
        sts.struct({
            ocwPublic: v33.Public,
            hash: v33.H256,
            signatureParams: v33.SignatureParams,
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const abortRequest =  {
    name: 'EthBridge.abort_request',
    /**
     *  Cancels a registered request.
     * 
     *  Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     *  removes it from the request queues.
     * 
     *  Can only be called from a bridge account.
     */
    v33: new CallType(
        'EthBridge.abort_request',
        sts.struct({
            hash: v33.H256,
            error: v33.DispatchError,
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    v42: new CallType(
        'EthBridge.abort_request',
        sts.struct({
            hash: v42.H256,
            error: v42.DispatchError,
            networkId: sts.number(),
        })
    ),
    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    v52: new CallType(
        'EthBridge.abort_request',
        sts.struct({
            hash: v52.H256,
            error: v52.DispatchError,
            networkId: sts.number(),
        })
    ),
}

export const forceAddPeer =  {
    name: 'EthBridge.force_add_peer',
    /**
     *  Add the given peer to the peers set without additional checks.
     * 
     *  Can only be called by a root account.
     */
    v33: new CallType(
        'EthBridge.force_add_peer',
        sts.struct({
            who: v33.AccountId,
            address: v33.EthAddress,
            networkId: v33.BridgeNetworkId,
        })
    ),
}

export const migrateTo020 =  {
    name: 'EthBridge.migrate_to_0_2_0',
    v33: new CallType(
        'EthBridge.migrate_to_0_2_0',
        sts.unit()
    ),
}

export const removeSidechainAsset =  {
    name: 'EthBridge.remove_sidechain_asset',
    /**
     *  Remove asset
     * 
     *  Can only be called by root.
     */
    v33: new CallType(
        'EthBridge.remove_sidechain_asset',
        sts.struct({
            assetId: v33.AssetIdOf,
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Remove asset
     * 
     * Can only be called by root.
     */
    v42: new CallType(
        'EthBridge.remove_sidechain_asset',
        sts.struct({
            assetId: v42.AssetId32,
            networkId: sts.number(),
        })
    ),
}

export const registerExistingSidechainAsset =  {
    name: 'EthBridge.register_existing_sidechain_asset',
    /**
     *  Register existing asset
     * 
     *  Can only be called by root.
     */
    v33: new CallType(
        'EthBridge.register_existing_sidechain_asset',
        sts.struct({
            assetId: v33.AssetIdOf,
            tokenAddress: v33.EthAddress,
            networkId: v33.BridgeNetworkId,
        })
    ),
    /**
     * Register existing asset
     * 
     * Can only be called by root.
     */
    v42: new CallType(
        'EthBridge.register_existing_sidechain_asset',
        sts.struct({
            assetId: v42.AssetId32,
            tokenAddress: v42.H160,
            networkId: sts.number(),
        })
    ),
}
