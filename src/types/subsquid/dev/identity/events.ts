import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const identitySet =  {
    name: 'Identity.IdentitySet',
    /**
     * A name was set or reset (which will remove all judgements).
     */
    v70: new EventType(
        'Identity.IdentitySet',
        sts.struct({
            who: v70.AccountId32,
        })
    ),
}

export const identityCleared =  {
    name: 'Identity.IdentityCleared',
    /**
     * A name was cleared, and the given balance returned.
     */
    v70: new EventType(
        'Identity.IdentityCleared',
        sts.struct({
            who: v70.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const identityKilled =  {
    name: 'Identity.IdentityKilled',
    /**
     * A name was removed and the given balance slashed.
     */
    v70: new EventType(
        'Identity.IdentityKilled',
        sts.struct({
            who: v70.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const judgementRequested =  {
    name: 'Identity.JudgementRequested',
    /**
     * A judgement was asked from a registrar.
     */
    v70: new EventType(
        'Identity.JudgementRequested',
        sts.struct({
            who: v70.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementUnrequested =  {
    name: 'Identity.JudgementUnrequested',
    /**
     * A judgement request was retracted.
     */
    v70: new EventType(
        'Identity.JudgementUnrequested',
        sts.struct({
            who: v70.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementGiven =  {
    name: 'Identity.JudgementGiven',
    /**
     * A judgement was given by a registrar.
     */
    v70: new EventType(
        'Identity.JudgementGiven',
        sts.struct({
            target: v70.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const registrarAdded =  {
    name: 'Identity.RegistrarAdded',
    /**
     * A registrar was added.
     */
    v70: new EventType(
        'Identity.RegistrarAdded',
        sts.struct({
            registrarIndex: sts.number(),
        })
    ),
}

export const subIdentityAdded =  {
    name: 'Identity.SubIdentityAdded',
    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    v70: new EventType(
        'Identity.SubIdentityAdded',
        sts.struct({
            sub: v70.AccountId32,
            main: v70.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRemoved =  {
    name: 'Identity.SubIdentityRemoved',
    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    v70: new EventType(
        'Identity.SubIdentityRemoved',
        sts.struct({
            sub: v70.AccountId32,
            main: v70.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRevoked =  {
    name: 'Identity.SubIdentityRevoked',
    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    v70: new EventType(
        'Identity.SubIdentityRevoked',
        sts.struct({
            sub: v70.AccountId32,
            main: v70.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
