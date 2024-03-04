import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const solutionStored =  {
    name: 'ElectionProviderMultiPhase.SolutionStored',
    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            electionCompute: v42.ElectionCompute,
            prevEjected: sts.boolean(),
        })
    ),
    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    v52: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            compute: v52.ElectionCompute,
            origin: sts.option(() => v52.AccountId32),
            prevEjected: sts.boolean(),
        })
    ),
}

export const electionFinalized =  {
    name: 'ElectionProviderMultiPhase.ElectionFinalized',
    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.struct({
            electionCompute: sts.option(() => v42.ElectionCompute),
        })
    ),
    /**
     * The election has been finalized, with the given computation and score.
     */
    v52: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.struct({
            compute: v52.ElectionCompute,
            score: v52.ElectionScore,
        })
    ),
}

export const rewarded =  {
    name: 'ElectionProviderMultiPhase.Rewarded',
    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.Rewarded',
        sts.struct({
            account: v42.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'ElectionProviderMultiPhase.Slashed',
    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.Slashed',
        sts.struct({
            account: v42.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const signedPhaseStarted =  {
    name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
    /**
     * The signed phase of the given round has started.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.SignedPhaseStarted',
        sts.struct({
            round: sts.number(),
        })
    ),
}

export const unsignedPhaseStarted =  {
    name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
    /**
     * The unsigned phase of the given round has started.
     */
    v42: new EventType(
        'ElectionProviderMultiPhase.UnsignedPhaseStarted',
        sts.struct({
            round: sts.number(),
        })
    ),
}

export const electionFailed =  {
    name: 'ElectionProviderMultiPhase.ElectionFailed',
    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    v52: new EventType(
        'ElectionProviderMultiPhase.ElectionFailed',
        sts.unit()
    ),
}

export const phaseTransitioned =  {
    name: 'ElectionProviderMultiPhase.PhaseTransitioned',
    /**
     * There was a phase transition in a given round.
     */
    v52: new EventType(
        'ElectionProviderMultiPhase.PhaseTransitioned',
        sts.struct({
            from: v52.Phase,
            to: v52.Phase,
            round: sts.number(),
        })
    ),
}
