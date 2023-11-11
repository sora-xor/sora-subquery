import { SubstrateExtrinsic } from "@subql/types";
import { Account } from "../types";

import { networkSnapshotsStorage } from './network';
import { getUtilsLog } from "./logs";

export const getAccountEntity = async (extrinsic: SubstrateExtrinsic, accountAddress: string) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
      getUtilsLog(extrinsic).debug({ address: accountAddress }, 'Account created');
      await networkSnapshotsStorage.updateAccountsStats(extrinsic.block);
  }

  return account;
};