import * as productionStorage from '../../production/elections-phragmen/storage'
import * as stageStorage from '../../stage/elections-phragmen/storage'
import * as testStorage from '../../test/elections-phragmen/storage'
import * as devStorage from '../../dev/elections-phragmen/storage'


export const members = {
	name: 'ElectionsPhragmen.Members',
	v1: productionStorage.members['v1'],
	v33Stage: stageStorage.members['v33'],
	v33Test: testStorage.members['v33'],
	v70Dev: devStorage.members['v70'],
}

export const runnersUp = {
	name: 'ElectionsPhragmen.RunnersUp',
	v1: productionStorage.runnersUp['v1'],
	v33Stage: stageStorage.runnersUp['v33'],
	v33Test: testStorage.runnersUp['v33'],
	v70Dev: devStorage.runnersUp['v70'],
}

export const candidates = {
	name: 'ElectionsPhragmen.Candidates',
	v1: productionStorage.candidates['v1'],
	v33Stage: stageStorage.candidates['v33'],
	v33Test: testStorage.candidates['v33'],
	v70Dev: devStorage.candidates['v70'],
}

export const electionRounds = {
	name: 'ElectionsPhragmen.ElectionRounds',
	v1: productionStorage.electionRounds['v1'],
	v33Stage: stageStorage.electionRounds['v33'],
	v33Test: testStorage.electionRounds['v33'],
	v70Dev: devStorage.electionRounds['v70'],
}

export const voting = {
	name: 'ElectionsPhragmen.Voting',
	v1: productionStorage.voting['v1'],
	v33Stage: stageStorage.voting['v33'],
	v33Test: testStorage.voting['v33'],
	v70Dev: devStorage.voting['v70'],
}
