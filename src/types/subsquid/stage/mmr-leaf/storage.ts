import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v52: new StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v52.BeefyAuthoritySet) as BeefyAuthoritiesV52,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.BeefyAuthoritySet
    get(block: Block): Promise<(v52.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v52: new StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], v52.BeefyAuthoritySet) as BeefyNextAuthoritiesV52,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.BeefyAuthoritySet
    get(block: Block): Promise<(v52.BeefyAuthoritySet | undefined)>
}
