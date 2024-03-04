import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const messageAccepted =  {
    name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
    v64: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v64.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
    v70: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v70.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}
