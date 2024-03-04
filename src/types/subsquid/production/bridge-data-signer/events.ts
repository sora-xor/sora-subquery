import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const initialized =  {
    name: 'BridgeDataSigner.Initialized',
    v64: new EventType(
        'BridgeDataSigner.Initialized',
        sts.struct({
            networkId: v64.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
    v70: new EventType(
        'BridgeDataSigner.Initialized',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const addedPeer =  {
    name: 'BridgeDataSigner.AddedPeer',
    v64: new EventType(
        'BridgeDataSigner.AddedPeer',
        sts.struct({
            networkId: v64.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
    v70: new EventType(
        'BridgeDataSigner.AddedPeer',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const removedPeer =  {
    name: 'BridgeDataSigner.RemovedPeer',
    v64: new EventType(
        'BridgeDataSigner.RemovedPeer',
        sts.struct({
            networkId: v64.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
    v70: new EventType(
        'BridgeDataSigner.RemovedPeer',
        sts.struct({
            networkId: v70.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const approvalAccepted =  {
    name: 'BridgeDataSigner.ApprovalAccepted',
    v64: new EventType(
        'BridgeDataSigner.ApprovalAccepted',
        sts.struct({
            networkId: v64.GenericNetworkId,
            data: v64.H256,
            signature: v64.Signature,
        })
    ),
    v70: new EventType(
        'BridgeDataSigner.ApprovalAccepted',
        sts.struct({
            networkId: v70.GenericNetworkId,
            data: v70.H256,
            signature: v70.Signature,
        })
    ),
}

export const approved =  {
    name: 'BridgeDataSigner.Approved',
    v64: new EventType(
        'BridgeDataSigner.Approved',
        sts.struct({
            networkId: v64.GenericNetworkId,
            data: v64.H256,
            signatures: sts.array(() => v64.Signature),
        })
    ),
    v70: new EventType(
        'BridgeDataSigner.Approved',
        sts.struct({
            networkId: v70.GenericNetworkId,
            data: v70.H256,
            signatures: sts.array(() => v70.Signature),
        })
    ),
}
