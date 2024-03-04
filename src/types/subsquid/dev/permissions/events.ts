import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const permissionGranted =  {
    name: 'Permissions.PermissionGranted',
    /**
     * Permission was granted to a holder. [permission, who]
     */
    v70: new EventType(
        'Permissions.PermissionGranted',
        sts.tuple([sts.number(), v70.AccountId32])
    ),
}

export const permissionTransfered =  {
    name: 'Permissions.PermissionTransfered',
    /**
     * Permission was transfered to a new owner. [permission, who]
     */
    v70: new EventType(
        'Permissions.PermissionTransfered',
        sts.tuple([sts.number(), v70.AccountId32])
    ),
}

export const permissionCreated =  {
    name: 'Permissions.PermissionCreated',
    /**
     * Permission was created with an owner. [permission, who]
     */
    v70: new EventType(
        'Permissions.PermissionCreated',
        sts.tuple([sts.number(), v70.AccountId32])
    ),
}

export const permissionAssigned =  {
    name: 'Permissions.PermissionAssigned',
    /**
     * Permission was assigned to the account in the scope. [permission, who]
     */
    v70: new EventType(
        'Permissions.PermissionAssigned',
        sts.tuple([sts.number(), v70.AccountId32])
    ),
}
