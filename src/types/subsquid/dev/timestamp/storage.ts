import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v70: new StorageType('Timestamp.Now', 'Default', [], sts.bigint()) as NowV70,
}

/**
 *  Current time for the current block.
 */
export interface NowV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    v70: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV70,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
