import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const burn =  {
    name: 'EvmBridgeProxy.burn',
    v52: new CallType(
        'EvmBridgeProxy.burn',
        sts.struct({
            networkId: v52.GenericNetworkId,
            assetId: v52.AssetId32,
            recipient: v52.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}
