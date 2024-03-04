import * as productionEvents from '../../production/xor-fee/events'
import * as stageEvents from '../../stage/xor-fee/events'
import * as testEvents from '../../test/xor-fee/events'
import * as devEvents from '../../dev/xor-fee/events'


export const feeWithdrawn = {
	name: 'XorFee.FeeWithdrawn',
	v1: productionEvents.feeWithdrawn['v1'],
	v33Stage: stageEvents.feeWithdrawn['v33'],
	v33Test: testEvents.feeWithdrawn['v33'],
	v70Dev: devEvents.feeWithdrawn['v70'],
}

export const referrerRewarded = {
	name: 'XorFee.ReferrerRewarded',
	v22: productionEvents.referrerRewarded['v22'],
	v33Stage: stageEvents.referrerRewarded['v33'],
	v33Test: testEvents.referrerRewarded['v33'],
	v70Dev: devEvents.referrerRewarded['v70'],
}

export const weightToFeeMultiplierUpdated = {
	name: 'XorFee.WeightToFeeMultiplierUpdated',
	v37: productionEvents.weightToFeeMultiplierUpdated['v37'],
	v37Stage: stageEvents.weightToFeeMultiplierUpdated['v37'],
	v37Test: testEvents.weightToFeeMultiplierUpdated['v37'],
	v70Dev: devEvents.weightToFeeMultiplierUpdated['v70'],
}
