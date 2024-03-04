import * as productionStorage from '../../production/dex-manager/storage'
import * as stageStorage from '../../stage/dex-manager/storage'
import * as testStorage from '../../test/dex-manager/storage'
import * as devStorage from '../../dev/dex-manager/storage'


export const dexInfos = {
	name: 'DexManager.DexInfos',
	v1: productionStorage.dexInfos['v1'],
	v42: productionStorage.dexInfos['v42'],
	v45: productionStorage.dexInfos['v45'],
	v33Stage: stageStorage.dexInfos['v33'],
	v42Stage: stageStorage.dexInfos['v42'],
	v44Stage: stageStorage.dexInfos['v44'],
	v33Test: testStorage.dexInfos['v33'],
	v42Test: testStorage.dexInfos['v42'],
	v44Test: testStorage.dexInfos['v44'],
	v70Dev: devStorage.dexInfos['v70'],
}
