import BigNumber from "bignumber.js";

import { SubstrateBlock } from '@subql/types';
import { PoolXYK } from '../types';
import { XOR, DOUBLE_PRICE_POOL } from './consts';
import { assetStorage, assetPrecisions } from "./assets";
import { getInitializePoolsLog, getPoolsStorageLog } from './logs';

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

export const getAllReserves = async (block: SubstrateBlock, baseAssetId: string) => {
  try {
    getInitializePoolsLog(block).debug({ baseAssetId }, 'Pools XYK Reserves request...');
    const reserves = await api.query.poolXYK.reserves.entries(baseAssetId);
    getInitializePoolsLog(block).debug({ baseAssetId }, 'Pools XYK Reserves request completed');
    return reserves;
  } catch (e) {
    getInitializePoolsLog(block).error('Error getting Reserves');
		getInitializePoolsLog(block).error(e);
    return null;
  }
};

export const getAllProperties = async (block: SubstrateBlock, baseAssetId: string) => {
  try {
    getInitializePoolsLog(block).debug({ baseAssetId }, 'Pools XYK Properties request...');
    const properties = await api.query.poolXYK.properties.entries(baseAssetId);
    getInitializePoolsLog(block).debug(`'${baseAssetId}' Pools XYK Properties request completed`);
    return properties;
  } catch (e) {
    getInitializePoolsLog(block).error('Error getting Reserves')
		getInitializePoolsLog(block).error(e);
    return null;
  }
};

export const getPoolProperties = async (block: SubstrateBlock, baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    getInitializePoolsLog(block).debug({ baseAssetId, targetAssetId }, 'Pool properties request...');
    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any;
    getInitializePoolsLog(block).debug({ baseAssetId, targetAssetId }, 'Pool properties request completed');
    if (!Array.isArray(props)) return null;

    const poolAccountId = props[0];

    return poolAccountId;
  } catch (error) {
    getInitializePoolsLog(block).error('Error getting pool properties');
		getInitializePoolsLog(block).error(error);
    return null;
  }
}

class PoolAccountsStorage {
  private storage: Map<string, Map<string, string>>;
  private accountIds: Map<string, [string, string]>;

  constructor() {
    this.storage = new Map();
    this.accountIds = new Map();
  }

  add(baseAssetId: string, targetAssetId: string, poolAccountId: string): void {
    if (!this.storage.has(baseAssetId)) {
      this.storage.set(baseAssetId, new Map());
    }
    this.storage.get(baseAssetId).set(targetAssetId, poolAccountId);
    this.accountIds.set(poolAccountId, [baseAssetId, targetAssetId]);
  }

  get(baseAssetId: string, targetAssetId: string): string | undefined {
    return this.getMap(baseAssetId)?.get(targetAssetId);
  }

  getById(poolAccountId: string) {
    return this.accountIds.get(poolAccountId);
  }

  getMap(baseAssetId: string) {
    return this.storage.get(baseAssetId);
  }

  has(poolAccountId: string): boolean {
    return this.accountIds.has(poolAccountId);
  }

  async getPoolAccountId (block: SubstrateBlock, baseAssetId: string, targetAssetId: string): Promise<string | null> {
    const id = this.get(baseAssetId, targetAssetId);

    if (id) return id;

    const poolAccountId = await getPoolProperties(block, baseAssetId, targetAssetId);

    if (poolAccountId) {
      this.add(baseAssetId, targetAssetId, poolAccountId);
    } else {
      getInitializePoolsLog(block).debug({ baseAssetId, targetAssetId }, 'Cannot find pool id');
    }

    return poolAccountId;
  }
};

class PoolsStorage {
  private storage!: Map<string, PoolXYK>;

  constructor() {
    this.storage = new Map();
  }

  async getPoolById(block: SubstrateBlock, poolId: string): Promise<PoolXYK | null> {
    if (this.storage.has(poolId)) {
      return this.storage.get(poolId);
    }

    const adresses = poolAccounts.getById(poolId);

    if (adresses) {
      return await this.getPool(block ,...adresses);
    }

    return null;
  }

  async sync(block: SubstrateBlock, ): Promise<void> {
    getPoolsStorageLog(block).debug(`Sync ${this.storage.size} pools`);
    await store.bulkUpdate('PoolXYK', [...this.storage.values()]);
  }

  async getPool(block: SubstrateBlock, baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> {
    const poolId = await poolAccounts.getPoolAccountId(block, baseAssetId, targetAssetId);

    if (!poolId) return null;

    if (this.storage.has(poolId)) {
      return this.storage.get(poolId);
    }

    let pool = await PoolXYK.get(poolId);

    if (!pool) {
      pool = new PoolXYK(poolId);
      pool.baseAssetId = baseAssetId;
      pool.targetAssetId = targetAssetId;
      pool.baseAssetReserves = BigInt(0);
      pool.targetAssetReserves = BigInt(0);
      pool.multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
      pool.priceUSD = '0';
      pool.strategicBonusApy = '0';

      await pool.save();

      getPoolsStorageLog(block).debug({ poolId }, 'Created Pool XYK');
    }

    this.storage.set(poolId, pool);

    return pool;
  }

  public async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    let lockedUSD = new BigNumber(0);

    for (const entity of this.storage.values()) {
      const [baseAsset, targetAsset] = await Promise.all([
        assetStorage.getAsset(block, entity.baseAssetId),
        assetStorage.getAsset(block, entity.targetAssetId),
      ]);
      const baseAssetLocked = entity.baseAssetReserves || BigInt(0);
      const baseAssetLockedUSD = new BigNumber(baseAssetLocked.toString())
        .multipliedBy(new BigNumber(baseAsset.priceUSD))
        .dividedBy(Math.pow(10, assetPrecisions.get(baseAsset.id)));

      const targetAssetLocked = entity.targetAssetReserves || BigInt(0);
      const targetAssetLockedUSD = new BigNumber(targetAssetLocked.toString())
        .multipliedBy(new BigNumber(targetAsset.priceUSD))
        .dividedBy(Math.pow(10, assetPrecisions.get(targetAsset.id)));

      lockedUSD = lockedUSD.plus(baseAssetLockedUSD).plus(targetAssetLockedUSD);
    }

    return lockedUSD;
  }
}

export const poolAccounts = new PoolAccountsStorage();
export const poolsStorage = new PoolsStorage();
