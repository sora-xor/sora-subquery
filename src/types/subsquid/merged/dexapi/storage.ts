import * as productionStorage from '../../production/dexapi/storage'
import * as stageStorage from '../../stage/dexapi/storage'
import * as testStorage from '../../test/dexapi/storage'
import * as devStorage from '../../dev/dexapi/storage'


export const enabledSourceTypes = {
	name: 'Dexapi.EnabledSourceTypes',
	v1: productionStorage.enabledSourceTypes['v1'],
	v33Stage: stageStorage.enabledSourceTypes['v33'],
	v69Stage: stageStorage.enabledSourceTypes['v69'],
	v33Test: testStorage.enabledSourceTypes['v33'],
	v69Test: testStorage.enabledSourceTypes['v69'],
	v70Dev: devStorage.enabledSourceTypes['v70'],
}
