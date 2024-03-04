import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v70: new StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v70.BeefyAuthoritySet) as BeefyAuthoritiesV70,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.BeefyAuthoritySet
    get(block: Block): Promise<(v70.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v70: new StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], v70.BeefyAuthoritySet) as BeefyNextAuthoritiesV70,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.BeefyAuthoritySet
    get(block: Block): Promise<(v70.BeefyAuthoritySet | undefined)>
}
