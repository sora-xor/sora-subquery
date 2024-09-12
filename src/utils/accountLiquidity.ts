import BigNumber from 'bignumber.js';

import { SubstrateBlock } from '@subql/types';
import { getUtilsLog } from './logs';
import { AccountLiquidity, AccountLiquiditySnapshot, SnapshotType } from '../types';
import { getAccountEntity } from './account';
import { poolsStorage } from './pools';
import { EntityStorage, EntitySnapshotsStorage } from './storage';
import { getSnapshotTypes } from './index';

export const getPoolProviderBalance = async (
  block: SubstrateBlock,
  poolId: string,
  providerId: string
): Promise<string> => {
  try {
    getUtilsLog(block).debug({ poolId, providerId }, 'Pool provider balance request...');
    const balance = (await api.query.poolXYK.poolProviders(poolId, providerId)) as any;
    getUtilsLog(block).debug({ poolId, providerId }, 'Pool provider balance request completed');

    if (!balance.isSome) return '0';

    return balance.unwrap().toString();
  } catch (error) {
    getUtilsLog(block).error('Error getting pool provider balance');
    getUtilsLog(block).error(error);
    return '0';
  }
};

class AccountLiquidityStorage extends EntityStorage<AccountLiquidity> {
  constructor() {
    super('AccountLiquidity');
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<AccountLiquidity> {
    const [accountId, poolId] = this.parseId(id);

    const account = await getAccountEntity(block, accountId);
    const pool = await poolsStorage.getEntity(block, poolId);

    const accountLiquidity = new AccountLiquidity(id, account.id, pool.id, BigInt(0), '0');

    return accountLiquidity;
  }

  public async updatePoolTokensSupply(
    block: SubstrateBlock,
    accountId: string,
    poolId: string
  ): Promise<AccountLiquidity> {
    const id = this.getId(accountId, poolId);
    const accountLiquidity = await this.getEntity(block, id);
    const accountLiquidityBalance = await getPoolProviderBalance(block, poolId, accountId);

    const pool = await poolsStorage.getEntity(block, poolId);
    const poolTokens = new BigNumber(accountLiquidityBalance).dividedBy(Math.pow(10, 18));
    const liquidityUSD = new BigNumber(pool.poolTokenPriceUSD).multipliedBy(poolTokens);

    accountLiquidity.poolTokens = BigInt(accountLiquidityBalance);
    accountLiquidity.liquidityUSD = liquidityUSD.toFixed(2);

    await this.save(block, accountLiquidity);

    return accountLiquidity;
  }
}

class AccountLiquiditySnapshotsStorage extends EntitySnapshotsStorage<
  AccountLiquidity,
  AccountLiquiditySnapshot,
  AccountLiquidityStorage
> {
  public readonly updateTypes = [SnapshotType.BLOCK];
  public readonly removeTypes = [];

  constructor(accountLiquidityStorage: AccountLiquidityStorage) {
    super('AccountLiquiditySnapshot', accountLiquidityStorage);
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    timestamp: number,
    type: SnapshotType,
    accountLiquidity: AccountLiquidity
  ): Promise<AccountLiquiditySnapshot> {
    const snapshot = new AccountLiquiditySnapshot(
      id,
      timestamp,
      type,
      accountLiquidity.id,
      accountLiquidity.poolTokens,
      accountLiquidity.liquidityUSD
    );

    return snapshot;
  }

  async updatePoolTokensSupply(block: SubstrateBlock, accountId: string, poolId: string): Promise<void> {
    const { id, poolTokens, liquidityUSD } = await this.entityStorage.updatePoolTokensSupply(block, accountId, poolId);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.poolTokens = poolTokens;
      snapshot.liquidityUSD = liquidityUSD;

      this.log(block, true).debug({ id, poolTokens }, 'Account Liquidity snapshot pool tokens updated');

      await this.save(block, snapshot, true);
    }
  }
}

export const accountLiquidityStorage = new AccountLiquidityStorage();
export const accountLiquiditySnapshotsStorage = new AccountLiquiditySnapshotsStorage(accountLiquidityStorage);
