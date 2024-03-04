import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const author =  {
    /**
     *  Author of current block.
     */
    v70: new StorageType('Authorship.Author', 'Optional', [], v70.AccountId32) as AuthorV70,
}

/**
 *  Author of current block.
 */
export interface AuthorV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
