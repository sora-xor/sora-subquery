import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const memberAdded =  {
    name: 'TechnicalMembership.MemberAdded',
    /**
     *  The given member was added; see the transaction for who.
     */
    v1: new EventType(
        'TechnicalMembership.MemberAdded',
        sts.unit()
    ),
}

export const memberRemoved =  {
    name: 'TechnicalMembership.MemberRemoved',
    /**
     *  The given member was removed; see the transaction for who.
     */
    v1: new EventType(
        'TechnicalMembership.MemberRemoved',
        sts.unit()
    ),
}

export const membersSwapped =  {
    name: 'TechnicalMembership.MembersSwapped',
    /**
     *  Two members were swapped; see the transaction for who.
     */
    v1: new EventType(
        'TechnicalMembership.MembersSwapped',
        sts.unit()
    ),
}

export const membersReset =  {
    name: 'TechnicalMembership.MembersReset',
    /**
     *  The membership was reset; see the transaction for who the new set is.
     */
    v1: new EventType(
        'TechnicalMembership.MembersReset',
        sts.unit()
    ),
}

export const keyChanged =  {
    name: 'TechnicalMembership.KeyChanged',
    /**
     *  One of the members' keys changed.
     */
    v1: new EventType(
        'TechnicalMembership.KeyChanged',
        sts.unit()
    ),
}

export const dummy =  {
    name: 'TechnicalMembership.Dummy',
    /**
     *  Phantom member, never used.
     */
    v1: new EventType(
        'TechnicalMembership.Dummy',
        sts.unit()
    ),
}
