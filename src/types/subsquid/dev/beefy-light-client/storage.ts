import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const latestMmrRoots =  {
    v70: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v70.SubNetworkId], sts.array(() => v70.H256)) as LatestMmrRootsV70,
}

export interface LatestMmrRootsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.H256[] | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.H256[] | undefined)][]>
}

export const latestBeefyBlock =  {
    v70: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v70.SubNetworkId], sts.bigint()) as LatestBeefyBlockV70,
}

export interface LatestBeefyBlockV70  {
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

export const latestRandomSeed =  {
    v70: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v70.SubNetworkId], sts.tuple(() => [v70.H256, sts.number()])) as LatestRandomSeedV70,
}

export interface LatestRandomSeedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.H256, number]
    get(block: Block, key: v70.SubNetworkId): Promise<([v70.H256, number] | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<([v70.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: ([v70.H256, number] | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: ([v70.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: ([v70.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: ([v70.H256, number] | undefined)][]>
}

export const currentValidatorSet =  {
    v70: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v70.SubNetworkId], v70.BeefyAuthoritySet) as CurrentValidatorSetV70,
}

export interface CurrentValidatorSetV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
}

export const nextValidatorSet =  {
    v70: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v70.SubNetworkId], v70.BeefyAuthoritySet) as NextValidatorSetV70,
}

export interface NextValidatorSetV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.SubNetworkId): Promise<(v70.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v70.SubNetworkId[]): Promise<(v70.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v70.SubNetworkId[]>
    getKeys(block: Block, key: v70.SubNetworkId): Promise<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<v70.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v70.SubNetworkId): Promise<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.SubNetworkId): AsyncIterable<[k: v70.SubNetworkId, v: (v70.BeefyAuthoritySet | undefined)][]>
}

export const thisNetworkId =  {
    v70: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v70.SubNetworkId) as ThisNetworkIdV70,
}

export interface ThisNetworkIdV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.SubNetworkId
    get(block: Block): Promise<(v70.SubNetworkId | undefined)>
}
