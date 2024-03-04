import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v70 from '../v70'

export const registerNetwork =  {
    name: 'BridgeDataSigner.register_network',
    v54: new CallType(
        'BridgeDataSigner.register_network',
        sts.struct({
            networkId: v54.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
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
    v54: new CallType(
        'BridgeDataSigner.approve',
        sts.struct({
            networkId: v54.GenericNetworkId,
            data: v54.H256,
            signature: v54.Signature,
        })
    ),
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
    v54: new CallType(
        'BridgeDataSigner.add_peer',
        sts.struct({
            networkId: v54.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
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
    v54: new CallType(
        'BridgeDataSigner.remove_peer',
        sts.struct({
            networkId: v54.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
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
    v54: new CallType(
        'BridgeDataSigner.finish_remove_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}

export const finishAddPeer =  {
    name: 'BridgeDataSigner.finish_add_peer',
    v54: new CallType(
        'BridgeDataSigner.finish_add_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}
