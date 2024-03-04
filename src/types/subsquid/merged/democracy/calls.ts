import * as productionCalls from '../../production/democracy/calls'
import * as stageCalls from '../../stage/democracy/calls'
import * as testCalls from '../../test/democracy/calls'
import * as devCalls from '../../dev/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	v1: productionCalls.propose['v1'],
	v53: productionCalls.propose['v53'],
	v33Stage: stageCalls.propose['v33'],
	v52Stage: stageCalls.propose['v52'],
	v33Test: testCalls.propose['v33'],
	v52Test: testCalls.propose['v52'],
	v70Dev: devCalls.propose['v70'],
}

export const second = {
	name: 'Democracy.second',
	v1: productionCalls.second['v1'],
	v53: productionCalls.second['v53'],
	v33Stage: stageCalls.second['v33'],
	v52Stage: stageCalls.second['v52'],
	v33Test: testCalls.second['v33'],
	v52Test: testCalls.second['v52'],
	v70Dev: devCalls.second['v70'],
}

export const vote = {
	name: 'Democracy.vote',
	v1: productionCalls.vote['v1'],
	v42: productionCalls.vote['v42'],
	v33Stage: stageCalls.vote['v33'],
	v42Stage: stageCalls.vote['v42'],
	v33Test: testCalls.vote['v33'],
	v42Test: testCalls.vote['v42'],
	v70Dev: devCalls.vote['v70'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	v1: productionCalls.emergencyCancel['v1'],
	v33Stage: stageCalls.emergencyCancel['v33'],
	v33Test: testCalls.emergencyCancel['v33'],
	v70Dev: devCalls.emergencyCancel['v70'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	v1: productionCalls.externalPropose['v1'],
	v53: productionCalls.externalPropose['v53'],
	v33Stage: stageCalls.externalPropose['v33'],
	v52Stage: stageCalls.externalPropose['v52'],
	v33Test: testCalls.externalPropose['v33'],
	v52Test: testCalls.externalPropose['v52'],
	v70Dev: devCalls.externalPropose['v70'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	v1: productionCalls.externalProposeMajority['v1'],
	v53: productionCalls.externalProposeMajority['v53'],
	v33Stage: stageCalls.externalProposeMajority['v33'],
	v52Stage: stageCalls.externalProposeMajority['v52'],
	v33Test: testCalls.externalProposeMajority['v33'],
	v52Test: testCalls.externalProposeMajority['v52'],
	v70Dev: devCalls.externalProposeMajority['v70'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	v1: productionCalls.externalProposeDefault['v1'],
	v53: productionCalls.externalProposeDefault['v53'],
	v33Stage: stageCalls.externalProposeDefault['v33'],
	v52Stage: stageCalls.externalProposeDefault['v52'],
	v33Test: testCalls.externalProposeDefault['v33'],
	v52Test: testCalls.externalProposeDefault['v52'],
	v70Dev: devCalls.externalProposeDefault['v70'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	v1: productionCalls.fastTrack['v1'],
	v33Stage: stageCalls.fastTrack['v33'],
	v33Test: testCalls.fastTrack['v33'],
	v70Dev: devCalls.fastTrack['v70'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	v1: productionCalls.vetoExternal['v1'],
	v33Stage: stageCalls.vetoExternal['v33'],
	v33Test: testCalls.vetoExternal['v33'],
	v70Dev: devCalls.vetoExternal['v70'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	v1: productionCalls.cancelReferendum['v1'],
	v33Stage: stageCalls.cancelReferendum['v33'],
	v33Test: testCalls.cancelReferendum['v33'],
	v70Dev: devCalls.cancelReferendum['v70'],
}

export const cancelQueued = {
	name: 'Democracy.cancel_queued',
	v1: productionCalls.cancelQueued['v1'],
	v33Stage: stageCalls.cancelQueued['v33'],
	v33Test: testCalls.cancelQueued['v33'],
}

export const delegate = {
	name: 'Democracy.delegate',
	v1: productionCalls.delegate['v1'],
	v33Stage: stageCalls.delegate['v33'],
	v33Test: testCalls.delegate['v33'],
	v70Dev: devCalls.delegate['v70'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	v1: productionCalls.undelegate['v1'],
	v33Stage: stageCalls.undelegate['v33'],
	v33Test: testCalls.undelegate['v33'],
	v70Dev: devCalls.undelegate['v70'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	v1: productionCalls.clearPublicProposals['v1'],
	v33Stage: stageCalls.clearPublicProposals['v33'],
	v33Test: testCalls.clearPublicProposals['v33'],
	v70Dev: devCalls.clearPublicProposals['v70'],
}

export const notePreimage = {
	name: 'Democracy.note_preimage',
	v1: productionCalls.notePreimage['v1'],
	v33Stage: stageCalls.notePreimage['v33'],
	v33Test: testCalls.notePreimage['v33'],
}

export const notePreimageOperational = {
	name: 'Democracy.note_preimage_operational',
	v1: productionCalls.notePreimageOperational['v1'],
	v33Stage: stageCalls.notePreimageOperational['v33'],
	v33Test: testCalls.notePreimageOperational['v33'],
}

export const noteImminentPreimage = {
	name: 'Democracy.note_imminent_preimage',
	v1: productionCalls.noteImminentPreimage['v1'],
	v33Stage: stageCalls.noteImminentPreimage['v33'],
	v33Test: testCalls.noteImminentPreimage['v33'],
}

export const noteImminentPreimageOperational = {
	name: 'Democracy.note_imminent_preimage_operational',
	v1: productionCalls.noteImminentPreimageOperational['v1'],
	v33Stage: stageCalls.noteImminentPreimageOperational['v33'],
	v33Test: testCalls.noteImminentPreimageOperational['v33'],
}

export const reapPreimage = {
	name: 'Democracy.reap_preimage',
	v1: productionCalls.reapPreimage['v1'],
	v33Stage: stageCalls.reapPreimage['v33'],
	v33Test: testCalls.reapPreimage['v33'],
}

export const unlock = {
	name: 'Democracy.unlock',
	v1: productionCalls.unlock['v1'],
	v33Stage: stageCalls.unlock['v33'],
	v33Test: testCalls.unlock['v33'],
	v70Dev: devCalls.unlock['v70'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	v1: productionCalls.removeVote['v1'],
	v33Stage: stageCalls.removeVote['v33'],
	v33Test: testCalls.removeVote['v33'],
	v70Dev: devCalls.removeVote['v70'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	v1: productionCalls.removeOtherVote['v1'],
	v33Stage: stageCalls.removeOtherVote['v33'],
	v33Test: testCalls.removeOtherVote['v33'],
	v70Dev: devCalls.removeOtherVote['v70'],
}

export const enactProposal = {
	name: 'Democracy.enact_proposal',
	v1: productionCalls.enactProposal['v1'],
	v33Stage: stageCalls.enactProposal['v33'],
	v33Test: testCalls.enactProposal['v33'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	v1: productionCalls.blacklist['v1'],
	v33Stage: stageCalls.blacklist['v33'],
	v33Test: testCalls.blacklist['v33'],
	v70Dev: devCalls.blacklist['v70'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	v1: productionCalls.cancelProposal['v1'],
	v33Stage: stageCalls.cancelProposal['v33'],
	v33Test: testCalls.cancelProposal['v33'],
	v70Dev: devCalls.cancelProposal['v70'],
}
