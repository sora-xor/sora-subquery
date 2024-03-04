import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v70: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v70.H256)) as RandomMaterialV70,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block): Promise<(v70.H256[] | undefined)>
}
