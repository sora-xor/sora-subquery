import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v3 from '../v3'
import * as v42 from '../v42'

export const identitySet =  {
    name: 'Identity.IdentitySet',
    /**
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    v3: new EventType(
        'Identity.IdentitySet',
        v3.AccountId
    ),
    /**
     * A name was set or reset (which will remove all judgements).
     */
    v42: new EventType(
        'Identity.IdentitySet',
        sts.struct({
            who: v42.AccountId32,
        })
    ),
}

export const identityCleared =  {
    name: 'Identity.IdentityCleared',
    /**
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    v3: new EventType(
        'Identity.IdentityCleared',
        sts.tuple([v3.AccountId, v3.Balance])
    ),
    /**
     * A name was cleared, and the given balance returned.
     */
    v42: new EventType(
        'Identity.IdentityCleared',
        sts.struct({
            who: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const identityKilled =  {
    name: 'Identity.IdentityKilled',
    /**
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    v3: new EventType(
        'Identity.IdentityKilled',
        sts.tuple([v3.AccountId, v3.Balance])
    ),
    /**
     * A name was removed and the given balance slashed.
     */
    v42: new EventType(
        'Identity.IdentityKilled',
        sts.struct({
            who: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const judgementRequested =  {
    name: 'Identity.JudgementRequested',
    /**
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    v3: new EventType(
        'Identity.JudgementRequested',
        sts.tuple([v3.AccountId, v3.RegistrarIndex])
    ),
    /**
     * A judgement was asked from a registrar.
     */
    v42: new EventType(
        'Identity.JudgementRequested',
        sts.struct({
            who: v42.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementUnrequested =  {
    name: 'Identity.JudgementUnrequested',
    /**
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    v3: new EventType(
        'Identity.JudgementUnrequested',
        sts.tuple([v3.AccountId, v3.RegistrarIndex])
    ),
    /**
     * A judgement request was retracted.
     */
    v42: new EventType(
        'Identity.JudgementUnrequested',
        sts.struct({
            who: v42.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementGiven =  {
    name: 'Identity.JudgementGiven',
    /**
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    v3: new EventType(
        'Identity.JudgementGiven',
        sts.tuple([v3.AccountId, v3.RegistrarIndex])
    ),
    /**
     * A judgement was given by a registrar.
     */
    v42: new EventType(
        'Identity.JudgementGiven',
        sts.struct({
            target: v42.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const registrarAdded =  {
    name: 'Identity.RegistrarAdded',
    /**
     *  A registrar was added. \[registrar_index\]
     */
    v3: new EventType(
        'Identity.RegistrarAdded',
        v3.RegistrarIndex
    ),
    /**
     * A registrar was added.
     */
    v42: new EventType(
        'Identity.RegistrarAdded',
        sts.struct({
            registrarIndex: sts.number(),
        })
    ),
}

export const subIdentityAdded =  {
    name: 'Identity.SubIdentityAdded',
    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    v3: new EventType(
        'Identity.SubIdentityAdded',
        sts.tuple([v3.AccountId, v3.AccountId, v3.Balance])
    ),
    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    v42: new EventType(
        'Identity.SubIdentityAdded',
        sts.struct({
            sub: v42.AccountId32,
            main: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRemoved =  {
    name: 'Identity.SubIdentityRemoved',
    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    v3: new EventType(
        'Identity.SubIdentityRemoved',
        sts.tuple([v3.AccountId, v3.AccountId, v3.Balance])
    ),
    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    v42: new EventType(
        'Identity.SubIdentityRemoved',
        sts.struct({
            sub: v42.AccountId32,
            main: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRevoked =  {
    name: 'Identity.SubIdentityRevoked',
    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    v3: new EventType(
        'Identity.SubIdentityRevoked',
        sts.tuple([v3.AccountId, v3.AccountId, v3.Balance])
    ),
    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    v42: new EventType(
        'Identity.SubIdentityRevoked',
        sts.struct({
            sub: v42.AccountId32,
            main: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
