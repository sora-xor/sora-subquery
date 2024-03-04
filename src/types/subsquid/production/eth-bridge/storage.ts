import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v19 from '../v19'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const requestsQueue =  {
    /**
     *  Registered requests queue handled by off-chain workers.
     */
    v1: new StorageType('EthBridge.RequestsQueue', 'Default', [v1.NetworkId], sts.array(() => v1.H256)) as RequestsQueueV1,
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface RequestsQueueV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.H256[]
    get(block: Block, key: v1.NetworkId): Promise<(v1.H256[] | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.H256[] | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.H256[] | undefined)][]>
}

export const requests =  {
    /**
     *  Registered requests.
     */
    v1: new StorageType('EthBridge.Requests', 'Optional', [v1.NetworkId, v1.H256], v1.OffchainRequest) as RequestsV1,
    /**
     *  Registered requests.
     */
    v42: new StorageType('EthBridge.Requests', 'Optional', [sts.number(), v42.H256], v42.OffchainRequest) as RequestsV42,
}

/**
 *  Registered requests.
 */
export interface RequestsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<(v1.OffchainRequest | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.H256][]): Promise<(v1.OffchainRequest | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.OffchainRequest | undefined)][]>
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
    v1: new StorageType('EthBridge.LoadToIncomingRequestHash', 'Default', [v1.NetworkId, v1.H256], v1.H256) as LoadToIncomingRequestHashV1,
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface LoadToIncomingRequestHashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.H256
    get(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<(v1.H256 | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.H256][]): Promise<(v1.H256 | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.H256 | undefined)][]>
}

export const requestStatuses =  {
    /**
     *  Requests statuses.
     */
    v1: new StorageType('EthBridge.RequestStatuses', 'Optional', [v1.NetworkId, v1.H256], v1.RequestStatus) as RequestStatusesV1,
    /**
     *  Requests statuses.
     */
    v42: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v42.H256], v42.RequestStatus) as RequestStatusesV42,
    /**
     *  Requests statuses.
     */
    v53: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v53.H256], v53.RequestStatus) as RequestStatusesV53,
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<(v1.RequestStatus | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.H256][]): Promise<(v1.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.RequestStatus | undefined)][]>
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
export interface RequestStatusesV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v53.H256): Promise<(v53.RequestStatus | undefined)>
    getMany(block: Block, keys: [number, v53.H256][]): Promise<(v53.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[number, v53.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v53.H256][]>
    getKeys(block: Block, key1: number, key2: v53.H256): Promise<[number, v53.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v53.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v53.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v53.H256): AsyncIterable<[number, v53.H256][]>
    getPairs(block: Block): Promise<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number, key2: v53.H256): Promise<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v53.H256): AsyncIterable<[k: [number, v53.H256], v: (v53.RequestStatus | undefined)][]>
}

export const requestSubmissionHeight =  {
    /**
     *  Requests submission height map (on substrate).
     */
    v1: new StorageType('EthBridge.RequestSubmissionHeight', 'Default', [v1.NetworkId, v1.H256], v1.BlockNumber) as RequestSubmissionHeightV1,
}

/**
 *  Requests submission height map (on substrate).
 */
export interface RequestSubmissionHeightV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BlockNumber
    get(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<(v1.BlockNumber | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.H256][]): Promise<(v1.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.BlockNumber | undefined)][]>
}

export const requestApprovals =  {
    /**
     *  Outgoing requests approvals.
     */
    v1: new StorageType('EthBridge.RequestApprovals', 'Default', [v1.NetworkId, v1.H256], sts.array(() => v1.SignatureParams)) as RequestApprovalsV1,
}

/**
 *  Outgoing requests approvals.
 */
export interface RequestApprovalsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.SignatureParams[]
    get(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<(v1.SignatureParams[] | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.H256][]): Promise<(v1.SignatureParams[] | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.H256][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[v1.NetworkId, v1.H256][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.H256): Promise<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.H256): AsyncIterable<[k: [v1.NetworkId, v1.H256], v: (v1.SignatureParams[] | undefined)][]>
}

export const accountRequests =  {
    /**
     *  Requests made by an account.
     */
    v1: new StorageType('EthBridge.AccountRequests', 'Default', [v1.AccountId], sts.array(() => sts.tuple(() => [v1.NetworkId, v1.H256]))) as AccountRequestsV1,
}

/**
 *  Requests made by an account.
 */
