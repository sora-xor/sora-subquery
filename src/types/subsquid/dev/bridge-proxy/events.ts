import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const requestStatusUpdate =  {
    name: 'BridgeProxy.RequestStatusUpdate',
    v70: new EventType(
        'BridgeProxy.RequestStatusUpdate',
        sts.tuple([v70.H256, v70.MessageStatus])
    ),
}

export const refundFailed =  {
    name: 'BridgeProxy.RefundFailed',
    v70: new EventType(
        'BridgeProxy.RefundFailed',
        v70.H256
    ),
}
