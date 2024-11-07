import { PayeeType, StakingEra, StakingStaker } from '../types';
import { getBlockNumber } from './index';
import { getUtilsLog } from './logs';
import { SubstrateBlock } from '@subql/types';

let eraBlock!: number;
let eraData!: any;

const getActiveEraData = async (block: SubstrateBlock) => {
  const key = getBlockNumber(block);

  if (eraBlock === key) {
    return eraData;
  }

  getUtilsLog(block).debug('Active era request');

  const activeEra = (await api.query.staking.activeEra()).toJSON() as any;

  if (!activeEra) {
    getUtilsLog(block).error('Active era not found');
    throw new Error('Active era not found');
  }

  eraBlock = key;
  eraData = activeEra;

  return activeEra;
};

export const getActiveStakingEra = async (block: SubstrateBlock): Promise<StakingEra> => {
  const activeEra = await getActiveEraData(block);

  let stakingEra = await StakingEra.get(activeEra.index.toString());

  if (!stakingEra) {
    stakingEra = new StakingEra(activeEra.index.toString(), activeEra.index, activeEra.start);
    await stakingEra.save();
    getUtilsLog(block).debug({ index: activeEra.index }, 'Staking era saved');
  }

  return stakingEra;
};

const getController = async (block: SubstrateBlock, address: string) => {
  try {
    const controllerCodec = (await api.query.staking.bonded(address)) as any;

    return controllerCodec.isNone ? '' : controllerCodec.unwrap().toString();
  } catch (e) {
    getUtilsLog(block).error(`Error getting Controller for account "${address}"`);
    getUtilsLog(block).error(e);
    return '';
  }
};

export const getStakingStakerController = async (block: SubstrateBlock, staker: StakingStaker) => {
  if (!staker.controller) {
    staker.controller = await getController(block, staker.id);
    await staker.save();
  }
  return staker.controller;
};

const getPayeeDestination = async (block: SubstrateBlock, address: string) => {
  try {
    const destinationCodec = (await api.query.staking.payee(address)) as any;

    return destinationCodec;
  } catch (e) {
    getUtilsLog(block).error(`Error getting Payee for account "${address}"`);
    getUtilsLog(block).error(e);
    return null;
  }
};

const getStakerAccounts = async (block: SubstrateBlock, address: string) => {
  const destinationCodec = await getPayeeDestination(block, address);

  let payee = address;
  let payeeType = PayeeType.STASH;
  let controller = '';

  if (destinationCodec) {
    if (destinationCodec.isAccount) {
      payee = destinationCodec.asAccount.toString();
      payeeType = PayeeType.ACCOUNT;
    } else if (destinationCodec.isController) {
      controller = await getController(block, address);
      payee = controller;
      payeeType = PayeeType.CONTROLLER;
    }
  }

  return { payee, payeeType, controller };
};

export const getStakingStaker = async (block: SubstrateBlock, address: string): Promise<StakingStaker> => {
  let stakingStaker = await StakingStaker.get(address);

  if (!stakingStaker) {
    const { payee, payeeType, controller } = await getStakerAccounts(block, address);

    stakingStaker = new StakingStaker(address, payeeType);

    stakingStaker.controller = controller;
    stakingStaker.payee = payee;

    await stakingStaker.save();
    getUtilsLog(block).debug({ id: address }, 'Staking staker saved');
  }

  return stakingStaker;
};
