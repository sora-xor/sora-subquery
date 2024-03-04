import * as productionStorage from '../../production/staking/storage'
import * as stageStorage from '../../stage/staking/storage'
import * as testStorage from '../../test/staking/storage'
import * as devStorage from '../../dev/staking/storage'


export const historyDepth = {
	name: 'Staking.HistoryDepth',
	v1: productionStorage.historyDepth['v1'],
	v33Stage: stageStorage.historyDepth['v33'],
	v33Test: testStorage.historyDepth['v33'],
}

export const timeSinceGenesis = {
	name: 'Staking.TimeSinceGenesis',
	v1: productionStorage.timeSinceGenesis['v1'],
	v42: productionStorage.timeSinceGenesis['v42'],
	v33Stage: stageStorage.timeSinceGenesis['v33'],
	v42Stage: stageStorage.timeSinceGenesis['v42'],
	v33Test: testStorage.timeSinceGenesis['v33'],
	v42Test: testStorage.timeSinceGenesis['v42'],
	v70Dev: devStorage.timeSinceGenesis['v70'],
}

export const validatorCount = {
	name: 'Staking.ValidatorCount',
	v1: productionStorage.validatorCount['v1'],
	v33Stage: stageStorage.validatorCount['v33'],
	v33Test: testStorage.validatorCount['v33'],
	v70Dev: devStorage.validatorCount['v70'],
}

export const minimumValidatorCount = {
	name: 'Staking.MinimumValidatorCount',
	v1: productionStorage.minimumValidatorCount['v1'],
	v33Stage: stageStorage.minimumValidatorCount['v33'],
	v33Test: testStorage.minimumValidatorCount['v33'],
	v70Dev: devStorage.minimumValidatorCount['v70'],
}

