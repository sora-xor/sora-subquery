import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const requestRegistered =  {
    name: 'EthBridge.RequestRegistered',
    /**
     * New request has been registered. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.RequestRegistered',
        v70.H256
    ),
}

export const approvalsCollected =  {
    name: 'EthBridge.ApprovalsCollected',
    /**
     * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    v70: new EventType(
        'EthBridge.ApprovalsCollected',
        v70.H256
    ),
}

export const requestFinalizationFailed =  {
    name: 'EthBridge.RequestFinalizationFailed',
    /**
     * The request finalization has been failed. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.RequestFinalizationFailed',
        v70.H256
    ),
}

export const incomingRequestFinalizationFailed =  {
    name: 'EthBridge.IncomingRequestFinalizationFailed',
    /**
     * The incoming request finalization has been failed. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.IncomingRequestFinalizationFailed',
        v70.H256
    ),
}

export const incomingRequestFinalized =  {
    name: 'EthBridge.IncomingRequestFinalized',
    /**
     * The incoming request has been finalized. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.IncomingRequestFinalized',
        v70.H256
    ),
}

export const requestAborted =  {
    name: 'EthBridge.RequestAborted',
    /**
     * The request was aborted and cancelled. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.RequestAborted',
        v70.H256
    ),
}

export const cancellationFailed =  {
    name: 'EthBridge.CancellationFailed',
    /**
     * The request wasn't finalized nor cancelled. [Request Hash]
     */
    v70: new EventType(
        'EthBridge.CancellationFailed',
        v70.H256
    ),
}

export const registerRequestFailed =  {
    name: 'EthBridge.RegisterRequestFailed',
    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    v70: new EventType(
        'EthBridge.RegisterRequestFailed',
        sts.tuple([v70.H256, v70.DispatchError])
    ),
}
