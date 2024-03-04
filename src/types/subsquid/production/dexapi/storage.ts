import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const enabledSourceTypes =  {
    v1: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v1.LiquiditySourceType)) as EnabledSourceTypesV1,
}

export interface EnabledSourceTypesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.LiquiditySourceType[]
    get(block: Block): Promise<(v1.LiquiditySourceType[] | undefined)>
}
