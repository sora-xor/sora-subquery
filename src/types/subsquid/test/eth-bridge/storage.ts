import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const requestsQueue =  {
    /**
     *  Registered requests queue handled by off-chain workers.
     */
    v33: new StorageType('EthBridge.RequestsQueue', 'Default', [v33.BridgeNetworkId], sts.array(() => v33.H256)) as RequestsQueueV33,
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface RequestsQueueV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.H256[]
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.H256[] | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.H256[] | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.H256[] | undefined)][]>
}

export const requests =  {
    /**
     *  Registered requests.
     */
    v33: new StorageType('EthBridge.Requests', 'Optional', [v33.BridgeNetworkId, v33.H256], v33.OffchainRequest) as RequestsV33,
    /**
     *  Registered requests.
     */
    v42: new StorageType('EthBridge.Requests', 'Optional', [sts.number(), v42.H256], v42.OffchainRequest) as RequestsV42,
}

/**
 *  Registered requests.
 */
export interface RequestsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<(v33.OffchainRequest | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.H256][]): Promise<(v33.OffchainRequest | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.OffchainRequest | undefined)][]>
}

/**
 *  Registered requests.
 */
export interface RequestsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.H256): Promise<(v42.OffchainRequest | undefined)>
    getMany(block: Block, keys: [number, v42.H256][]): Promise<(v42.OffchainRequest | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.H256][]>
    getKeys(block: Block, key1: number, key2: v42.H256): Promise<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.H256): AsyncIterable<[number, v42.H256][]>
    getPairs(block: Block): Promise<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.H256): Promise<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.H256): AsyncIterable<[k: [number, v42.H256], v: (v42.OffchainRequest | undefined)][]>
}

export const loadToIncomingRequestHash =  {
    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    v33: new StorageType('EthBridge.LoadToIncomingRequestHash', 'Default', [v33.BridgeNetworkId, v33.H256], v33.H256) as LoadToIncomingRequestHashV33,
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface LoadToIncomingRequestHashV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.H256
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<(v33.H256 | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.H256][]): Promise<(v33.H256 | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.H256 | undefined)][]>
}

export const requestStatuses =  {
    /**
     *  Requests statuses.
     */
    v33: new StorageType('EthBridge.RequestStatuses', 'Optional', [v33.BridgeNetworkId, v33.H256], v33.RequestStatus) as RequestStatusesV33,
    /**
     *  Requests statuses.
     */
    v42: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v42.H256], v42.RequestStatus) as RequestStatusesV42,
    /**
     *  Requests statuses.
     */
    v52: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v52.H256], v52.RequestStatus) as RequestStatusesV52,
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<(v33.RequestStatus | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.H256][]): Promise<(v33.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.RequestStatus | undefined)][]>
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.H256): Promise<(v42.RequestStatus | undefined)>
    getMany(block: Block, keys: [number, v42.H256][]): Promise<(v42.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.H256][]>
    getKeys(block: Block, key1: number, key2: v42.H256): Promise<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.H256): AsyncIterable<[number, v42.H256][]>
    getPairs(block: Block): Promise<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.H256): Promise<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.H256): AsyncIterable<[k: [number, v42.H256], v: (v42.RequestStatus | undefined)][]>
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v52.H256): Promise<(v52.RequestStatus | undefined)>
    getMany(block: Block, keys: [number, v52.H256][]): Promise<(v52.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[number, v52.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v52.H256][]>
    getKeys(block: Block, key1: number, key2: v52.H256): Promise<[number, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v52.H256): AsyncIterable<[number, v52.H256][]>
    getPairs(block: Block): Promise<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number, key2: v52.H256): Promise<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v52.H256): AsyncIterable<[k: [number, v52.H256], v: (v52.RequestStatus | undefined)][]>
}

