import { SubstrateBlock } from "@subql/types";
import { Account } from "../types";

import { networkSnapshotsStorage } from './network';
import { getUtilsLog } from "./logs";

export const getAccountEntity = async (block: SubstrateBlock, accountAddress: string) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
      getUtilsLog(block).debug({ address: accountAddress }, 'Account created');
      await networkSnapshotsStorage.updateAccountsStats(block);
  }

  return account;
};