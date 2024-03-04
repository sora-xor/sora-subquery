import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v69 from '../v69'

export const enabledSourceTypes =  {
    v33: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v33.LiquiditySourceType)) as EnabledSourceTypesV33,
    v69: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v69.LiquiditySourceType)) as EnabledSourceTypesV69,
}

export interface EnabledSourceTypesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.LiquiditySourceType[]
    get(block: Block): Promise<(v33.LiquiditySourceType[] | undefined)>
}

export interface EnabledSourceTypesV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69.LiquiditySourceType[]
    get(block: Block): Promise<(v69.LiquiditySourceType[] | undefined)>
}
