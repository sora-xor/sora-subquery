import * as productionCalls from '../../production/multicollateral-bonding-curve-pool/calls'
import * as stageCalls from '../../stage/multicollateral-bonding-curve-pool/calls'
import * as testCalls from '../../test/multicollateral-bonding-curve-pool/calls'
import * as devCalls from '../../dev/multicollateral-bonding-curve-pool/calls'


export const initializePool = {
	name: 'MulticollateralBondingCurvePool.initialize_pool',
	v1: productionCalls.initializePool['v1'],
	v42: productionCalls.initializePool['v42'],
	v33Stage: stageCalls.initializePool['v33'],
	v42Stage: stageCalls.initializePool['v42'],
	v33Test: testCalls.initializePool['v33'],
	v42Test: testCalls.initializePool['v42'],
	v70Dev: devCalls.initializePool['v70'],
}

export const setReferenceAsset = {
	name: 'MulticollateralBondingCurvePool.set_reference_asset',
	v1: productionCalls.setReferenceAsset['v1'],
	v42: productionCalls.setReferenceAsset['v42'],
	v33Stage: stageCalls.setReferenceAsset['v33'],
	v42Stage: stageCalls.setReferenceAsset['v42'],
	v33Test: testCalls.setReferenceAsset['v33'],
	v42Test: testCalls.setReferenceAsset['v42'],
	v70Dev: devCalls.setReferenceAsset['v70'],
}

export const setOptionalRewardMultiplier = {
	name: 'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
	v1: productionCalls.setOptionalRewardMultiplier['v1'],
	v42: productionCalls.setOptionalRewardMultiplier['v42'],
	v33Stage: stageCalls.setOptionalRewardMultiplier['v33'],
	v42Stage: stageCalls.setOptionalRewardMultiplier['v42'],
	v33Test: testCalls.setOptionalRewardMultiplier['v33'],
	v42Test: testCalls.setOptionalRewardMultiplier['v42'],
	v70Dev: devCalls.setOptionalRewardMultiplier['v70'],
}

export const claimIncentives = {
	name: 'MulticollateralBondingCurvePool.claim_incentives',
	v1: productionCalls.claimIncentives['v1'],
}

export const setPriceBias = {
	name: 'MulticollateralBondingCurvePool.set_price_bias',
	v22: productionCalls.setPriceBias['v22'],
	v33Stage: stageCalls.setPriceBias['v33'],
	v33Test: testCalls.setPriceBias['v33'],
	v70Dev: devCalls.setPriceBias['v70'],
}

export const setPriceChangeConfig = {
	name: 'MulticollateralBondingCurvePool.set_price_change_config',
	v22: productionCalls.setPriceChangeConfig['v22'],
	v33Stage: stageCalls.setPriceChangeConfig['v33'],
	v33Test: testCalls.setPriceChangeConfig['v33'],
	v70Dev: devCalls.setPriceChangeConfig['v70'],
}
