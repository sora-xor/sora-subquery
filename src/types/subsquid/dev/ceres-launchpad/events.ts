import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const iloCreated =  {
    name: 'CeresLaunchpad.ILOCreated',
    /**
     * ILO created [who, what]
     */
    v70: new EventType(
        'CeresLaunchpad.ILOCreated',
        sts.tuple([v70.AccountId32, v70.AssetId32])
    ),
}

export const contributed =  {
    name: 'CeresLaunchpad.Contributed',
    /**
     * Contribute [who, what, balance]
     */
    v70: new EventType(
        'CeresLaunchpad.Contributed',
        sts.tuple([v70.AccountId32, v70.AssetId32, sts.bigint()])
    ),
}

export const emergencyWithdrawn =  {
    name: 'CeresLaunchpad.EmergencyWithdrawn',
    /**
     * Emergency withdraw [who, what, balance]
     */
    v70: new EventType(
        'CeresLaunchpad.EmergencyWithdrawn',
        sts.tuple([v70.AccountId32, v70.AssetId32, sts.bigint()])
    ),
}

export const iloFinished =  {
    name: 'CeresLaunchpad.ILOFinished',
    /**
     * ILO finished [who, what]
     */
    v70: new EventType(
        'CeresLaunchpad.ILOFinished',
        sts.tuple([v70.AccountId32, v70.AssetId32])
    ),
}

export const claimedLp =  {
    name: 'CeresLaunchpad.ClaimedLP',
    /**
     * Claim LP Tokens [who, what]
     */
    v70: new EventType(
        'CeresLaunchpad.ClaimedLP',
        sts.tuple([v70.AccountId32, v70.AssetId32])
    ),
}

export const claimed =  {
    name: 'CeresLaunchpad.Claimed',
    /**
     * Claim tokens [who, what]
     */
    v70: new EventType(
        'CeresLaunchpad.Claimed',
        sts.tuple([v70.AccountId32, v70.AssetId32])
    ),
}

export const feeChanged =  {
    name: 'CeresLaunchpad.FeeChanged',
    /**
     * Fee changed [balance]
     */
    v70: new EventType(
        'CeresLaunchpad.FeeChanged',
        sts.bigint()
    ),
}

export const claimedPswap =  {
    name: 'CeresLaunchpad.ClaimedPSWAP',
    /**
     * PSWAP claimed
     */
    v70: new EventType(
        'CeresLaunchpad.ClaimedPSWAP',
        sts.unit()
    ),
}

export const whitelistedContributor =  {
    name: 'CeresLaunchpad.WhitelistedContributor',
    /**
     * Contributor whitelisted [who]
     */
    v70: new EventType(
        'CeresLaunchpad.WhitelistedContributor',
        v70.AccountId32
    ),
}

export const whitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.WhitelistedIloOrganizer',
    /**
     * ILO organizer whitelisted [who]
     */
    v70: new EventType(
        'CeresLaunchpad.WhitelistedIloOrganizer',
        v70.AccountId32
    ),
}

export const removedWhitelistedContributor =  {
    name: 'CeresLaunchpad.RemovedWhitelistedContributor',
    /**
     * Contributor removed [who]
     */
    v70: new EventType(
        'CeresLaunchpad.RemovedWhitelistedContributor',
        v70.AccountId32
    ),
}

export const removedWhitelistedIloOrganizer =  {
    name: 'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
    /**
     * ILO organizer removed [who]
     */
    v70: new EventType(
        'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
        v70.AccountId32
    ),
}
