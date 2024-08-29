import { SubstrateBlock } from "@subql/types";
import { AccountLiquidity } from '../../types';

import { getAccountEntity } from '../../utils/account';
import { accountLiquidityStorage } from '../../utils/accountLiquidity';
import { poolAccounts, getAllPoolProviders } from '../../utils/pools';
import { getInitializePoolsLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

export async function initializeAccountLiquidities(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;
  
  getInitializePoolsLog(block).debug('Initialize AccountLiquidity entities');

  for (const poolId of poolAccounts.accounts) {
    const accountLiquidities: Map<string, Partial<AccountLiquidity>> = new Map();

    const providersBalances = await getAllPoolProviders(block, poolId);

    for (const [provider, balance] of Object.entries(providersBalances)) {
      const account = await getAccountEntity(block, provider);
      const accountLiquidityId = accountLiquidityStorage.getId(account.id, poolId);

      accountLiquidities.set(accountLiquidityId, {
        id: accountLiquidityId,
        accountId: account.id,
        poolId,
        poolTokens: BigInt(balance),
      });
    }

    const entities = [...accountLiquidities.values()];

    if (entities.length) {
      // get or create entities in DB & memory
      // We don't use Promise.all here because we need consistent order of requests in the log
      for (const entity of entities) {
        const liquidity = await accountLiquidityStorage.getEntity(block, entity.id);
        // update data in memory storage
        Object.assign(liquidity, entity);
      }
      // save in DB
      await accountLiquidityStorage.sync(block);
      getInitializePoolsLog(block).debug({ poolId }, `${entities.length} Account Liquidities initialized!`);
    } else {
      getInitializePoolsLog(block).debug({ poolId }, 'No Account Liquidities to initialize!');
    }
  }

  isFirstBlockIndexed = true;
}
