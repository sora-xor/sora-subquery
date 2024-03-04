import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const reportEquivocation =  {
    name: 'Grandpa.report_equivocation',
    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    v33: new CallType(
        'Grandpa.report_equivocation',
        sts.struct({
            equivocationProof: v33.GrandpaEquivocationProof,
            keyOwnerProof: v33.KeyOwnerProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
    name: 'Grandpa.report_equivocation_unsigned',
    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    v33: new CallType(
        'Grandpa.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v33.GrandpaEquivocationProof,
            keyOwnerProof: v33.KeyOwnerProof,
        })
    ),
}

export const noteStalled =  {
    name: 'Grandpa.note_stalled',
    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    v33: new CallType(
        'Grandpa.note_stalled',
        sts.struct({
            delay: v33.BlockNumber,
            bestFinalizedBlockNumber: v33.BlockNumber,
        })
    ),
}
