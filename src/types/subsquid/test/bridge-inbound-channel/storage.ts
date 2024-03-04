import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const inboundChannelAddresses =  {
    /**
     *  InboundChannel contract address on the ethereum side
     */
    v52: new StorageType('BridgeInboundChannel.InboundChannelAddresses', 'Optional', [sts.bigint()], v52.H160) as InboundChannelAddressesV52,
}

/**
 *  InboundChannel contract address on the ethereum side
 */
export interface InboundChannelAddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.H160 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.H160 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
}

export const inboundChannelNonces =  {
    v52: new StorageType('BridgeInboundChannel.InboundChannelNonces', 'Default', [sts.bigint()], sts.bigint()) as InboundChannelNoncesV52,
}

export interface InboundChannelNoncesV52  {
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

export const channelAddresses =  {
    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    v52: new StorageType('BridgeInboundChannel.ChannelAddresses', 'Optional', [sts.bigint()], v52.H160) as ChannelAddressesV52,
}

/**
 *  Source channel (OutboundChannel contract) on the ethereum side
 */
export interface ChannelAddressesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.H160 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.H160 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.H160 | undefined)][]>
}

export const channelNonces =  {
    v52: new StorageType('BridgeInboundChannel.ChannelNonces', 'Default', [sts.bigint()], sts.bigint()) as ChannelNoncesV52,
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

export const rewardFraction =  {
    v52: new StorageType('BridgeInboundChannel.RewardFraction', 'Default', [], v52.Perbill) as RewardFractionV52,
}

export interface RewardFractionV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.Perbill
    get(block: Block): Promise<(v52.Perbill | undefined)>
}
