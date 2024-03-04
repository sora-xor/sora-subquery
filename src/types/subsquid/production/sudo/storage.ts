import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v22: new StorageType('Sudo.Key', 'Default', [], v22.AccountId) as KeyV22,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.AccountId
    get(block: Block): Promise<(v22.AccountId | undefined)>
}
