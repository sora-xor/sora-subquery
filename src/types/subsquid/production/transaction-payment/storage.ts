import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const nextFeeMultiplier =  {
    v1: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v1.Multiplier) as NextFeeMultiplierV1,
}

export interface NextFeeMultiplierV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Multiplier
    get(block: Block): Promise<(v1.Multiplier | undefined)>
}

export const storageVersion =  {
    v1: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v1.Releases) as StorageVersionV1,
    v42: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v42.Type_178) as StorageVersionV42,
}

export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Releases
    get(block: Block): Promise<(v1.Releases | undefined)>
}

export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_178
    get(block: Block): Promise<(v42.Type_178 | undefined)>
}
