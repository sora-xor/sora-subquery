import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const messageAccepted =  {
    name: 'BridgeOutboundChannel.MessageAccepted',
    v52: new EventType(
        'BridgeOutboundChannel.MessageAccepted',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    v55: new EventType(
        'BridgeOutboundChannel.MessageAccepted',
        sts.tuple([sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}
