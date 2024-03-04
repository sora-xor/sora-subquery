import * as productionStorage from '../../production/election-provider-multi-phase/storage'
import * as stageStorage from '../../stage/election-provider-multi-phase/storage'
import * as testStorage from '../../test/election-provider-multi-phase/storage'
import * as devStorage from '../../dev/election-provider-multi-phase/storage'


export const round = {
	name: 'ElectionProviderMultiPhase.Round',
	v42: productionStorage.round['v42'],
	v42Stage: stageStorage.round['v42'],
	v42Test: testStorage.round['v42'],
	v70Dev: devStorage.round['v70'],
}

export const currentPhase = {
	name: 'ElectionProviderMultiPhase.CurrentPhase',
	v42: productionStorage.currentPhase['v42'],
	v42Stage: stageStorage.currentPhase['v42'],
	v42Test: testStorage.currentPhase['v42'],
	v70Dev: devStorage.currentPhase['v70'],
}

export const queuedSolution = {
	name: 'ElectionProviderMultiPhase.QueuedSolution',
	v42: productionStorage.queuedSolution['v42'],
	v42Stage: stageStorage.queuedSolution['v42'],
	v42Test: testStorage.queuedSolution['v42'],
	v70Dev: devStorage.queuedSolution['v70'],
}

export const snapshot = {
	name: 'ElectionProviderMultiPhase.Snapshot',
	v42: productionStorage.snapshot['v42'],
	v42Stage: stageStorage.snapshot['v42'],
	v42Test: testStorage.snapshot['v42'],
	v70Dev: devStorage.snapshot['v70'],
}

export const desiredTargets = {
	name: 'ElectionProviderMultiPhase.DesiredTargets',
	v42: productionStorage.desiredTargets['v42'],
	v42Stage: stageStorage.desiredTargets['v42'],
	v42Test: testStorage.desiredTargets['v42'],
	v70Dev: devStorage.desiredTargets['v70'],
}

export const snapshotMetadata = {
	name: 'ElectionProviderMultiPhase.SnapshotMetadata',
	v42: productionStorage.snapshotMetadata['v42'],
	v42Stage: stageStorage.snapshotMetadata['v42'],
	v42Test: testStorage.snapshotMetadata['v42'],
	v70Dev: devStorage.snapshotMetadata['v70'],
}

export const signedSubmissionNextIndex = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionNextIndex',
	v42: productionStorage.signedSubmissionNextIndex['v42'],
	v42Stage: stageStorage.signedSubmissionNextIndex['v42'],
	v42Test: testStorage.signedSubmissionNextIndex['v42'],
	v70Dev: devStorage.signedSubmissionNextIndex['v70'],
}

export const signedSubmissionIndices = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionIndices',
	v42: productionStorage.signedSubmissionIndices['v42'],
	v53: productionStorage.signedSubmissionIndices['v53'],
	v42Stage: stageStorage.signedSubmissionIndices['v42'],
	v52Stage: stageStorage.signedSubmissionIndices['v52'],
	v42Test: testStorage.signedSubmissionIndices['v42'],
	v52Test: testStorage.signedSubmissionIndices['v52'],
	v70Dev: devStorage.signedSubmissionIndices['v70'],
}

export const signedSubmissionsMap = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionsMap',
	v42: productionStorage.signedSubmissionsMap['v42'],
	v42Stage: stageStorage.signedSubmissionsMap['v42'],
	v42Test: testStorage.signedSubmissionsMap['v42'],
	v70Dev: devStorage.signedSubmissionsMap['v70'],
}

export const minimumUntrustedScore = {
	name: 'ElectionProviderMultiPhase.MinimumUntrustedScore',
	v42: productionStorage.minimumUntrustedScore['v42'],
	v42Stage: stageStorage.minimumUntrustedScore['v42'],
	v42Test: testStorage.minimumUntrustedScore['v42'],
	v70Dev: devStorage.minimumUntrustedScore['v70'],
}
