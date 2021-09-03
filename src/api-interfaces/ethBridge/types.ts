// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Text, U256, U8aFixed, Vec, bool, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { AccountId, AssetId, Balance, BlockNumber, H160, H256, Index } from '@polkadot/types/interfaces/runtime';
import type { AssetName, AssetSymbol, BalancePrecision } from 'sora/api-interfaces/sora';

/** @name AssetKind */
export interface AssetKind extends Enum {
  readonly isThischain: boolean;
  readonly isSidechain: boolean;
  readonly isSidechainOwned: boolean;
}

/** @name BridgeNetworkId */
export interface BridgeNetworkId extends u32 {}

/** @name BridgeStatus */
export interface BridgeStatus extends Enum {
  readonly isInitialized: boolean;
  readonly isMigrating: boolean;
}

/** @name BridgeTimepoint */
export interface BridgeTimepoint extends Struct {
  readonly height: MultiChainHeight;
  readonly index: u32;
}

/** @name ChangePeersContract */
export interface ChangePeersContract extends Enum {
  readonly isXor: boolean;
  readonly isVal: boolean;
}

/** @name CurrencyIdEncoded */
export interface CurrencyIdEncoded extends Enum {
  readonly isAssetId: boolean;
  readonly asAssetId: H256;
  readonly isTokenAddress: boolean;
  readonly asTokenAddress: H160;
}

/** @name EthBridgeStorageVersion */
export interface EthBridgeStorageVersion extends Enum {
  readonly isV1: boolean;
  readonly isV2RemovePendingTransfers: boolean;
}

/** @name EthPeersSync */
export interface EthPeersSync extends Struct {
  readonly is_bridge_ready: bool;
  readonly is_xor_ready: bool;
  readonly is_val_ready: bool;
}

/** @name FixedBytes */
export interface FixedBytes extends Bytes {}

