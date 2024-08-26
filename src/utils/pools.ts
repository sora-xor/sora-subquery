import BigNumber from "bignumber.js";

import { SubstrateBlock, SubstrateExtrinsic } from '@subql/types';
import { PoolSnapshot, PoolXYK, AccountLiquidity, SnapshotType } from '../types';
import { XOR, KXOR, ETH, DOUBLE_PRICE_POOL } from './consts';
import { assetStorage, calcTvlUSD } from "./assets";
import { getUtilsLog } from './logs';
import { poolXykApyUpdatesStream } from "./stream";
import { EntityStorage, EntitySnapshotsStorage } from './storage';
import { multiplyAndSqrt, getSnapshotTypes } from './index';
import { isAssetTransferEvent, getTransferEventData } from './events';

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
    getUtilsLog(block).debug({ baseAssetId }, 'Pools XYK Reserves request...');
    const reserves = await api.query.poolXYK.reserves.entries(baseAssetId);
    getUtilsLog(block).debug({ baseAssetId }, 'Pools XYK Reserves request completed');
    return reserves;
  } catch (e) {
    getUtilsLog(block).error('Error getting Reserves');
		getUtilsLog(block).error(e);
    return null;
  }
};

export const getAllProperties = async (block: SubstrateBlock, baseAssetId: string) => {
  try {
    getUtilsLog(block).debug({ baseAssetId }, 'Pools XYK Properties request...');
    const properties = await api.query.poolXYK.properties.entries(baseAssetId);
    getUtilsLog(block).debug(`'${baseAssetId}' Pools XYK Properties request completed`);
    return properties;
  } catch (e) {
    getUtilsLog(block).error('Error getting Reserves')
		getUtilsLog(block).error(e);
    return null;
  }
};

export const getPoolProperties = async (block: SubstrateBlock, baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    getUtilsLog(block).debug({ baseAssetId, targetAssetId }, 'Pool properties request...');
    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any;
    getUtilsLog(block).debug({ baseAssetId, targetAssetId }, 'Pool properties request completed');
    if (!Array.isArray(props)) return null;

    const poolAccountId = props[0];

    return poolAccountId;
  } catch (error) {
    getUtilsLog(block).error('Error getting pool properties');
		getUtilsLog(block).error(error);
    return null;
  }
}

export const getAllPoolProviders = async (block: SubstrateBlock, poolId: string): Promise<Record<string, string>> => {
  try {
    getUtilsLog(block).debug({ poolId }, 'Pool providers request...');
    const providers = (await api.query.poolXYK.poolProviders.entries(poolId)) as any;
    getUtilsLog(block).debug({ poolId }, 'Pool providers request completed');

    const buffer = {};

    for (const [key, value] of providers) {
      const account = key.args[1].toString();
      const tokens = value.toString();

      buffer[account] = tokens;
    }

    return buffer;
  } catch (error) {
    getUtilsLog(block).error('Error getting pool providers');
		getUtilsLog(block).error(error);
    return {};
  }
}

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

  get accounts(): string[] {
    return [...this.accountIds.keys()];
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
      getUtilsLog(block).debug({ baseAssetId, targetAssetId }, 'Cannot find pool id');
    }

    return poolAccountId;
  }
};

class AccountLiquidityStorage extends EntityStorage<AccountLiquidity> {
  constructor() {
    super('AccountLiquidity');
  }

  public createEntity(block: SubstrateBlock, id: string, accountId: string, poolId: string): AccountLiquidity {
    const accountLiquidity = new AccountLiquidity(id, accountId, poolId, BigInt(0));

    return accountLiquidity;
  }

  public async getLiquidity(block: SubstrateBlock, accountId: string, poolId: string): Promise<AccountLiquidity> {
    const id = this.getId(accountId, poolId);

    return await this.getEntity(block, id);
  }
}

class PoolsStorage extends EntityStorage<PoolXYK> {
  constructor() {
    super('PoolXYK');
  }

  public createEntity(block: SubstrateBlock, id: string, baseAssetId: string, targetAssetId: string): PoolXYK {
    const multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;

    const pool = new PoolXYK(id, baseAssetId, targetAssetId, BigInt(0), BigInt(0), multiplier);
    pool.priceUSD = '0';
    pool.strategicBonusApy = '0';

    return pool;
  }

