import * as productionCalls from '../../production/staking/calls'
import * as stageCalls from '../../stage/staking/calls'
import * as testCalls from '../../test/staking/calls'
import * as devCalls from '../../dev/staking/calls'


export const bond = {
	name: 'Staking.bond',
	v1: productionCalls.bond['v1'],
	v33Stage: stageCalls.bond['v33'],
	v33Test: testCalls.bond['v33'],
	v70Dev: devCalls.bond['v70'],
}

export const bondExtra = {
	name: 'Staking.bond_extra',
	v1: productionCalls.bondExtra['v1'],
	v33Stage: stageCalls.bondExtra['v33'],
	v33Test: testCalls.bondExtra['v33'],
	v70Dev: devCalls.bondExtra['v70'],
}

export const unbond = {
	name: 'Staking.unbond',
	v1: productionCalls.unbond['v1'],
	v33Stage: stageCalls.unbond['v33'],
	v33Test: testCalls.unbond['v33'],
	v70Dev: devCalls.unbond['v70'],
}

export const withdrawUnbonded = {
	name: 'Staking.withdraw_unbonded',
	v1: productionCalls.withdrawUnbonded['v1'],
	v33Stage: stageCalls.withdrawUnbonded['v33'],
	v33Test: testCalls.withdrawUnbonded['v33'],
	v70Dev: devCalls.withdrawUnbonded['v70'],
}

export const validate = {
	name: 'Staking.validate',
	v1: productionCalls.validate['v1'],
	v33Stage: stageCalls.validate['v33'],
	v33Test: testCalls.validate['v33'],
	v70Dev: devCalls.validate['v70'],
}

export const nominate = {
	name: 'Staking.nominate',
	v1: productionCalls.nominate['v1'],
	v33Stage: stageCalls.nominate['v33'],
	v33Test: testCalls.nominate['v33'],
	v70Dev: devCalls.nominate['v70'],
}

export const chill = {
	name: 'Staking.chill',
	v1: productionCalls.chill['v1'],
	v33Stage: stageCalls.chill['v33'],
	v33Test: testCalls.chill['v33'],
	v70Dev: devCalls.chill['v70'],
}

export const setPayee = {
	name: 'Staking.set_payee',
	v1: productionCalls.setPayee['v1'],
	v33Stage: stageCalls.setPayee['v33'],
	v33Test: testCalls.setPayee['v33'],
	v70Dev: devCalls.setPayee['v70'],
}

export const setController = {
	name: 'Staking.set_controller',
	v1: productionCalls.setController['v1'],
	v33Stage: stageCalls.setController['v33'],
	v33Test: testCalls.setController['v33'],
	v70Dev: devCalls.setController['v70'],
}

export const setValidatorCount = {
	name: 'Staking.set_validator_count',
	v1: productionCalls.setValidatorCount['v1'],
	v33Stage: stageCalls.setValidatorCount['v33'],
	v33Test: testCalls.setValidatorCount['v33'],
	v70Dev: devCalls.setValidatorCount['v70'],
}

export const increaseValidatorCount = {
	name: 'Staking.increase_validator_count',
	v1: productionCalls.increaseValidatorCount['v1'],
	v33Stage: stageCalls.increaseValidatorCount['v33'],
	v33Test: testCalls.increaseValidatorCount['v33'],
	v70Dev: devCalls.increaseValidatorCount['v70'],
}

export const scaleValidatorCount = {
	name: 'Staking.scale_validator_count',
	v1: productionCalls.scaleValidatorCount['v1'],
	v33Stage: stageCalls.scaleValidatorCount['v33'],
	v33Test: testCalls.scaleValidatorCount['v33'],
	v70Dev: devCalls.scaleValidatorCount['v70'],
}

export const forceNoEras = {
	name: 'Staking.force_no_eras',
	v1: productionCalls.forceNoEras['v1'],
	v33Stage: stageCalls.forceNoEras['v33'],
	v33Test: testCalls.forceNoEras['v33'],
	v70Dev: devCalls.forceNoEras['v70'],
}

export const forceNewEra = {
	name: 'Staking.force_new_era',
	v1: productionCalls.forceNewEra['v1'],
	v33Stage: stageCalls.forceNewEra['v33'],
	v33Test: testCalls.forceNewEra['v33'],
	v70Dev: devCalls.forceNewEra['v70'],
}

export const setInvulnerables = {
	name: 'Staking.set_invulnerables',
	v1: productionCalls.setInvulnerables['v1'],
	v33Stage: stageCalls.setInvulnerables['v33'],
	v33Test: testCalls.setInvulnerables['v33'],
	v70Dev: devCalls.setInvulnerables['v70'],
}

