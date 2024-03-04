import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    v1: new EventType(
        'Utility.BatchInterrupted',
        sts.tuple([sts.number(), v1.DispatchError])
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v42: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v42.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v53: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v53.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     *  Batch of dispatches completed fully with no error.
     */
    v1: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    v42: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    v42: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v42: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v42.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v53: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v53.DispatchError,
        })
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    v42: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v53: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v53.DispatchError),
        })
    ),
}
