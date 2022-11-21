import { Account } from "../types";

export const getOrCreateAccountEntity = async (accountAddress: string) => {
  let account = await Account.get(accountAddress);

  if (!account) {
      account = new Account(accountAddress);
      await account.save();
  }

  return account;
};