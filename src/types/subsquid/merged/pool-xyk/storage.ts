import * as productionStorage from '../../production/pool-xyk/storage'
import * as stageStorage from '../../stage/pool-xyk/storage'
import * as testStorage from '../../test/pool-xyk/storage'
import * as devStorage from '../../dev/pool-xyk/storage'


export const reserves = {
	name: 'PoolXyk.Reserves',
	v1: productionStorage.reserves['v1'],
	v42: productionStorage.reserves['v42'],
	v33Stage: stageStorage.reserves['v33'],
	v42Stage: stageStorage.reserves['v42'],
	v33Test: testStorage.reserves['v33'],
	v42Test: testStorage.reserves['v42'],
	v70Dev: devStorage.reserves['v70'],
}

export const markerTokensIndex = {
	name: 'PoolXyk.MarkerTokensIndex',
	v1: productionStorage.markerTokensIndex['v1'],
}

export const properties = {
	name: 'PoolXyk.Properties',
	v1: productionStorage.properties['v1'],
	v7: productionStorage.properties['v7'],
	v42: productionStorage.properties['v42'],
	v33Stage: stageStorage.properties['v33'],
	v42Stage: stageStorage.properties['v42'],
	v33Test: testStorage.properties['v33'],
	v42Test: testStorage.properties['v42'],
	v70Dev: devStorage.properties['v70'],
}

export const poolProviders = {
	name: 'PoolXyk.PoolProviders',
	v7: productionStorage.poolProviders['v7'],
	v33Stage: stageStorage.poolProviders['v33'],
	v33Test: testStorage.poolProviders['v33'],
	v70Dev: devStorage.poolProviders['v70'],
}

export const totalIssuances = {
	name: 'PoolXyk.TotalIssuances',
	v7: productionStorage.totalIssuances['v7'],
	v33Stage: stageStorage.totalIssuances['v33'],
	v33Test: testStorage.totalIssuances['v33'],
	v70Dev: devStorage.totalIssuances['v70'],
}

export const accountPools = {
	name: 'PoolXyk.AccountPools',
	v19: productionStorage.accountPools['v19'],
	v42: productionStorage.accountPools['v42'],
	v33Stage: stageStorage.accountPools['v33'],
	v42Stage: stageStorage.accountPools['v42'],
	v33Test: testStorage.accountPools['v33'],
	v42Test: testStorage.accountPools['v42'],
	v70Dev: devStorage.accountPools['v70'],
}
