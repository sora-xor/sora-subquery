import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const owners =  {
    v70: new StorageType('Permissions.Owners', 'Default', [sts.number(), v70.Scope], sts.array(() => v70.AccountId32)) as OwnersV70,
}

export interface OwnersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block, key1: number, key2: v70.Scope): Promise<(v70.AccountId32[] | undefined)>
    getMany(block: Block, keys: [number, v70.Scope][]): Promise<(v70.AccountId32[] | undefined)[]>
}

export const permissions =  {
    v70: new StorageType('Permissions.Permissions', 'Default', [v70.AccountId32, v70.Scope], sts.array(() => sts.number())) as PermissionsV70,
}

export interface PermissionsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block, key1: v70.AccountId32, key2: v70.Scope): Promise<(number[] | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.Scope][]): Promise<(number[] | undefined)[]>
}
