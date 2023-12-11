import { PayeeType, StakingEra, StakingStaker } from '../types'
import { getUtilsLog } from './logs'
import { SubstrateBlock } from '@subql/types';

export const getActiveStakingEra = async (block: SubstrateBlock): Promise<StakingEra> => {
	const activeEra = (await api.query.staking.activeEra()).toJSON() as any;

	if (!activeEra) {
		getUtilsLog(block).debug('Active era not found')
		throw new Error('Active era not found')
	}

	let stakingEra = await StakingEra.get(activeEra.index.toString())
	if (!stakingEra) {
		stakingEra = new StakingEra(activeEra.index.toString())
		stakingEra.index = activeEra.index
		if (activeEra.start) {
			stakingEra.start = activeEra.start
		}
		await stakingEra.save()
		getUtilsLog(block).debug({ index: activeEra.index }, 'Staking era saved')
	}

	return stakingEra
}

export const getStakingStaker = async (block: SubstrateBlock, address: string): Promise<StakingStaker> => {
	let stakingStaker = await StakingStaker.get(address)
	if (!stakingStaker) {
		stakingStaker = new StakingStaker(address)
		stakingStaker.payeeType = PayeeType.STASH
		stakingStaker.payee = address
		await stakingStaker.save()
		getUtilsLog(block).debug({ id: address }, 'Staking staker saved')
	}
	return stakingStaker
}
