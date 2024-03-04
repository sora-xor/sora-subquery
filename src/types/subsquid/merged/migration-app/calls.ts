import * as stageCalls from '../../stage/migration-app/calls'
import * as testCalls from '../../test/migration-app/calls'
import * as devCalls from '../../dev/migration-app/calls'


export const migrateErc20 = {
	name: 'MigrationApp.migrate_erc20',
	v52Stage: stageCalls.migrateErc20['v52'],
	v54Stage: stageCalls.migrateErc20['v54'],
	v52Test: testCalls.migrateErc20['v52'],
	v54Test: testCalls.migrateErc20['v54'],
	v70Dev: devCalls.migrateErc20['v70'],
}

export const migrateSidechain = {
	name: 'MigrationApp.migrate_sidechain',
	v52Stage: stageCalls.migrateSidechain['v52'],
	v54Stage: stageCalls.migrateSidechain['v54'],
	v52Test: testCalls.migrateSidechain['v52'],
	v54Test: testCalls.migrateSidechain['v54'],
	v70Dev: devCalls.migrateSidechain['v70'],
}

export const migrateEth = {
	name: 'MigrationApp.migrate_eth',
	v52Stage: stageCalls.migrateEth['v52'],
	v52Test: testCalls.migrateEth['v52'],
	v70Dev: devCalls.migrateEth['v70'],
}

export const registerNetwork = {
	name: 'MigrationApp.register_network',
	v52Stage: stageCalls.registerNetwork['v52'],
	v52Test: testCalls.registerNetwork['v52'],
	v70Dev: devCalls.registerNetwork['v70'],
}
