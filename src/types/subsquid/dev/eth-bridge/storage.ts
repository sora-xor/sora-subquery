import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const requestsQueue =  {
    /**
     *  Registered requests queue handled by off-chain workers.
     */
    v70: new StorageType('EthBridge.RequestsQueue', 'Default', [sts.number()], sts.array(() => v70.H256)) as RequestsQueueV70,
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface RequestsQueueV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block, key: number): Promise<(v70.H256[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.H256[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.H256[] | undefined)][]>
}

export const requests =  {
    /**
     *  Registered requests.
     */
    v70: new StorageType('EthBridge.Requests', 'Optional', [sts.number(), v70.H256], v70.OffchainRequest) as RequestsV70,
}

/**
 *  Registered requests.
 */
export interface RequestsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.H256): Promise<(v70.OffchainRequest | undefined)>
    getMany(block: Block, keys: [number, v70.H256][]): Promise<(v70.OffchainRequest | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number, key2: v70.H256): Promise<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[number, v70.H256][]>
    getPairs(block: Block): Promise<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H256): Promise<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[k: [number, v70.H256], v: (v70.OffchainRequest | undefined)][]>
}

export const loadToIncomingRequestHash =  {
    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    v70: new StorageType('EthBridge.LoadToIncomingRequestHash', 'Default', [sts.number(), v70.H256], v70.H256) as LoadToIncomingRequestHashV70,
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface LoadToIncomingRequestHashV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256
    get(block: Block, key1: number, key2: v70.H256): Promise<(v70.H256 | undefined)>
    getMany(block: Block, keys: [number, v70.H256][]): Promise<(v70.H256 | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number, key2: v70.H256): Promise<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[number, v70.H256][]>
    getPairs(block: Block): Promise<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H256): Promise<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[k: [number, v70.H256], v: (v70.H256 | undefined)][]>
}

export const requestStatuses =  {
    /**
     *  Requests statuses.
     */
    v70: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v70.H256], v70.RequestStatus) as RequestStatusesV70,
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.H256): Promise<(v70.RequestStatus | undefined)>
    getMany(block: Block, keys: [number, v70.H256][]): Promise<(v70.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number, key2: v70.H256): Promise<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[number, v70.H256][]>
    getPairs(block: Block): Promise<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H256): Promise<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[k: [number, v70.H256], v: (v70.RequestStatus | undefined)][]>
}

export const requestSubmissionHeight =  {
    /**
     *  Requests submission height map (on substrate).
     */
    v70: new StorageType('EthBridge.RequestSubmissionHeight', 'Default', [sts.number(), v70.H256], sts.number()) as RequestSubmissionHeightV70,
}

/**
 *  Requests submission height map (on substrate).
 */
export interface RequestSubmissionHeightV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v70.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v70.H256][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number, key2: v70.H256): Promise<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[number, v70.H256][]>
    getPairs(block: Block): Promise<[k: [number, v70.H256], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H256], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H256): Promise<[k: [number, v70.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[k: [number, v70.H256], v: (number | undefined)][]>
}

export const requestApprovals =  {
    /**
     *  Outgoing requests approvals.
     */
    v70: new StorageType('EthBridge.RequestApprovals', 'Default', [sts.number(), v70.H256], sts.array(() => v70.SignatureParams)) as RequestApprovalsV70,
}

/**
 *  Outgoing requests approvals.
 */
export interface RequestApprovalsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.SignatureParams[]
    get(block: Block, key1: number, key2: v70.H256): Promise<(v70.SignatureParams[] | undefined)>
    getMany(block: Block, keys: [number, v70.H256][]): Promise<(v70.SignatureParams[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H256][]>
    getKeys(block: Block, key1: number, key2: v70.H256): Promise<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[number, v70.H256][]>
    getPairs(block: Block): Promise<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H256): Promise<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H256): AsyncIterable<[k: [number, v70.H256], v: (v70.SignatureParams[] | undefined)][]>
}

export const accountRequests =  {
    /**
     *  Requests made by an account.
     */
    v70: new StorageType('EthBridge.AccountRequests', 'Default', [v70.AccountId32], sts.array(() => sts.tuple(() => [sts.number(), v70.H256]))) as AccountRequestsV70,
}

