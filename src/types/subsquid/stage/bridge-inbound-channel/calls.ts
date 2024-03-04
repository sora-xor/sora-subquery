import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v55 from '../v55'

export const submit =  {
    name: 'BridgeInboundChannel.submit',
    v52: new CallType(
        'BridgeInboundChannel.submit',
        sts.struct({
            networkId: sts.bigint(),
            message: v52.Message,
        })
    ),
    v54: new CallType(
        'BridgeInboundChannel.submit',
        sts.struct({
            networkId: sts.bigint(),
            log: v54.Log,
            proof: v54.Proof,
        })
    ),
}

export const messageDispatched =  {
    name: 'BridgeInboundChannel.message_dispatched',
    v52: new CallType(
        'BridgeInboundChannel.message_dispatched',
        sts.struct({
            networkId: sts.bigint(),
            message: v52.Message,
        })
    ),
    v54: new CallType(
        'BridgeInboundChannel.message_dispatched',
        sts.struct({
            networkId: sts.bigint(),
            log: v54.Log,
            proof: v54.Proof,
        })
    ),
}

export const registerChannel =  {
    name: 'BridgeInboundChannel.register_channel',
    v52: new CallType(
        'BridgeInboundChannel.register_channel',
        sts.struct({
            networkId: sts.bigint(),
            inboundChannel: v52.H160,
            outboundChannel: v52.H160,
        })
    ),
}

export const setRewardFraction =  {
    name: 'BridgeInboundChannel.set_reward_fraction',
    v52: new CallType(
        'BridgeInboundChannel.set_reward_fraction',
        sts.struct({
            fraction: v52.Perbill,
        })
    ),
}

export const batchDispatched =  {
    name: 'BridgeInboundChannel.batch_dispatched',
    /**
     * BatchDispatched event from InboundChannel on Ethereum found, the function verifies tx
     * and changes all the batch messages statuses.
     */
    v55: new CallType(
        'BridgeInboundChannel.batch_dispatched',
        sts.struct({
            networkId: sts.bigint(),
            log: v55.Log,
            proof: v55.Proof,
        })
    ),
}