  async getPoolById(block: SubstrateBlock, poolId: string): Promise<PoolXYK | null> {
    if (this.storage.has(poolId)) {
      return this.storage.get(poolId);
    }

    const addresses = poolAccounts.getById(poolId);

    if (addresses) {
      return await this.getPool(block, ...addresses);
    }

    return null;
  }

  async getPool(block: SubstrateBlock, baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> {
    const poolId = await poolAccounts.getPoolAccountId(block, baseAssetId, targetAssetId);

    if (!poolId) return null;

    return await this.getEntity(block, poolId, baseAssetId, targetAssetId);
  }

  getPoolAssets(pool: PoolXYK) {
    const isChameleonPool = getChameleonPool(pool);
    const chameleonAssetId = isChameleonPool ? getChameleonPoolBaseAssetId(pool.baseAssetId) : null;

    return {
      base: pool.baseAssetId,
      target: pool.targetAssetId,
      chameleon: chameleonAssetId,
    };
  }

  // asset storage duplicate
  async updatePrice(block: SubstrateBlock, id: string, priceUSD: string): Promise<void> {
    const pool = await this.getPoolById(block, id);

    if (pool.priceUSD === priceUSD) return;

    pool.priceUSD = priceUSD;

    this.log(block, true).debug({ assetId: id, newPrice: priceUSD }, 'Pool price updated');

    await this.save(block, pool);
  }

  async processDeposit(block: SubstrateBlock, id: string, assetId: string, amount: string) {
    const pool = await this.getPoolById(block, id);
    const { base, target, chameleon } = this.getPoolAssets(pool);

    if (chameleon === assetId) {
      pool.chameleonAssetReserves = (pool.chameleonAssetReserves ?? BigInt(0)) + BigInt(amount);
    }

    if (base === assetId || chameleon === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount);
    } else if (target === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount);
    }

    PoolsPrices.set(true);

    this.log(block).debug({ poolId: pool.id }, 'Pool information saved after deposit');

    return pool;
  }

  async processWithdraw(block: SubstrateBlock, id: string, assetId: string, amount: string) {
    const pool = await this.getPoolById(block, id);
    const { base, target, chameleon } = this.getPoolAssets(pool);

    if (chameleon === assetId) {
      pool.chameleonAssetReserves = (pool.chameleonAssetReserves ?? BigInt(0)) - BigInt(amount);
    }

    if (base === assetId || chameleon === assetId) {
      pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount);
    } else if (target === assetId) {
      pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount);
    }

    PoolsPrices.set(true);

    this.log(block).debug({ poolId: pool.id }, 'Pool information saved after withdrawal');

    return pool;
  }

  public getPoolTokens(pool: PoolXYK): bigint {
    const { baseAssetReserves, targetAssetReserves } = pool;

    const a = new BigNumber(baseAssetReserves.toString());
    const b = new BigNumber(targetAssetReserves.toString());
    const poolTokens = multiplyAndSqrt(a, b);

    return BigInt(poolTokens.toFixed(18));
  }

  async updateApy(block: SubstrateBlock, id: string, strategicBonusApy: string): Promise<void> {
    const pool = await this.getPoolById(block, id);

    if (pool.strategicBonusApy === strategicBonusApy) return;

    pool.strategicBonusApy = strategicBonusApy;
    // stream update
    poolXykApyUpdatesStream.update(id, strategicBonusApy);
  }
}

class PoolsSnapshotsStorage extends EntitySnapshotsStorage<PoolXYK, PoolSnapshot, PoolsStorage> {
  constructor(poolsStorage: PoolsStorage) {
    super('PoolSnapshot', poolsStorage);
  }

