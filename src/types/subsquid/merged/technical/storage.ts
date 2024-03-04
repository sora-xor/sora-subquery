import * as productionStorage from '../../production/technical/storage'
import * as stageStorage from '../../stage/technical/storage'
import * as testStorage from '../../test/technical/storage'
import * as devStorage from '../../dev/technical/storage'


export const techAccounts = {
	name: 'Technical.TechAccounts',
	v45: productionStorage.techAccounts['v45'],
	v46: productionStorage.techAccounts['v46'],
	v57: productionStorage.techAccounts['v57'],
	v44Stage: stageStorage.techAccounts['v44'],
	v46Stage: stageStorage.techAccounts['v46'],
	v54Stage: stageStorage.techAccounts['v54'],
	v44Test: testStorage.techAccounts['v44'],
	v46Test: testStorage.techAccounts['v46'],
	v54Test: testStorage.techAccounts['v54'],
	v70Dev: devStorage.techAccounts['v70'],
}
