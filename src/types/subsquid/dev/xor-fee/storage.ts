import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const xorToVal =  {
    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    v70: new StorageType('XorFee.XorToVal', 'Default', [], sts.bigint()) as XorToValV70,
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorToValV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const multiplier =  {
    v70: new StorageType('XorFee.Multiplier', 'Default', [], v70.FixedU128) as MultiplierV70,
}

export interface MultiplierV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.FixedU128
    get(block: Block): Promise<(v70.FixedU128 | undefined)>
}
