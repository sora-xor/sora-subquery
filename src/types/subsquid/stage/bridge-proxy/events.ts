import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v54 from '../v54'

export const requestStatusUpdate =  {
    name: 'BridgeProxy.RequestStatusUpdate',
    v54: new EventType(
        'BridgeProxy.RequestStatusUpdate',
        sts.tuple([v54.H256, v54.MessageStatus])
    ),
}

export const refundFailed =  {
    name: 'BridgeProxy.RefundFailed',
    v54: new EventType(
        'BridgeProxy.RefundFailed',
        v54.H256
    ),
}
