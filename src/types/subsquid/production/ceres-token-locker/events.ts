import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v42 from '../v42'

export const locked =  {
    name: 'CeresTokenLocker.Locked',
    /**
     *  Funds Locked [who, amount, asset]
     */
    v26: new EventType(
        'CeresTokenLocker.Locked',
        sts.tuple([v26.AccountId, v26.Balance, v26.AssetIdOf])
    ),
    /**
     * Funds Locked [who, amount, asset]
     */
    v42: new EventType(
        'CeresTokenLocker.Locked',
        sts.tuple([v42.AccountId32, sts.bigint(), v42.AssetId32])
    ),
}

export const withdrawn =  {
    name: 'CeresTokenLocker.Withdrawn',
    /**
     *  Funds Withdrawn [who, amount, asset]
     */
    v26: new EventType(
        'CeresTokenLocker.Withdrawn',
        sts.tuple([v26.AccountId, v26.Balance, v26.AssetIdOf])
    ),
    /**
     * Funds Withdrawn [who, amount, asset]
     */
    v42: new EventType(
        'CeresTokenLocker.Withdrawn',
        sts.tuple([v42.AccountId32, sts.bigint(), v42.AssetId32])
    ),
}

export const feeChanged =  {
    name: 'CeresTokenLocker.FeeChanged',
    /**
     *  Fee Changed [who, amount]
     */
    v26: new EventType(
        'CeresTokenLocker.FeeChanged',
        sts.tuple([v26.AccountId, v26.Balance])
    ),
}
