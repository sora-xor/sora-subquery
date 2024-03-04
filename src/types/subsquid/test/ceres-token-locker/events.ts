import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const locked =  {
    name: 'CeresTokenLocker.Locked',
    /**
     *  Funds Locked [who, amount, asset]
     */
    v33: new EventType(
        'CeresTokenLocker.Locked',
        sts.tuple([v33.AccountId, v33.Balance, v33.AssetIdOf])
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
    v33: new EventType(
        'CeresTokenLocker.Withdrawn',
        sts.tuple([v33.AccountId, v33.Balance, v33.AssetIdOf])
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
    v33: new EventType(
        'CeresTokenLocker.FeeChanged',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
}
