import { Account } from "../types";

import { networkSnapshotsStorage } from './network';

export const getOrCreateAccountEntity = async (accountAddress: string, timestamp: number) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
      await networkSnapshotsStorage.updateAccountsStats(timestamp);
  }

  return account;
};