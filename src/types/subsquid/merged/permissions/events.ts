import * as productionEvents from '../../production/permissions/events'
import * as stageEvents from '../../stage/permissions/events'
import * as testEvents from '../../test/permissions/events'
import * as devEvents from '../../dev/permissions/events'


export const permissionGranted = {
	name: 'Permissions.PermissionGranted',
	v1: productionEvents.permissionGranted['v1'],
	v33Stage: stageEvents.permissionGranted['v33'],
	v33Test: testEvents.permissionGranted['v33'],
	v70Dev: devEvents.permissionGranted['v70'],
}

export const permissionTransfered = {
	name: 'Permissions.PermissionTransfered',
	v1: productionEvents.permissionTransfered['v1'],
	v33Stage: stageEvents.permissionTransfered['v33'],
	v33Test: testEvents.permissionTransfered['v33'],
	v70Dev: devEvents.permissionTransfered['v70'],
}

export const permissionCreated = {
	name: 'Permissions.PermissionCreated',
	v1: productionEvents.permissionCreated['v1'],
	v33Stage: stageEvents.permissionCreated['v33'],
	v33Test: testEvents.permissionCreated['v33'],
	v70Dev: devEvents.permissionCreated['v70'],
}

export const permissionAssigned = {
	name: 'Permissions.PermissionAssigned',
	v1: productionEvents.permissionAssigned['v1'],
	v33Stage: stageEvents.permissionAssigned['v33'],
	v33Test: testEvents.permissionAssigned['v33'],
	v70Dev: devEvents.permissionAssigned['v70'],
}
