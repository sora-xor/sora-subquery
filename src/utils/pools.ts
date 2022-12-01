import { SubstrateExtrinsic } from '@subql/types';

import { isAssetTransferEvent, getTransferEventData } from './events';

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

const handlePoolTransfersEvents = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
  const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

  for (const transfer of transfers) {
    const { assetId, from, to, amount } = getTransferEventData(transfer);

    if (poolAccountsMap.has(from)) {

    }

    if (poolAccountsMap.has(to)) {
      
    }
  }
};