export interface AccountRequestsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.NetworkId, v1.H256][]
    get(block: Block, key: v1.AccountId): Promise<([v1.NetworkId, v1.H256][] | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<([v1.NetworkId, v1.H256][] | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: ([v1.NetworkId, v1.H256][] | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: ([v1.NetworkId, v1.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: ([v1.NetworkId, v1.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: ([v1.NetworkId, v1.H256][] | undefined)][]>
}

export const registeredAsset =  {
    /**
     *  Registered asset kind.
     */
    v1: new StorageType('EthBridge.RegisteredAsset', 'Optional', [v1.NetworkId, v1.AssetId], v1.AssetKind) as RegisteredAssetV1,
    /**
     *  Registered asset kind.
     */
    v42: new StorageType('EthBridge.RegisteredAsset', 'Optional', [sts.number(), v42.AssetId32], v42.AssetKind) as RegisteredAssetV42,
}

/**
 *  Registered asset kind.
 */
export interface RegisteredAssetV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<(v1.AssetKind | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.AssetId][]): Promise<(v1.AssetKind | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.AssetKind | undefined)][]>
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
    v1: new StorageType('EthBridge.SidechainAssetPrecision', 'Default', [v1.NetworkId, v1.AssetId], v1.BalancePrecision) as SidechainAssetPrecisionV1,
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
export interface SidechainAssetPrecisionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BalancePrecision
    get(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<(v1.BalancePrecision | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.AssetId][]): Promise<(v1.BalancePrecision | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.BalancePrecision | undefined)][]>
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
    v1: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [v1.NetworkId, v1.Address], v1.AssetId) as RegisteredSidechainAssetV1,
    /**
     *  Registered token `AssetId` on Thischain.
     */
    v42: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [sts.number(), v42.H160], v42.AssetId32) as RegisteredSidechainAssetV42,
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface RegisteredSidechainAssetV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<(v1.AssetId | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.Address][]): Promise<(v1.AssetId | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.Address][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.Address][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.Address): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.Address): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AssetId | undefined)][]>
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
    v1: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [v1.NetworkId, v1.AssetId], v1.Address) as RegisteredSidechainTokenV1,
    /**
     *  Registered asset address on Sidechain.
     */
    v42: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [sts.number(), v42.AssetId32], v42.H160) as RegisteredSidechainTokenV42,
}

/**
 *  Registered asset address on Sidechain.
 */
export interface RegisteredSidechainTokenV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<(v1.Address | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.AssetId][]): Promise<(v1.Address | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[v1.NetworkId, v1.AssetId][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.AssetId): Promise<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AssetId): AsyncIterable<[k: [v1.NetworkId, v1.AssetId], v: (v1.Address | undefined)][]>
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
    v1: new StorageType('EthBridge.Peers', 'Default', [v1.NetworkId], sts.array(() => v1.AccountId)) as PeersV1,
}

/**
 *  Network peers set.
 */
export interface PeersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId[]
    get(block: Block, key: v1.NetworkId): Promise<(v1.AccountId[] | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId[] | undefined)][]>
}

export const pendingPeer =  {
    /**
     *  Network pending (being added/removed) peer.
     */
    v1: new StorageType('EthBridge.PendingPeer', 'Optional', [v1.NetworkId], v1.AccountId) as PendingPeerV1,
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface PendingPeerV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.NetworkId): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
}

export const pendingEthPeersSync =  {
    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    v1: new StorageType('EthBridge.PendingEthPeersSync', 'Default', [], v1.EthPeersSync) as PendingEthPeersSyncV1,
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface PendingEthPeersSyncV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.EthPeersSync
    get(block: Block): Promise<(v1.EthPeersSync | undefined)>
}

export const peerAccountId =  {
    /**
     *  Peer account ID on Thischain.
     */
    v1: new StorageType('EthBridge.PeerAccountId', 'Default', [v1.NetworkId, v1.Address], v1.AccountId) as PeerAccountIdV1,
    /**
     *  Peer account ID on Thischain.
     */
    v42: new StorageType('EthBridge.PeerAccountId', 'Optional', [sts.number(), v42.H160], v42.AccountId32) as PeerAccountIdV42,
}

/**
 *  Peer account ID on Thischain.
 */
export interface PeerAccountIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.Address][]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.Address][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.Address][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.Address): AsyncIterable<[v1.NetworkId, v1.Address][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.Address): Promise<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.Address): AsyncIterable<[k: [v1.NetworkId, v1.Address], v: (v1.AccountId | undefined)][]>
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
    v1: new StorageType('EthBridge.PeerAddress', 'Default', [v1.NetworkId, v1.AccountId], v1.Address) as PeerAddressV1,
}

/**
 *  Peer address on Sidechain.
 */
export interface PeerAddressV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Address
    get(block: Block, key1: v1.NetworkId, key2: v1.AccountId): Promise<(v1.Address | undefined)>
    getMany(block: Block, keys: [v1.NetworkId, v1.AccountId][]): Promise<(v1.Address | undefined)[]>
    getKeys(block: Block): Promise<[v1.NetworkId, v1.AccountId][]>
    getKeys(block: Block, key1: v1.NetworkId): Promise<[v1.NetworkId, v1.AccountId][]>
    getKeys(block: Block, key1: v1.NetworkId, key2: v1.AccountId): Promise<[v1.NetworkId, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.NetworkId, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[v1.NetworkId, v1.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AccountId): AsyncIterable<[v1.NetworkId, v1.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId): Promise<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
    getPairs(block: Block, key1: v1.NetworkId, key2: v1.AccountId): Promise<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId): AsyncIterable<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.NetworkId, key2: v1.AccountId): AsyncIterable<[k: [v1.NetworkId, v1.AccountId], v: (v1.Address | undefined)][]>
}

