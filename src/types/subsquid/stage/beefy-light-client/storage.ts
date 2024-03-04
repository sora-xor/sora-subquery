import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const latestMmrRoots =  {
    v52: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v52.SubNetworkId], sts.array(() => v52.H256)) as LatestMmrRootsV52,
}

export interface LatestMmrRootsV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.H256[]
    get(block: Block, key: v52.SubNetworkId): Promise<(v52.H256[] | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<(v52.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: (v52.H256[] | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: (v52.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: (v52.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: (v52.H256[] | undefined)][]>
}

export const latestBeefyBlock =  {
    v52: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v52.SubNetworkId], sts.bigint()) as LatestBeefyBlockV52,
}

export interface LatestBeefyBlockV52  {
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

export const latestRandomSeed =  {
    v52: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v52.SubNetworkId], sts.tuple(() => [v52.H256, sts.number()])) as LatestRandomSeedV52,
}

export interface LatestRandomSeedV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v52.H256, number]
    get(block: Block, key: v52.SubNetworkId): Promise<([v52.H256, number] | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<([v52.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: ([v52.H256, number] | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: ([v52.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: ([v52.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: ([v52.H256, number] | undefined)][]>
}

export const currentValidatorSet =  {
    v52: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v52.SubNetworkId], v52.BeefyAuthoritySet) as CurrentValidatorSetV52,
}

export interface CurrentValidatorSetV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v52.SubNetworkId): Promise<(v52.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<(v52.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
}

export const nextValidatorSet =  {
    v52: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v52.SubNetworkId], v52.BeefyAuthoritySet) as NextValidatorSetV52,
}

export interface NextValidatorSetV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v52.SubNetworkId): Promise<(v52.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v52.SubNetworkId[]): Promise<(v52.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v52.SubNetworkId[]>
    getKeys(block: Block, key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: (v52.BeefyAuthoritySet | undefined)][]>
}

export const thisNetworkId =  {
    v52: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v52.SubNetworkId) as ThisNetworkIdV52,
}

export interface ThisNetworkIdV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.SubNetworkId
    get(block: Block): Promise<(v52.SubNetworkId | undefined)>
}
