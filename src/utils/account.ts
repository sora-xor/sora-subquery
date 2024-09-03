import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { Account, AccountMeta } from "../types";

import { EntityStorage } from "./storage";
import { XOR } from './consts';
import { formatU128ToBalance, getAmountUSD } from './assets';
import { formatDateTimestamp, getBlockNumber } from "./index";
import { networkSnapshotsStorage } from './network';
import { getUtilsLog } from "./logs";

export const getAccountEntity = async (block: SubstrateBlock, accountAddress: string) => {
  let account = await Account.get(accountAddress);

  if (account) {
		getUtilsLog(block).debug({ address: accountAddress }, 'Account found in store')
	} else {
    account = new Account(accountAddress);
    await account.save();
    getUtilsLog(block).debug({ address: accountAddress }, 'Account created');
    await networkSnapshotsStorage.updateAccountsStats(block);
  }

  return account;
};

class AccountMetaStorage extends EntityStorage<AccountMeta> {
  constructor() {
    super('AccountMeta')
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<AccountMeta> {
    const account = await getAccountEntity(block, id);

    const entity = new AccountMeta(
      id,
      account.id,
      formatDateTimestamp(block.timestamp),
      getBlockNumber(block),
      {
        amount: '0',
        amountUSD: '0'
      },
      {
        amount: '0',
        amountUSD: '0'
      }
    );

    return entity;
  }

  public async updateFees(block: SubstrateBlock, id: string, fee: string) {
    const meta = await this.getEntity(block, id);

    const feeAmount = formatU128ToBalance(fee, XOR);
    const feeAmountUSD = await getAmountUSD(block, XOR, feeAmount);

    meta.xorFees.amount = new BigNumber(meta.xorFees.amount).plus(feeAmount).toString();
    meta.xorFees.amountUSD = new BigNumber(meta.xorFees.amountUSD).plus(feeAmountUSD).toFixed(2);

    await this.save(block, meta);
  }
}

export const accountMetaStorage = new AccountMetaStorage();