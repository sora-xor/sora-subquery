import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const channelNonces =  {
    v64: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v64.SubNetworkId], sts.bigint()) as ChannelNoncesV64,
    v70: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
}

export interface ChannelNoncesV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v64.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v64.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v64.SubNetworkId[]>
    getKeys(block: Block, key: v64.SubNetworkId): Promise<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<v64.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v64.SubNetworkId): Promise<[k: v64.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<[k: v64.SubNetworkId, v: (bigint | undefined)][]>
}

export interface ChannelNoncesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (bigint | undefined)][]>
}
