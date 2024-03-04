import * as productionEvents from '../../production/iroha-migration/events'
import * as stageEvents from '../../stage/iroha-migration/events'
import * as testEvents from '../../test/iroha-migration/events'
import * as devEvents from '../../dev/iroha-migration/events'


export const migrated = {
	name: 'IrohaMigration.Migrated',
	v1: productionEvents.migrated['v1'],
	v42: productionEvents.migrated['v42'],
	v33Stage: stageEvents.migrated['v33'],
	v42Stage: stageEvents.migrated['v42'],
	v33Test: testEvents.migrated['v33'],
	v42Test: testEvents.migrated['v42'],
	v70Dev: devEvents.migrated['v70'],
}
