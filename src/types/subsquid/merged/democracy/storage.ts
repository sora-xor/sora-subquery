import * as productionStorage from '../../production/democracy/storage'
import * as stageStorage from '../../stage/democracy/storage'
import * as testStorage from '../../test/democracy/storage'
import * as devStorage from '../../dev/democracy/storage'


export const publicPropCount = {
	name: 'Democracy.PublicPropCount',
	v1: productionStorage.publicPropCount['v1'],
	v33Stage: stageStorage.publicPropCount['v33'],
	v33Test: testStorage.publicPropCount['v33'],
	v70Dev: devStorage.publicPropCount['v70'],
}

export const publicProps = {
	name: 'Democracy.PublicProps',
	v1: productionStorage.publicProps['v1'],
	v53: productionStorage.publicProps['v53'],
	v33Stage: stageStorage.publicProps['v33'],
	v52Stage: stageStorage.publicProps['v52'],
	v33Test: testStorage.publicProps['v33'],
	v52Test: testStorage.publicProps['v52'],
	v70Dev: devStorage.publicProps['v70'],
}

export const depositOf = {
	name: 'Democracy.DepositOf',
	v1: productionStorage.depositOf['v1'],
	v33Stage: stageStorage.depositOf['v33'],
	v33Test: testStorage.depositOf['v33'],
	v70Dev: devStorage.depositOf['v70'],
}

export const preimages = {
	name: 'Democracy.Preimages',
	v1: productionStorage.preimages['v1'],
	v42: productionStorage.preimages['v42'],
	v33Stage: stageStorage.preimages['v33'],
	v42Stage: stageStorage.preimages['v42'],
	v33Test: testStorage.preimages['v33'],
	v42Test: testStorage.preimages['v42'],
}

export const referendumCount = {
	name: 'Democracy.ReferendumCount',
	v1: productionStorage.referendumCount['v1'],
	v33Stage: stageStorage.referendumCount['v33'],
	v33Test: testStorage.referendumCount['v33'],
	v70Dev: devStorage.referendumCount['v70'],
}

export const lowestUnbaked = {
	name: 'Democracy.LowestUnbaked',
	v1: productionStorage.lowestUnbaked['v1'],
	v33Stage: stageStorage.lowestUnbaked['v33'],
	v33Test: testStorage.lowestUnbaked['v33'],
	v70Dev: devStorage.lowestUnbaked['v70'],
}

export const referendumInfoOf = {
	name: 'Democracy.ReferendumInfoOf',
	v1: productionStorage.referendumInfoOf['v1'],
	v42: productionStorage.referendumInfoOf['v42'],
	v53: productionStorage.referendumInfoOf['v53'],
	v33Stage: stageStorage.referendumInfoOf['v33'],
	v42Stage: stageStorage.referendumInfoOf['v42'],
	v52Stage: stageStorage.referendumInfoOf['v52'],
	v33Test: testStorage.referendumInfoOf['v33'],
	v42Test: testStorage.referendumInfoOf['v42'],
	v52Test: testStorage.referendumInfoOf['v52'],
	v70Dev: devStorage.referendumInfoOf['v70'],
}

export const votingOf = {
	name: 'Democracy.VotingOf',
	v1: productionStorage.votingOf['v1'],
	v42: productionStorage.votingOf['v42'],
	v33Stage: stageStorage.votingOf['v33'],
	v42Stage: stageStorage.votingOf['v42'],
	v33Test: testStorage.votingOf['v33'],
	v42Test: testStorage.votingOf['v42'],
	v70Dev: devStorage.votingOf['v70'],
}

export const locks = {
	name: 'Democracy.Locks',
	v1: productionStorage.locks['v1'],
	v33Stage: stageStorage.locks['v33'],
	v33Test: testStorage.locks['v33'],
}

export const lastTabledWasExternal = {
	name: 'Democracy.LastTabledWasExternal',
	v1: productionStorage.lastTabledWasExternal['v1'],
	v33Stage: stageStorage.lastTabledWasExternal['v33'],
	v33Test: testStorage.lastTabledWasExternal['v33'],
	v70Dev: devStorage.lastTabledWasExternal['v70'],
}

export const nextExternal = {
	name: 'Democracy.NextExternal',
	v1: productionStorage.nextExternal['v1'],
	v53: productionStorage.nextExternal['v53'],
	v33Stage: stageStorage.nextExternal['v33'],
	v52Stage: stageStorage.nextExternal['v52'],
	v33Test: testStorage.nextExternal['v33'],
	v52Test: testStorage.nextExternal['v52'],
	v70Dev: devStorage.nextExternal['v70'],
}

export const blacklist = {
	name: 'Democracy.Blacklist',
	v1: productionStorage.blacklist['v1'],
	v33Stage: stageStorage.blacklist['v33'],
	v33Test: testStorage.blacklist['v33'],
	v70Dev: devStorage.blacklist['v70'],
}

export const cancellations = {
	name: 'Democracy.Cancellations',
	v1: productionStorage.cancellations['v1'],
	v33Stage: stageStorage.cancellations['v33'],
	v33Test: testStorage.cancellations['v33'],
	v70Dev: devStorage.cancellations['v70'],
}

export const storageVersion = {
	name: 'Democracy.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v33Stage: stageStorage.storageVersion['v33'],
	v42Stage: stageStorage.storageVersion['v42'],
	v33Test: testStorage.storageVersion['v33'],
	v42Test: testStorage.storageVersion['v42'],
}
