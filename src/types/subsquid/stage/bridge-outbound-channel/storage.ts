import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v55 from '../v55'
import * as v57 from '../v57'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v52: new StorageType('BridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV52,
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
    v52: new StorageType('BridgeOutboundChannel.MessageQueues', 'Default', [sts.bigint()], sts.array(() => v52.Type_802)) as MessageQueuesV52,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v55: new StorageType('BridgeOutboundChannel.MessageQueues', 'Default', [sts.bigint()], sts.array(() => v55.Message)) as MessageQueuesV55,
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v57: new StorageType('BridgeOutboundChannel.MessageQueues', 'Default', [sts.bigint()], sts.array(() => v57.Message)) as MessageQueuesV57,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.Type_802[]
    get(block: Block, key: bigint): Promise<(v52.Type_802[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.Type_802[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.Type_802[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.Type_802[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.Type_802[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.Type_802[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV55  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v55.Message[]
    get(block: Block, key: bigint): Promise<(v55.Message[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v55.Message[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v55.Message[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v55.Message[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v55.Message[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v55.Message[] | undefined)][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.Message[]
    get(block: Block, key: bigint): Promise<(v57.Message[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v57.Message[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v57.Message[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v57.Message[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v57.Message[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v57.Message[] | undefined)][]>
}

export const queuesTotalGas =  {
    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    v52: new StorageType('BridgeOutboundChannel.QueuesTotalGas', 'Default', [sts.bigint()], sts.bigint()) as QueuesTotalGasV52,
}

/**
 *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
 */
export interface QueuesTotalGasV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
}

export const channelNonces =  {
    v52: new StorageType('BridgeOutboundChannel.ChannelNonces', 'Default', [sts.bigint()], sts.bigint()) as ChannelNoncesV52,
}

export interface ChannelNoncesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
}

export const fee =  {
    v52: new StorageType('BridgeOutboundChannel.Fee', 'Default', [], sts.bigint()) as FeeV52,
}

export interface FeeV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
