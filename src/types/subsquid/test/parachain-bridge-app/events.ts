import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const burned =  {
    name: 'ParachainBridgeApp.Burned',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v64: new EventType(
        'ParachainBridgeApp.Burned',
        sts.tuple([v64.SubNetworkId, v64.AssetId32, v64.AccountId32, v64.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v70: new EventType(
        'ParachainBridgeApp.Burned',
        sts.tuple([v70.SubNetworkId, v70.AssetId32, v70.AccountId32, v70.VersionedMultiLocation, sts.bigint()])
    ),
}

export const minted =  {
    name: 'ParachainBridgeApp.Minted',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v64: new EventType(
        'ParachainBridgeApp.Minted',
        sts.tuple([v64.SubNetworkId, v64.AssetId32, sts.option(() => v64.VersionedMultiLocation), v64.AccountId32, sts.bigint()])
    ),
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v70: new EventType(
        'ParachainBridgeApp.Minted',
        sts.tuple([v70.SubNetworkId, v70.AssetId32, sts.option(() => v70.VersionedMultiLocation), v70.AccountId32, sts.bigint()])
    ),
}
