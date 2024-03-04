import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const messageDispatched =  {
    name: 'Dispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v70: new EventType(
        'Dispatch.MessageDispatched',
        sts.tuple([v70.MessageId, sts.result(() => sts.unit(), () => v70.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'Dispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v70: new EventType(
        'Dispatch.MessageRejected',
        v70.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'Dispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v70: new EventType(
        'Dispatch.MessageDecodeFailed',
        v70.MessageId
    ),
}
