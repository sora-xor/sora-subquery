import { formatU128ToBalance, getAmountUSD } from '../../utils/assets'
import { accountMetaStorage } from '../../utils/account';
import { VAL } from '../../utils/consts'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { SubstrateEvent } from '@subql/types'
import { logStartProcessingEvent } from '../../utils/logs'
import { createHistoryElement } from '../../utils/history'

async function getRewardData(event: SubstrateEvent): Promise<{ stash: string; amount: string; amountUSD: string }> {
	const data = event.event.data as any;
	const stash = Array.isArray(data) ? data[0] : data.stash;
	const valAmount = Array.isArray(data) ? data[1] : data.amount;

	const amount = formatU128ToBalance(valAmount.toString(), VAL);
	const amountUSD = await getAmountUSD(event.block, VAL, amount);

	return { stash: stash.toString(), amount, amountUSD }
}

export async function stakingRewardedEventHandler(event: SubstrateEvent): Promise<void> {
	logStartProcessingEvent(event);

	const { stash, amount, amountUSD } = await getRewardData(event);

	const stakingEra = await getActiveStakingEra(event.block);
	const staker = await getStakingStaker(event.block, stash);
	const payee = staker.payee;

	const details: any = {
		stash,
		payee,
		amount,
		amountUSD,
		era: stakingEra.index
	};

	await createHistoryElement(event, details, undefined, payee);

	await accountMetaStorage.updateStakingRewards(event.block, stash, amount, amountUSD);
}
