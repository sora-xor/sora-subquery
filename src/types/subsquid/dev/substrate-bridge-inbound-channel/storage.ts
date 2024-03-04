import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const channelNonces =  {
    v70: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v70.SubNetworkId], sts.bigint()) as ChannelNoncesV70,
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
