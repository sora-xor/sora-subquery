import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const burned =  {
    name: 'ERC20App.Burned',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v52: new EventType(
        'ERC20App.Burned',
        sts.tuple([sts.bigint(), v52.AssetId32, v52.AccountId32, v52.H160, sts.bigint()])
    ),
}

export const minted =  {
    name: 'ERC20App.Minted',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v52: new EventType(
        'ERC20App.Minted',
        sts.tuple([sts.bigint(), v52.AssetId32, v52.H160, v52.AccountId32, sts.bigint()])
    ),
}

export const refunded =  {
    name: 'ERC20App.Refunded',
    /**
     * [network_id, sender, asset_id, amount]
     */
    v52: new EventType(
        'ERC20App.Refunded',
        sts.tuple([sts.bigint(), v52.AccountId32, v52.AssetId32, sts.bigint()])
    ),
}
