import { Account } from "../types";

import { updateAccountsStats } from './network';

export const getOrCreateAccountEntity = async (accountAddress: string, timestamp: number, blockNumber: number) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
      await updateAccountsStats(timestamp, blockNumber);
  }

  return account;
};