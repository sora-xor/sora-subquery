import * as productionStorage from '../../production/price-tools/storage'
import * as stageStorage from '../../stage/price-tools/storage'
import * as testStorage from '../../test/price-tools/storage'
import * as devStorage from '../../dev/price-tools/storage'


export const priceInfos = {
	name: 'PriceTools.PriceInfos',
	v7: productionStorage.priceInfos['v7'],
	v42: productionStorage.priceInfos['v42'],
	v45: productionStorage.priceInfos['v45'],
	v33Stage: stageStorage.priceInfos['v33'],
	v42Stage: stageStorage.priceInfos['v42'],
	v44Stage: stageStorage.priceInfos['v44'],
	v33Test: testStorage.priceInfos['v33'],
	v42Test: testStorage.priceInfos['v42'],
	v44Test: testStorage.priceInfos['v44'],
	v70Dev: devStorage.priceInfos['v70'],
}
