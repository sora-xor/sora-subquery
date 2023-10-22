import { SubstrateExtrinsic } from "@subql/types";
import { Account } from "../types";

import { networkSnapshotsStorage } from './network';
import { getUtilsLog } from "./logs";

export const getOrCreateAccountEntity = async (extrinsic: SubstrateExtrinsic, accountAddress: string, timestamp: number) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
      getUtilsLog(extrinsic).debug({ address: accountAddress }, 'Account created');
      await networkSnapshotsStorage.updateAccountsStats(extrinsic.block, timestamp);
  }

  return account;
};