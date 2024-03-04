import * as productionCalls from '../../production/bags-list/calls'
import * as stageCalls from '../../stage/bags-list/calls'
import * as testCalls from '../../test/bags-list/calls'
import * as devCalls from '../../dev/bags-list/calls'


export const rebag = {
	name: 'BagsList.rebag',
	v42: productionCalls.rebag['v42'],
	v42Stage: stageCalls.rebag['v42'],
	v42Test: testCalls.rebag['v42'],
	v70Dev: devCalls.rebag['v70'],
}

export const putInFrontOf = {
	name: 'BagsList.put_in_front_of',
	v42: productionCalls.putInFrontOf['v42'],
	v42Stage: stageCalls.putInFrontOf['v42'],
	v42Test: testCalls.putInFrontOf['v42'],
	v70Dev: devCalls.putInFrontOf['v70'],
}
