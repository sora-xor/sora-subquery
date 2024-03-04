import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'
import * as v37 from '../v37'

export const xorToVal =  {
    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    v7: new StorageType('XorFee.XorToVal', 'Default', [], v7.Balance) as XorToValV7,
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorToValV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.Balance
    get(block: Block): Promise<(v7.Balance | undefined)>
}

export const multiplier =  {
    v37: new StorageType('XorFee.Multiplier', 'Default', [], v37.FixedU128) as MultiplierV37,
}

export interface MultiplierV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.FixedU128
    get(block: Block): Promise<(v37.FixedU128 | undefined)>
}
