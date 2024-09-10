import BigNumber from "bignumber.js";

import { SubstrateBlock, SubstrateExtrinsic } from '@subql/types';
import { PoolSnapshot, PoolXYK, SnapshotType } from '../types';
import { XOR, KXOR, ETH, DOUBLE_PRICE_POOL } from './consts';
import { assetStorage, calcTvlUSD } from "./assets";
import { accountLiquiditySnapshotsStorage } from './accountLiquidity';
import { getUtilsLog } from './logs';
import { poolXykApyUpdatesStream } from "./stream";
import { EntityStorage, EntitySnapshotsStorage } from './storage';
import { getSnapshotTypes } from './index';
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

    if (!Array.isArray(props)) {
      getUtilsLog(block).debug({ baseAssetId, targetAssetId }, 'Pool id not exists');
      return null;
    } else {
      const poolAccountId = props[0];
      getUtilsLog(block).debug({ baseAssetId, targetAssetId, poolAccountId }, 'Pool id exists');
      return poolAccountId;
    }
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

export const getAllBalances = async (block: SubstrateBlock): Promise<Record<string, string>> => {
  try {
    getUtilsLog(block).debug({}, 'Pools balances request...');
    const results = (await api.query.poolXYK.totalIssuances.entries()) as any;
    getUtilsLog(block).debug({}, 'Pools balances request completed');

    const buffer = {};

    for (const [key, value] of results ) {
      const account = key.args[0].toString();
      const tokens = value.toString();

      buffer[account] = tokens;
    }

    return buffer;
  } catch (error) {
    getUtilsLog(block).error('Error getting pools balances');
		getUtilsLog(block).error(error);
    return {};
  }
}

