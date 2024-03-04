import * as productionEvents from '../../production/election-provider-multi-phase/events'
import * as stageEvents from '../../stage/election-provider-multi-phase/events'
import * as testEvents from '../../test/election-provider-multi-phase/events'
import * as devEvents from '../../dev/election-provider-multi-phase/events'


export const solutionStored = {
	name: 'ElectionProviderMultiPhase.SolutionStored',
	v42: productionEvents.solutionStored['v42'],
	v53: productionEvents.solutionStored['v53'],
	v42Stage: stageEvents.solutionStored['v42'],
	v52Stage: stageEvents.solutionStored['v52'],
	v42Test: testEvents.solutionStored['v42'],
	v52Test: testEvents.solutionStored['v52'],
	v70Dev: devEvents.solutionStored['v70'],
}

export const electionFinalized = {
	name: 'ElectionProviderMultiPhase.ElectionFinalized',
	v42: productionEvents.electionFinalized['v42'],
	v53: productionEvents.electionFinalized['v53'],
	v42Stage: stageEvents.electionFinalized['v42'],
	v52Stage: stageEvents.electionFinalized['v52'],
	v42Test: testEvents.electionFinalized['v42'],
	v52Test: testEvents.electionFinalized['v52'],
	v70Dev: devEvents.electionFinalized['v70'],
}

export const rewarded = {
	name: 'ElectionProviderMultiPhase.Rewarded',
	v42: productionEvents.rewarded['v42'],
	v42Stage: stageEvents.rewarded['v42'],
	v42Test: testEvents.rewarded['v42'],
	v70Dev: devEvents.rewarded['v70'],
}

export const slashed = {
	name: 'ElectionProviderMultiPhase.Slashed',
	v42: productionEvents.slashed['v42'],
	v42Stage: stageEvents.slashed['v42'],
	v42Test: testEvents.slashed['v42'],
	v70Dev: devEvents.slashed['v70'],
}

export const signedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
	v42: productionEvents.signedPhaseStarted['v42'],
	v42Stage: stageEvents.signedPhaseStarted['v42'],
	v42Test: testEvents.signedPhaseStarted['v42'],
}

export const unsignedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
	v42: productionEvents.unsignedPhaseStarted['v42'],
	v42Stage: stageEvents.unsignedPhaseStarted['v42'],
	v42Test: testEvents.unsignedPhaseStarted['v42'],
}

export const electionFailed = {
	name: 'ElectionProviderMultiPhase.ElectionFailed',
	v53: productionEvents.electionFailed['v53'],
	v52Stage: stageEvents.electionFailed['v52'],
	v52Test: testEvents.electionFailed['v52'],
	v70Dev: devEvents.electionFailed['v70'],
}

export const phaseTransitioned = {
	name: 'ElectionProviderMultiPhase.PhaseTransitioned',
	v53: productionEvents.phaseTransitioned['v53'],
	v52Stage: stageEvents.phaseTransitioned['v52'],
	v52Test: testEvents.phaseTransitioned['v52'],
	v70Dev: devEvents.phaseTransitioned['v70'],
}
