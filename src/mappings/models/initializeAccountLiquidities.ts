import { SubstrateBlock } from '@subql/types';
import { AccountLiquidity } from '../../types';

import { accountLiquidityStorage } from '../../utils/accountLiquidity';
import { getAllPoolProviders, poolsStorage, poolAccounts } from '../../utils/pools';
import { getInitializeAccountLiquiditiesLog } from '../../utils/logs';

let isFirstBlockIndexed = false;

// pools should be initialized before
export async function initializeAccountLiquidities(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeAccountLiquiditiesLog(block).debug('Initialize AccountLiquidity entities');

  const accountLiquidities: Map<string, Partial<AccountLiquidity>> = new Map();

  for (const poolId of poolAccounts.accounts) {
    const pool = await poolsStorage.getPool(block, poolId);
    const supply = pool.poolTokenSupply;

    if (supply) {
      const providersBalances = await getAllPoolProviders(block, poolId);

      for (const [provider, balance] of Object.entries(providersBalances)) {
        const accountLiquidityId = accountLiquidityStorage.getId(provider, poolId);
        const accountPoolTokens = BigInt(balance);

        if (!accountPoolTokens) {
          // skip empty account liquidity
          continue;
        }

        accountLiquidities.set(accountLiquidityId, {
          id: accountLiquidityId,
          accountId: provider,
          poolId: poolId,
          poolTokens: accountPoolTokens,
        });
      }
    }
  }

  const entities = [...accountLiquidities.values()];

  if (entities.length) {
    // get or create entities in DB & memory
    // We don't use Promise.all here because we need consistent order of requests in the log
    for (const entity of entities) {
      const item = await accountLiquidityStorage.getEntity(block, entity.id);
      // update data in memory storage
      Object.assign(item, entity);
      // await item.save();
    }
    // save in DB
    await accountLiquidityStorage.sync(block);
    getInitializeAccountLiquiditiesLog(block).info({}, `${entities.length} Account Liquidities initialized!`);
  } else {
    getInitializeAccountLiquiditiesLog(block).info({}, 'No Account Liquidities to initialize!');
  }

  isFirstBlockIndexed = true;
}