export const getPoolBalance = async (block: SubstrateBlock, poolId: string): Promise<string> => {
  try {
    getUtilsLog(block).debug({ poolId }, 'Pool balance request...');
    const balance = (await api.query.poolXYK.totalIssuances(poolId)) as any;
    getUtilsLog(block).debug({ poolId }, 'Pool balance request completed');

    if (!balance.isSome) return '0';

    return balance.unwrap().toString();
  } catch (error) {
    getUtilsLog(block).error('Error getting pool balance');
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

class PoolsStorage extends EntityStorage<PoolXYK> {
  constructor() {
    super('PoolXYK');
  }

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    baseAssetId: string,
    targetAssetId: string
  ): Promise<PoolXYK> {
    const multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1;

    const pool = new PoolXYK(id, baseAssetId, targetAssetId, BigInt(0), BigInt(0), multiplier);
    pool.priceUSD = '0';
    pool.strategicBonusApy = '0';
    pool.poolTokenSupply = BigInt(0);
    pool.poolTokenPriceUSD = '0';
    pool.liquidityUSD = '0';

    return pool;
  }

  public override async getEntity(block: SubstrateBlock, poolId: string): Promise<PoolXYK | null> {
    const addresses = poolAccounts.getById(poolId);

    if (!addresses) return null;

    return await super.getEntity(block, poolId, ...addresses);
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

  getPoolReserves(pool: PoolXYK) {
    const { baseAssetId, targetAssetId, baseAssetReserves, targetAssetReserves, chameleonAssetReserves } = pool;
    const isChameleon = getChameleonPool({ baseAssetId, targetAssetId });

    const chameleonReserves = chameleonAssetReserves ?? BigInt(0);
    const baseReserves = isChameleon ? baseAssetReserves - chameleonReserves : baseAssetReserves;

    return {
      base: baseReserves,
      target: targetAssetReserves,
      chameleon: chameleonReserves
    };
  }

  getLockedAssetsReserves(): Map<string, bigint> {
    const lockedAssets = new Map<string, bigint>();

    for (const pool of this.entities) {
      const { base: baseAssetId, target: targetAssetId, chameleon: chameleonAssetId } = this.getPoolAssets(pool);
      const { base: baseReserves, target: targetReserves, chameleon: chameleonReserves } = this.getPoolReserves(pool);

      const lockedBase = lockedAssets.get(baseAssetId) ?? BigInt(0);
      const lockedTarget = lockedAssets.get(targetAssetId) ?? BigInt(0);

      lockedAssets.set(baseAssetId, lockedBase + baseReserves);
      lockedAssets.set(targetAssetId, lockedTarget + targetReserves);

      if (chameleonAssetId) {
        const lockedChameleon = lockedAssets.get(chameleonAssetId) ?? BigInt(0);
        lockedAssets.set(chameleonAssetId, lockedChameleon + chameleonReserves);
      }
    }

    return lockedAssets;
  }

  async updateApy(block: SubstrateBlock, id: string, strategicBonusApy: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);

    if (pool.strategicBonusApy !== strategicBonusApy) {
      pool.strategicBonusApy = strategicBonusApy;
      // stream update
      poolXykApyUpdatesStream.update(id, strategicBonusApy);

      this.log(block).debug({ poolId: pool.id }, 'Pool Apy updated');
    }

    return pool;
  }

  async updatePrice(block: SubstrateBlock, id: string, targetAssetPrice: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);

    if (pool.priceUSD !== targetAssetPrice) {
      pool.priceUSD = targetAssetPrice;

      this.log(block, true).debug({ id, newPrice: targetAssetPrice }, 'Pool price updated');

      await this.save(block, pool);
    }

    return pool;
  }

  public async updatePoolTokensSupply(block: SubstrateBlock, id: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);
    const balance = await getPoolBalance(block, id);

    pool.poolTokenSupply = BigInt(balance);

    this.log(block).debug({ poolId: pool.id }, 'Pool tokens updated');

    return pool;
  }

  async updateLiquidityUSD(block: SubstrateBlock, id: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);

    const { base: baseAssetId, target: targetAssetId, chameleon: chameleonAssetId } = this.getPoolAssets(pool);
    const { base: baseReserves, target: targetReserves, chameleon: chameleonReserves } = this.getPoolReserves(pool);

    const baseAssetPrice = (await assetStorage.getEntity(block, baseAssetId)).priceUSD;
    const targetAssetPrice = (await assetStorage.getEntity(block, targetAssetId)).priceUSD;
    const chameleonAssetPrice = chameleonAssetId ? (await assetStorage.getEntity(block, chameleonAssetId)).priceUSD : '0';

    let liquidityUSD = new BigNumber(0);

    liquidityUSD = liquidityUSD.plus(calcTvlUSD(baseAssetId, baseAssetPrice, baseReserves));
    liquidityUSD = liquidityUSD.plus(calcTvlUSD(targetAssetId, targetAssetPrice, targetReserves));
    liquidityUSD = liquidityUSD.plus(calcTvlUSD(chameleonAssetId, chameleonAssetPrice, chameleonReserves));

    pool.liquidityUSD = liquidityUSD.toFixed(2);

    this.log(block, true).debug({ id, liquidityUSD: pool.liquidityUSD }, 'Pool liquidity usd updated');

    return pool;
  }

  async updatePoolTokenPrice(
    block: SubstrateBlock,
    id: string,
  ): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);

    const supply = pool.poolTokenSupply ?? BigInt(0);
    const poolTokens = new BigNumber(supply.toString()).dividedBy(Math.pow(10, 18));
    const poolTokenPriceUSD = new BigNumber(pool.liquidityUSD).dividedBy(poolTokens).toString();

    pool.poolTokenPriceUSD = poolTokenPriceUSD;

    this.log(block).debug({ poolId: pool.id, poolTokenPriceUSD }, 'Pool token price updated');

    return pool;
  }

  async processPriceChange(block: SubstrateBlock, id: string, targetAssetPrice: string): Promise<void> {
    await this.updatePrice(block, id, targetAssetPrice);
    await this.updateLiquidityUSD(block, id);
    await this.updatePoolTokenPrice(block, id);
  }

  async processDeposit(block: SubstrateBlock, id: string, assetId: string, amount: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);
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

    this.log(block).debug({ poolId: pool.id }, 'Pool reserves saved after deposit');

    return pool;
  }

  async processWithdraw(block: SubstrateBlock, id: string, assetId: string, amount: string): Promise<PoolXYK> {
    const pool = await this.getEntity(block, id);
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

    this.log(block).debug({ poolId: pool.id }, 'Pool reserves saved after withdrawal');

    return pool;
  }
}

class PoolsSnapshotsStorage extends EntitySnapshotsStorage<PoolXYK, PoolSnapshot, PoolsStorage> {
  constructor(poolsStorage: PoolsStorage) {
    super('PoolSnapshot', poolsStorage);
  }

  public readonly updateTypes = [SnapshotType.HOUR, SnapshotType.DAY];
  public readonly removeTypes = [SnapshotType.HOUR];