export const requestSubmissionHeight =  {
    /**
     *  Requests submission height map (on substrate).
     */
    v33: new StorageType('EthBridge.RequestSubmissionHeight', 'Default', [v33.BridgeNetworkId, v33.H256], v33.BlockNumber) as RequestSubmissionHeightV33,
}

/**
 *  Requests submission height map (on substrate).
 */
export interface RequestSubmissionHeightV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BlockNumber
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<(v33.BlockNumber | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.H256][]): Promise<(v33.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.BlockNumber | undefined)][]>
}

export const requestApprovals =  {
    /**
     *  Outgoing requests approvals.
     */
    v33: new StorageType('EthBridge.RequestApprovals', 'Default', [v33.BridgeNetworkId, v33.H256], sts.array(() => v33.SignatureParams)) as RequestApprovalsV33,
}

/**
 *  Outgoing requests approvals.
 */
export interface RequestApprovalsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SignatureParams[]
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<(v33.SignatureParams[] | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.H256][]): Promise<(v33.SignatureParams[] | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[v33.BridgeNetworkId, v33.H256][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): Promise<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.H256): AsyncIterable<[k: [v33.BridgeNetworkId, v33.H256], v: (v33.SignatureParams[] | undefined)][]>
}

export const accountRequests =  {
    /**
     *  Requests made by an account.
     */
    v33: new StorageType('EthBridge.AccountRequests', 'Default', [v33.AccountId], sts.array(() => sts.tuple(() => [v33.BridgeNetworkId, v33.H256]))) as AccountRequestsV33,
}

/**
 *  Requests made by an account.
 */
export interface AccountRequestsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.BridgeNetworkId, v33.H256][]
    get(block: Block, key: v33.AccountId): Promise<([v33.BridgeNetworkId, v33.H256][] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<([v33.BridgeNetworkId, v33.H256][] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: ([v33.BridgeNetworkId, v33.H256][] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: ([v33.BridgeNetworkId, v33.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: ([v33.BridgeNetworkId, v33.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: ([v33.BridgeNetworkId, v33.H256][] | undefined)][]>
}

export const registeredAsset =  {
    /**
     *  Registered asset kind.
     */
    v33: new StorageType('EthBridge.RegisteredAsset', 'Optional', [v33.BridgeNetworkId, v33.AssetId], v33.AssetKind) as RegisteredAssetV33,
    /**
     *  Registered asset kind.
     */
    v42: new StorageType('EthBridge.RegisteredAsset', 'Optional', [sts.number(), v42.AssetId32], v42.AssetKind) as RegisteredAssetV42,
}

/**
 *  Registered asset kind.
 */
export interface RegisteredAssetV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<(v33.AssetKind | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.AssetId][]): Promise<(v33.AssetKind | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.AssetKind | undefined)][]>
}

/**
 *  Registered asset kind.
 */
export interface RegisteredAssetV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.AssetId32): Promise<(v42.AssetKind | undefined)>
    getMany(block: Block, keys: [number, v42.AssetId32][]): Promise<(v42.AssetKind | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.AssetKind | undefined)][]>
}

export const sidechainAssetPrecision =  {
    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    v33: new StorageType('EthBridge.SidechainAssetPrecision', 'Default', [v33.BridgeNetworkId, v33.AssetId], v33.BalancePrecision) as SidechainAssetPrecisionV33,
    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    v42: new StorageType('EthBridge.SidechainAssetPrecision', 'Default', [sts.number(), v42.AssetId32], sts.number()) as SidechainAssetPrecisionV42,
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface SidechainAssetPrecisionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BalancePrecision
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<(v33.BalancePrecision | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.AssetId][]): Promise<(v33.BalancePrecision | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.BalancePrecision | undefined)][]>
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface SidechainAssetPrecisionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v42.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v42.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v42.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: (number | undefined)][]>
}

