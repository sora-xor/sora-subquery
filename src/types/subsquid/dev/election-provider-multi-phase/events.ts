import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const solutionStored =  {
    name: 'ElectionProviderMultiPhase.SolutionStored',
    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    v70: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            compute: v70.ElectionCompute,
            origin: sts.option(() => v70.AccountId32),
            prevEjected: sts.boolean(),
        })
    ),
}

export const electionFinalized =  {
    name: 'ElectionProviderMultiPhase.ElectionFinalized',
    /**
     * The election has been finalized, with the given computation and score.
     */
    v70: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.struct({
            compute: v70.ElectionCompute,
            score: v70.ElectionScore,
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
    v70: new EventType(
        'ElectionProviderMultiPhase.ElectionFailed',
        sts.unit()
    ),
}

export const rewarded =  {
    name: 'ElectionProviderMultiPhase.Rewarded',
    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    v70: new EventType(
        'ElectionProviderMultiPhase.Rewarded',
        sts.struct({
            account: v70.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'ElectionProviderMultiPhase.Slashed',
    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    v70: new EventType(
        'ElectionProviderMultiPhase.Slashed',
        sts.struct({
            account: v70.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const phaseTransitioned =  {
    name: 'ElectionProviderMultiPhase.PhaseTransitioned',
    /**
     * There was a phase transition in a given round.
     */
    v70: new EventType(
        'ElectionProviderMultiPhase.PhaseTransitioned',
        sts.struct({
            from: v70.Phase,
            to: v70.Phase,
            round: sts.number(),
        })
    ),
}
