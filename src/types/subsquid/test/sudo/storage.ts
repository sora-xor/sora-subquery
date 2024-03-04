import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v33: new StorageType('Sudo.Key', 'Default', [], v33.AccountId) as KeyV33,
    /**
     *  The `AccountId` of the sudo key.
     */
    v42: new StorageType('Sudo.Key', 'Optional', [], v42.AccountId32) as KeyV42,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId
    get(block: Block): Promise<(v33.AccountId | undefined)>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}
