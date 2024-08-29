import { SubstrateBlock } from '@subql/types';
import { getUtilsLog } from './logs';
import { AccountLiquidity, AccountLiquiditySnapshot,SnapshotType } from '../types';
import { EntityStorage, EntitySnapshotsStorage } from './storage';
import { getSnapshotTypes } from './index';

export const getPoolProviderBalance = async (block: SubstrateBlock, poolId: string, providerId: string): Promise<string> => {
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
}

class AccountLiquidityStorage extends EntityStorage<AccountLiquidity> {
  constructor() {
    super('AccountLiquidity');
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    accountId: string,
    poolId: string
  ): Promise<AccountLiquidity> {
    const accountLiquidity = new AccountLiquidity(id, accountId, poolId, BigInt(0));

    return accountLiquidity;
  }

  public async getLiquidity(block: SubstrateBlock, accountId: string, poolId: string): Promise<AccountLiquidity> {
    const id = this.getId(accountId, poolId);

    return await this.getEntity(block, id);
  }

  public async updatePoolTokens(block: SubstrateBlock, accountId: string, poolId: string): Promise<AccountLiquidity> {
    const accountLiquidity = await this.getLiquidity(block, accountId, poolId);
    const accountLiquidityBalance = await getPoolProviderBalance(block, poolId, accountId);
    const poolTokens = BigInt(accountLiquidityBalance);

    accountLiquidity.poolTokens = poolTokens;

    await this.save(block, accountLiquidity);

    return accountLiquidity;
  }
}

class AccountLiquiditySnapshotsStorage extends EntitySnapshotsStorage<AccountLiquidity, AccountLiquiditySnapshot, AccountLiquidityStorage> {
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
    );

    return snapshot;
  }

  async updatePoolTokens(block: SubstrateBlock, accountId: string, poolId: string): Promise<void> {
    const accountLiquidity = await this.entityStorage.updatePoolTokens(block, accountId, poolId);
    const { id, poolTokens } = accountLiquidity;

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.poolTokens = poolTokens;

      this.log(block, true).debug({ id, poolTokens }, 'Account Liquidity snapshot pool tokens updated')

      await this.save(block, snapshot, true);
    }
  }
}

export const accountLiquidityStorage = new AccountLiquidityStorage();
export const accountLiquiditySnapshotsStorage = new AccountLiquiditySnapshotsStorage(accountLiquidityStorage);