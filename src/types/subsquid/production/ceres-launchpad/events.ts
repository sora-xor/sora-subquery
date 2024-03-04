import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const iloCreated =  {
    name: 'CeresLaunchpad.ILOCreated',
    /**
     *  ILO created [who, what]
     */
    v26: new EventType(
        'CeresLaunchpad.ILOCreated',
        sts.tuple([v26.AccountId, v26.AssetId])
    ),
    /**
     * ILO created [who, what]
     */
    v42: new EventType(
        'CeresLaunchpad.ILOCreated',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const contributed =  {
    name: 'CeresLaunchpad.Contributed',
    /**
     *  Contribute [who, what, balance]
     */
    v26: new EventType(
        'CeresLaunchpad.Contributed',
        sts.tuple([v26.AccountId, v26.AssetId, v26.Balance])
    ),
    /**
     * Contribute [who, what, balance]
     */
    v42: new EventType(
        'CeresLaunchpad.Contributed',
        sts.tuple([v42.AccountId32, v42.AssetId32, sts.bigint()])
    ),
}

export const emergencyWithdrawn =  {
    name: 'CeresLaunchpad.EmergencyWithdrawn',
    /**
     *  Emergency withdraw [who, what, balance]
     */
    v26: new EventType(
        'CeresLaunchpad.EmergencyWithdrawn',
        sts.tuple([v26.AccountId, v26.AssetId, v26.Balance])
    ),
    /**
     * Emergency withdraw [who, what, balance]
     */
    v42: new EventType(
        'CeresLaunchpad.EmergencyWithdrawn',
        sts.tuple([v42.AccountId32, v42.AssetId32, sts.bigint()])
    ),
}

export const iloFinished =  {
    name: 'CeresLaunchpad.ILOFinished',
    /**
     *  ILO finished [who, what]
     */
    v26: new EventType(
        'CeresLaunchpad.ILOFinished',
        sts.tuple([v26.AccountId, v26.AssetId])
    ),
    /**
     * ILO finished [who, what]
     */
    v42: new EventType(
        'CeresLaunchpad.ILOFinished',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const claimedLp =  {
    name: 'CeresLaunchpad.ClaimedLP',
    /**
     *  Claim LP Tokens [who, what]
     */
    v26: new EventType(
        'CeresLaunchpad.ClaimedLP',
        sts.tuple([v26.AccountId, v26.AssetId])
    ),
    /**
     * Claim LP Tokens [who, what]
     */
    v42: new EventType(
        'CeresLaunchpad.ClaimedLP',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const claimed =  {
    name: 'CeresLaunchpad.Claimed',
    /**
     *  Claim tokens [who, what]
     */
    v26: new EventType(
        'CeresLaunchpad.Claimed',
        sts.tuple([v26.AccountId, v26.AssetId])
    ),
    /**
     * Claim tokens [who, what]
     */
    v42: new EventType(
        'CeresLaunchpad.Claimed',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const feeChanged =  {
    name: 'CeresLaunchpad.FeeChanged',
    /**
     *  Fee changed [balance]
     */
    v26: new EventType(
        'CeresLaunchpad.FeeChanged',
        v26.Balance
    ),
}

export const claimedPswap =  {
    name: 'CeresLaunchpad.ClaimedPSWAP',
    /**
     *  PSWAP claimed
     */
    v26: new EventType(
        'CeresLaunchpad.ClaimedPSWAP',
        sts.unit()
    ),
}

export const whitelistedContributor =  {
    name: 'CeresLaunchpad.WhitelistedContributor',
    /**
     *  Contributor whitelisted [who]
     */
    v33: new EventType(
        'CeresLaunchpad.WhitelistedContributor',
        v33.AccountId
    ),
}

export const whitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.WhitelistedIloOrganizer',
    /**
     *  ILO organizer whitelisted [who]
     */
    v33: new EventType(
        'CeresLaunchpad.WhitelistedIloOrganizer',
        v33.AccountId
    ),
}

export const removedWhitelistedContributor =  {
    name: 'CeresLaunchpad.RemovedWhitelistedContributor',
    /**
     *  Contributor removed [who]
     */
    v33: new EventType(
        'CeresLaunchpad.RemovedWhitelistedContributor',
        v33.AccountId
    ),
}

export const removedWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
    /**
     *  ILO organizer removed [who]
     */
    v33: new EventType(
        'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
        v33.AccountId
    ),
}
