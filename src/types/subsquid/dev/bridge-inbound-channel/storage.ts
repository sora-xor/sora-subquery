import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const inboundChannelAddresses =  {
    /**
     *  InboundChannel contract address on the ethereum side
     */
    v70: new StorageType('BridgeInboundChannel.InboundChannelAddresses', 'Optional', [sts.bigint()], v70.H160) as InboundChannelAddressesV70,
}

/**
 *  InboundChannel contract address on the ethereum side
 */
export interface InboundChannelAddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.H160 | undefined)][]>
}

export const inboundChannelNonces =  {
    v70: new StorageType('BridgeInboundChannel.InboundChannelNonces', 'Default', [sts.bigint()], sts.bigint()) as InboundChannelNoncesV70,
}

export interface InboundChannelNoncesV70  {
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
    v70: new StorageType('BridgeInboundChannel.ChannelAddresses', 'Optional', [sts.bigint()], v70.H160) as ChannelAddressesV70,
}

/**
 *  Source channel (OutboundChannel contract) on the ethereum side
 */
export interface ChannelAddressesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.H160 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.H160 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.H160 | undefined)][]>
}

export const channelNonces =  {
    v70: new StorageType('BridgeInboundChannel.ChannelNonces', 'Default', [sts.bigint()], sts.bigint()) as ChannelNoncesV70,
}

export interface ChannelNoncesV70  {
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
    v70: new StorageType('BridgeInboundChannel.RewardFraction', 'Default', [], v70.Perbill) as RewardFractionV70,
}

export interface RewardFractionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Perbill
    get(block: Block): Promise<(v70.Perbill | undefined)>
}
