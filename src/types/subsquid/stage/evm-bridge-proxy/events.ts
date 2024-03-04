import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const requestStatusUpdate =  {
    name: 'EvmBridgeProxy.RequestStatusUpdate',
    v52: new EventType(
        'EvmBridgeProxy.RequestStatusUpdate',
        sts.tuple([v52.H256, v52.MessageStatus])
    ),
}

export const refundFailed =  {
    name: 'EvmBridgeProxy.RefundFailed',
    v52: new EventType(
        'EvmBridgeProxy.RefundFailed',
        v52.H256
    ),
}
