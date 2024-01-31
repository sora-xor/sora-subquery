import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { SubstrateEvent } from '@subql/types'
import { logStartProcessingEvent } from '../../utils/logs'
import { createHistoryElement } from '../../utils/history'

function getRewardData(event: SubstrateEvent): { stash: string; amount: string } {
	const data = event.event.data as any
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { stash: stash.toString(), amount: formatU128ToBalance(amount.toString(), VAL) }
}

export async function stakingRewardedEventHandler(event: SubstrateEvent): Promise<void> {
	logStartProcessingEvent(event);

	const { stash, amount } = getRewardData(event);

	const stakingEra = await getActiveStakingEra(event.block);
	const staker = await getStakingStaker(event.block, stash);
	const payee = staker.payee;

	const details: any = {
		stash,
		payee,
		amount,
		era: stakingEra.index
	};

	await createHistoryElement(event, details);
}
