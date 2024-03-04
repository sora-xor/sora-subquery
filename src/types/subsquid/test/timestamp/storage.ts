import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v33: new StorageType('Timestamp.Now', 'Default', [], v33.Moment) as NowV33,
}

/**
 *  Current time for the current block.
 */
export interface NowV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Moment
    get(block: Block): Promise<(v33.Moment | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    v33: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV33,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
