import * as productionStorage from '../../production/xor-fee/storage'
import * as stageStorage from '../../stage/xor-fee/storage'
import * as testStorage from '../../test/xor-fee/storage'
import * as devStorage from '../../dev/xor-fee/storage'


export const xorToVal = {
	name: 'XorFee.XorToVal',
	v7: productionStorage.xorToVal['v7'],
	v33Stage: stageStorage.xorToVal['v33'],
	v33Test: testStorage.xorToVal['v33'],
	v70Dev: devStorage.xorToVal['v70'],
}

export const multiplier = {
	name: 'XorFee.Multiplier',
	v37: productionStorage.multiplier['v37'],
	v37Stage: stageStorage.multiplier['v37'],
	v37Test: testStorage.multiplier['v37'],
	v70Dev: devStorage.multiplier['v70'],
}
