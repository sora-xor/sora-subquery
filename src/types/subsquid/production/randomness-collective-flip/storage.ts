import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v1: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v1.Hash)) as RandomMaterialV1,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Hash[]
    get(block: Block): Promise<(v1.Hash[] | undefined)>
}
