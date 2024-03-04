import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v70 from '../v70'

export const networkInitialized =  {
    name: 'MultisigVerifier.NetworkInitialized',
    v54: new EventType(
        'MultisigVerifier.NetworkInitialized',
        v54.GenericNetworkId
    ),
    v70: new EventType(
        'MultisigVerifier.NetworkInitialized',
        v70.GenericNetworkId
    ),
}

export const verificationSuccessful =  {
    name: 'MultisigVerifier.VerificationSuccessful',
    v54: new EventType(
        'MultisigVerifier.VerificationSuccessful',
        v54.GenericNetworkId
    ),
    v70: new EventType(
        'MultisigVerifier.VerificationSuccessful',
        v70.GenericNetworkId
    ),
}

export const peerAdded =  {
    name: 'MultisigVerifier.PeerAdded',
    v54: new EventType(
        'MultisigVerifier.PeerAdded',
        sts.bytes()
    ),
}

export const peerRemoved =  {
    name: 'MultisigVerifier.PeerRemoved',
    v54: new EventType(
        'MultisigVerifier.PeerRemoved',
        sts.bytes()
    ),
}