export const bridgeAccount =  {
    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    v1: new StorageType('EthBridge.BridgeAccount', 'Optional', [v1.NetworkId], v1.AccountId) as BridgeAccountV1,
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface BridgeAccountV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.NetworkId): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.AccountId | undefined)][]>
}

export const authorityAccount =  {
    /**
     *  Thischain authority account.
     */
    v1: new StorageType('EthBridge.AuthorityAccount', 'Default', [], v1.AccountId) as AuthorityAccountV1,
    /**
     *  Thischain authority account.
     */
    v42: new StorageType('EthBridge.AuthorityAccount', 'Optional', [], v42.AccountId32) as AuthorityAccountV42,
}

/**
 *  Thischain authority account.
 */
export interface AuthorityAccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block): Promise<(v1.AccountId | undefined)>
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
    v1: new StorageType('EthBridge.BridgeStatuses', 'Optional', [v1.NetworkId], v1.BridgeStatus) as BridgeStatusesV1,
}

/**
 *  Bridge status.
 */
export interface BridgeStatusesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.NetworkId): Promise<(v1.BridgeStatus | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.BridgeStatus | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.BridgeStatus | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.BridgeStatus | undefined)][]>
}

export const bridgeContractAddress =  {
    /**
     *  Smart-contract address on Sidechain.
     */
    v1: new StorageType('EthBridge.BridgeContractAddress', 'Default', [v1.NetworkId], v1.Address) as BridgeContractAddressV1,
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface BridgeContractAddressV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Address
    get(block: Block, key: v1.NetworkId): Promise<(v1.Address | undefined)>
    getMany(block: Block, keys: v1.NetworkId[]): Promise<(v1.Address | undefined)[]>
    getKeys(block: Block): Promise<v1.NetworkId[]>
    getKeys(block: Block, key: v1.NetworkId): Promise<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.NetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<v1.NetworkId[]>
    getPairs(block: Block): Promise<[k: v1.NetworkId, v: (v1.Address | undefined)][]>
    getPairs(block: Block, key: v1.NetworkId): Promise<[k: v1.NetworkId, v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.NetworkId, v: (v1.Address | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.NetworkId): AsyncIterable<[k: v1.NetworkId, v: (v1.Address | undefined)][]>
}

export const xorMasterContractAddress =  {
    /**
     *  Sora XOR master contract address.
     */
    v1: new StorageType('EthBridge.XorMasterContractAddress', 'Default', [], v1.Address) as XorMasterContractAddressV1,
}

/**
 *  Sora XOR master contract address.
 */
export interface XorMasterContractAddressV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Address
    get(block: Block): Promise<(v1.Address | undefined)>
}

export const valMasterContractAddress =  {
    /**
     *  Sora VAL master contract address.
     */
    v1: new StorageType('EthBridge.ValMasterContractAddress', 'Default', [], v1.Address) as ValMasterContractAddressV1,
}

/**
 *  Sora VAL master contract address.
 */
export interface ValMasterContractAddressV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Address
    get(block: Block): Promise<(v1.Address | undefined)>
}

export const nextNetworkId =  {
    /**
     *  Next Network ID counter.
     */
    v1: new StorageType('EthBridge.NextNetworkId', 'Default', [], v1.NetworkId) as NextNetworkIdV1,
}

/**
 *  Next Network ID counter.
 */
export interface NextNetworkIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.NetworkId
    get(block: Block): Promise<(v1.NetworkId | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Should be used in conjunction with `on_runtime_upgrade` to ensure an upgrade is executed
     *  once, even if the code is not removed in time.
     */
    v3: new StorageType('EthBridge.PalletStorageVersion', 'Default', [], v3.StorageVersion) as PalletStorageVersionV3,
}

/**
 *  Should be used in conjunction with `on_runtime_upgrade` to ensure an upgrade is executed
 *  once, even if the code is not removed in time.
 */
export interface PalletStorageVersionV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v3.StorageVersion
    get(block: Block): Promise<(v3.StorageVersion | undefined)>
}

export const migratingRequests =  {
    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    v19: new StorageType('EthBridge.MigratingRequests', 'Default', [], sts.array(() => v19.H256)) as MigratingRequestsV19,
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface MigratingRequestsV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.H256[]
    get(block: Block): Promise<(v19.H256[] | undefined)>
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
