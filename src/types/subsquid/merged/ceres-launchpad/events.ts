import * as productionEvents from '../../production/ceres-launchpad/events'
import * as stageEvents from '../../stage/ceres-launchpad/events'
import * as testEvents from '../../test/ceres-launchpad/events'
import * as devEvents from '../../dev/ceres-launchpad/events'


export const iloCreated = {
	name: 'CeresLaunchpad.ILOCreated',
	v26: productionEvents.iloCreated['v26'],
	v42: productionEvents.iloCreated['v42'],
	v33Stage: stageEvents.iloCreated['v33'],
	v42Stage: stageEvents.iloCreated['v42'],
	v33Test: testEvents.iloCreated['v33'],
	v42Test: testEvents.iloCreated['v42'],
	v70Dev: devEvents.iloCreated['v70'],
}

export const contributed = {
	name: 'CeresLaunchpad.Contributed',
	v26: productionEvents.contributed['v26'],
	v42: productionEvents.contributed['v42'],
	v33Stage: stageEvents.contributed['v33'],
	v42Stage: stageEvents.contributed['v42'],
	v33Test: testEvents.contributed['v33'],
	v42Test: testEvents.contributed['v42'],
	v70Dev: devEvents.contributed['v70'],
}

export const emergencyWithdrawn = {
	name: 'CeresLaunchpad.EmergencyWithdrawn',
	v26: productionEvents.emergencyWithdrawn['v26'],
	v42: productionEvents.emergencyWithdrawn['v42'],
	v33Stage: stageEvents.emergencyWithdrawn['v33'],
	v42Stage: stageEvents.emergencyWithdrawn['v42'],
	v33Test: testEvents.emergencyWithdrawn['v33'],
	v42Test: testEvents.emergencyWithdrawn['v42'],
	v70Dev: devEvents.emergencyWithdrawn['v70'],
}

export const iloFinished = {
	name: 'CeresLaunchpad.ILOFinished',
	v26: productionEvents.iloFinished['v26'],
	v42: productionEvents.iloFinished['v42'],
	v33Stage: stageEvents.iloFinished['v33'],
	v42Stage: stageEvents.iloFinished['v42'],
	v33Test: testEvents.iloFinished['v33'],
	v42Test: testEvents.iloFinished['v42'],
	v70Dev: devEvents.iloFinished['v70'],
}

export const claimedLp = {
	name: 'CeresLaunchpad.ClaimedLP',
	v26: productionEvents.claimedLp['v26'],
	v42: productionEvents.claimedLp['v42'],
	v33Stage: stageEvents.claimedLp['v33'],
	v42Stage: stageEvents.claimedLp['v42'],
	v33Test: testEvents.claimedLp['v33'],
	v42Test: testEvents.claimedLp['v42'],
	v70Dev: devEvents.claimedLp['v70'],
}

export const claimed = {
	name: 'CeresLaunchpad.Claimed',
	v26: productionEvents.claimed['v26'],
	v42: productionEvents.claimed['v42'],
	v33Stage: stageEvents.claimed['v33'],
	v42Stage: stageEvents.claimed['v42'],
	v33Test: testEvents.claimed['v33'],
	v42Test: testEvents.claimed['v42'],
	v70Dev: devEvents.claimed['v70'],
}

export const feeChanged = {
	name: 'CeresLaunchpad.FeeChanged',
	v26: productionEvents.feeChanged['v26'],
	v33Stage: stageEvents.feeChanged['v33'],
	v33Test: testEvents.feeChanged['v33'],
	v70Dev: devEvents.feeChanged['v70'],
}

export const claimedPswap = {
	name: 'CeresLaunchpad.ClaimedPSWAP',
	v26: productionEvents.claimedPswap['v26'],
	v33Stage: stageEvents.claimedPswap['v33'],
	v33Test: testEvents.claimedPswap['v33'],
	v70Dev: devEvents.claimedPswap['v70'],
}

export const whitelistedContributor = {
	name: 'CeresLaunchpad.WhitelistedContributor',
	v33: productionEvents.whitelistedContributor['v33'],
	v33Stage: stageEvents.whitelistedContributor['v33'],
	v33Test: testEvents.whitelistedContributor['v33'],
	v70Dev: devEvents.whitelistedContributor['v70'],
}

export const whitelistedIloOrganizer = {
	name: 'CeresLaunchpad.WhitelistedIloOrganizer',
	v33: productionEvents.whitelistedIloOrganizer['v33'],
	v33Stage: stageEvents.whitelistedIloOrganizer['v33'],
	v33Test: testEvents.whitelistedIloOrganizer['v33'],
	v70Dev: devEvents.whitelistedIloOrganizer['v70'],
}

export const removedWhitelistedContributor = {
	name: 'CeresLaunchpad.RemovedWhitelistedContributor',
	v33: productionEvents.removedWhitelistedContributor['v33'],
	v33Stage: stageEvents.removedWhitelistedContributor['v33'],
	v33Test: testEvents.removedWhitelistedContributor['v33'],
	v70Dev: devEvents.removedWhitelistedContributor['v70'],
}

export const removedWhitelistedIloOrganizer = {
	name: 'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
	v33: productionEvents.removedWhitelistedIloOrganizer['v33'],
	v33Stage: stageEvents.removedWhitelistedIloOrganizer['v33'],
	v33Test: testEvents.removedWhitelistedIloOrganizer['v33'],
	v70Dev: devEvents.removedWhitelistedIloOrganizer['v70'],
}
