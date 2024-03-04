import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v32 from '../v32'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v53 from '../v53'

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
    v1: new CallType(
        'EthBridge.register_bridge',
        sts.struct({
            bridgeContractAddress: v1.EthereumAddress,
            initialPeers: sts.array(() => v1.AccountId),
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
     *  Parameters:
     *  - `asset_id` - Thischain asset identifier.
     *  - `network_id` - network identifier to which the asset should be added.
     */
    v1: new CallType(
        'EthBridge.add_asset',
        sts.struct({
            assetId: v1.AssetIdOf,
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.add_sidechain_token',
        sts.struct({
            tokenAddress: v1.EthereumAddress,
            symbol: v1.String,
            name: v1.String,
            decimals: sts.number(),
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.transfer_to_sidechain',
        sts.struct({
            assetId: v1.AssetIdOf,
            to: v1.EthereumAddress,
            amount: v1.Balance,
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.request_from_sidechain',
        sts.struct({
            ethTxHash: v1.H256,
            kind: v1.IncomingRequestKind,
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.finalize_incoming_request',
        sts.struct({
            hash: v1.H256,
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.add_peer',
        sts.struct({
            accountId: v1.AccountId,
            address: v1.EthereumAddress,
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.remove_peer',
        sts.struct({
            accountId: v1.AccountId,
            networkId: v1.BridgeNetworkId,
        })
    ),
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
    v1: new CallType(
        'EthBridge.prepare_for_migration',
        sts.struct({
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.migrate',
        sts.struct({
            newContractAddress: v1.EthereumAddress,
            erc20NativeTokens: sts.array(() => v1.EthereumAddress),
            networkId: v1.BridgeNetworkId,
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
    v1: new CallType(
        'EthBridge.register_incoming_request',
        sts.struct({
            incomingRequest: v1.IncomingRequest,
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
    v1: new CallType(
        'EthBridge.import_incoming_request',
        sts.struct({
            loadIncomingRequest: v1.LoadIncomingRequest,
            incomingRequestResult: sts.result(() => v1.IncomingRequest, () => v1.DispatchError),
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
    v53: new CallType(
        'EthBridge.import_incoming_request',
        sts.struct({
            loadIncomingRequest: v53.LoadIncomingRequest,
            incomingRequestResult: sts.result(() => v53.IncomingRequest, () => v53.DispatchError),
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
    v1: new CallType(
        'EthBridge.approve_request',
        sts.struct({
            ocwPublic: v1.Public,
            hash: v1.H256,
            signatureParams: v1.SignatureParams,
            networkId: v1.NetworkId,
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
    v1: new CallType(
        'EthBridge.abort_request',
        sts.struct({
            hash: v1.H256,
            error: v1.DispatchError,
            networkId: v1.BridgeNetworkId,
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
    v53: new CallType(
        'EthBridge.abort_request',
        sts.struct({
            hash: v53.H256,
            error: v53.DispatchError,
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
    v1: new CallType(
        'EthBridge.force_add_peer',
        sts.struct({
            who: v1.AccountId,
            address: v1.EthereumAddress,
            networkId: v1.BridgeNetworkId,
        })
    ),
}

export const migrateTo020 =  {
    name: 'EthBridge.migrate_to_0_2_0',
    v19: new CallType(
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
    v32: new CallType(
        'EthBridge.remove_sidechain_asset',
        sts.struct({
            assetId: v32.AssetIdOf,
            networkId: v32.BridgeNetworkId,
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
    v32: new CallType(
        'EthBridge.register_existing_sidechain_asset',
        sts.struct({
            assetId: v32.AssetIdOf,
            tokenAddress: v32.EthereumAddress,
            networkId: v32.BridgeNetworkId,
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
