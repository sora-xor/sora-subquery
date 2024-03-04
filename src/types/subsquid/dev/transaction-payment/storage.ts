import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const nextFeeMultiplier =  {
    v70: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v70.FixedU128) as NextFeeMultiplierV70,
}

export interface NextFeeMultiplierV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedU128
    get(block: Block): Promise<(v70.FixedU128 | undefined)>
}

export const storageVersion =  {
    v70: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v70.Releases) as StorageVersionV70,
}

export interface StorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Releases
    get(block: Block): Promise<(v70.Releases | undefined)>
}
