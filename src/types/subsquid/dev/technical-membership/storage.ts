import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v70: new StorageType('TechnicalMembership.Members', 'Default', [], sts.array(() => v70.AccountId32)) as MembersV70,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v70: new StorageType('TechnicalMembership.Prime', 'Optional', [], v70.AccountId32) as PrimeV70,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
