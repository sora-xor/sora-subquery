import { StakingReward } from '../../types'
import { formatDateTimestamp, getEventId } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { SubstrateEvent } from '@subql/types'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { createHistoryElement } from '../../utils/history'

function getRewardData(event: SubstrateEvent): { stash: string; amount: string } {
	const data = event.event.data as any
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { stash: stash.toString(), amount: formatU128ToBalance(amount.toString(), VAL) }
}

export async function stakingRewardedEventHandler(event: SubstrateEvent): Promise<void> {
	logStartProcessingEvent(event)

	const { stash, amount } = getRewardData(event)

	const stakingEra = await getActiveStakingEra(event.block)
	const staker = await getStakingStaker(event.block, stash)
	const payee = staker.payee
	const id = `${stakingEra.id}-${getEventId(event)}-${staker.id}`

	const stakingReward = new StakingReward(id)
	stakingReward.stakerId = staker.id
	stakingReward.payee = payee
	stakingReward.amount = amount
	stakingReward.eraId = stakingEra.id
	stakingReward.timestamp = formatDateTimestamp(event.block.timestamp)

	await stakingReward.save()
	getEventHandlerLog(event).debug({ stash, payee, amount, era: stakingEra.index }, 'Staking reward saved')

	await createHistoryElement(event, { stash, payee, amount, era: stakingEra.index })
}
