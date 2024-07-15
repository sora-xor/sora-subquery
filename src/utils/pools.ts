import BigNumber from "bignumber.js";

import { SubstrateBlock } from '@subql/types';
import { PoolXYK } from '../types';
import { XOR, KXOR, ETH, DOUBLE_PRICE_POOL } from './consts';
import { assetStorage, assetPrecisions } from "./assets";
import { getInitializePoolsLog, getPoolsStorageLog } from './logs';
import { poolXykApyUpdatesStream } from "./stream";

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

// https://github.com/sora-xor/sora2-network/blob/master/runtime/src/lib.rs#L1026
export const getChameleonPool = (pool: Partial<PoolXYK>): boolean => {
  if (pool.baseAssetId === XOR && pool.targetAssetId === ETH) {
    return true;
  } else {
    return false;
  }
};

// https://github.com/sora-xor/sora2-network/blob/master/runtime/src/lib.rs#L1012
export const getChameleonPoolBaseAssetId = (dexBaseAssetId: string): string | null => {
  if (dexBaseAssetId === XOR) {
    return KXOR;
  } else {
    return null;
  }
};

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

    const addresses = poolAccounts.getById(poolId);

    if (addresses) {
      return await this.getPool(block ,...addresses);
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
      const multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;
      pool = new PoolXYK(poolId, baseAssetId, targetAssetId, BigInt(0), BigInt(0), multiplier);
      pool.priceUSD = '0';
      pool.strategicBonusApy = '0';

      await pool.save();

      getPoolsStorageLog(block).debug({ poolId }, 'Created Pool XYK');
    }

    this.storage.set(poolId, pool);

    return pool;
  }

  public async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    const lockedAssets = new Map<string, bigint>();

    for (const { baseAssetId, targetAssetId, baseAssetReserves, targetAssetReserves } of this.storage.values()) {
      const a = lockedAssets.get(baseAssetId);
      const b = lockedAssets.get(targetAssetId);

      lockedAssets.set(baseAssetId, (a || BigInt(0)) + baseAssetReserves);
      lockedAssets.set(targetAssetId, (b || BigInt(0)) + targetAssetReserves);
    }

    let lockedUSD = new BigNumber(0);

    // update locked luqidity for assets
    for (const [assetId, liquidity] of lockedAssets.entries()) {
      const asset = await assetStorage.updateLiquidity(block, assetId, liquidity);
      const assetLockedUSD = new BigNumber(asset.liquidity.toString())
        .multipliedBy(new BigNumber(asset.priceUSD))
        .dividedBy(Math.pow(10, assetPrecisions.get(asset.id)));

      lockedUSD = lockedUSD.plus(assetLockedUSD);
    }

    return lockedUSD;
  }

  async updateApy(block: SubstrateBlock, id: string, strategicBonusApy: string): Promise<void> {
    const pool = await this.getPoolById(block, id);

    if (pool.strategicBonusApy === strategicBonusApy) return;

    pool.strategicBonusApy = strategicBonusApy;
    // stream update
    poolXykApyUpdatesStream.update(id, strategicBonusApy);
  }
}

export const poolAccounts = new PoolAccountsStorage();
export const poolsStorage = new PoolsStorage();
