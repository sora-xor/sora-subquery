import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const owners =  {
    v33: new StorageType('Permissions.Owners', 'Default', [v33.PermissionId, v33.Scope], sts.array(() => v33.OwnerId)) as OwnersV33,
}

export interface OwnersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.OwnerId[]
    get(block: Block, key1: v33.PermissionId, key2: v33.Scope): Promise<(v33.OwnerId[] | undefined)>
    getMany(block: Block, keys: [v33.PermissionId, v33.Scope][]): Promise<(v33.OwnerId[] | undefined)[]>
}

export const permissions =  {
    v33: new StorageType('Permissions.Permissions', 'Default', [v33.HolderId, v33.Scope], sts.array(() => v33.PermissionId)) as PermissionsV33,
}

export interface PermissionsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.PermissionId[]
    get(block: Block, key1: v33.HolderId, key2: v33.Scope): Promise<(v33.PermissionId[] | undefined)>
    getMany(block: Block, keys: [v33.HolderId, v33.Scope][]): Promise<(v33.PermissionId[] | undefined)[]>
}
