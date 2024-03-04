import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const submit =  {
    name: 'BridgeInboundChannel.submit',
    v70: new CallType(
        'BridgeInboundChannel.submit',
        sts.struct({
            networkId: sts.bigint(),
            log: v70.Log,
            proof: v70.Proof,
        })
    ),
}

export const batchDispatched =  {
    name: 'BridgeInboundChannel.batch_dispatched',
    /**
     * BatchDispatched event from InboundChannel on Ethereum found, the function verifies tx
     * and changes all the batch messages statuses.
     */
    v70: new CallType(
        'BridgeInboundChannel.batch_dispatched',
        sts.struct({
            networkId: sts.bigint(),
            log: v70.Log,
            proof: v70.Proof,
        })
    ),
}

export const registerChannel =  {
    name: 'BridgeInboundChannel.register_channel',
    v70: new CallType(
        'BridgeInboundChannel.register_channel',
        sts.struct({
            networkId: sts.bigint(),
            inboundChannel: v70.H160,
            outboundChannel: v70.H160,
        })
    ),
}

export const setRewardFraction =  {
    name: 'BridgeInboundChannel.set_reward_fraction',
    v70: new CallType(
        'BridgeInboundChannel.set_reward_fraction',
        sts.struct({
            fraction: v70.Perbill,
        })
    ),
}
