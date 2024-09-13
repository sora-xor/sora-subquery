import { SubstrateBlock } from '@subql/types';
import { VaultAccount } from '../types';

import { getUtilsLog } from './logs';

export const getVaultAccountEntity = async (block: SubstrateBlock, accountAddress: string) => {
  let account = await VaultAccount.get(accountAddress);

  if (account) {
    getUtilsLog(block).debug({ address: accountAddress }, 'VaultAccount found in store');
  } else {
    account = new VaultAccount(accountAddress);
    await account.save();
    getUtilsLog(block).debug({ address: accountAddress }, 'VaultAccount created');
  }

  return account;
};
