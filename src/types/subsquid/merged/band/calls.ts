import * as productionCalls from '../../production/band/calls'
import * as stageCalls from '../../stage/band/calls'
import * as testCalls from '../../test/band/calls'
import * as devCalls from '../../dev/band/calls'


export const relay = {
	name: 'Band.relay',
	v45: productionCalls.relay['v45'],
	v44Stage: stageCalls.relay['v44'],
	v45Stage: stageCalls.relay['v45'],
	v44Test: testCalls.relay['v44'],
	v45Test: testCalls.relay['v45'],
	v70Dev: devCalls.relay['v70'],
}

export const forceRelay = {
	name: 'Band.force_relay',
	v45: productionCalls.forceRelay['v45'],
	v44Stage: stageCalls.forceRelay['v44'],
	v45Stage: stageCalls.forceRelay['v45'],
	v44Test: testCalls.forceRelay['v44'],
	v45Test: testCalls.forceRelay['v45'],
	v70Dev: devCalls.forceRelay['v70'],
}

export const addRelayers = {
	name: 'Band.add_relayers',
	v45: productionCalls.addRelayers['v45'],
	v44Stage: stageCalls.addRelayers['v44'],
	v44Test: testCalls.addRelayers['v44'],
	v70Dev: devCalls.addRelayers['v70'],
}

export const removeRelayers = {
	name: 'Band.remove_relayers',
	v45: productionCalls.removeRelayers['v45'],
	v44Stage: stageCalls.removeRelayers['v44'],
	v44Test: testCalls.removeRelayers['v44'],
	v70Dev: devCalls.removeRelayers['v70'],
}

export const setDynamicFeeParameters = {
	name: 'Band.set_dynamic_fee_parameters',
	v59: productionCalls.setDynamicFeeParameters['v59'],
	v59Stage: stageCalls.setDynamicFeeParameters['v59'],
	v59Test: testCalls.setDynamicFeeParameters['v59'],
	v70Dev: devCalls.setDynamicFeeParameters['v70'],
}
