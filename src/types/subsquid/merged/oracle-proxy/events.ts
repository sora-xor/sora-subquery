import * as productionEvents from '../../production/oracle-proxy/events'
import * as stageEvents from '../../stage/oracle-proxy/events'
import * as testEvents from '../../test/oracle-proxy/events'
import * as devEvents from '../../dev/oracle-proxy/events'


export const oracleEnabled = {
	name: 'OracleProxy.OracleEnabled',
	v45: productionEvents.oracleEnabled['v45'],
	v45Stage: stageEvents.oracleEnabled['v45'],
	v45Test: testEvents.oracleEnabled['v45'],
	v70Dev: devEvents.oracleEnabled['v70'],
}

export const oracleDisabled = {
	name: 'OracleProxy.OracleDisabled',
	v45: productionEvents.oracleDisabled['v45'],
	v45Stage: stageEvents.oracleDisabled['v45'],
	v45Test: testEvents.oracleDisabled['v45'],
	v70Dev: devEvents.oracleDisabled['v70'],
}