  createEntity(block: SubstrateBlock, id: string, timestamp: number, type: SnapshotType, pool: PoolXYK): PoolSnapshot {
    const { priceUSD: price, baseAssetReserves, targetAssetReserves, chameleonAssetReserves } = pool;

    const poolTokenSupply = this.entityStorage.getPoolTokens(pool);
    const poolPrice = price ?? '0';
    const priceUSD = {
      open: poolPrice,
      close: poolPrice,
      high: poolPrice,
      low: poolPrice,
    };

    const snapshot = new PoolSnapshot(
      id,
      pool.id,
      timestamp,
      type,
      poolTokenSupply,
      '0',
      priceUSD,
      baseAssetReserves,
      targetAssetReserves,
      chameleonAssetReserves,
      '0',
      '0',
      '0',
      '0',
      '0'
    );

    return snapshot;
  }

  // asset snapshot storage duplicate
  async updatePrice(block: SubstrateBlock, id: string, price: string): Promise<void> {
    await this.entityStorage.updatePrice(block, id, price);

    const bnPrice = new BigNumber(price);
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = price;
        snapshot.priceUSD.low = price;
      }

      snapshot.priceUSD.close = price;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      this.log(block, true).debug(
        { id, newPrice: price },
        'Pool snapshot price updated',
      )

