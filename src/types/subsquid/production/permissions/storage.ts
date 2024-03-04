import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const owners =  {
    v1: new StorageType('Permissions.Owners', 'Default', [v1.PermissionId, v1.Scope], sts.array(() => v1.OwnerId)) as OwnersV1,
}

export interface OwnersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.OwnerId[]
    get(block: Block, key1: v1.PermissionId, key2: v1.Scope): Promise<(v1.OwnerId[] | undefined)>
    getMany(block: Block, keys: [v1.PermissionId, v1.Scope][]): Promise<(v1.OwnerId[] | undefined)[]>
}

export const modes =  {
    v1: new StorageType('Permissions.Modes', 'Default', [v1.PermissionId], v1.Mode) as ModesV1,
}

export interface ModesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Mode
    get(block: Block, key: v1.PermissionId): Promise<(v1.Mode | undefined)>
    getMany(block: Block, keys: v1.PermissionId[]): Promise<(v1.Mode | undefined)[]>
}

export const permissions =  {
    v1: new StorageType('Permissions.Permissions', 'Default', [v1.HolderId, v1.Scope], sts.array(() => v1.PermissionId)) as PermissionsV1,
}

export interface PermissionsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.PermissionId[]
    get(block: Block, key1: v1.HolderId, key2: v1.Scope): Promise<(v1.PermissionId[] | undefined)>
    getMany(block: Block, keys: [v1.HolderId, v1.Scope][]): Promise<(v1.PermissionId[] | undefined)[]>
}
