import * as productionStorage from '../../production/babe/storage'
import * as stageStorage from '../../stage/babe/storage'
import * as testStorage from '../../test/babe/storage'
import * as devStorage from '../../dev/babe/storage'


export const epochIndex = {
	name: 'Babe.EpochIndex',
	v1: productionStorage.epochIndex['v1'],
	v33Stage: stageStorage.epochIndex['v33'],
	v33Test: testStorage.epochIndex['v33'],
	v70Dev: devStorage.epochIndex['v70'],
}

export const authorities = {
	name: 'Babe.Authorities',
	v1: productionStorage.authorities['v1'],
	v33Stage: stageStorage.authorities['v33'],
	v33Test: testStorage.authorities['v33'],
	v70Dev: devStorage.authorities['v70'],
}

export const genesisSlot = {
	name: 'Babe.GenesisSlot',
	v1: productionStorage.genesisSlot['v1'],
	v33Stage: stageStorage.genesisSlot['v33'],
	v33Test: testStorage.genesisSlot['v33'],
	v70Dev: devStorage.genesisSlot['v70'],
}

export const currentSlot = {
	name: 'Babe.CurrentSlot',
	v1: productionStorage.currentSlot['v1'],
	v33Stage: stageStorage.currentSlot['v33'],
	v33Test: testStorage.currentSlot['v33'],
	v70Dev: devStorage.currentSlot['v70'],
}

export const randomness = {
	name: 'Babe.Randomness',
	v1: productionStorage.randomness['v1'],
	v33Stage: stageStorage.randomness['v33'],
	v33Test: testStorage.randomness['v33'],
	v70Dev: devStorage.randomness['v70'],
}

export const nextEpochConfig = {
	name: 'Babe.NextEpochConfig',
	v1: productionStorage.nextEpochConfig['v1'],
	v42: productionStorage.nextEpochConfig['v42'],
	v33Stage: stageStorage.nextEpochConfig['v33'],
	v42Stage: stageStorage.nextEpochConfig['v42'],
	v33Test: testStorage.nextEpochConfig['v33'],
	v42Test: testStorage.nextEpochConfig['v42'],
	v70Dev: devStorage.nextEpochConfig['v70'],
}

export const nextRandomness = {
	name: 'Babe.NextRandomness',
	v1: productionStorage.nextRandomness['v1'],
	v33Stage: stageStorage.nextRandomness['v33'],
	v33Test: testStorage.nextRandomness['v33'],
	v70Dev: devStorage.nextRandomness['v70'],
}

export const nextAuthorities = {
	name: 'Babe.NextAuthorities',
	v1: productionStorage.nextAuthorities['v1'],
	v33Stage: stageStorage.nextAuthorities['v33'],
	v33Test: testStorage.nextAuthorities['v33'],
	v70Dev: devStorage.nextAuthorities['v70'],
}

export const segmentIndex = {
	name: 'Babe.SegmentIndex',
	v1: productionStorage.segmentIndex['v1'],
	v33Stage: stageStorage.segmentIndex['v33'],
	v33Test: testStorage.segmentIndex['v33'],
	v70Dev: devStorage.segmentIndex['v70'],
}

export const underConstruction = {
	name: 'Babe.UnderConstruction',
	v1: productionStorage.underConstruction['v1'],
	v33Stage: stageStorage.underConstruction['v33'],
	v33Test: testStorage.underConstruction['v33'],
	v70Dev: devStorage.underConstruction['v70'],
}

export const initialized = {
	name: 'Babe.Initialized',
	v1: productionStorage.initialized['v1'],
	v42: productionStorage.initialized['v42'],
	v33Stage: stageStorage.initialized['v33'],
	v42Stage: stageStorage.initialized['v42'],
	v33Test: testStorage.initialized['v33'],
	v42Test: testStorage.initialized['v42'],
	v70Dev: devStorage.initialized['v70'],
}

export const authorVrfRandomness = {
	name: 'Babe.AuthorVrfRandomness',
	v1: productionStorage.authorVrfRandomness['v1'],
	v33Stage: stageStorage.authorVrfRandomness['v33'],
	v33Test: testStorage.authorVrfRandomness['v33'],
	v70Dev: devStorage.authorVrfRandomness['v70'],
}

export const lateness = {
	name: 'Babe.Lateness',
	v1: productionStorage.lateness['v1'],
	v33Stage: stageStorage.lateness['v33'],
	v33Test: testStorage.lateness['v33'],
	v70Dev: devStorage.lateness['v70'],
}

export const pendingEpochConfigChange = {
	name: 'Babe.PendingEpochConfigChange',
	v42: productionStorage.pendingEpochConfigChange['v42'],
	v42Stage: stageStorage.pendingEpochConfigChange['v42'],
	v42Test: testStorage.pendingEpochConfigChange['v42'],
	v70Dev: devStorage.pendingEpochConfigChange['v70'],
}

export const epochStart = {
	name: 'Babe.EpochStart',
	v42: productionStorage.epochStart['v42'],
	v42Stage: stageStorage.epochStart['v42'],
	v42Test: testStorage.epochStart['v42'],
	v70Dev: devStorage.epochStart['v70'],
}

export const epochConfig = {
	name: 'Babe.EpochConfig',
	v42: productionStorage.epochConfig['v42'],
	v42Stage: stageStorage.epochConfig['v42'],
	v42Test: testStorage.epochConfig['v42'],
	v70Dev: devStorage.epochConfig['v70'],
}
