import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v1: new StorageType('Instance1Membership.Members', 'Default', [], sts.array(() => v1.AccountId)) as MembersV1,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId[]
    get(block: Block): Promise<(v1.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v1: new StorageType('Instance1Membership.Prime', 'Optional', [], v1.AccountId) as PrimeV1,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId | undefined)>
}
