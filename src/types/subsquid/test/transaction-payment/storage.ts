import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const nextFeeMultiplier =  {
    v33: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v33.Multiplier) as NextFeeMultiplierV33,
}

export interface NextFeeMultiplierV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Multiplier
    get(block: Block): Promise<(v33.Multiplier | undefined)>
}

export const storageVersion =  {
    v33: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v33.Releases) as StorageVersionV33,
    v42: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v42.Type_433) as StorageVersionV42,
}

export interface StorageVersionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Releases
    get(block: Block): Promise<(v33.Releases | undefined)>
}

export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_433
    get(block: Block): Promise<(v42.Type_433 | undefined)>
}
