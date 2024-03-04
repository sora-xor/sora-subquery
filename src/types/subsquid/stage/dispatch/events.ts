import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v59 from '../v59'

export const messageDispatched =  {
    name: 'Dispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v52: new EventType(
        'Dispatch.MessageDispatched',
        sts.tuple([v52.MessageId, sts.result(() => sts.unit(), () => v52.DispatchError)])
    ),
    /**
     * Message has been dispatched with given result.
     */
    v54: new EventType(
        'Dispatch.MessageDispatched',
        sts.tuple([v54.MessageId, sts.result(() => sts.unit(), () => v54.DispatchError)])
    ),
    /**
     * Message has been dispatched with given result.
     */
    v59: new EventType(
        'Dispatch.MessageDispatched',
        sts.tuple([v59.MessageId, sts.result(() => sts.unit(), () => v59.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'Dispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v52: new EventType(
        'Dispatch.MessageRejected',
        v52.MessageId
    ),
    /**
     * Message has been rejected
     */
    v54: new EventType(
        'Dispatch.MessageRejected',
        v54.MessageId
    ),
    /**
     * Message has been rejected
     */
    v59: new EventType(
        'Dispatch.MessageRejected',
        v59.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'Dispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v52: new EventType(
        'Dispatch.MessageDecodeFailed',
        v52.MessageId
    ),
    /**
     * We have failed to decode a Call from the message.
     */
    v54: new EventType(
        'Dispatch.MessageDecodeFailed',
        v54.MessageId
    ),
    /**
     * We have failed to decode a Call from the message.
     */
    v59: new EventType(
        'Dispatch.MessageDecodeFailed',
        v59.MessageId
    ),
}
