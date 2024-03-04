import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const registerNetwork =  {
    name: 'BridgeDataSigner.register_network',
    v70: new CallType(
        'BridgeDataSigner.register_network',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const approve =  {
    name: 'BridgeDataSigner.approve',
    v70: new CallType(
        'BridgeDataSigner.approve',
        sts.struct({
            networkId: v70.GenericNetworkId,
            data: v70.H256,
            signature: v70.Signature,
        })
    ),
}

export const addPeer =  {
    name: 'BridgeDataSigner.add_peer',
    v70: new CallType(
        'BridgeDataSigner.add_peer',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const removePeer =  {
    name: 'BridgeDataSigner.remove_peer',
    v70: new CallType(
        'BridgeDataSigner.remove_peer',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const finishRemovePeer =  {
    name: 'BridgeDataSigner.finish_remove_peer',
    v70: new CallType(
        'BridgeDataSigner.finish_remove_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}

export const finishAddPeer =  {
    name: 'BridgeDataSigner.finish_add_peer',
    v70: new CallType(
        'BridgeDataSigner.finish_add_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}
