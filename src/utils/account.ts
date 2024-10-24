import BigNumber from 'bignumber.js';

import { SubstrateBlock } from '@subql/types';
import { Account, AccountMeta, AccountPointSystem } from '../types';
import { PointSystemStartBlockV1, PointSystemStartBlockV2 } from '../config';

import { KXOR } from './consts';
import { EntityStorage } from './storage';
import { getAmountUSD } from './assets';
import { formatDateTimestamp, getBlockNumber } from './index';
import { networkSnapshotsStorage } from './network';
import { getUtilsLog } from './logs';

export const getAccountEntity = async (block: SubstrateBlock, accountAddress: string) => {
  let account = await Account.get(accountAddress);

  if (account) {
    getUtilsLog(block).debug({ address: accountAddress }, 'Account found in store');
  } else {
    account = new Account(accountAddress);
    await account.save();
    getUtilsLog(block).debug({ address: accountAddress }, 'Account created');
    await networkSnapshotsStorage.updateAccountsStats(block);
  }

  return account;
};

const getPointSystemVersion = (block: SubstrateBlock): number => {
  const getStartBlock = (start?: number) => Number.isFinite(start) ? start : null;

  const blockNumber = getBlockNumber(block);
  const v2 = getStartBlock(PointSystemStartBlockV2);

  if (v2 && blockNumber >= v2) {
    return 2;
  }

  return 1;
};

const getPointSystemStartBlock = (block: SubstrateBlock): number => {
  const version = getPointSystemVersion(block);

  switch (version) {
    case 2:
      return PointSystemStartBlockV2;
    default:
      return PointSystemStartBlockV1;
  }
};

const assetVolumeData = { amount: '0', amountUSD: '0' };
const counterData = { created: 0, closed: 0, amountUSD: '0' };
const governanceData = { votes: 0, amount: '0', amountUSD: '0' };
const depositData = { incomingUSD: '0', outgoingUSD: '0' };

class PointsStorage<T extends AccountMeta | AccountPointSystem> extends EntityStorage<T> {
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

