import * as productionStorage from '../../production/trading-pair/storage'
import * as stageStorage from '../../stage/trading-pair/storage'
import * as testStorage from '../../test/trading-pair/storage'
import * as devStorage from '../../dev/trading-pair/storage'


export const enabledSources = {
	name: 'TradingPair.EnabledSources',
	v1: productionStorage.enabledSources['v1'],
	v42: productionStorage.enabledSources['v42'],
	v33Stage: stageStorage.enabledSources['v33'],
	v42Stage: stageStorage.enabledSources['v42'],
	v69Stage: stageStorage.enabledSources['v69'],
	v33Test: testStorage.enabledSources['v33'],
	v42Test: testStorage.enabledSources['v42'],
	v69Test: testStorage.enabledSources['v69'],
	v70Dev: devStorage.enabledSources['v70'],
}

export const lockedLiquiditySources = {
	name: 'TradingPair.LockedLiquiditySources',
	v38: productionStorage.lockedLiquiditySources['v38'],
	v38Stage: stageStorage.lockedLiquiditySources['v38'],
	v69Stage: stageStorage.lockedLiquiditySources['v69'],
	v38Test: testStorage.lockedLiquiditySources['v38'],
	v69Test: testStorage.lockedLiquiditySources['v69'],
	v70Dev: devStorage.lockedLiquiditySources['v70'],
}