export const registeredSidechainAsset =  {
    /**
     *  Registered token `AssetId` on Thischain.
     */
    v33: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [v33.BridgeNetworkId, v33.EthAddress], v33.AssetId) as RegisteredSidechainAssetV33,
    /**
     *  Registered token `AssetId` on Thischain.
     */
    v42: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [sts.number(), v42.H160], v42.AssetId32) as RegisteredSidechainAssetV42,
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface RegisteredSidechainAssetV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<(v33.AssetId | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.EthAddress][]): Promise<(v33.AssetId | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AssetId | undefined)][]>
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface RegisteredSidechainAssetV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.H160): Promise<(v42.AssetId32 | undefined)>
    getMany(block: Block, keys: [number, v42.H160][]): Promise<(v42.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.H160][]>
    getKeys(block: Block, key1: number, key2: v42.H160): Promise<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.H160): AsyncIterable<[number, v42.H160][]>
    getPairs(block: Block): Promise<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.H160): Promise<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.H160): AsyncIterable<[k: [number, v42.H160], v: (v42.AssetId32 | undefined)][]>
}

export const registeredSidechainToken =  {
    /**
     *  Registered asset address on Sidechain.
     */
    v33: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [v33.BridgeNetworkId, v33.AssetId], v33.EthAddress) as RegisteredSidechainTokenV33,
    /**
     *  Registered asset address on Sidechain.
     */
    v42: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [sts.number(), v42.AssetId32], v42.H160) as RegisteredSidechainTokenV42,
}

/**
 *  Registered asset address on Sidechain.
 */
export interface RegisteredSidechainTokenV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<(v33.EthAddress | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.AssetId][]): Promise<(v33.EthAddress | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[v33.BridgeNetworkId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): Promise<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AssetId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AssetId], v: (v33.EthAddress | undefined)][]>
}

/**
 *  Registered asset address on Sidechain.
 */
export interface RegisteredSidechainTokenV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.AssetId32): Promise<(v42.H160 | undefined)>
    getMany(block: Block, keys: [number, v42.AssetId32][]): Promise<(v42.H160 | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: (v42.H160 | undefined)][]>
}

export const peers =  {
    /**
     *  Network peers set.
     */
    v33: new StorageType('EthBridge.Peers', 'Default', [v33.BridgeNetworkId], sts.array(() => v33.AccountId)) as PeersV33,
}

/**
 *  Network peers set.
 */
export interface PeersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.AccountId[] | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId[] | undefined)][]>
}

export const pendingPeer =  {
    /**
     *  Network pending (being added/removed) peer.
     */
    v33: new StorageType('EthBridge.PendingPeer', 'Optional', [v33.BridgeNetworkId], v33.AccountId) as PendingPeerV33,
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface PendingPeerV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
}

export const pendingEthPeersSync =  {
    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    v33: new StorageType('EthBridge.PendingEthPeersSync', 'Default', [], v33.EthPeersSync) as PendingEthPeersSyncV33,
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface PendingEthPeersSyncV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthPeersSync
    get(block: Block): Promise<(v33.EthPeersSync | undefined)>
}

export const peerAccountId =  {
    /**
     *  Peer account ID on Thischain.
     */
    v33: new StorageType('EthBridge.PeerAccountId', 'Default', [v33.BridgeNetworkId, v33.EthAddress], v33.AccountId) as PeerAccountIdV33,
    /**
     *  Peer account ID on Thischain.
     */
    v42: new StorageType('EthBridge.PeerAccountId', 'Optional', [sts.number(), v42.H160], v42.AccountId32) as PeerAccountIdV42,
}

/**
 *  Peer account ID on Thischain.
 */
export interface PeerAccountIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.EthAddress][]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): AsyncIterable<[v33.BridgeNetworkId, v33.EthAddress][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): Promise<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.EthAddress): AsyncIterable<[k: [v33.BridgeNetworkId, v33.EthAddress], v: (v33.AccountId | undefined)][]>
}

/**
 *  Peer account ID on Thischain.
 */
