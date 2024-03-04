import * as productionEvents from '../../production/xst-pool/events'
import * as stageEvents from '../../stage/xst-pool/events'
import * as testEvents from '../../test/xst-pool/events'
import * as devEvents from '../../dev/xst-pool/events'


export const poolInitialized = {
	name: 'XSTPool.PoolInitialized',
	v19: productionEvents.poolInitialized['v19'],
	v42: productionEvents.poolInitialized['v42'],
	v33Stage: stageEvents.poolInitialized['v33'],
	v42Stage: stageEvents.poolInitialized['v42'],
	v33Test: testEvents.poolInitialized['v33'],
	v42Test: testEvents.poolInitialized['v42'],
}

export const referenceAssetChanged = {
	name: 'XSTPool.ReferenceAssetChanged',
	v19: productionEvents.referenceAssetChanged['v19'],
	v42: productionEvents.referenceAssetChanged['v42'],
	v33Stage: stageEvents.referenceAssetChanged['v33'],
	v42Stage: stageEvents.referenceAssetChanged['v42'],
	v33Test: testEvents.referenceAssetChanged['v33'],
	v42Test: testEvents.referenceAssetChanged['v42'],
	v70Dev: devEvents.referenceAssetChanged['v70'],
}

export const syntheticAssetEnabled = {
	name: 'XSTPool.SyntheticAssetEnabled',
	v45: productionEvents.syntheticAssetEnabled['v45'],
	v57: productionEvents.syntheticAssetEnabled['v57'],
	v44Stage: stageEvents.syntheticAssetEnabled['v44'],
	v54Stage: stageEvents.syntheticAssetEnabled['v54'],
	v44Test: testEvents.syntheticAssetEnabled['v44'],
	v54Test: testEvents.syntheticAssetEnabled['v54'],
	v70Dev: devEvents.syntheticAssetEnabled['v70'],
}

export const syntheticBaseAssetFloorPriceChanged = {
	name: 'XSTPool.SyntheticBaseAssetFloorPriceChanged',
	v45: productionEvents.syntheticBaseAssetFloorPriceChanged['v45'],
	v44Stage: stageEvents.syntheticBaseAssetFloorPriceChanged['v44'],
	v44Test: testEvents.syntheticBaseAssetFloorPriceChanged['v44'],
	v70Dev: devEvents.syntheticBaseAssetFloorPriceChanged['v70'],
}

export const syntheticAssetDisabled = {
	name: 'XSTPool.SyntheticAssetDisabled',
	v57: productionEvents.syntheticAssetDisabled['v57'],
	v54Stage: stageEvents.syntheticAssetDisabled['v54'],
	v54Test: testEvents.syntheticAssetDisabled['v54'],
	v70Dev: devEvents.syntheticAssetDisabled['v70'],
}

export const syntheticAssetFeeChanged = {
	name: 'XSTPool.SyntheticAssetFeeChanged',
	v57: productionEvents.syntheticAssetFeeChanged['v57'],
	v54Stage: stageEvents.syntheticAssetFeeChanged['v54'],
	v54Test: testEvents.syntheticAssetFeeChanged['v54'],
	v70Dev: devEvents.syntheticAssetFeeChanged['v70'],
}

export const syntheticAssetRemoved = {
	name: 'XSTPool.SyntheticAssetRemoved',
	v60: productionEvents.syntheticAssetRemoved['v60'],
	v60Stage: stageEvents.syntheticAssetRemoved['v60'],
	v60Test: testEvents.syntheticAssetRemoved['v60'],
	v70Dev: devEvents.syntheticAssetRemoved['v70'],
}
