import { SubstrateBlock } from '@subql/types';

import { PoolXYK } from '../types';
import { isAssetTransferEvent, getTransferEventData } from './events';
import { XOR, DOUBLE_PRICE_POOL } from './consts';

// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
  flag: false,
  get() {
    return this.flag;
  },
  set(flag: boolean) {
    this.flag = flag;
  },
};

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

export const getPoolProperties = async (baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    logger.debug(`[${baseAssetId};${targetAssetId}] Pool properties request...`);
    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any;
    logger.debug(`[${baseAssetId};${targetAssetId}] Pool properties request completed`);

    if (!Array.isArray(props)) return null;

    const poolAccountId = props[0];

    return poolAccountId;
  } catch (error) {
    logger.error("Error getting pool properties");
    logger.error(error);
    return null;
  }
}

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

  get(baseAssetId: string, targetAssetId: string): string | undefined {
    return this.getMap(baseAssetId)?.get(targetAssetId);
  }

  getMap(baseAssetId: string) {
    return this.storage.get(baseAssetId);
  }

  has(poolAccountId: string): boolean {
    return this.accountIds.includes(poolAccountId);
  }

  async getPoolAccountId (baseAssetId: string, targetAssetId: string): Promise<string | null> {
    const id = this.get(baseAssetId, targetAssetId);

    if (id) return id;

    const poolAccountId = await getPoolProperties(baseAssetId, targetAssetId);
  
    if (poolAccountId) {
      poolAccounts.add(baseAssetId, targetAssetId, poolAccountId);
    } else {
      logger.error(`Cannot find pool id ${baseAssetId}:${targetAssetId}`);
    }
  
    return poolAccountId;
  }
};

class PoolsStorage {
  private storage!: Map<string, PoolXYK>;

  constructor() {
    this.storage = new Map();
  }

  getPoolById(poolId: string): PoolXYK | null {
    return this.storage.get(poolId) ?? null;
  }

  async sync(): Promise<void> {
    logger.debug('[PoolsStorage] sync');

    for (const pool of this.storage.values()) {
      await pool.save();
    }
  }

  async getPool(baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> {
    const poolId = await poolAccounts.getPoolAccountId(baseAssetId, targetAssetId);

    if (!poolId) return null;

    if (this.storage.has(poolId)) {
      return this.storage.get(poolId);
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

    this.storage.set(poolId, pool);

    return pool;
  }
}

export const poolAccounts = new PoolAccountsStorage();
export const poolsStorage = new PoolsStorage();

export const handleBlockTransferEvents = async (block: SubstrateBlock): Promise<void> => {
  const blockNumber = block.block.header.number.toNumber();
  const transfers = block.events.filter(e => isAssetTransferEvent(e));

  for (const transfer of transfers) {
    const { assetId, from, to, amount } = getTransferEventData(transfer);

    if (poolAccounts.has(from)) {
      logger.debug(`[${blockNumber}][${from}] Handle pool withdraw`);
      const pool = poolsStorage.getPoolById(from);

      if (pool.baseAsset === assetId) {
        pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount.toString());
      } else if (pool.targetAsset === assetId) {
        pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount.toString());
      }

      PoolsPrices.set(true);
    }

    if (poolAccounts.has(to)) {
      logger.debug(`[${blockNumber}][${to}] Handle pool deposit`);
      const pool = poolsStorage.getPoolById(to);

      if (pool.baseAsset === assetId) {
        pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount.toString());
      } else if (pool.targetAsset === assetId) {
        pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount.toString());
      }

      PoolsPrices.set(true);
    }
  }
};