export interface PeerAccountIdV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v42.H160): Promise<(v42.AccountId32 | undefined)>
    getMany(block: Block, keys: [number, v42.H160][]): Promise<(v42.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v42.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v42.H160][]>
    getKeys(block: Block, key1: number, key2: v42.H160): Promise<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v42.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v42.H160): AsyncIterable<[number, v42.H160][]>
    getPairs(block: Block): Promise<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v42.H160): Promise<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v42.H160): AsyncIterable<[k: [number, v42.H160], v: (v42.AccountId32 | undefined)][]>
}

export const peerAddress =  {
    /**
     *  Peer address on Sidechain.
     */
    v33: new StorageType('EthBridge.PeerAddress', 'Default', [v33.BridgeNetworkId, v33.AccountId], v33.EthAddress) as PeerAddressV33,
}

/**
 *  Peer address on Sidechain.
 */
export interface PeerAddressV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthAddress
    get(block: Block, key1: v33.BridgeNetworkId, key2: v33.AccountId): Promise<(v33.EthAddress | undefined)>
    getMany(block: Block, keys: [v33.BridgeNetworkId, v33.AccountId][]): Promise<(v33.EthAddress | undefined)[]>
    getKeys(block: Block): Promise<[v33.BridgeNetworkId, v33.AccountId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId): Promise<[v33.BridgeNetworkId, v33.AccountId][]>
    getKeys(block: Block, key1: v33.BridgeNetworkId, key2: v33.AccountId): Promise<[v33.BridgeNetworkId, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.BridgeNetworkId, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[v33.BridgeNetworkId, v33.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AccountId): AsyncIterable<[v33.BridgeNetworkId, v33.AccountId][]>
    getPairs(block: Block): Promise<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId): Promise<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
    getPairs(block: Block, key1: v33.BridgeNetworkId, key2: v33.AccountId): Promise<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.BridgeNetworkId, key2: v33.AccountId): AsyncIterable<[k: [v33.BridgeNetworkId, v33.AccountId], v: (v33.EthAddress | undefined)][]>
}

export const bridgeAccount =  {
    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    v33: new StorageType('EthBridge.BridgeAccount', 'Optional', [v33.BridgeNetworkId], v33.AccountId) as BridgeAccountV33,
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface BridgeAccountV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.AccountId | undefined)][]>
}

export const authorityAccount =  {
    /**
     *  Thischain authority account.
     */
    v33: new StorageType('EthBridge.AuthorityAccount', 'Default', [], v33.AccountId) as AuthorityAccountV33,
    /**
     *  Thischain authority account.
     */
    v42: new StorageType('EthBridge.AuthorityAccount', 'Optional', [], v42.AccountId32) as AuthorityAccountV42,
}

/**
 *  Thischain authority account.
 */
export interface AuthorityAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId
    get(block: Block): Promise<(v33.AccountId | undefined)>
}

/**
 *  Thischain authority account.
 */
export interface AuthorityAccountV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}

export const bridgeStatuses =  {
    /**
     *  Bridge status.
     */
    v33: new StorageType('EthBridge.BridgeStatuses', 'Optional', [v33.BridgeNetworkId], v33.BridgeStatus) as BridgeStatusesV33,
}

/**
 *  Bridge status.
 */
export interface BridgeStatusesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.BridgeStatus | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.BridgeStatus | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.BridgeStatus | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.BridgeStatus | undefined)][]>
}

