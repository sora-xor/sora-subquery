import type { SubstrateBlock } from '@subql/types';

import {
  assetPrecisions,
  getAssetId,
  assetStorage,
  formatU128ToBalance,
  tickerSyntheticAssetId,
} from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { getInitializeAssetsLog } from '../../utils/logs';

let isFirstBlockIndexed = false;

export const getAssetInfos = async (block: SubstrateBlock) => {
  try {
    getInitializeAssetsLog(block).debug('Asset infos request...');
    const data = await api.query.assets.assetInfos.entries();
    getInitializeAssetsLog(block).debug('Asset infos request completed');
    return data;
  } catch (e) {
    getInitializeAssetsLog(block).error('Error getting Asset infos');
    getInitializeAssetsLog(block).error(e);
    return null;
  }
};

export const getSyntheticAssets = async (block: SubstrateBlock) => {
  try {
    getInitializeAssetsLog(block).debug('Synthetic assets request...');
    const data = await api.query.xstPool.enabledSynthetics.entries();
    getInitializeAssetsLog(block).debug('Synthetic assets request completed');
    return data;
  } catch (e) {
    getInitializeAssetsLog(block).error('Error getting Synthetic assets');
    getInitializeAssetsLog(block).error(e);
    return null;
  }
};

export const getBandRates = async (block: SubstrateBlock) => {
  try {
    getInitializeAssetsLog(block).debug('Band rates request...');
    const data = await api.query.band.symbolRates.entries();
    getInitializeAssetsLog(block).debug('Band rates request completed');
    return data;
  } catch (e) {
    getInitializeAssetsLog(block).error('Error getting Band rates');
    getInitializeAssetsLog(block).error(e);
    return null;
  }
};

export const getTokensIssuances = async (block: SubstrateBlock) => {
  try {
    getInitializeAssetsLog(block).debug('Tokens issuances request...');
    const data = await api.query.tokens.totalIssuance.entries();
    getInitializeAssetsLog(block).debug('Tokens issuances request completed');
    return data;
  } catch (e) {
    getInitializeAssetsLog(block).error('Error getting Tokens issuances');
    getInitializeAssetsLog(block).error(e);
    return null;
  }
};

export const getXorIssuance = async (block: SubstrateBlock) => {
  try {
    getInitializeAssetsLog(block).debug('XOR issuance request...');
    const data = await api.query.balances.totalIssuance();
    getInitializeAssetsLog(block).debug('XOR issuance request completed');
    return data;
  } catch (e) {
    getInitializeAssetsLog(block).error('Error getting XOR issuance');
    getInitializeAssetsLog(block).error(e);
    return null;
  }
};

export async function initializeAssets(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeAssetsLog(block).debug('Initialize Asset entities');

  // We don't use Promise.all here because we need consistent order of requests in the log
  const assetInfos = await getAssetInfos(block);
  const syntheticAssets = await getSyntheticAssets(block);
  const bandRates = await getBandRates(block);
  const tokensIssuances = await getTokensIssuances(block);
  const xorIssuance = await getXorIssuance(block);

  const assets = new Map();

  const create = (assetId: string) => {
    if (!assets.has(assetId)) {
      assets.set(assetId, {
        id: assetId,
      });
    }
  };

  if (assetInfos) {
    for (const [
      {
        args: [assetCodec],
      },
      value,
    ] of assetInfos) {
      const assetId = getAssetId(assetCodec);

      assetPrecisions.set(assetId, value[2].toNumber());

      create(assetId);
    }
  }

  if (syntheticAssets) {
    for (const [
      {
        args: [assetCodec],
      },
      value,
    ] of syntheticAssets) {
      const assetId = getAssetId(assetCodec);
      const data = value.toHuman() as any;
      const referenceSymbol = data.referenceSymbol;

      assetPrecisions.set(assetId, 18);
      tickerSyntheticAssetId.set(referenceSymbol, assetId);

      getInitializeAssetsLog(block).debug(`'${referenceSymbol}' ticker and synthetic asset '${assetId}' added`);
      create(assetId);
    }
  }

  if (bandRates) {
    for (const [
      {
        args: [ticker],
      },
      data,
    ] of bandRates) {
      const referenceSymbol = ticker.toHuman() as string;
      const assetId = tickerSyntheticAssetId.get(referenceSymbol);

      if (!assetId) {
        continue;
      }

      create(assetId);

      const price = (data as any).value.value.toString();
      const priceUSD = formatU128ToBalance(price, assetId);

      getInitializeAssetsLog(block).debug(`'${referenceSymbol}' ticker price: ${priceUSD}`);

      assets.get(assetId).priceUSD = priceUSD;
    }
  }

  if (tokensIssuances) {
    for (const [
      {
        args: [assetCodec],
      },
      value,
    ] of tokensIssuances) {
      const assetId = getAssetId(assetCodec);

      create(assetId);

      assets.get(assetId).supply = BigInt(value.toString());
    }
  }

  create(XOR);

  if (xorIssuance) {
    assets.get(XOR).supply = BigInt(xorIssuance.toString());
  }

  const entities = [...assets.values()];

  if (entities.length) {
    // get or create entities in DB & memory
    // We don't use Promise.all here because we need consistent order of requests in the log
    for (const entity of entities) {
      const item = await assetStorage.getEntity(block, entity.id);
      // update data in memory storage
      Object.assign(item, entity);
      // await item.save();
    }
    // save in DB
    await assetStorage.sync(block);
    getInitializeAssetsLog(block).info(`${entities.length} Assets initialized!`);
  } else {
    getInitializeAssetsLog(block).info('No Assets to initialize!');
  }

  isFirstBlockIndexed = true;
}
