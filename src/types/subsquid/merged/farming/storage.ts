import * as productionStorage from '../../production/farming/storage'
import * as stageStorage from '../../stage/farming/storage'
import * as testStorage from '../../test/farming/storage'
import * as devStorage from '../../dev/farming/storage'


export const pools = {
	name: 'Farming.Pools',
	v7: productionStorage.pools['v7'],
	v33Stage: stageStorage.pools['v33'],
	v33Test: testStorage.pools['v33'],
	v70Dev: devStorage.pools['v70'],
}

export const poolFarmers = {
	name: 'Farming.PoolFarmers',
	v7: productionStorage.poolFarmers['v7'],
	v33Stage: stageStorage.poolFarmers['v33'],
	v33Test: testStorage.poolFarmers['v33'],
	v70Dev: devStorage.poolFarmers['v70'],
}

export const savedValues = {
	name: 'Farming.SavedValues',
	v7: productionStorage.savedValues['v7'],
}
