import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const uncles =  {
    /**
     *  Uncles
     */
    v33: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v33.UncleEntryItem)) as UnclesV33,
    /**
     *  Uncles
     */
    v42: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v42.UncleEntryItem)) as UnclesV42,
}

/**
 *  Uncles
 */
export interface UnclesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.UncleEntryItem[]
    get(block: Block): Promise<(v33.UncleEntryItem[] | undefined)>
}

/**
 *  Uncles
 */
export interface UnclesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.UncleEntryItem[]
    get(block: Block): Promise<(v42.UncleEntryItem[] | undefined)>
}

export const author =  {
    /**
     *  Author of current block.
     */
    v33: new StorageType('Authorship.Author', 'Optional', [], v33.AccountId) as AuthorV33,
}

/**
 *  Author of current block.
 */
export interface AuthorV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.AccountId | undefined)>
}

export const didSetUncles =  {
    /**
     *  Whether uncles were already set in this block.
     */
    v33: new StorageType('Authorship.DidSetUncles', 'Default', [], sts.boolean()) as DidSetUnclesV33,
}

/**
 *  Whether uncles were already set in this block.
 */
export interface DidSetUnclesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