export const bridgeContractAddress =  {
    /**
     *  Smart-contract address on Sidechain.
     */
    v33: new StorageType('EthBridge.BridgeContractAddress', 'Default', [v33.BridgeNetworkId], v33.EthAddress) as BridgeContractAddressV33,
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface BridgeContractAddressV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthAddress
    get(block: Block, key: v33.BridgeNetworkId): Promise<(v33.EthAddress | undefined)>
    getMany(block: Block, keys: v33.BridgeNetworkId[]): Promise<(v33.EthAddress | undefined)[]>
    getKeys(block: Block): Promise<v33.BridgeNetworkId[]>
    getKeys(block: Block, key: v33.BridgeNetworkId): Promise<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<v33.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v33.BridgeNetworkId, v: (v33.EthAddress | undefined)][]>
    getPairs(block: Block, key: v33.BridgeNetworkId): Promise<[k: v33.BridgeNetworkId, v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.EthAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BridgeNetworkId): AsyncIterable<[k: v33.BridgeNetworkId, v: (v33.EthAddress | undefined)][]>
}

export const xorMasterContractAddress =  {
    /**
     *  Sora XOR master contract address.
     */
    v33: new StorageType('EthBridge.XorMasterContractAddress', 'Default', [], v33.EthAddress) as XorMasterContractAddressV33,
}

/**
 *  Sora XOR master contract address.
 */
export interface XorMasterContractAddressV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthAddress
    get(block: Block): Promise<(v33.EthAddress | undefined)>
}

export const valMasterContractAddress =  {
    /**
     *  Sora VAL master contract address.
     */
    v33: new StorageType('EthBridge.ValMasterContractAddress', 'Default', [], v33.EthAddress) as ValMasterContractAddressV33,
}

/**
 *  Sora VAL master contract address.
 */
export interface ValMasterContractAddressV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthAddress
    get(block: Block): Promise<(v33.EthAddress | undefined)>
}

export const nextNetworkId =  {
    /**
     *  Next Network ID counter.
     */
    v33: new StorageType('EthBridge.NextNetworkId', 'Default', [], v33.BridgeNetworkId) as NextNetworkIdV33,
}

/**
 *  Next Network ID counter.
 */
export interface NextNetworkIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BridgeNetworkId
    get(block: Block): Promise<(v33.BridgeNetworkId | undefined)>
}

export const migratingRequests =  {
    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    v33: new StorageType('EthBridge.MigratingRequests', 'Default', [], sts.array(() => v33.H256)) as MigratingRequestsV33,
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface MigratingRequestsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.H256[]
    get(block: Block): Promise<(v33.H256[] | undefined)>
}

export const bridgeSignatureVersions =  {
    v38: new StorageType('EthBridge.BridgeSignatureVersions', 'Default', [v38.BridgeNetworkId], v38.BridgeSignatureVersion) as BridgeSignatureVersionsV38,
}

export interface BridgeSignatureVersionsV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v38.BridgeSignatureVersion
    get(block: Block, key: v38.BridgeNetworkId): Promise<(v38.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: v38.BridgeNetworkId[]): Promise<(v38.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<v38.BridgeNetworkId[]>
    getKeys(block: Block, key: v38.BridgeNetworkId): Promise<v38.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v38.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v38.BridgeNetworkId): AsyncIterable<v38.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: v38.BridgeNetworkId): Promise<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v38.BridgeNetworkId): AsyncIterable<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
}

export const pendingBridgeSignatureVersions =  {
    v38: new StorageType('EthBridge.PendingBridgeSignatureVersions', 'Optional', [v38.BridgeNetworkId], v38.BridgeSignatureVersion) as PendingBridgeSignatureVersionsV38,
}

export interface PendingBridgeSignatureVersionsV38  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v38.BridgeNetworkId): Promise<(v38.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: v38.BridgeNetworkId[]): Promise<(v38.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<v38.BridgeNetworkId[]>
    getKeys(block: Block, key: v38.BridgeNetworkId): Promise<v38.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v38.BridgeNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v38.BridgeNetworkId): AsyncIterable<v38.BridgeNetworkId[]>
    getPairs(block: Block): Promise<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: v38.BridgeNetworkId): Promise<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v38.BridgeNetworkId): AsyncIterable<[k: v38.BridgeNetworkId, v: (v38.BridgeSignatureVersion | undefined)][]>
}
