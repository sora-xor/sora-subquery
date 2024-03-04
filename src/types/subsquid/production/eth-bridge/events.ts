import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v53 from '../v53'

export const requestRegistered =  {
    name: 'EthBridge.RequestRegistered',
    /**
     *  New request has been registered. [Request Hash]
     */
    v1: new EventType(
        'EthBridge.RequestRegistered',
        v1.H256
    ),
}

export const approvalsCollected =  {
    name: 'EthBridge.ApprovalsCollected',
    /**
     *  The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    v1: new EventType(
        'EthBridge.ApprovalsCollected',
        v1.H256
    ),
}

export const requestFinalizationFailed =  {
    name: 'EthBridge.RequestFinalizationFailed',
    /**
     *  The request finalization has been failed. [Request Hash]
     */
    v1: new EventType(
        'EthBridge.RequestFinalizationFailed',
        v1.H256
    ),
}

export const incomingRequestFinalizationFailed =  {
    name: 'EthBridge.IncomingRequestFinalizationFailed',
    /**
     *  The incoming request finalization has been failed. [Request Hash]
     */
    v1: new EventType(
        'EthBridge.IncomingRequestFinalizationFailed',
        v1.H256
    ),
}

export const incomingRequestFinalized =  {
    name: 'EthBridge.IncomingRequestFinalized',
    /**
     *  The incoming request has been finalized. [Request Hash]
     */
    v1: new EventType(
        'EthBridge.IncomingRequestFinalized',
        v1.H256
    ),
}

export const requestAborted =  {
    name: 'EthBridge.RequestAborted',
    /**
     *  The request was aborted and cancelled. [Request Hash]
     */
    v1: new EventType(
        'EthBridge.RequestAborted',
        v1.H256
    ),
}

export const cancellationFailed =  {
    name: 'EthBridge.CancellationFailed',
    /**
     *  The request wasn't finalized nor cancelled. [Request Hash]
     */
    v3: new EventType(
        'EthBridge.CancellationFailed',
        v3.H256
    ),
}

export const registerRequestFailed =  {
    name: 'EthBridge.RegisterRequestFailed',
    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    v53: new EventType(
        'EthBridge.RegisterRequestFailed',
        sts.tuple([v53.H256, v53.DispatchError])
    ),
}
