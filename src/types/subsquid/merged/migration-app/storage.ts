import * as stageStorage from '../../stage/migration-app/storage'
import * as testStorage from '../../test/migration-app/storage'
import * as devStorage from '../../dev/migration-app/storage'


export const addresses = {
	name: 'MigrationApp.Addresses',
	v52Stage: stageStorage.addresses['v52'],
	v52Test: testStorage.addresses['v52'],
	v70Dev: devStorage.addresses['v70'],
}
