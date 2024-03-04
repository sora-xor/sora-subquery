import * as stageStorage from '../../stage/mmr/storage'
import * as testStorage from '../../test/mmr/storage'
import * as devStorage from '../../dev/mmr/storage'


export const rootHash = {
	name: 'Mmr.RootHash',
	v52Stage: stageStorage.rootHash['v52'],
	v52Test: testStorage.rootHash['v52'],
	v70Dev: devStorage.rootHash['v70'],
}

export const numberOfLeaves = {
	name: 'Mmr.NumberOfLeaves',
	v52Stage: stageStorage.numberOfLeaves['v52'],
	v52Test: testStorage.numberOfLeaves['v52'],
	v70Dev: devStorage.numberOfLeaves['v70'],
}

export const nodes = {
	name: 'Mmr.Nodes',
	v52Stage: stageStorage.nodes['v52'],
	v52Test: testStorage.nodes['v52'],
	v70Dev: devStorage.nodes['v70'],
}
