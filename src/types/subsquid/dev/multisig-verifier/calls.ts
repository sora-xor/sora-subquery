import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const initialize =  {
    name: 'MultisigVerifier.initialize',
    v70: new CallType(
        'MultisigVerifier.initialize',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const addPeer =  {
    name: 'MultisigVerifier.add_peer',
    v70: new CallType(
        'MultisigVerifier.add_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}

export const removePeer =  {
    name: 'MultisigVerifier.remove_peer',
    v70: new CallType(
        'MultisigVerifier.remove_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}
