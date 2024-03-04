import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const burned =  {
    name: 'SubstrateBridgeApp.Burned',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v52: new EventType(
        'SubstrateBridgeApp.Burned',
        sts.tuple([v52.SubNetworkId, v52.AssetId32, v52.AccountId32, v52.VersionedMultiLocation, sts.bigint()])
    ),
}

export const minted =  {
    name: 'SubstrateBridgeApp.Minted',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v52: new EventType(
        'SubstrateBridgeApp.Minted',
        sts.tuple([v52.SubNetworkId, v52.AssetId32, sts.option(() => v52.VersionedMultiLocation), v52.AccountId32, sts.bigint()])
    ),
}