/** @name IncomingAddToken */
export interface IncomingAddToken extends Struct {
  readonly token_address: EthereumAddress;
  readonly asset_id: AssetId;
  readonly precision: BalancePrecision;
  readonly symbol: AssetSymbol;
  readonly name: AssetName;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingCancelOutgoingRequest */
export interface IncomingCancelOutgoingRequest extends Struct {
  readonly outgoing_request: OutgoingRequest;
  readonly outgoing_request_hash: H256;
  readonly initial_request_hash: H256;
  readonly tx_input: Bytes;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingChangePeers */
export interface IncomingChangePeers extends Struct {
  readonly peer_account_id: AccountId;
  readonly peer_address: EthereumAddress;
  readonly added: bool;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingChangePeersCompat */
export interface IncomingChangePeersCompat extends Struct {
  readonly peer_account_id: AccountId;
  readonly peer_address: EthereumAddress;
  readonly added: bool;
  readonly contract: ChangePeersContract;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingMarkAsDoneRequest */
export interface IncomingMarkAsDoneRequest extends Struct {
  readonly outgoing_request_hash: H256;
  readonly initial_request_hash: H256;
  readonly author: AccountId;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingMetaRequestKind */
export interface IncomingMetaRequestKind extends Enum {
  readonly isCancelOutgoingRequest: boolean;
  readonly isMarkAsDone: boolean;
}

/** @name IncomingMigrate */
export interface IncomingMigrate extends Struct {
  readonly new_contract_address: EthereumAddress;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingPrepareForMigration */
export interface IncomingPrepareForMigration extends Struct {
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name IncomingRequest */
export interface IncomingRequest extends Enum {
  readonly isTransfer: boolean;
  readonly asTransfer: IncomingTransfer;
  readonly isAddToken: boolean;
  readonly asAddToken: IncomingAddToken;
  readonly isChangePeers: boolean;
  readonly asChangePeers: IncomingChangePeers;
  readonly isCancelOutgoingRequest: boolean;
  readonly asCancelOutgoingRequest: IncomingCancelOutgoingRequest;
  readonly isMarkAsDone: boolean;
  readonly asMarkAsDone: IncomingMarkAsDoneRequest;
  readonly isPrepareForMigration: boolean;
  readonly asPrepareForMigration: IncomingPrepareForMigration;
  readonly isMigrate: boolean;
  readonly asMigrate: IncomingMigrate;
}

/** @name IncomingRequestKind */
export interface IncomingRequestKind extends Enum {
  readonly isTransaction: boolean;
  readonly asTransaction: IncomingTransactionRequestKind;
  readonly isMeta: boolean;
  readonly asMeta: IncomingMetaRequestKind;
}

/** @name IncomingTransactionRequestKind */
export interface IncomingTransactionRequestKind extends Enum {
  readonly isTransfer: boolean;
  readonly isAddAsset: boolean;
  readonly isAddPeer: boolean;
  readonly isRemovePeer: boolean;
  readonly isPrepareForMigration: boolean;
  readonly isMigrate: boolean;
  readonly isAddPeerCompat: boolean;
  readonly isRemovePeerCompat: boolean;
  readonly isTransferXor: boolean;
}

/** @name IncomingTransfer */
export interface IncomingTransfer extends Struct {
  readonly from: EthereumAddress;
  readonly to: AccountId;
  readonly asset_id: AssetId;
  readonly asset_kind: AssetKind;
  readonly amount: Balance;
  readonly author: AccountId;
  readonly tx_hash: H256;
  readonly at_height: u64;
  readonly timepoint: BridgeTimepoint;
  readonly network_id: BridgeNetworkId;
}

/** @name LoadIncomingMetaRequest */
export interface LoadIncomingMetaRequest extends Struct {
  readonly author: AccountId;
  readonly hash: H256;
  readonly timepoint: BridgeTimepoint;
  readonly kind: IncomingMetaRequestKind;
  readonly network_id: BridgeNetworkId;
}

/** @name LoadIncomingRequest */
export interface LoadIncomingRequest extends Enum {
  readonly isTransaction: boolean;
  readonly asTransaction: LoadIncomingTransactionRequest;
  readonly isMeta: boolean;
  readonly asMeta: ITuple<[LoadIncomingMetaRequest, H256]>;
}

/** @name LoadIncomingTransactionRequest */
export interface LoadIncomingTransactionRequest extends Struct {
  readonly author: AccountId;
  readonly hash: H256;
  readonly timepoint: BridgeTimepoint;
  readonly kind: IncomingTransactionRequestKind;
  readonly network_id: BridgeNetworkId;
}

/** @name MultiChainHeight */
export interface MultiChainHeight extends Enum {
  readonly isThischain: boolean;
  readonly asThischain: BlockNumber;
  readonly isSidechain: boolean;
  readonly asSidechain: u64;
}

/** @name OffchainRequest */
export interface OffchainRequest extends Enum {
  readonly isOutgoing: boolean;
  readonly asOutgoing: ITuple<[OutgoingRequest, H256]>;
  readonly isLoadIncoming: boolean;
  readonly asLoadIncoming: LoadIncomingRequest;
  readonly isIncoming: boolean;
  readonly asIncoming: ITuple<[IncomingRequest, H256]>;
}

/** @name OutgoingAddAsset */
export interface OutgoingAddAsset extends Struct {
  readonly author: AccountId;
  readonly asset_id: AssetId;
  readonly supply: Balance;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingAddAssetEncoded */
export interface OutgoingAddAssetEncoded extends Struct {
  readonly name: Text;
  readonly symbol: Text;
  readonly decimal: u8;
  readonly supply: U256;
  readonly sidechain_asset_id: FixedBytes;
  readonly hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingAddPeer */
export interface OutgoingAddPeer extends Struct {
  readonly author: AccountId;
  readonly peer_address: EthereumAddress;
  readonly peer_account_id: AccountId;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingAddPeerCompat */
export interface OutgoingAddPeerCompat extends Struct {
  readonly author: AccountId;
  readonly peer_address: EthereumAddress;
  readonly peer_account_id: AccountId;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingAddPeerEncoded */
export interface OutgoingAddPeerEncoded extends Struct {
  readonly peer_address: EthereumAddress;
  readonly tx_hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingAddToken */
export interface OutgoingAddToken extends Struct {
  readonly author: AccountId;
  readonly token_address: EthereumAddress;
  readonly ticker: Text;
  readonly name: Text;
  readonly decimals: u8;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingAddTokenEncoded */
export interface OutgoingAddTokenEncoded extends Struct {
  readonly token_address: EthereumAddress;
  readonly ticker: Text;
  readonly name: Text;
  readonly decimals: u8;
  readonly hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingMigrate */
export interface OutgoingMigrate extends Struct {
  readonly author: AccountId;
  readonly new_contract_address: EthereumAddress;
  readonly erc20_native_tokens: Vec<EthereumAddress>;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingMigrateEncoded */
export interface OutgoingMigrateEncoded extends Struct {
  readonly this_contract_address: EthereumAddress;
  readonly tx_hash: H256;
  readonly new_contract_address: EthereumAddress;
  readonly erc20_native_tokens: Vec<EthereumAddress>;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingPrepareForMigration */
export interface OutgoingPrepareForMigration extends Struct {
  readonly author: AccountId;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingPrepareForMigrationEncoded */
export interface OutgoingPrepareForMigrationEncoded extends Struct {
  readonly this_contract_address: EthereumAddress;
  readonly tx_hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingRemovePeer */
export interface OutgoingRemovePeer extends Struct {
  readonly author: AccountId;
  readonly peer_account_id: AccountId;
  readonly peer_address: EthereumAddress;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingRemovePeerCompat */
export interface OutgoingRemovePeerCompat extends Struct {
  readonly author: AccountId;
  readonly peer_account_id: AccountId;
  readonly peer_address: EthereumAddress;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingRemovePeerEncoded */
export interface OutgoingRemovePeerEncoded extends Struct {
  readonly peer_address: EthereumAddress;
  readonly tx_hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name OutgoingRequest */
export interface OutgoingRequest extends Enum {
  readonly isTransfer: boolean;
  readonly asTransfer: OutgoingTransfer;
  readonly isAddAsset: boolean;
  readonly asAddAsset: OutgoingAddAsset;
  readonly isAddToken: boolean;
  readonly asAddToken: OutgoingAddToken;
  readonly isAddPeer: boolean;
  readonly asAddPeer: OutgoingAddPeer;
  readonly isRemovePeer: boolean;
  readonly asRemovePeer: OutgoingRemovePeer;
  readonly isPrepareForMigration: boolean;
  readonly asPrepareForMigration: OutgoingPrepareForMigration;
  readonly isMigrate: boolean;
  readonly asMigrate: OutgoingMigrate;
}

/** @name OutgoingRequestEncoded */
export interface OutgoingRequestEncoded extends Enum {
  readonly isTransfer: boolean;
  readonly asTransfer: OutgoingTransferEncoded;
  readonly isAddAsset: boolean;
  readonly asAddAsset: OutgoingAddAssetEncoded;
  readonly isAddToken: boolean;
  readonly asAddToken: OutgoingAddTokenEncoded;
  readonly isAddPeer: boolean;
  readonly asAddPeer: OutgoingAddPeerEncoded;
  readonly isRemovePeer: boolean;
  readonly asRemovePeer: OutgoingRemovePeerEncoded;
  readonly isPrepareForMigration: boolean;
  readonly asPrepareForMigration: OutgoingPrepareForMigrationEncoded;
  readonly isMigrate: boolean;
  readonly asMigrate: OutgoingMigrateEncoded;
}

/** @name OutgoingTransfer */
export interface OutgoingTransfer extends Struct {
  readonly from: AccountId;
  readonly to: EthereumAddress;
  readonly asset_id: AssetId;
  readonly amount: Balance;
  readonly nonce: Index;
  readonly network_id: BridgeNetworkId;
  readonly timepoint: BridgeTimepoint;
}

/** @name OutgoingTransferEncoded */
export interface OutgoingTransferEncoded extends Struct {
  readonly currency_id: CurrencyIdEncoded;
  readonly amount: U256;
  readonly to: EthereumAddress;
  readonly from: EthereumAddress;
  readonly tx_hash: H256;
  readonly network_id: H256;
  readonly raw: Bytes;
}

/** @name RequestStatus */
export interface RequestStatus extends Enum {
  readonly isPending: boolean;
  readonly isFrozen: boolean;
  readonly isApprovalsReady: boolean;
  readonly isFailed: boolean;
  readonly isDone: boolean;
}

/** @name SignatureParams */
export interface SignatureParams extends Struct {
  readonly r: U8aFixed;
  readonly s: U8aFixed;
  readonly v: u8;
}

export type PHANTOM_ETHBRIDGE = 'ethBridge';
