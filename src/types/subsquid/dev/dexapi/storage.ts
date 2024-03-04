import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enabledSourceTypes =  {
    v70: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v70.LiquiditySourceType)) as EnabledSourceTypesV70,
}

export interface EnabledSourceTypesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.LiquiditySourceType[]
    get(block: Block): Promise<(v70.LiquiditySourceType[] | undefined)>
}
