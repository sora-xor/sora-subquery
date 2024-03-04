import * as productionEvents from '../../production/elections-phragmen/events'
import * as stageEvents from '../../stage/elections-phragmen/events'
import * as testEvents from '../../test/elections-phragmen/events'
import * as devEvents from '../../dev/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	v1: productionEvents.newTerm['v1'],
	v42: productionEvents.newTerm['v42'],
	v33Stage: stageEvents.newTerm['v33'],
	v42Stage: stageEvents.newTerm['v42'],
	v33Test: testEvents.newTerm['v33'],
	v42Test: testEvents.newTerm['v42'],
	v70Dev: devEvents.newTerm['v70'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	v1: productionEvents.emptyTerm['v1'],
	v33Stage: stageEvents.emptyTerm['v33'],
	v33Test: testEvents.emptyTerm['v33'],
	v70Dev: devEvents.emptyTerm['v70'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	v1: productionEvents.electionError['v1'],
	v33Stage: stageEvents.electionError['v33'],
	v33Test: testEvents.electionError['v33'],
	v70Dev: devEvents.electionError['v70'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	v1: productionEvents.memberKicked['v1'],
	v42: productionEvents.memberKicked['v42'],
	v33Stage: stageEvents.memberKicked['v33'],
	v42Stage: stageEvents.memberKicked['v42'],
	v33Test: testEvents.memberKicked['v33'],
	v42Test: testEvents.memberKicked['v42'],
	v70Dev: devEvents.memberKicked['v70'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	v1: productionEvents.renounced['v1'],
	v42: productionEvents.renounced['v42'],
	v33Stage: stageEvents.renounced['v33'],
	v42Stage: stageEvents.renounced['v42'],
	v33Test: testEvents.renounced['v33'],
	v42Test: testEvents.renounced['v42'],
	v70Dev: devEvents.renounced['v70'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	v1: productionEvents.candidateSlashed['v1'],
	v42: productionEvents.candidateSlashed['v42'],
	v33Stage: stageEvents.candidateSlashed['v33'],
	v42Stage: stageEvents.candidateSlashed['v42'],
	v33Test: testEvents.candidateSlashed['v33'],
	v42Test: testEvents.candidateSlashed['v42'],
	v70Dev: devEvents.candidateSlashed['v70'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	v1: productionEvents.seatHolderSlashed['v1'],
	v42: productionEvents.seatHolderSlashed['v42'],
	v33Stage: stageEvents.seatHolderSlashed['v33'],
	v42Stage: stageEvents.seatHolderSlashed['v42'],
	v33Test: testEvents.seatHolderSlashed['v33'],
	v42Test: testEvents.seatHolderSlashed['v42'],
	v70Dev: devEvents.seatHolderSlashed['v70'],
}
