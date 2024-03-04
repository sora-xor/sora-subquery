import * as productionStorage from '../../production/permissions/storage'
import * as stageStorage from '../../stage/permissions/storage'
import * as testStorage from '../../test/permissions/storage'
import * as devStorage from '../../dev/permissions/storage'


export const owners = {
	name: 'Permissions.Owners',
	v1: productionStorage.owners['v1'],
	v33Stage: stageStorage.owners['v33'],
	v33Test: testStorage.owners['v33'],
	v70Dev: devStorage.owners['v70'],
}

export const modes = {
	name: 'Permissions.Modes',
	v1: productionStorage.modes['v1'],
}

export const permissions = {
	name: 'Permissions.Permissions',
	v1: productionStorage.permissions['v1'],
	v33Stage: stageStorage.permissions['v33'],
	v33Test: testStorage.permissions['v33'],
	v70Dev: devStorage.permissions['v70'],
}
