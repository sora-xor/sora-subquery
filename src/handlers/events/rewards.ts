import { StakingReward } from '../../model'
import { Address, BlockContext, Event } from '../../types'
import { getBlockTimestamp, getEventId } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { createEventHistoryElement } from '../../utils/history'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { getStakingRewardedEventData } from '../../extractors/events'

export async function stakingRewardedEventHandler(ctx: BlockContext, event: Event<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { stash, amount } = getStakingRewardedEventData(ctx, event)

	const stakingEra = await getActiveStakingEra(ctx)
	const staker = await getStakingStaker(ctx, stash)
	const payee = staker.payee as Address

	const details: any = {
		stash,
		payee,
		amount,
		era: stakingEra.index
	};

	await createEventHistoryElement(ctx, event, payee, details)
}
