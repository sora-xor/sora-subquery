import * as productionEvents from '../../production/staking/events'
import * as stageEvents from '../../stage/staking/events'
import * as testEvents from '../../test/staking/events'
import * as devEvents from '../../dev/staking/events'


export const eraPayout = {
	name: 'Staking.EraPayout',
	v1: productionEvents.eraPayout['v1'],
	v33Stage: stageEvents.eraPayout['v33'],
	v33Test: testEvents.eraPayout['v33'],
}

export const reward = {
	name: 'Staking.Reward',
	v1: productionEvents.reward['v1'],
	v33Stage: stageEvents.reward['v33'],
	v33Test: testEvents.reward['v33'],
}

export const slash = {
	name: 'Staking.Slash',
	v1: productionEvents.slash['v1'],
	v33Stage: stageEvents.slash['v33'],
	v33Test: testEvents.slash['v33'],
}

export const oldSlashingReportDiscarded = {
	name: 'Staking.OldSlashingReportDiscarded',
	v1: productionEvents.oldSlashingReportDiscarded['v1'],
	v53: productionEvents.oldSlashingReportDiscarded['v53'],
	v33Stage: stageEvents.oldSlashingReportDiscarded['v33'],
	v52Stage: stageEvents.oldSlashingReportDiscarded['v52'],
	v33Test: testEvents.oldSlashingReportDiscarded['v33'],
	v52Test: testEvents.oldSlashingReportDiscarded['v52'],
	v70Dev: devEvents.oldSlashingReportDiscarded['v70'],
}

export const stakingElection = {
	name: 'Staking.StakingElection',
	v1: productionEvents.stakingElection['v1'],
	v33Stage: stageEvents.stakingElection['v33'],
	v33Test: testEvents.stakingElection['v33'],
}

export const solutionStored = {
	name: 'Staking.SolutionStored',
	v1: productionEvents.solutionStored['v1'],
	v33Stage: stageEvents.solutionStored['v33'],
	v33Test: testEvents.solutionStored['v33'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v1: productionEvents.bonded['v1'],
	v53: productionEvents.bonded['v53'],
	v33Stage: stageEvents.bonded['v33'],
	v52Stage: stageEvents.bonded['v52'],
	v33Test: testEvents.bonded['v33'],
	v52Test: testEvents.bonded['v52'],
	v70Dev: devEvents.bonded['v70'],
}

export const unbonded = {
	name: 'Staking.Unbonded',
	v1: productionEvents.unbonded['v1'],
	v53: productionEvents.unbonded['v53'],
	v33Stage: stageEvents.unbonded['v33'],
	v52Stage: stageEvents.unbonded['v52'],
	v33Test: testEvents.unbonded['v33'],
	v52Test: testEvents.unbonded['v52'],
	v70Dev: devEvents.unbonded['v70'],
}

export const withdrawn = {
	name: 'Staking.Withdrawn',
	v1: productionEvents.withdrawn['v1'],
	v53: productionEvents.withdrawn['v53'],
	v33Stage: stageEvents.withdrawn['v33'],
	v52Stage: stageEvents.withdrawn['v52'],
	v33Test: testEvents.withdrawn['v33'],
	v52Test: testEvents.withdrawn['v52'],
	v70Dev: devEvents.withdrawn['v70'],
}

export const kicked = {
	name: 'Staking.Kicked',
	v1: productionEvents.kicked['v1'],
	v53: productionEvents.kicked['v53'],
	v33Stage: stageEvents.kicked['v33'],
	v52Stage: stageEvents.kicked['v52'],
	v33Test: testEvents.kicked['v33'],
	v52Test: testEvents.kicked['v52'],
	v70Dev: devEvents.kicked['v70'],
}

export const eraPaid = {
	name: 'Staking.EraPaid',
	v42: productionEvents.eraPaid['v42'],
	v53: productionEvents.eraPaid['v53'],
	v42Stage: stageEvents.eraPaid['v42'],
	v52Stage: stageEvents.eraPaid['v52'],
	v42Test: testEvents.eraPaid['v42'],
	v52Test: testEvents.eraPaid['v52'],
	v70Dev: devEvents.eraPaid['v70'],
}

export const rewarded = {
	name: 'Staking.Rewarded',
	v42: productionEvents.rewarded['v42'],
	v53: productionEvents.rewarded['v53'],
	v42Stage: stageEvents.rewarded['v42'],
	v52Stage: stageEvents.rewarded['v52'],
	v42Test: testEvents.rewarded['v42'],
	v52Test: testEvents.rewarded['v52'],
	v70Dev: devEvents.rewarded['v70'],
}

export const slashed = {
	name: 'Staking.Slashed',
	v42: productionEvents.slashed['v42'],
	v53: productionEvents.slashed['v53'],
	v42Stage: stageEvents.slashed['v42'],
	v52Stage: stageEvents.slashed['v52'],
	v42Test: testEvents.slashed['v42'],
	v52Test: testEvents.slashed['v52'],
	v70Dev: devEvents.slashed['v70'],
}

export const stakersElected = {
	name: 'Staking.StakersElected',
	v42: productionEvents.stakersElected['v42'],
	v42Stage: stageEvents.stakersElected['v42'],
	v42Test: testEvents.stakersElected['v42'],
	v70Dev: devEvents.stakersElected['v70'],
}

export const stakingElectionFailed = {
	name: 'Staking.StakingElectionFailed',
	v42: productionEvents.stakingElectionFailed['v42'],
	v42Stage: stageEvents.stakingElectionFailed['v42'],
	v42Test: testEvents.stakingElectionFailed['v42'],
	v70Dev: devEvents.stakingElectionFailed['v70'],
}

export const chilled = {
	name: 'Staking.Chilled',
	v42: productionEvents.chilled['v42'],
	v53: productionEvents.chilled['v53'],
	v42Stage: stageEvents.chilled['v42'],
	v52Stage: stageEvents.chilled['v52'],
	v42Test: testEvents.chilled['v42'],
	v52Test: testEvents.chilled['v52'],
	v70Dev: devEvents.chilled['v70'],
}

export const payoutStarted = {
	name: 'Staking.PayoutStarted',
	v42: productionEvents.payoutStarted['v42'],
	v53: productionEvents.payoutStarted['v53'],
	v42Stage: stageEvents.payoutStarted['v42'],
	v52Stage: stageEvents.payoutStarted['v52'],
	v42Test: testEvents.payoutStarted['v42'],
	v52Test: testEvents.payoutStarted['v52'],
	v70Dev: devEvents.payoutStarted['v70'],
}

export const validatorPrefsSet = {
	name: 'Staking.ValidatorPrefsSet',
	v42: productionEvents.validatorPrefsSet['v42'],
	v53: productionEvents.validatorPrefsSet['v53'],
	v42Stage: stageEvents.validatorPrefsSet['v42'],
	v52Stage: stageEvents.validatorPrefsSet['v52'],
	v42Test: testEvents.validatorPrefsSet['v42'],
	v52Test: testEvents.validatorPrefsSet['v52'],
	v70Dev: devEvents.validatorPrefsSet['v70'],
}

export const slashReported = {
	name: 'Staking.SlashReported',
	v53: productionEvents.slashReported['v53'],
	v52Stage: stageEvents.slashReported['v52'],
	v52Test: testEvents.slashReported['v52'],
	v70Dev: devEvents.slashReported['v70'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v53: productionEvents.forceEra['v53'],
	v52Stage: stageEvents.forceEra['v52'],
	v52Test: testEvents.forceEra['v52'],
	v70Dev: devEvents.forceEra['v70'],
}
