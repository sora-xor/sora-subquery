import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const newTerm =  {
    name: 'ElectionsPhragmen.NewTerm',
    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    v70: new EventType(
        'ElectionsPhragmen.NewTerm',
        sts.struct({
            newMembers: sts.array(() => sts.tuple(() => [v70.AccountId32, sts.bigint()])),
        })
    ),
}

export const emptyTerm =  {
    name: 'ElectionsPhragmen.EmptyTerm',
    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    v70: new EventType(
        'ElectionsPhragmen.EmptyTerm',
        sts.unit()
    ),
}

export const electionError =  {
    name: 'ElectionsPhragmen.ElectionError',
    /**
     * Internal error happened while trying to perform election.
     */
    v70: new EventType(
        'ElectionsPhragmen.ElectionError',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'ElectionsPhragmen.MemberKicked',
    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    v70: new EventType(
        'ElectionsPhragmen.MemberKicked',
        sts.struct({
            member: v70.AccountId32,
        })
    ),
}

export const renounced =  {
    name: 'ElectionsPhragmen.Renounced',
    /**
     * Someone has renounced their candidacy.
     */
    v70: new EventType(
        'ElectionsPhragmen.Renounced',
        sts.struct({
            candidate: v70.AccountId32,
        })
    ),
}

export const candidateSlashed =  {
    name: 'ElectionsPhragmen.CandidateSlashed',
    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    v70: new EventType(
        'ElectionsPhragmen.CandidateSlashed',
        sts.struct({
            candidate: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const seatHolderSlashed =  {
    name: 'ElectionsPhragmen.SeatHolderSlashed',
    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    v70: new EventType(
        'ElectionsPhragmen.SeatHolderSlashed',
        sts.struct({
            seatHolder: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
