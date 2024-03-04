import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v64 from '../v64'

export const requestStatusUpdate =  {
    name: 'BridgeProxy.RequestStatusUpdate',
    v64: new EventType(
        'BridgeProxy.RequestStatusUpdate',
        sts.tuple([v64.H256, v64.MessageStatus])
    ),
}

export const refundFailed =  {
    name: 'BridgeProxy.RefundFailed',
    v64: new EventType(
        'BridgeProxy.RefundFailed',
        v64.H256
    ),
}
