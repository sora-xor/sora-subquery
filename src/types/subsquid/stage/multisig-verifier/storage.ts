import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v70 from '../v70'

export const peerKeys =  {
    v54: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v54.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV54,
    v70: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v70.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV70,
}

export interface PeerKeysV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v54.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v54.GenericNetworkId[]>
    getKeys(block: Block, key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export interface PeerKeysV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export const thisNetworkId =  {
    v54: new StorageType('MultisigVerifier.ThisNetworkId', 'Default', [], v54.GenericNetworkId) as ThisNetworkIdV54,
}

export interface ThisNetworkIdV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.GenericNetworkId
    get(block: Block): Promise<(v54.GenericNetworkId | undefined)>
}
