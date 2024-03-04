import * as productionEvents from '../../production/multicollateral-bonding-curve-pool/events'
import * as stageEvents from '../../stage/multicollateral-bonding-curve-pool/events'
import * as testEvents from '../../test/multicollateral-bonding-curve-pool/events'
import * as devEvents from '../../dev/multicollateral-bonding-curve-pool/events'


export const poolInitialized = {
	name: 'MulticollateralBondingCurvePool.PoolInitialized',
	v1: productionEvents.poolInitialized['v1'],
	v42: productionEvents.poolInitialized['v42'],
	v33Stage: stageEvents.poolInitialized['v33'],
	v42Stage: stageEvents.poolInitialized['v42'],
	v33Test: testEvents.poolInitialized['v33'],
	v42Test: testEvents.poolInitialized['v42'],
	v70Dev: devEvents.poolInitialized['v70'],
}

export const referenceAssetChanged = {
	name: 'MulticollateralBondingCurvePool.ReferenceAssetChanged',
	v1: productionEvents.referenceAssetChanged['v1'],
	v42: productionEvents.referenceAssetChanged['v42'],
	v33Stage: stageEvents.referenceAssetChanged['v33'],
	v42Stage: stageEvents.referenceAssetChanged['v42'],
	v33Test: testEvents.referenceAssetChanged['v33'],
	v42Test: testEvents.referenceAssetChanged['v42'],
	v70Dev: devEvents.referenceAssetChanged['v70'],
}

export const optionalRewardMultiplierUpdated = {
	name: 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
	v1: productionEvents.optionalRewardMultiplierUpdated['v1'],
	v42: productionEvents.optionalRewardMultiplierUpdated['v42'],
	v33Stage: stageEvents.optionalRewardMultiplierUpdated['v33'],
	v42Stage: stageEvents.optionalRewardMultiplierUpdated['v42'],
	v33Test: testEvents.optionalRewardMultiplierUpdated['v33'],
	v42Test: testEvents.optionalRewardMultiplierUpdated['v42'],
	v70Dev: devEvents.optionalRewardMultiplierUpdated['v70'],
}

export const priceBiasChanged = {
	name: 'MulticollateralBondingCurvePool.PriceBiasChanged',
	v22: productionEvents.priceBiasChanged['v22'],
	v33Stage: stageEvents.priceBiasChanged['v33'],
	v33Test: testEvents.priceBiasChanged['v33'],
	v70Dev: devEvents.priceBiasChanged['v70'],
}

export const priceChangeConfigChanged = {
	name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
	v22: productionEvents.priceChangeConfigChanged['v22'],
	v33Stage: stageEvents.priceChangeConfigChanged['v33'],
	v33Test: testEvents.priceChangeConfigChanged['v33'],
	v70Dev: devEvents.priceChangeConfigChanged['v70'],
}
