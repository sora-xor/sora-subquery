import type { SubstrateBlock } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage, formatU128ToBalance, tickerSyntheticAssetId } from '../../utils/assets';
import { XOR } from '../../utils/consts';

let isFirstBlockIndexed = false;

export const getAssetInfos = async () => {
    try {
      logger.debug(`Asset infos request...`);
      const data = await api.query.assets.assetInfos.entries();
      logger.debug(`Asset infos request completed.`);
      return data;
    } catch (e) {
      logger.error("Error getting Asset infos");
      logger.error(e);
      return null;
    }
};

export const getSyntheticAssets = async () => {
    try {
      logger.debug(`Synthetic assets request...`);
      const data = await api.query.xstPool.enabledSynthetics.entries();
      logger.debug(`Synthetic assets request completed.`);
      return data;
    } catch (e) {
      logger.error("Error getting Synthetic assets");
      logger.error(e);
      return null;
    }
};

export const getBandRates = async () => {
    try {
      logger.debug(`Band rates request...`);
      const data = await api.query.band.symbolRates.entries();
      logger.debug(`Band rates request completed.`);
      return data;
    } catch (e) {
      logger.error("Error getting Band rates");
      logger.error(e);
      return null;
    }
};

export const getTokensIssuances = async () => {
    try {
      logger.debug(`Tokens issuances request...`);
      const data = await api.query.tokens.totalIssuance.entries();
      logger.debug(`Tokens issuances request completed.`);
      return data;
    } catch (e) {
      logger.error("Error getting Tokens issuances");
      logger.error(e);
      return null;
    }
};

export const getXorIssuance = async () => {
    try {
      logger.debug(`XOR issuance request...`);
      const data = await api.query.balances.totalIssuance();
      logger.debug(`XOR issuance request completed.`);
      return data;
    } catch (e) {
      logger.error("Error getting XOR issuance");
      logger.error(e);
      return null;
    }
};

export async function initializeAssets(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Asset entities`);

    const [
        assetInfos,
        syntheticAssets,
        bandRates,
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        getAssetInfos(),
        getSyntheticAssets(),
        getBandRates(),
        getTokensIssuances(),
        getXorIssuance()
    ]);

    const assets = new Map();

    const create = (assetId: string) => {
        if (!assets.has(assetId)) {
            assets.set(assetId, {
                id: assetId,
                liquidity: BigInt(0),
                priceUSD: '0',
                supply: BigInt(0),
            });
        }
    };

    if (assetInfos) {
        for (const [{args: [assetCodec]}, value] of assetInfos) {
            const assetId = getAssetId(assetCodec);

            assetPrecisions.set(assetId, value[2].toNumber());

            create(assetId);
        }
    }

    if (syntheticAssets) {
        for (const [{args: [assetCodec]}, value] of syntheticAssets) {
            const assetId = getAssetId(assetCodec);
            const data = value.toHuman() as any;
            const referenceSymbol = data.referenceSymbol;

            assetPrecisions.set(assetId, 18);
            tickerSyntheticAssetId.set(referenceSymbol, assetId);

            logger.debug(`[${blockNumber}]: ${referenceSymbol} ticker and synthetic asset ${assetId} added`);

            create(assetId);
        }
    }

    if (bandRates) {
        for (const [{args: [ticker]}, data] of bandRates) {
            const referenceSymbol = ticker.toHuman() as string;
            const assetId = tickerSyntheticAssetId.get(referenceSymbol);

            if (!assetId) {
                continue;
            }

            create(assetId);

            const price = (data as any).value.value.toString();
            const priceUSD = formatU128ToBalance(price, assetId);

            logger.debug(`${referenceSymbol} ticker price: ${priceUSD}`);

            assets.get(assetId).priceUSD = priceUSD;
        }
    }

    if (tokensIssuances) {
        for (const [{args: [assetCodec]}, value] of tokensIssuances) {
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
        await store.bulkUpdate('Asset', entities);
        await Promise.all(entities.map(entity => assetStorage.getAsset(entity.id)));
        logger.debug(`[${blockNumber}]: ${entities.length} Assets initialized!`);
    } else {
        logger.debug(`[${blockNumber}]: No Assets to initialize!`);
    }

    isFirstBlockIndexed = true;
}