  public async updateOrderExecuted(
    block: SubstrateBlock,
    id: string,
    quoteAssetId: string,
    price: string,
    amount: string
  ) {
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

  public async updateVaultExecuted(
    block: SubstrateBlock,
    id: string,
    assetId: string,
    amount: string,
    isCollateral = false
  ) {
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

class AccountMetaStorage extends PointsStorage<AccountMeta> {
  constructor() {
    super('AccountMeta');
  }

  protected override async loadEntity(id: string): Promise<AccountMeta> {
    return await AccountMeta.get(id);
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<AccountMeta> {
    const account = await getAccountEntity(block, id);

    const entity = new AccountMeta(
      id,
      // account.id,
      formatDateTimestamp(block.timestamp),
      getBlockNumber(block),
      { ...assetVolumeData },
      { ...assetVolumeData },
      { ...assetVolumeData },
      { ...counterData },
      { ...counterData },
      { ...governanceData },
      { ...depositData }
    );

    return entity;
  }
}

class AccountPointSystemStorage extends PointsStorage<AccountPointSystem> {
  protected accountMetaStorage!: AccountMetaStorage;

  constructor(accountMetaStorage: AccountMetaStorage) {
    super('AccountPointSystem');

    this.accountMetaStorage = accountMetaStorage;
  }

  protected override async loadEntity(id: string): Promise<AccountPointSystem> {
    return await AccountPointSystem.get(id);
  }

  override async getEntity(block: SubstrateBlock, accountId: string): Promise<AccountPointSystem> {
    const version = getPointSystemVersion(block);
    const id = this.getId(accountId, version);

    return await super.getEntity(block, id);
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<AccountPointSystem> {
    const [accountId, _version] = this.parseId(id);
    const version = Number(_version);

    const meta = version === 1 ? await this.accountMetaStorage.getEntity(block, accountId) : null;

    const xorFees = meta?.xorFees ?? { ...assetVolumeData };
    const xorBurned = meta?.xorBurned ?? { ...assetVolumeData };
    const xorStakingValRewards = meta?.xorStakingValRewards ?? { ...assetVolumeData };
    const orderBook = meta?.orderBook ?? { ...counterData };
    const vault = meta?.vault ?? { ...counterData };
    const governance = meta?.governance ?? { ...governanceData };
    const deposit = meta?.deposit ?? { ...depositData };

    const entity = new AccountPointSystem(
      id,
      accountId,
      version,
      getPointSystemStartBlock(block),
      { ...xorFees },
      { ...xorBurned },
      { ...xorStakingValRewards },
      { ...orderBook },
      { ...vault },
      { ...governance },
      { ...deposit }
    );

    return entity;
  }
}

class AccountMetaProxy {
  protected accountMetaStorage!: AccountMetaStorage;
  protected accountPointSystemStorage!: AccountPointSystemStorage;

  constructor() {
    this.accountMetaStorage = new AccountMetaStorage();
    this.accountPointSystemStorage = new AccountPointSystemStorage(this.accountMetaStorage);
  }

  public async updateFees(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateFees(block, id, amount, amountUSD);
    await this.accountMetaStorage.updateFees(block, id, amount, amountUSD);
  }

  public async updateBurned(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateBurned(block, id, amount, amountUSD);
    await this.accountMetaStorage.updateBurned(block, id, amount, amountUSD);
  }

  public async updateGovernance(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateGovernance(block, id, amount, amountUSD);
    await this.accountMetaStorage.updateGovernance(block, id, amount, amountUSD);
  }

  public async updateStakingRewards(block: SubstrateBlock, id: string, amount: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateStakingRewards(block, id, amount, amountUSD);
    await this.accountMetaStorage.updateStakingRewards(block, id, amount, amountUSD);
  }

  public async updateOrderCreated(block: SubstrateBlock, id: string) {
    await this.accountPointSystemStorage.updateOrderCreated(block, id);
    await this.accountMetaStorage.updateOrderCreated(block, id);
  }

  public async updateOrderClosed(block: SubstrateBlock, id: string) {
    await this.accountPointSystemStorage.updateOrderClosed(block, id);
    await this.accountMetaStorage.updateOrderClosed(block, id);
  }

  public async updateOrderExecuted(
    block: SubstrateBlock,
    id: string,
    quoteAssetId: string,
    price: string,
    amount: string
  ) {
    await this.accountPointSystemStorage.updateOrderExecuted(block, id, quoteAssetId, price, amount);
    await this.accountMetaStorage.updateOrderExecuted(block, id, quoteAssetId, price, amount);
  }

  public async updateVaultCreated(block: SubstrateBlock, id: string, assetId: string) {
    await this.accountPointSystemStorage.updateVaultCreated(block, id, assetId);
    await this.accountMetaStorage.updateVaultCreated(block, id, assetId);
  }

  public async updateVaultClosed(block: SubstrateBlock, id: string, assetId: string) {
    await this.accountPointSystemStorage.updateVaultClosed(block, id, assetId);
    await this.accountMetaStorage.updateVaultClosed(block, id, assetId);
  }

  public async updateVaultExecuted(
    block: SubstrateBlock,
    id: string,
    assetId: string,
    amount: string,
    isCollateral = false
  ) {
    await this.accountPointSystemStorage.updateVaultExecuted(block, id, assetId, amount, isCollateral);
    await this.accountMetaStorage.updateVaultExecuted(block, id, assetId, amount, isCollateral);
  }

  public async updateIncomingDeposit(block: SubstrateBlock, id: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateIncomingDeposit(block, id, amountUSD);
    await this.accountMetaStorage.updateIncomingDeposit(block, id, amountUSD);
  }

  public async updateOutgoingDeposit(block: SubstrateBlock, id: string, amountUSD: string) {
    await this.accountPointSystemStorage.updateOutgoingDeposit(block, id, amountUSD);
    await this.accountMetaStorage.updateOutgoingDeposit(block, id, amountUSD);
  }

  public async sync(block: SubstrateBlock, clean = false): Promise<void> {
    await this.accountPointSystemStorage.sync(block, clean);
    await this.accountMetaStorage.sync(block, clean);
  }
}

export const accountMetaStorage = new AccountMetaProxy();