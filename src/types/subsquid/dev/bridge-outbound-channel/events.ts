import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const messageAccepted =  {
    name: 'BridgeOutboundChannel.MessageAccepted',
    v70: new EventType(
        'BridgeOutboundChannel.MessageAccepted',
        sts.tuple([sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}
