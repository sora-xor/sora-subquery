import * as productionStorage from '../../production/preimage/storage'
import * as stageStorage from '../../stage/preimage/storage'
import * as testStorage from '../../test/preimage/storage'
import * as devStorage from '../../dev/preimage/storage'


export const statusFor = {
	name: 'Preimage.StatusFor',
	v53: productionStorage.statusFor['v53'],
	v52Stage: stageStorage.statusFor['v52'],
	v52Test: testStorage.statusFor['v52'],
	v70Dev: devStorage.statusFor['v70'],
}

export const preimageFor = {
	name: 'Preimage.PreimageFor',
	v53: productionStorage.preimageFor['v53'],
	v52Stage: stageStorage.preimageFor['v52'],
	v52Test: testStorage.preimageFor['v52'],
	v70Dev: devStorage.preimageFor['v70'],
}
