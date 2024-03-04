import * as productionCalls from '../../production/assets/calls'
import * as stageCalls from '../../stage/assets/calls'
import * as testCalls from '../../test/assets/calls'
import * as devCalls from '../../dev/assets/calls'


export const register = {
	name: 'Assets.register',
	v1: productionCalls.register['v1'],
	v22: productionCalls.register['v22'],
	v26: productionCalls.register['v26'],
	v33Stage: stageCalls.register['v33'],
	v33Test: testCalls.register['v33'],
	v70Dev: devCalls.register['v70'],
}

export const transfer = {
	name: 'Assets.transfer',
	v1: productionCalls.transfer['v1'],
	v42: productionCalls.transfer['v42'],
	v33Stage: stageCalls.transfer['v33'],
	v42Stage: stageCalls.transfer['v42'],
	v33Test: testCalls.transfer['v33'],
	v42Test: testCalls.transfer['v42'],
	v70Dev: devCalls.transfer['v70'],
}

export const mint = {
	name: 'Assets.mint',
	v1: productionCalls.mint['v1'],
	v42: productionCalls.mint['v42'],
	v33Stage: stageCalls.mint['v33'],
	v42Stage: stageCalls.mint['v42'],
	v33Test: testCalls.mint['v33'],
	v42Test: testCalls.mint['v42'],
	v70Dev: devCalls.mint['v70'],
}

export const burn = {
	name: 'Assets.burn',
	v1: productionCalls.burn['v1'],
	v42: productionCalls.burn['v42'],
	v33Stage: stageCalls.burn['v33'],
	v42Stage: stageCalls.burn['v42'],
	v33Test: testCalls.burn['v33'],
	v42Test: testCalls.burn['v42'],
	v70Dev: devCalls.burn['v70'],
}

export const setNonMintable = {
	name: 'Assets.set_non_mintable',
	v1: productionCalls.setNonMintable['v1'],
	v42: productionCalls.setNonMintable['v42'],
	v33Stage: stageCalls.setNonMintable['v33'],
	v42Stage: stageCalls.setNonMintable['v42'],
	v33Test: testCalls.setNonMintable['v33'],
	v42Test: testCalls.setNonMintable['v42'],
	v70Dev: devCalls.setNonMintable['v70'],
}

export const forceMint = {
	name: 'Assets.force_mint',
	v45: productionCalls.forceMint['v45'],
	v44Stage: stageCalls.forceMint['v44'],
	v44Test: testCalls.forceMint['v44'],
	v70Dev: devCalls.forceMint['v70'],
}

export const updateBalance = {
	name: 'Assets.update_balance',
	v50: productionCalls.updateBalance['v50'],
	v48Stage: stageCalls.updateBalance['v48'],
	v48Test: testCalls.updateBalance['v48'],
	v70Dev: devCalls.updateBalance['v70'],
}

export const updateInfo = {
	name: 'Assets.update_info',
	v53: productionCalls.updateInfo['v53'],
	v52Stage: stageCalls.updateInfo['v52'],
	v52Test: testCalls.updateInfo['v52'],
	v70Dev: devCalls.updateInfo['v70'],
}
