import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const messageAccepted =  {
    name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
    v70: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v70.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}
