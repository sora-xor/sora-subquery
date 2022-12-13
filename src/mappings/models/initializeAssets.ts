import type { SubstrateBlock } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage } from '../../utils/assets';
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
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        getAssetInfos(),
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
    } else {
        logger.debug(`[${blockNumber}]: No Assets to initialize!`);
    }

    isFirstBlockIndexed = true;
}
