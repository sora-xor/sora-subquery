import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     *  Scheduled some task. \[when, index\]
     */
    v33: new EventType(
        'Scheduler.Scheduled',
        sts.tuple([v33.BlockNumber, sts.number()])
    ),
    /**
     * Scheduled some task.
     */
    v42: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const canceled =  {
    name: 'Scheduler.Canceled',
    /**
     *  Canceled some task. \[when, index\]
     */
    v33: new EventType(
        'Scheduler.Canceled',
        sts.tuple([v33.BlockNumber, sts.number()])
    ),
    /**
     * Canceled some task.
     */
    v42: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v33: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v33.TaskAddress, sts.option(() => sts.bytes()), v33.DispatchResult])
    ),
    /**
     * Dispatched some task.
     */
    v42: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v52: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v52.DispatchError),
        })
    ),
}

export const callLookupFailed =  {
    name: 'Scheduler.CallLookupFailed',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v42: new EventType(
        'Scheduler.CallLookupFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: v42.LookupError,
        })
    ),
}

export const callUnavailable =  {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v52: new EventType(
        'Scheduler.CallUnavailable',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const periodicFailed =  {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    v52: new EventType(
        'Scheduler.PeriodicFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const permanentlyOverweight =  {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    v52: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
