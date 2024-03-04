import * as productionStorage from '../../production/oracle-proxy/storage'
import * as stageStorage from '../../stage/oracle-proxy/storage'
import * as testStorage from '../../test/oracle-proxy/storage'
import * as devStorage from '../../dev/oracle-proxy/storage'


export const enabledOracles = {
	name: 'OracleProxy.EnabledOracles',
	v45: productionStorage.enabledOracles['v45'],
	v45Stage: stageStorage.enabledOracles['v45'],
	v45Test: testStorage.enabledOracles['v45'],
	v70Dev: devStorage.enabledOracles['v70'],
}

export const symbolProviders = {
	name: 'OracleProxy.SymbolProviders',
	v45: productionStorage.symbolProviders['v45'],
	v45Stage: stageStorage.symbolProviders['v45'],
	v45Test: testStorage.symbolProviders['v45'],
	v70Dev: devStorage.symbolProviders['v70'],
}
