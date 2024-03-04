import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v70: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v70.AuxiliaryDigestItem)) as LatestDigestV70,
}

/**
 *  Latest digest
 */
export interface LatestDigestV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AuxiliaryDigestItem[] | undefined)>
}
