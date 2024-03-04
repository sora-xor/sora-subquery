import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v65 from '../v65'
import * as v70 from '../v70'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v64: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV64,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v64: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v64.SubNetworkId], sts.array(() => v64.BridgeMessage)) as MessageQueuesV64,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v70: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v70.SubNetworkId], sts.array(() => v70.BridgeMessage)) as MessageQueuesV70,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64.BridgeMessage[]
    get(block: Block, key: v64.SubNetworkId): Promise<(v64.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v64.SubNetworkId[]): Promise<(v64.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v64.SubNetworkId[]>
    getKeys(block: Block, key: v64.SubNetworkId): Promise<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<v64.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.SubNetworkId, v: (v64.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v64.SubNetworkId): Promise<[k: v64.SubNetworkId, v: (v64.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.SubNetworkId, v: (v64.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.SubNetworkId): AsyncIterable<[k: v64.SubNetworkId, v: (v64.BridgeMessage[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.BridgeMessage[]
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BridgeMessage[] | undefined)][]>
}

export const channelNonces =  {
    v64: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v64.SubNetworkId], sts.bigint()) as ChannelNoncesV64,
    v70: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
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

export const latestCommitment =  {
    v65: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v65.SubNetworkId], v65.GenericCommitmentWithBlock) as LatestCommitmentV65,
    v70: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v70.SubNetworkId], v70.GenericCommitmentWithBlock) as LatestCommitmentV70,
}

export interface LatestCommitmentV65  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v65.SubNetworkId): Promise<(v65.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v65.SubNetworkId[]): Promise<(v65.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v65.SubNetworkId[]>
    getKeys(block: Block, key: v65.SubNetworkId): Promise<v65.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v65.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v65.SubNetworkId): AsyncIterable<v65.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v65.SubNetworkId, v: (v65.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v65.SubNetworkId): Promise<[k: v65.SubNetworkId, v: (v65.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v65.SubNetworkId, v: (v65.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v65.SubNetworkId): AsyncIterable<[k: v65.SubNetworkId, v: (v65.GenericCommitmentWithBlock | undefined)][]>
}

export interface LatestCommitmentV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.GenericCommitmentWithBlock | undefined)][]>
}
