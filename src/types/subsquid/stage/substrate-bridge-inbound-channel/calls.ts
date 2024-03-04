import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v57 from '../v57'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v52: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v52.SubNetworkId,
            message: v52.ProvedSubstrateBridgeMessage,
        })
    ),
    v54: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v54.SubNetworkId,
            messages: sts.array(() => v54.BridgeMessage),
            proof: v54.MultiProof,
        })
    ),
    v57: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v57.SubNetworkId,
            commitment: v57.GenericCommitment,
            proof: v57.MultiProof,
        })
    ),
    v64: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v64.SubNetworkId,
            commitment: v64.GenericCommitment,
            proof: v64.MultiProof,
        })
    ),
    v70: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v70.SubNetworkId,
            commitment: v70.GenericCommitment,
            proof: v70.MultiProof,
        })
    ),
}

export const setRewardFraction =  {
    name: 'SubstrateBridgeInboundChannel.set_reward_fraction',
    v52: new CallType(
        'SubstrateBridgeInboundChannel.set_reward_fraction',
        sts.struct({
            fraction: v52.Perbill,
        })
    ),
}
