import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v57 from '../v57'
import * as v65 from '../v65'
import * as v70 from '../v70'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v52: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV52,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v52: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v52.SubNetworkId], sts.array(() => v52.ParachainMessage)) as MessageQueuesV52,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v54: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v54.SubNetworkId], sts.array(() => v54.BridgeMessage)) as MessageQueuesV54,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v57: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v57.SubNetworkId], sts.array(() => v57.BridgeMessage)) as MessageQueuesV57,
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
export interface MessageQueuesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.ParachainMessage[]
    get(block: Block, key: v52.SubNetworkId): Promise<(v52.ParachainMessage[] | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<(v52.ParachainMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: (v52.ParachainMessage[] | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: (v52.ParachainMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: (v52.ParachainMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: (v52.ParachainMessage[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.BridgeMessage[]
    get(block: Block, key: v54.SubNetworkId): Promise<(v54.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v54.SubNetworkId[]): Promise<(v54.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v54.SubNetworkId[]>
    getKeys(block: Block, key: v54.SubNetworkId): Promise<v54.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.SubNetworkId): AsyncIterable<v54.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v54.SubNetworkId, v: (v54.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v54.SubNetworkId): Promise<[k: v54.SubNetworkId, v: (v54.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.SubNetworkId, v: (v54.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.SubNetworkId): AsyncIterable<[k: v54.SubNetworkId, v: (v54.BridgeMessage[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.BridgeMessage[]
    get(block: Block, key: v57.SubNetworkId): Promise<(v57.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v57.SubNetworkId[]): Promise<(v57.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v57.SubNetworkId[]>
    getKeys(block: Block, key: v57.SubNetworkId): Promise<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.SubNetworkId): AsyncIterable<v57.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v57.SubNetworkId, v: (v57.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v57.SubNetworkId): Promise<[k: v57.SubNetworkId, v: (v57.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.SubNetworkId, v: (v57.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.SubNetworkId): AsyncIterable<[k: v57.SubNetworkId, v: (v57.BridgeMessage[] | undefined)][]>
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
    v52: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v52.SubNetworkId], sts.bigint()) as ChannelNoncesV52,
    v70: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
}

export interface ChannelNoncesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v52.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: (bigint | undefined)][]>
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

export const fee =  {
    v52: new StorageType('SubstrateBridgeOutboundChannel.Fee', 'Default', [], sts.bigint()) as FeeV52,
}

export interface FeeV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
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
