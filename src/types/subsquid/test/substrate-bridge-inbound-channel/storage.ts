import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v70 from '../v70'

export const channelNonces =  {
    v52: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v52.SubNetworkId], sts.bigint()) as ChannelNoncesV52,
    v70: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
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

export const rewardFraction =  {
    v52: new StorageType('SubstrateBridgeInboundChannel.RewardFraction', 'Default', [], v52.Perbill) as RewardFractionV52,
}

export interface RewardFractionV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.Perbill
    get(block: Block): Promise<(v52.Perbill | undefined)>
}
