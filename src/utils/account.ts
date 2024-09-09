import BigNumber from "bignumber.js";

import { SubstrateBlock } from "@subql/types";
import { Account, AccountMeta } from "../types";

import { KXOR } from './consts';
import { EntityStorage } from "./storage";
import { getAmountUSD } from "./assets";
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
    const assetVolumeData = { amount: '0', amountUSD: '0' };
    const counterData = { created: 0, closed: 0, amountUSD: '0' };
    const governanceData = { votes: 0, amount: '0', amountUSD: '0' };
    const depositData = { incomingUSD: '0', outgoingUSD: '0' };

    const entity = new AccountMeta(
      id,
      account.id,
      formatDateTimestamp(block.timestamp),
      getBlockNumber(block),
      assetVolumeData,
      assetVolumeData,
      assetVolumeData,
      counterData,
      counterData,
      governanceData,
      depositData,
    );

    return entity;
  }

  public async updateFees(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.xorFees.amount = new BigNumber(meta.xorFees.amount).plus(amount).toString();
    meta.xorFees.amountUSD = new BigNumber(meta.xorFees.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateBurned(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.xorBurned.amount = new BigNumber(meta.xorBurned.amount).plus(amount).toString();
    meta.xorBurned.amountUSD = new BigNumber(meta.xorBurned.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateGovernance(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.governance.votes = meta.governance.votes + 1;
    meta.governance.amount = new BigNumber(meta.governance.amount).plus(amount).toString();
    meta.governance.amountUSD = new BigNumber(meta.governance.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateStakingRewards(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.xorStakingValRewards.amount = new BigNumber(meta.xorStakingValRewards.amount).plus(amount).toString();
    meta.xorStakingValRewards.amountUSD = new BigNumber(meta.xorStakingValRewards.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateOrderCreated(block: SubstrateBlock, id: string) {
    const meta = await this.getEntity(block, id);

    meta.orderBook.created = meta.orderBook.created + 1;

    await this.save(block, meta);
  }

  public async updateOrderClosed(block: SubstrateBlock, id: string) {
    const meta = await this.getEntity(block, id);

    meta.orderBook.closed = meta.orderBook.closed + 1;

    await this.save(block, meta);
  }

  public async updateOrderExecuted(block: SubstrateBlock, id: string, quoteAssetId: string, price: string, amount: string) {
    const meta = await this.getEntity(block, id);

    const quotePrice = new BigNumber(price);
    const baseAmount = new BigNumber(amount);
    const quoteAmount = baseAmount.multipliedBy(quotePrice);
    const amountUSD = await getAmountUSD(block, quoteAssetId, quoteAmount.toString());

    meta.orderBook.amountUSD = new BigNumber(meta.orderBook.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateVaultCreated(block: SubstrateBlock, id: string, assetId: string) {
    if (assetId === KXOR) return;

    const meta = await this.getEntity(block, id);

    meta.vault.created = meta.vault.created + 1;

    await this.save(block, meta);
  }

  public async updateVaultClosed(block: SubstrateBlock, id: string, assetId: string) {
    if (assetId === KXOR) return;

    const meta = await this.getEntity(block, id);

    meta.vault.closed = meta.vault.closed + 1;

    await this.save(block, meta);
  }

  public async updateVaultExecuted(block: SubstrateBlock, id: string, assetId: string, amount: string, isCollateral = false) {
    if (!isCollateral && assetId === KXOR) return;

    const meta = await this.getEntity(block, id);

    const amountUSD = await getAmountUSD(block, assetId, amount);

    meta.vault.amountUSD = new BigNumber(meta.vault.amountUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateIncomingDeposit(block: SubstrateBlock, id: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.deposit.incomingUSD = new BigNumber(meta.deposit.incomingUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }

  public async updateOutgoingDeposit(block: SubstrateBlock, id: string, amountUSD: string) {
    const meta = await this.getEntity(block, id);

    meta.deposit.outgoingUSD = new BigNumber(meta.deposit.outgoingUSD).plus(amountUSD).toFixed(2);

    await this.save(block, meta);
  }
}

export const accountMetaStorage = new AccountMetaStorage();