/**
 *  Requests made by an account.
 */
export interface AccountRequestsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v70.H256][]
    get(block: Block, key: v70.AccountId32): Promise<([number, v70.H256][] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<([number, v70.H256][] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: ([number, v70.H256][] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: ([number, v70.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: ([number, v70.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: ([number, v70.H256][] | undefined)][]>
}

export const registeredAsset =  {
    /**
     *  Registered asset kind.
     */
    v70: new StorageType('EthBridge.RegisteredAsset', 'Optional', [sts.number(), v70.AssetId32], v70.AssetKind) as RegisteredAssetV70,
}

/**
 *  Registered asset kind.
 */
export interface RegisteredAssetV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.AssetId32): Promise<(v70.AssetKind | undefined)>
    getMany(block: Block, keys: [number, v70.AssetId32][]): Promise<(v70.AssetKind | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v70.AssetId32): Promise<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[number, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AssetId32): Promise<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.AssetKind | undefined)][]>
}

export const sidechainAssetPrecision =  {
    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    v70: new StorageType('EthBridge.SidechainAssetPrecision', 'Default', [sts.number(), v70.AssetId32], sts.number()) as SidechainAssetPrecisionV70,
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface SidechainAssetPrecisionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v70.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v70.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v70.AssetId32): Promise<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[number, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AssetId32): Promise<[k: [number, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[k: [number, v70.AssetId32], v: (number | undefined)][]>
}

export const registeredSidechainAsset =  {
    /**
     *  Registered token `AssetId` on Thischain.
     */
    v70: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [sts.number(), v70.H160], v70.AssetId32) as RegisteredSidechainAssetV70,
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface RegisteredSidechainAssetV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.H160): Promise<(v70.AssetId32 | undefined)>
    getMany(block: Block, keys: [number, v70.H160][]): Promise<(v70.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H160][]>
    getKeys(block: Block, key1: number, key2: v70.H160): Promise<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H160): AsyncIterable<[number, v70.H160][]>
    getPairs(block: Block): Promise<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H160): Promise<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H160): AsyncIterable<[k: [number, v70.H160], v: (v70.AssetId32 | undefined)][]>
}

export const registeredSidechainToken =  {
    /**
     *  Registered asset address on Sidechain.
     */
    v70: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [sts.number(), v70.AssetId32], v70.H160) as RegisteredSidechainTokenV70,
}

/**
 *  Registered asset address on Sidechain.
 */
export interface RegisteredSidechainTokenV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.AssetId32): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: [number, v70.AssetId32][]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v70.AssetId32): Promise<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[number, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AssetId32): Promise<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AssetId32): AsyncIterable<[k: [number, v70.AssetId32], v: (v70.H160 | undefined)][]>
}

export const peers =  {
    /**
     *  Network peers set.
     */
    v70: new StorageType('EthBridge.Peers', 'Default', [sts.number()], sts.array(() => v70.AccountId32)) as PeersV70,
}

/**
 *  Network peers set.
 */
export interface PeersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block, key: number): Promise<(v70.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.AccountId32[] | undefined)][]>
}

export const pendingPeer =  {
    /**
     *  Network pending (being added/removed) peer.
     */
    v70: new StorageType('EthBridge.PendingPeer', 'Optional', [sts.number()], v70.AccountId32) as PendingPeerV70,
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface PendingPeerV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.AccountId32 | undefined)][]>
}

export const pendingEthPeersSync =  {
    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    v70: new StorageType('EthBridge.PendingEthPeersSync', 'Default', [], v70.EthPeersSync) as PendingEthPeersSyncV70,
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface PendingEthPeersSyncV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.EthPeersSync
    get(block: Block): Promise<(v70.EthPeersSync | undefined)>
}

export const peerAccountId =  {
    /**
     *  Peer account ID on Thischain.
     */
    v70: new StorageType('EthBridge.PeerAccountId', 'Optional', [sts.number(), v70.H160], v70.AccountId32) as PeerAccountIdV70,
}

/**
 *  Peer account ID on Thischain.
 */
