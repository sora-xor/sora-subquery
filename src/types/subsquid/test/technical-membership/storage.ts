import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v33: new StorageType('Instance1Membership.Members', 'Default', [], sts.array(() => v33.AccountId)) as MembersV33,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block): Promise<(v33.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v33: new StorageType('Instance1Membership.Prime', 'Optional', [], v33.AccountId) as PrimeV33,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.AccountId | undefined)>
}
