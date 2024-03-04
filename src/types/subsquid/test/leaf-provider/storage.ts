import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v70 from '../v70'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v52: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v52.AuxiliaryDigestItem)) as LatestDigestV52,
    /**
     *  Latest digest
     */
    v54: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v54.AuxiliaryDigestItem)) as LatestDigestV54,
    /**
     *  Latest digest
     */
    v70: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v70.AuxiliaryDigestItem)) as LatestDigestV70,
}

/**
 *  Latest digest
 */
export interface LatestDigestV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v52.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LatestDigestV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v54.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LatestDigestV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AuxiliaryDigestItem[] | undefined)>
}
