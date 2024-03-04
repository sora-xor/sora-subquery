import * as stageEvents from '../../stage/migration-app/events'
import * as testEvents from '../../test/migration-app/events'
import * as devEvents from '../../dev/migration-app/events'


export const erc20Migrated = {
	name: 'MigrationApp.Erc20Migrated',
	v52Stage: stageEvents.erc20Migrated['v52'],
	v52Test: testEvents.erc20Migrated['v52'],
	v70Dev: devEvents.erc20Migrated['v70'],
}

export const sidechainMigrated = {
	name: 'MigrationApp.SidechainMigrated',
	v52Stage: stageEvents.sidechainMigrated['v52'],
	v52Test: testEvents.sidechainMigrated['v52'],
	v70Dev: devEvents.sidechainMigrated['v70'],
}

export const ethMigrated = {
	name: 'MigrationApp.EthMigrated',
	v52Stage: stageEvents.ethMigrated['v52'],
	v52Test: testEvents.ethMigrated['v52'],
	v70Dev: devEvents.ethMigrated['v70'],
}
