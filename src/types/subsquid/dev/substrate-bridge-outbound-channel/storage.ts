import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v70: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV70,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
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
    v70: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
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
    v70: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v70.SubNetworkId], v70.GenericCommitmentWithBlock) as LatestCommitmentV70,
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
