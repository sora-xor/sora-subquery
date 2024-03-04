import * as productionStorage from '../../production/bridge-proxy/storage'
import * as stageStorage from '../../stage/bridge-proxy/storage'
import * as testStorage from '../../test/bridge-proxy/storage'
import * as devStorage from '../../dev/bridge-proxy/storage'


export const transactions = {
	name: 'BridgeProxy.Transactions',
	v64: productionStorage.transactions['v64'],
	v70: productionStorage.transactions['v70'],
	v54Stage: stageStorage.transactions['v54'],
	v70Stage: stageStorage.transactions['v70'],
	v54Test: testStorage.transactions['v54'],
	v70Test: testStorage.transactions['v70'],
	v70Dev: devStorage.transactions['v70'],
}

export const senders = {
	name: 'BridgeProxy.Senders',
	v64: productionStorage.senders['v64'],
	v70: productionStorage.senders['v70'],
	v54Stage: stageStorage.senders['v54'],
	v70Stage: stageStorage.senders['v70'],
	v54Test: testStorage.senders['v54'],
	v70Test: testStorage.senders['v70'],
	v70Dev: devStorage.senders['v70'],
}

export const sidechainFeePaid = {
	name: 'BridgeProxy.SidechainFeePaid',
	v64: productionStorage.sidechainFeePaid['v64'],
	v70: productionStorage.sidechainFeePaid['v70'],
	v55Stage: stageStorage.sidechainFeePaid['v55'],
	v70Stage: stageStorage.sidechainFeePaid['v70'],
	v55Test: testStorage.sidechainFeePaid['v55'],
	v70Test: testStorage.sidechainFeePaid['v70'],
	v70Dev: devStorage.sidechainFeePaid['v70'],
}

export const lockedAssets = {
	name: 'BridgeProxy.LockedAssets',
	v64: productionStorage.lockedAssets['v64'],
	v70: productionStorage.lockedAssets['v70'],
	v57Stage: stageStorage.lockedAssets['v57'],
	v70Stage: stageStorage.lockedAssets['v70'],
	v57Test: testStorage.lockedAssets['v57'],
	v70Test: testStorage.lockedAssets['v70'],
	v70Dev: devStorage.lockedAssets['v70'],
}

export const transferLimit = {
	name: 'BridgeProxy.TransferLimit',
	v64: productionStorage.transferLimit['v64'],
	v62Stage: stageStorage.transferLimit['v62'],
	v62Test: testStorage.transferLimit['v62'],
	v70Dev: devStorage.transferLimit['v70'],
}

export const consumedTransferLimit = {
	name: 'BridgeProxy.ConsumedTransferLimit',
	v64: productionStorage.consumedTransferLimit['v64'],
	v62Stage: stageStorage.consumedTransferLimit['v62'],
	v62Test: testStorage.consumedTransferLimit['v62'],
	v70Dev: devStorage.consumedTransferLimit['v70'],
}

export const transferLimitUnlockSchedule = {
	name: 'BridgeProxy.TransferLimitUnlockSchedule',
	v64: productionStorage.transferLimitUnlockSchedule['v64'],
	v62Stage: stageStorage.transferLimitUnlockSchedule['v62'],
	v62Test: testStorage.transferLimitUnlockSchedule['v62'],
	v70Dev: devStorage.transferLimitUnlockSchedule['v70'],
}

export const limitedAssets = {
	name: 'BridgeProxy.LimitedAssets',
	v64: productionStorage.limitedAssets['v64'],
	v62Stage: stageStorage.limitedAssets['v62'],
	v62Test: testStorage.limitedAssets['v62'],
	v70Dev: devStorage.limitedAssets['v70'],
}
