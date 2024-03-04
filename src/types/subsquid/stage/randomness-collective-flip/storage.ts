import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v33: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v33.Hash)) as RandomMaterialV33,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Hash[]
    get(block: Block): Promise<(v33.Hash[] | undefined)>
}
