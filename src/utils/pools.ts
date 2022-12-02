import { SubstrateBlock } from '@subql/types';

import { PoolXYK } from '../types';
import { isAssetTransferEvent, getTransferEventData } from './events';
import { XOR, DOUBLE_PRICE_POOL } from './consts';

// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
  flag: true,
  get() {
    return this.flag;
  },
  set(flag: boolean) {
    this.flag = flag;
  },
};

class PoolAccountsStorage {
  private storage: Map<string, Map<string, string>>;
  private accountIds: string[];

  constructor() {
    this.storage = new Map();
    this.accountIds = [];
  }

  add(baseAssetId: string, targetAssetId: string, poolAccountId: string): void {
    if (!this.storage.has(baseAssetId)) {
      this.storage.set(baseAssetId, new Map());
    }
    this.storage.get(baseAssetId).set(targetAssetId, poolAccountId);
    this.accountIds = [...new Set([...this.accountIds, poolAccountId])];
  }

  getMap(baseAssetId: string) {
    return this.storage.get(baseAssetId);
  }

  get(baseAssetId: string, targetAssetId: string): string | undefined {
    return this.getMap(baseAssetId)?.get(targetAssetId);
  }

  has(poolAccountId: string): boolean {
    return this.accountIds.includes(poolAccountId);
  }
};

export const poolAccounts = new PoolAccountsStorage();

export const getAllReserves = async (baseAssetId: string) => {
  try {
    logger.debug(`[${baseAssetId}] Pools XYK Reserves request...`);
    const reserves = await api.query.poolXYK.reserves.entries(baseAssetId);
    logger.debug(`[${baseAssetId}] Pools XYK Reserves request completed.`);
    return reserves;
  } catch (e) {
    logger.error("Error getting reserves");
    logger.error(e);
    return null;
  }
};

export const getPoolAccountId = async (baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    const savedId = poolAccounts.get(baseAssetId, targetAssetId);

    if (savedId) return savedId;

    logger.debug('Pool properties request...');

    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any;

    logger.debug('Pool properties request completed');

    if (!Array.isArray(props)) return null;

    const poolAccountId = props[0];

    poolAccounts.add(baseAssetId, targetAssetId, poolAccountId);

    return poolAccountId;
  } catch (e) {
    logger.error("Error getting pool properties");
    logger.error(e);
    return null;
  }
}

export const getOrCreatePoolXYKEntity = async (baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> => {
  const poolId = await getPoolAccountId(baseAssetId, targetAssetId);

  if (!poolId) {
    logger.error(`Cannot find pool id ${baseAssetId}:${targetAssetId}`);
    return null;
  }

  let pool = await PoolXYK.get(poolId);

  if (!pool) {
      pool = new PoolXYK(poolId);
      pool.baseAsset = baseAssetId;
      pool.targetAsset = targetAssetId;
      pool.baseAssetReserves = BigInt(0);
      pool.targetAssetReserves = BigInt(0);
      pool.multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
      pool.priceUSD = '0';
      pool.strategicBonusApy = '0';

      await pool.save();

      logger.debug(`[${poolId}] Created Pool XYK`);
  }

  return pool;
};

export const handleBlockTransferEvents = async (block: SubstrateBlock): Promise<void> => {
  const blockNumber = block.block.header.number.toNumber();
  const transfers = block.events.filter(e => isAssetTransferEvent(e));

  for (const transfer of transfers) {
    const { assetId, from, to, amount } = getTransferEventData(transfer);

    if (poolAccounts.has(from)) {
      logger.debug(`[${blockNumber}][${from}] Handle pool withdraw`);
      const pool = await PoolXYK.get(from);

      if (pool.baseAsset === assetId) {
        pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount.toString());
      } else if (pool.targetAsset === assetId) {
        pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount.toString());
      }

      await pool.save();
    }

    if (poolAccounts.has(to)) {
      logger.debug(`[${blockNumber}][${to}] Handle pool deposit`);
      const pool = await PoolXYK.get(to);

      if (pool.baseAsset === assetId) {
        pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount.toString());
      } else if (pool.targetAsset === assetId) {
        pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount.toString());
      }

      await pool.save();
    }
  }
};
