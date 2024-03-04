import * as stageStorage from '../../stage/mmr-leaf/storage'
import * as testStorage from '../../test/mmr-leaf/storage'
import * as devStorage from '../../dev/mmr-leaf/storage'


export const beefyAuthorities = {
	name: 'MmrLeaf.BeefyAuthorities',
	v52Stage: stageStorage.beefyAuthorities['v52'],
	v52Test: testStorage.beefyAuthorities['v52'],
	v70Dev: devStorage.beefyAuthorities['v70'],
}

export const beefyNextAuthorities = {
	name: 'MmrLeaf.BeefyNextAuthorities',
	v52Stage: stageStorage.beefyNextAuthorities['v52'],
	v52Test: testStorage.beefyNextAuthorities['v52'],
	v70Dev: devStorage.beefyNextAuthorities['v70'],
}
