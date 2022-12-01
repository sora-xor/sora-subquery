import { SubstrateExtrinsic } from '@subql/types';

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

const encodeKey = (baseAssetId: string, targetAssetId: string) => [baseAssetId, targetAssetId].join(';');
const decodeKey = (key: string) => key.split(';');
const poolAssetsMap = new Map<string, string>();
const poolAccountsMap = new Map<string, string>();

export const getAllReserves = async (baseAssetId: string) => {
  try {
    return await api.query.poolXYK.reserves.entries(baseAssetId);
  } catch (e) {
    logger.error("Error getting reserves");
    logger.error(e);
    return null;
  }
};

export const getPoolAccountId = async (baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    const key = encodeKey(baseAssetId, targetAssetId);

    if (poolAssetsMap.has(key)) {
      return poolAssetsMap.get(key);
    }

    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any;

    if (!Array.isArray(props)) return null;

    const poolAccountId = props[0];

    poolAssetsMap.set(key, poolAccountId);
    poolAccountsMap.set(poolAccountId, key);

    return poolAccountId;
  } catch (e) {
    logger.error("Error getting pool properties");
    logger.error(e);
    return null;
  }
}

export const getOrCreatePoolXYKEntity = async (baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> => {
  const poolId = await getPoolAccountId(baseAssetId, targetAssetId);

  if (!poolId) return null;

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
  }

  return pool;
};

const handlePoolTransfersEvents = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
  const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

  for (const transfer of transfers) {
    const { assetId, from, to, amount } = getTransferEventData(transfer);

    if (poolAccountsMap.has(from)) {
      const pool = await PoolXYK.get(from);

      if (pool.baseAsset === assetId) {
        pool.baseAssetReserves = 
      }
    }

    if (poolAccountsMap.has(to)) {
      
    }
  }
};
