import * as stageStorage from '../../stage/eth-app/storage'
import * as testStorage from '../../test/eth-app/storage'
import * as devStorage from '../../dev/eth-app/storage'


export const addresses = {
	name: 'EthApp.Addresses',
	v52Stage: stageStorage.addresses['v52'],
	v54Stage: stageStorage.addresses['v54'],
	v52Test: testStorage.addresses['v52'],
	v54Test: testStorage.addresses['v54'],
	v70Dev: devStorage.addresses['v70'],
}
