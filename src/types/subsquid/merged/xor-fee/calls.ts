import * as productionCalls from '../../production/xor-fee/calls'
import * as stageCalls from '../../stage/xor-fee/calls'
import * as testCalls from '../../test/xor-fee/calls'
import * as devCalls from '../../dev/xor-fee/calls'


export const updateMultiplier = {
	name: 'XorFee.update_multiplier',
	v37: productionCalls.updateMultiplier['v37'],
	v37Stage: stageCalls.updateMultiplier['v37'],
	v37Test: testCalls.updateMultiplier['v37'],
	v70Dev: devCalls.updateMultiplier['v70'],
}
