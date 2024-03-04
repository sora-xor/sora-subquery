import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const locked =  {
    name: 'CeresTokenLocker.Locked',
    /**
     * Funds Locked [who, amount, asset]
     */
    v70: new EventType(
        'CeresTokenLocker.Locked',
        sts.tuple([v70.AccountId32, sts.bigint(), v70.AssetId32])
    ),
}

export const withdrawn =  {
    name: 'CeresTokenLocker.Withdrawn',
    /**
     * Funds Withdrawn [who, amount, asset]
     */
    v70: new EventType(
        'CeresTokenLocker.Withdrawn',
        sts.tuple([v70.AccountId32, sts.bigint(), v70.AssetId32])
    ),
}

export const feeChanged =  {
    name: 'CeresTokenLocker.FeeChanged',
    /**
     * Fee Changed [who, amount]
     */
    v70: new EventType(
        'CeresTokenLocker.FeeChanged',
        sts.tuple([v70.AccountId32, sts.bigint()])
    ),
}
