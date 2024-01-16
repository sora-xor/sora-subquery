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
		stakingEra = new StakingEra(
			activeEra.index.toString(),
			activeEra.index,
			activeEra.start
		)
		await stakingEra.save()
		getUtilsLog(block).debug({ index: activeEra.index }, 'Staking era saved')
	}

	return stakingEra
}

const getStakerAccounts = async (address: string) => {
	const controllerCodec = await api.query.staking.bonded(address) as any;
	const destinationCodec = await api.query.staking.payee(address) as any;

	let controller = controllerCodec.isNone ? '' : controllerCodec.unwrap().toString();
	let payee = address;
	let payeeType = PayeeType.STASH;

	if (destinationCodec.isAccount) {
		payee =  destinationCodec.asAccount.toString();
		payeeType = PayeeType.ACCOUNT;
	} else if (destinationCodec.isController) {
		payee = controller;
		payeeType = PayeeType.CONTROLLER;
	}

	return { payee, payeeType, controller };
}

export const getStakingStaker = async (block: SubstrateBlock, address: string): Promise<StakingStaker> => {
	let stakingStaker = await StakingStaker.get(address);

	if (!stakingStaker) {
		const { payee, payeeType, controller } = await getStakerAccounts(address);

		stakingStaker = new StakingStaker(
			address,
			payeeType
		);

		stakingStaker.controller = controller;
		stakingStaker.payee = payee;

		await stakingStaker.save();
		getUtilsLog(block).debug({ id: address }, 'Staking staker saved');
	}

	return stakingStaker;
};