export interface PeerAccountIdV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v70.H160): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: [number, v70.H160][]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.H160][]>
    getKeys(block: Block, key1: number, key2: v70.H160): Promise<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.H160): AsyncIterable<[number, v70.H160][]>
    getPairs(block: Block): Promise<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.H160): Promise<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.H160): AsyncIterable<[k: [number, v70.H160], v: (v70.AccountId32 | undefined)][]>
}

export const peerAddress =  {
    /**
     *  Peer address on Sidechain.
     */
    v70: new StorageType('EthBridge.PeerAddress', 'Default', [sts.number(), v70.AccountId32], v70.H160) as PeerAddressV70,
}

/**
 *  Peer address on Sidechain.
 */
export interface PeerAddressV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H160
    get(block: Block, key1: number, key2: v70.AccountId32): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: [number, v70.AccountId32][]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v70.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v70.AccountId32): Promise<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[number, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v70.AccountId32): Promise<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v70.AccountId32): AsyncIterable<[k: [number, v70.AccountId32], v: (v70.H160 | undefined)][]>
}

export const bridgeAccount =  {
    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    v70: new StorageType('EthBridge.BridgeAccount', 'Optional', [sts.number()], v70.AccountId32) as BridgeAccountV70,
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface BridgeAccountV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.AccountId32 | undefined)][]>
}

export const authorityAccount =  {
    /**
     *  Thischain authority account.
     */
    v70: new StorageType('EthBridge.AuthorityAccount', 'Optional', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Thischain authority account.
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const bridgeStatuses =  {
    /**
     *  Bridge status.
     */
    v70: new StorageType('EthBridge.BridgeStatuses', 'Optional', [sts.number()], v70.BridgeStatus) as BridgeStatusesV70,
}

/**
 *  Bridge status.
 */
export interface BridgeStatusesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v70.BridgeStatus | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.BridgeStatus | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.BridgeStatus | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.BridgeStatus | undefined)][]>
}

export const bridgeContractAddress =  {
    /**
     *  Smart-contract address on Sidechain.
     */
    v70: new StorageType('EthBridge.BridgeContractAddress', 'Default', [sts.number()], v70.H160) as BridgeContractAddressV70,
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface BridgeContractAddressV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H160
    get(block: Block, key: number): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.H160 | undefined)][]>
}

export const xorMasterContractAddress =  {
    /**
     *  Sora XOR master contract address.
     */
    v70: new StorageType('EthBridge.XorMasterContractAddress', 'Default', [], v70.H160) as XorMasterContractAddressV70,
}

/**
 *  Sora XOR master contract address.
 */
export interface XorMasterContractAddressV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H160
    get(block: Block): Promise<(v70.H160 | undefined)>
}

export const valMasterContractAddress =  {
    /**
     *  Sora VAL master contract address.
     */
    v70: new StorageType('EthBridge.ValMasterContractAddress', 'Default', [], v70.H160) as ValMasterContractAddressV70,
}

/**
 *  Sora VAL master contract address.
 */
export interface ValMasterContractAddressV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H160
    get(block: Block): Promise<(v70.H160 | undefined)>
}

export const nextNetworkId =  {
    /**
     *  Next Network ID counter.
     */
    v70: new StorageType('EthBridge.NextNetworkId', 'Default', [], sts.number()) as NextNetworkIdV70,
}

/**
 *  Next Network ID counter.
 */
export interface NextNetworkIdV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const migratingRequests =  {
    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    v70: new StorageType('EthBridge.MigratingRequests', 'Default', [], sts.array(() => v70.H256)) as MigratingRequestsV70,
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface MigratingRequestsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block): Promise<(v70.H256[] | undefined)>
}

export const bridgeSignatureVersions =  {
    v70: new StorageType('EthBridge.BridgeSignatureVersions', 'Default', [sts.number()], v70.BridgeSignatureVersion) as BridgeSignatureVersionsV70,
}

export interface BridgeSignatureVersionsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.BridgeSignatureVersion
    get(block: Block, key: number): Promise<(v70.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
}

export const pendingBridgeSignatureVersions =  {
    v70: new StorageType('EthBridge.PendingBridgeSignatureVersions', 'Optional', [sts.number()], v70.BridgeSignatureVersion) as PendingBridgeSignatureVersionsV70,
}

export interface PendingBridgeSignatureVersionsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v70.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.BridgeSignatureVersion | undefined)][]>
}
