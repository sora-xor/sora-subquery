import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v70: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v70.SubNetworkId,
            commitment: v70.GenericCommitment,
            proof: v70.MultiProof,
        })
    ),
}
