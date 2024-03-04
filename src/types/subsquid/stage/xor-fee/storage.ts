import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'

export const xorToVal =  {
    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    v33: new StorageType('XorFee.XorToVal', 'Default', [], v33.Balance) as XorToValV33,
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorToValV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const multiplier =  {
    v37: new StorageType('XorFee.Multiplier', 'Default', [], v37.FixedU128) as MultiplierV37,
}

export interface MultiplierV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.FixedU128
    get(block: Block): Promise<(v37.FixedU128 | undefined)>
}
