import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const burned =  {
    name: 'ERC20App.Burned',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v70: new EventType(
        'ERC20App.Burned',
        sts.tuple([sts.bigint(), v70.AssetId32, v70.AccountId32, v70.H160, sts.bigint()])
    ),
}

export const minted =  {
    name: 'ERC20App.Minted',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v70: new EventType(
        'ERC20App.Minted',
        sts.tuple([sts.bigint(), v70.AssetId32, v70.H160, v70.AccountId32, sts.bigint()])
    ),
}

export const refunded =  {
    name: 'ERC20App.Refunded',
    /**
     * [network_id, sender, asset_id, amount]
     */
    v70: new EventType(
        'ERC20App.Refunded',
        sts.tuple([sts.bigint(), v70.AccountId32, v70.AssetId32, sts.bigint()])
    ),
}