export const invulnerables = {
	name: 'Staking.Invulnerables',
	v1: productionStorage.invulnerables['v1'],
	v33Stage: stageStorage.invulnerables['v33'],
	v33Test: testStorage.invulnerables['v33'],
	v70Dev: devStorage.invulnerables['v70'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v1: productionStorage.bonded['v1'],
	v33Stage: stageStorage.bonded['v33'],
	v33Test: testStorage.bonded['v33'],
	v70Dev: devStorage.bonded['v70'],
}

export const ledger = {
	name: 'Staking.Ledger',
	v1: productionStorage.ledger['v1'],
	v33Stage: stageStorage.ledger['v33'],
	v33Test: testStorage.ledger['v33'],
	v70Dev: devStorage.ledger['v70'],
}

export const payee = {
	name: 'Staking.Payee',
	v1: productionStorage.payee['v1'],
	v33Stage: stageStorage.payee['v33'],
	v33Test: testStorage.payee['v33'],
	v70Dev: devStorage.payee['v70'],
}

export const validators = {
	name: 'Staking.Validators',
	v1: productionStorage.validators['v1'],
	v33Stage: stageStorage.validators['v33'],
	v33Test: testStorage.validators['v33'],
	v70Dev: devStorage.validators['v70'],
}

export const nominators = {
	name: 'Staking.Nominators',
	v1: productionStorage.nominators['v1'],
	v33Stage: stageStorage.nominators['v33'],
	v33Test: testStorage.nominators['v33'],
	v70Dev: devStorage.nominators['v70'],
}

export const currentEra = {
	name: 'Staking.CurrentEra',
	v1: productionStorage.currentEra['v1'],
	v33Stage: stageStorage.currentEra['v33'],
	v33Test: testStorage.currentEra['v33'],
	v70Dev: devStorage.currentEra['v70'],
}

export const activeEra = {
	name: 'Staking.ActiveEra',
	v1: productionStorage.activeEra['v1'],
	v33Stage: stageStorage.activeEra['v33'],
	v33Test: testStorage.activeEra['v33'],
	v70Dev: devStorage.activeEra['v70'],
}

export const erasStartSessionIndex = {
	name: 'Staking.ErasStartSessionIndex',
	v1: productionStorage.erasStartSessionIndex['v1'],
	v33Stage: stageStorage.erasStartSessionIndex['v33'],
	v33Test: testStorage.erasStartSessionIndex['v33'],
	v70Dev: devStorage.erasStartSessionIndex['v70'],
}

export const erasStakers = {
	name: 'Staking.ErasStakers',
	v1: productionStorage.erasStakers['v1'],
	v33Stage: stageStorage.erasStakers['v33'],
	v33Test: testStorage.erasStakers['v33'],
	v70Dev: devStorage.erasStakers['v70'],
}

export const erasStakersClipped = {
	name: 'Staking.ErasStakersClipped',
	v1: productionStorage.erasStakersClipped['v1'],
	v33Stage: stageStorage.erasStakersClipped['v33'],
	v33Test: testStorage.erasStakersClipped['v33'],
	v70Dev: devStorage.erasStakersClipped['v70'],
}

export const erasValidatorPrefs = {
	name: 'Staking.ErasValidatorPrefs',
	v1: productionStorage.erasValidatorPrefs['v1'],
	v33Stage: stageStorage.erasValidatorPrefs['v33'],
	v33Test: testStorage.erasValidatorPrefs['v33'],
	v70Dev: devStorage.erasValidatorPrefs['v70'],
}

export const erasValidatorReward = {
	name: 'Staking.ErasValidatorReward',
	v1: productionStorage.erasValidatorReward['v1'],
	v33Stage: stageStorage.erasValidatorReward['v33'],
	v33Test: testStorage.erasValidatorReward['v33'],
	v70Dev: devStorage.erasValidatorReward['v70'],
}

export const erasRewardPoints = {
	name: 'Staking.ErasRewardPoints',
	v1: productionStorage.erasRewardPoints['v1'],
	v33Stage: stageStorage.erasRewardPoints['v33'],
	v33Test: testStorage.erasRewardPoints['v33'],
	v70Dev: devStorage.erasRewardPoints['v70'],
}

export const eraValBurned = {
	name: 'Staking.EraValBurned',
	v1: productionStorage.eraValBurned['v1'],
	v33Stage: stageStorage.eraValBurned['v33'],
	v33Test: testStorage.eraValBurned['v33'],
	v70Dev: devStorage.eraValBurned['v70'],
}

export const erasTotalStake = {
	name: 'Staking.ErasTotalStake',
	v1: productionStorage.erasTotalStake['v1'],
	v33Stage: stageStorage.erasTotalStake['v33'],
	v33Test: testStorage.erasTotalStake['v33'],
	v70Dev: devStorage.erasTotalStake['v70'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v1: productionStorage.forceEra['v1'],
	v33Stage: stageStorage.forceEra['v33'],
	v33Test: testStorage.forceEra['v33'],
	v70Dev: devStorage.forceEra['v70'],
}

export const slashRewardFraction = {
	name: 'Staking.SlashRewardFraction',
	v1: productionStorage.slashRewardFraction['v1'],
	v33Stage: stageStorage.slashRewardFraction['v33'],
	v33Test: testStorage.slashRewardFraction['v33'],
	v70Dev: devStorage.slashRewardFraction['v70'],
}

export const canceledSlashPayout = {
	name: 'Staking.CanceledSlashPayout',
	v1: productionStorage.canceledSlashPayout['v1'],
	v33Stage: stageStorage.canceledSlashPayout['v33'],
	v33Test: testStorage.canceledSlashPayout['v33'],
	v70Dev: devStorage.canceledSlashPayout['v70'],
}

export const unappliedSlashes = {
	name: 'Staking.UnappliedSlashes',
	v1: productionStorage.unappliedSlashes['v1'],
	v33Stage: stageStorage.unappliedSlashes['v33'],
	v33Test: testStorage.unappliedSlashes['v33'],
	v70Dev: devStorage.unappliedSlashes['v70'],
}

export const bondedEras = {
	name: 'Staking.BondedEras',
	v1: productionStorage.bondedEras['v1'],
	v33Stage: stageStorage.bondedEras['v33'],
	v33Test: testStorage.bondedEras['v33'],
	v70Dev: devStorage.bondedEras['v70'],
}

export const validatorSlashInEra = {
	name: 'Staking.ValidatorSlashInEra',
	v1: productionStorage.validatorSlashInEra['v1'],
	v33Stage: stageStorage.validatorSlashInEra['v33'],
	v33Test: testStorage.validatorSlashInEra['v33'],
	v70Dev: devStorage.validatorSlashInEra['v70'],
}

export const nominatorSlashInEra = {
	name: 'Staking.NominatorSlashInEra',
	v1: productionStorage.nominatorSlashInEra['v1'],
	v33Stage: stageStorage.nominatorSlashInEra['v33'],
	v33Test: testStorage.nominatorSlashInEra['v33'],
	v70Dev: devStorage.nominatorSlashInEra['v70'],
}

export const slashingSpans = {
	name: 'Staking.SlashingSpans',
	v1: productionStorage.slashingSpans['v1'],
	v33Stage: stageStorage.slashingSpans['v33'],
	v33Test: testStorage.slashingSpans['v33'],
	v70Dev: devStorage.slashingSpans['v70'],
}

export const spanSlash = {
	name: 'Staking.SpanSlash',
	v1: productionStorage.spanSlash['v1'],
	v33Stage: stageStorage.spanSlash['v33'],
	v33Test: testStorage.spanSlash['v33'],
	v70Dev: devStorage.spanSlash['v70'],
}

export const earliestUnappliedSlash = {
	name: 'Staking.EarliestUnappliedSlash',
	v1: productionStorage.earliestUnappliedSlash['v1'],
	v33Stage: stageStorage.earliestUnappliedSlash['v33'],
	v33Test: testStorage.earliestUnappliedSlash['v33'],
}

export const snapshotValidators = {
	name: 'Staking.SnapshotValidators',
	v1: productionStorage.snapshotValidators['v1'],
	v33Stage: stageStorage.snapshotValidators['v33'],
	v33Test: testStorage.snapshotValidators['v33'],
}

export const snapshotNominators = {
	name: 'Staking.SnapshotNominators',
	v1: productionStorage.snapshotNominators['v1'],
	v33Stage: stageStorage.snapshotNominators['v33'],
	v33Test: testStorage.snapshotNominators['v33'],
}

export const queuedElected = {
	name: 'Staking.QueuedElected',
	v1: productionStorage.queuedElected['v1'],
	v33Stage: stageStorage.queuedElected['v33'],
	v33Test: testStorage.queuedElected['v33'],
}

export const queuedScore = {
	name: 'Staking.QueuedScore',
	v1: productionStorage.queuedScore['v1'],
	v33Stage: stageStorage.queuedScore['v33'],
	v33Test: testStorage.queuedScore['v33'],
}

export const eraElectionStatus = {
	name: 'Staking.EraElectionStatus',
	v1: productionStorage.eraElectionStatus['v1'],
	v33Stage: stageStorage.eraElectionStatus['v33'],
	v33Test: testStorage.eraElectionStatus['v33'],
}

export const isCurrentSessionFinal = {
	name: 'Staking.IsCurrentSessionFinal',
	v1: productionStorage.isCurrentSessionFinal['v1'],
	v33Stage: stageStorage.isCurrentSessionFinal['v33'],
	v33Test: testStorage.isCurrentSessionFinal['v33'],
}

export const storageVersion = {
	name: 'Staking.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v33Stage: stageStorage.storageVersion['v33'],
	v42Stage: stageStorage.storageVersion['v42'],
	v33Test: testStorage.storageVersion['v33'],
	v42Test: testStorage.storageVersion['v42'],
}

export const minNominatorBond = {
	name: 'Staking.MinNominatorBond',
	v42: productionStorage.minNominatorBond['v42'],
	v42Stage: stageStorage.minNominatorBond['v42'],
	v42Test: testStorage.minNominatorBond['v42'],
	v70Dev: devStorage.minNominatorBond['v70'],
}

export const minValidatorBond = {
	name: 'Staking.MinValidatorBond',
	v42: productionStorage.minValidatorBond['v42'],
	v42Stage: stageStorage.minValidatorBond['v42'],
	v42Test: testStorage.minValidatorBond['v42'],
	v70Dev: devStorage.minValidatorBond['v70'],
}

export const minCommission = {
	name: 'Staking.MinCommission',
	v42: productionStorage.minCommission['v42'],
	v42Stage: stageStorage.minCommission['v42'],
	v42Test: testStorage.minCommission['v42'],
	v70Dev: devStorage.minCommission['v70'],
}

export const counterForValidators = {
	name: 'Staking.CounterForValidators',
	v42: productionStorage.counterForValidators['v42'],
	v42Stage: stageStorage.counterForValidators['v42'],
	v42Test: testStorage.counterForValidators['v42'],
	v70Dev: devStorage.counterForValidators['v70'],
}

export const maxValidatorsCount = {
	name: 'Staking.MaxValidatorsCount',
	v42: productionStorage.maxValidatorsCount['v42'],
	v42Stage: stageStorage.maxValidatorsCount['v42'],
	v42Test: testStorage.maxValidatorsCount['v42'],
	v70Dev: devStorage.maxValidatorsCount['v70'],
}

export const counterForNominators = {
	name: 'Staking.CounterForNominators',
	v42: productionStorage.counterForNominators['v42'],
	v42Stage: stageStorage.counterForNominators['v42'],
	v42Test: testStorage.counterForNominators['v42'],
	v70Dev: devStorage.counterForNominators['v70'],
}

export const maxNominatorsCount = {
	name: 'Staking.MaxNominatorsCount',
	v42: productionStorage.maxNominatorsCount['v42'],
	v42Stage: stageStorage.maxNominatorsCount['v42'],
	v42Test: testStorage.maxNominatorsCount['v42'],
	v70Dev: devStorage.maxNominatorsCount['v70'],
}

export const currentPlannedSession = {
	name: 'Staking.CurrentPlannedSession',
	v42: productionStorage.currentPlannedSession['v42'],
	v42Stage: stageStorage.currentPlannedSession['v42'],
	v42Test: testStorage.currentPlannedSession['v42'],
	v70Dev: devStorage.currentPlannedSession['v70'],
}

export const offendingValidators = {
	name: 'Staking.OffendingValidators',
	v42: productionStorage.offendingValidators['v42'],
	v42Stage: stageStorage.offendingValidators['v42'],
	v42Test: testStorage.offendingValidators['v42'],
	v70Dev: devStorage.offendingValidators['v70'],
}

export const chillThreshold = {
	name: 'Staking.ChillThreshold',
	v42: productionStorage.chillThreshold['v42'],
	v42Stage: stageStorage.chillThreshold['v42'],
	v42Test: testStorage.chillThreshold['v42'],
	v70Dev: devStorage.chillThreshold['v70'],
}

export const minimumActiveStake = {
	name: 'Staking.MinimumActiveStake',
	v53: productionStorage.minimumActiveStake['v53'],
	v52Stage: stageStorage.minimumActiveStake['v52'],
	v52Test: testStorage.minimumActiveStake['v52'],
	v70Dev: devStorage.minimumActiveStake['v70'],
}
