import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const uncles =  {
    /**
     *  Uncles
     */
    v1: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v1.UncleEntryItem)) as UnclesV1,
    /**
     *  Uncles
     */
    v42: new StorageType('Authorship.Uncles', 'Default', [], sts.array(() => v42.UncleEntryItem)) as UnclesV42,
}

/**
 *  Uncles
 */
export interface UnclesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.UncleEntryItem[]
    get(block: Block): Promise<(v1.UncleEntryItem[] | undefined)>
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
    v1: new StorageType('Authorship.Author', 'Optional', [], v1.AccountId) as AuthorV1,
}

/**
 *  Author of current block.
 */
export interface AuthorV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId | undefined)>
}

export const didSetUncles =  {
    /**
     *  Whether uncles were already set in this block.
     */
    v1: new StorageType('Authorship.DidSetUncles', 'Default', [], sts.boolean()) as DidSetUnclesV1,
}

/**
 *  Whether uncles were already set in this block.
 */
export interface DidSetUnclesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