  public override async createEntity(
    block: SubstrateBlock,
    id: string,
    timestamp: number,
    type: SnapshotType,
    pool: PoolXYK
  ): Promise<PoolSnapshot> {
    const { priceUSD: price, baseAssetReserves, targetAssetReserves, chameleonAssetReserves, poolTokenSupply } = pool;

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
      priceUSD,
      baseAssetReserves,
      targetAssetReserves,
      chameleonAssetReserves ?? BigInt(0),
      '0',
      '0',
      '0',
      poolTokenSupply ?? BigInt(0),
      '0',
      '0',
      '0'
    );

    return snapshot;
  }

  async updatePrice(block: SubstrateBlock, id: string, targetAssetPrice: string): Promise<void> {
    const pool = await this.entityStorage.updatePrice(block, id, targetAssetPrice);

    const bnPrice = new BigNumber(pool.priceUSD);
    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      // set open price to current price at first update (after start or restart)
      if (Number(snapshot.priceUSD.open) === 0) {
        snapshot.priceUSD.open = pool.priceUSD;
        snapshot.priceUSD.low = pool.priceUSD;
      }

      snapshot.priceUSD.close = pool.priceUSD;
      snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString();
      snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString();

      this.log(block, true).debug(
        { id, newPrice: pool.priceUSD },
        `${this.entityName} price updated'`
      )

      await this.save(block, snapshot);
    }
  }

  async updatePoolTokensSupply(block: SubstrateBlock, id: string) {
    const pool = await this.entityStorage.updatePoolTokensSupply(block, id);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.poolTokenSupply = pool.poolTokenSupply;

      this.log(block, true).debug({}, `${this.entityName} pool token supply updated`);

      await this.save(block, snapshot);
    }
  }

  async updateLiquidityUSD(block: SubstrateBlock, id: string): Promise<void> {
    const pool = await this.entityStorage.updateLiquidityUSD(block, id);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.liquidityUSD = pool.liquidityUSD;

      this.log(block, true).debug({}, `${this.entityName} liquidity usd updated`);

      await this.save(block, snapshot);
    }
  }

  async updatePoolTokenPrice(block: SubstrateBlock, id: string): Promise<void> {
    const pool = await this.entityStorage.updatePoolTokenPrice(block, id);

    const snapshotTypes = getSnapshotTypes(block, this.updateTypes);

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, id, type);

      snapshot.poolTokenPriceUSD = pool.poolTokenPriceUSD;

      this.log(block, true).debug({}, `${this.entityName} pool token price updated`);

      await this.save(block, snapshot);
    }
  }

  async processPriceChange(block: SubstrateBlock, id: string, targetAssetPrice: string): Promise<void> {
    await this.updatePrice(block, id, targetAssetPrice);
    await this.updateLiquidityUSD(block, id);
    await this.updatePoolTokenPrice(block, id);
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
      const pool = await this.entityStorage.getEntity(block, poolAccountId);
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

    for (const type of snapshotTypes) {
      const snapshot = await this.getSnapshot(block, pool.id, type);

      snapshot.baseAssetReserves = pool.baseAssetReserves;
      snapshot.targetAssetReserves = pool.targetAssetReserves;
      snapshot.chameleonAssetReserves = pool.chameleonAssetReserves ?? BigInt(0);

      this.log(block, true).debug({}, `${this.entityName} reserves updated`);

      await this.save(block, snapshot);
    }
  }

  async getLockedLiquidityUSD(block: SubstrateBlock): Promise<BigNumber> {
    const lockedAssets = this.entityStorage.getLockedAssetsReserves();

    let lockedUSD = new BigNumber(0);

    // update locked luqidity for assets
    for (const [assetId, liquidity] of lockedAssets.entries()) {
      const asset = await assetStorage.updateLiquidity(block, assetId, liquidity);
      const assetLockedUSD = calcTvlUSD(asset.id, asset.priceUSD, asset.liquidity);

      lockedUSD = lockedUSD.plus(assetLockedUSD);
    }

    return lockedUSD;
  }
}

export const poolAccounts = new PoolAccountsStorage();

export const poolsStorage = new PoolsStorage();
export const poolsSnapshotsStorage = new PoolsSnapshotsStorage(poolsStorage);


export const updatePoolLiquidity = async (
  block: SubstrateBlock,
  baseAssetId: string,
  targetAssetId: string,
  signer: string
) => {
  const poolId = await poolAccounts.getPoolAccountId(block, baseAssetId, targetAssetId);

  if (!poolId) return;

  const pool = await poolsStorage.getEntity(block, poolId);

  if (!pool) return;

  await poolsSnapshotsStorage.updatePoolTokensSupply(block, pool.id);
  await accountLiquiditySnapshotsStorage.updatePoolTokensSupply(block, signer, pool.id);
}