      await this.save(block, snapshot);
    }
  }

  async processWithdraw(block: SubstrateBlock, id: string, assetId: string, amount: string) {
    const pool = await this.entityStorage.processWithdraw(block, id, assetId, amount);
    await this.updateReserves(block, pool);
  }

  async processDeposit(block: SubstrateBlock, id: string, assetId: string, amount: string) {
    const pool = await this.entityStorage.processDeposit(block, id, assetId, amount);
    await this.updateReserves(block, pool);
  }

  async processSwap(extrinsic: SubstrateExtrinsic) {
    const block = extrinsic.block;
    const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));
    const poolTransfers: Record<string, Array<{ assetId: string; amount: string; }>> = transfers.reduce((acc, transferEvent) => {
      const { assetId, from, to, amount } = getTransferEventData(transferEvent);
      const poolAccountId = [from, to].find((address) => poolAccounts.has(address));

      if (!poolAccountId) return acc;
      if (!acc[poolAccountId]) acc[poolAccountId] = [];

      acc[poolAccountId].push({ assetId, amount });

      return acc;
    }, {});

    for (const [poolAccountId, transfers] of Object.entries(poolTransfers)) {
      const pool = await this.entityStorage.getPoolById(block, poolAccountId);
      const { base, target, chameleon } = this.entityStorage.getPoolAssets(pool);

      const volumesUSD: BigNumber[] = [];

      let baseVolume = new BigNumber(0);
      let targetVolume = new BigNumber(0);
      let chameleonVolume = new BigNumber(0);

      for (const { assetId, amount } of transfers) {
        const volume = new BigNumber(amount);

        if (base === assetId) {
          baseVolume = baseVolume.plus(volume);
        } else if (target === assetId) {
          targetVolume = targetVolume.plus(volume);
        } else if (chameleon === assetId) {
          chameleonVolume = chameleonVolume.plus(volume);
        }

        const asset = await assetStorage.getEntity(block, assetId);
        const assetPrice = asset.priceUSD ?? '0';
        const volumeUSD = new BigNumber(assetPrice).multipliedBy(new BigNumber(amount));

        volumesUSD.push(volumeUSD);
      }

      const volumeUSD = BigNumber.min(...volumesUSD);

      await this.updateVolume(block, poolAccountId, volumeUSD, baseVolume, targetVolume, chameleonVolume);
    }
  }

  protected async syncLiquidityUSD(block: SubstrateBlock): Promise<Map<string, bigint>> {
    const lockedAssets = new Map<string, bigint>();

    for (const {
      id,
      baseAssetId,
      targetAssetId,
      baseAssetReserves,
      targetAssetReserves: targetReserves,
      chameleonAssetReserves,
    } of this.entityStorage.values) {
      let liquidityUSD = new BigNumber(0);

      const isChameleon = getChameleonPool({ baseAssetId, targetAssetId });
      const chameleonAssetId = isChameleon ? getChameleonPoolBaseAssetId(baseAssetId) : null;
      const chameleonReserves = chameleonAssetReserves ?? BigInt(0);
      const baseReserves = isChameleon ? baseAssetReserves - chameleonReserves : baseAssetReserves;

      const baseAsset = await assetStorage.getEntity(block, baseAssetId);
      const lockedBaseReserves = lockedAssets.get(baseAssetId) ?? BigInt(0);

      liquidityUSD = liquidityUSD.plus(calcTvlUSD(baseAsset, baseReserves));
      lockedAssets.set(baseAssetId, lockedBaseReserves + baseReserves);

      const targetAsset = await assetStorage.getEntity(block, targetAssetId);
      const lockedTargetReserves = lockedAssets.get(targetAssetId) ?? BigInt(0);

      liquidityUSD = liquidityUSD.plus(calcTvlUSD(targetAsset, targetReserves));
      lockedAssets.set(targetAssetId, lockedTargetReserves + targetReserves);

      if (chameleonAssetId) {
        const chameleonAsset = await assetStorage.getEntity(block, chameleonAssetId);
        const lockedChameleonReserves = lockedAssets.get(chameleonAssetId) ?? BigInt(0);

        liquidityUSD = liquidityUSD.plus(calcTvlUSD(chameleonAsset, chameleonReserves));
        lockedAssets.set(chameleonAssetId, lockedChameleonReserves + chameleonReserves);
      }

      await poolsSnapshotsStorage.updateLiquidityUSD(block, id, liquidityUSD);
    }

    return lockedAssets;
  }

  async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    const lockedAssets = await this.syncLiquidityUSD(block);

    let lockedUSD = new BigNumber(0);

    // update locked luqidity for assets
    for (const [assetId, liquidity] of lockedAssets.entries()) {
      const asset = await assetStorage.updateLiquidity(block, assetId, liquidity);
      const assetLockedUSD = calcTvlUSD(asset, asset.liquidity);

      lockedUSD = lockedUSD.plus(assetLockedUSD);
    }

    return lockedUSD;
  }

  protected async updateVolume(
    block: SubstrateBlock,
    id: string,
    volumeUSD: BigNumber,
    baseVolume: BigNumber,
    targetVolume: BigNumber,
    chameleonVolume: BigNumber,
  ) {
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2);
      snapshot.baseAssetVolume = new BigNumber(snapshot.baseAssetVolume).plus(baseVolume).toString();
      snapshot.targetAssetVolume = new BigNumber(snapshot.targetAssetVolume).plus(targetVolume).toString();
      snapshot.chameleonAssetVolume = new BigNumber(snapshot.chameleonAssetVolume).plus(chameleonVolume).toString();

      this.log(block, true).debug({}, `${this.entityName} volumeUSD updated`);

      await this.save(block, snapshot);
    }
  }

  protected async updateReserves(block: SubstrateBlock, pool: PoolXYK) {
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);
    const poolTokenSupply = this.entityStorage.getPoolTokens(pool);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, pool.id, type);

      snapshot.baseAssetReserves = pool.baseAssetReserves;
      snapshot.targetAssetReserves = pool.targetAssetReserves;
      snapshot.chameleonAssetReserves = pool.chameleonAssetReserves;
      snapshot.poolTokenSupply = poolTokenSupply;

      this.log(block, true).debug({}, `${this.entityName} reserves updated`);

      await this.save(block, snapshot);
    }
  }

  protected async updateLiquidityUSD(
    block: SubstrateBlock,
    id: string,
    liquidityUSD: BigNumber,
  ): Promise<void> {
    const pool = await this.entityStorage.getPoolById(block, id);
    const poolTokenSupply = this.entityStorage.getPoolTokens(pool);
    const poolTokens = new BigNumber(poolTokenSupply.toString()).dividedBy(Math.pow(10, 18));
    const poolTokenPriceUSD = liquidityUSD.dividedBy(poolTokens).toString();

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.liquidityUSD = liquidityUSD.toFixed(2);
      snapshot.poolTokenPriceUSD = poolTokenPriceUSD;
    }
  }
}

export const poolAccounts = new PoolAccountsStorage();
export const poolsStorage = new PoolsStorage();
export const poolsSnapshotsStorage = new PoolsSnapshotsStorage(poolsStorage);
export const accountLiquidityStorage = new AccountLiquidityStorage();
