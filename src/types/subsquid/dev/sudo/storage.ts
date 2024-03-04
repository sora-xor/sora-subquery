import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v70: new StorageType('Sudo.Key', 'Optional', [], v70.AccountId32) as KeyV70,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