export const forceUnstake = {
	name: 'Staking.force_unstake',
	v1: productionCalls.forceUnstake['v1'],
	v33Stage: stageCalls.forceUnstake['v33'],
	v33Test: testCalls.forceUnstake['v33'],
	v70Dev: devCalls.forceUnstake['v70'],
}

export const forceNewEraAlways = {
	name: 'Staking.force_new_era_always',
	v1: productionCalls.forceNewEraAlways['v1'],
	v33Stage: stageCalls.forceNewEraAlways['v33'],
	v33Test: testCalls.forceNewEraAlways['v33'],
	v70Dev: devCalls.forceNewEraAlways['v70'],
}

export const cancelDeferredSlash = {
	name: 'Staking.cancel_deferred_slash',
	v1: productionCalls.cancelDeferredSlash['v1'],
	v33Stage: stageCalls.cancelDeferredSlash['v33'],
	v33Test: testCalls.cancelDeferredSlash['v33'],
	v70Dev: devCalls.cancelDeferredSlash['v70'],
}

export const payoutStakers = {
	name: 'Staking.payout_stakers',
	v1: productionCalls.payoutStakers['v1'],
	v33Stage: stageCalls.payoutStakers['v33'],
	v33Test: testCalls.payoutStakers['v33'],
	v70Dev: devCalls.payoutStakers['v70'],
}

export const rebond = {
	name: 'Staking.rebond',
	v1: productionCalls.rebond['v1'],
	v33Stage: stageCalls.rebond['v33'],
	v33Test: testCalls.rebond['v33'],
	v70Dev: devCalls.rebond['v70'],
}

export const setHistoryDepth = {
	name: 'Staking.set_history_depth',
	v1: productionCalls.setHistoryDepth['v1'],
	v33Stage: stageCalls.setHistoryDepth['v33'],
	v33Test: testCalls.setHistoryDepth['v33'],
}

export const reapStash = {
	name: 'Staking.reap_stash',
	v1: productionCalls.reapStash['v1'],
	v33Stage: stageCalls.reapStash['v33'],
	v33Test: testCalls.reapStash['v33'],
	v70Dev: devCalls.reapStash['v70'],
}

export const submitElectionSolution = {
	name: 'Staking.submit_election_solution',
	v1: productionCalls.submitElectionSolution['v1'],
	v33Stage: stageCalls.submitElectionSolution['v33'],
	v33Test: testCalls.submitElectionSolution['v33'],
}

export const submitElectionSolutionUnsigned = {
	name: 'Staking.submit_election_solution_unsigned',
	v1: productionCalls.submitElectionSolutionUnsigned['v1'],
	v33Stage: stageCalls.submitElectionSolutionUnsigned['v33'],
	v33Test: testCalls.submitElectionSolutionUnsigned['v33'],
}

export const kick = {
	name: 'Staking.kick',
	v1: productionCalls.kick['v1'],
	v33Stage: stageCalls.kick['v33'],
	v33Test: testCalls.kick['v33'],
	v70Dev: devCalls.kick['v70'],
}

export const setStakingConfigs = {
	name: 'Staking.set_staking_configs',
	v42: productionCalls.setStakingConfigs['v42'],
	v42Stage: stageCalls.setStakingConfigs['v42'],
	v42Test: testCalls.setStakingConfigs['v42'],
	v70Dev: devCalls.setStakingConfigs['v70'],
}

export const chillOther = {
	name: 'Staking.chill_other',
	v42: productionCalls.chillOther['v42'],
	v42Stage: stageCalls.chillOther['v42'],
	v42Test: testCalls.chillOther['v42'],
	v70Dev: devCalls.chillOther['v70'],
}

export const forceApplyMinCommission = {
	name: 'Staking.force_apply_min_commission',
	v42: productionCalls.forceApplyMinCommission['v42'],
	v42Stage: stageCalls.forceApplyMinCommission['v42'],
	v42Test: testCalls.forceApplyMinCommission['v42'],
	v70Dev: devCalls.forceApplyMinCommission['v70'],
}

export const setMinCommission = {
	name: 'Staking.set_min_commission',
	v53: productionCalls.setMinCommission['v53'],
	v52Stage: stageCalls.setMinCommission['v52'],
	v52Test: testCalls.setMinCommission['v52'],
	v70Dev: devCalls.setMinCommission['v70'],
}
