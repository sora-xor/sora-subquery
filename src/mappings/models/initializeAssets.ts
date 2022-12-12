import type { SubstrateBlock } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage } from '../../utils/assets';
import { XOR } from '../../utils/consts';

let isFirstBlockIndexed = false;

export async function initializeAssets(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Asset entities`);

    const [
        assetInfos,
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        api.query.assets.assetInfos.entries(),
        api.query.tokens.totalIssuance.entries(),
        api.query.balances.totalIssuance()
    ]);

    const assets = new Map();

    for (const [{args: [assetCodec]}, value] of assetInfos) {
        const assetId = getAssetId(assetCodec);

        assetPrecisions.set(assetId, value[2].toNumber());

        assets.set(assetId, {
            id: assetId,
            liquidity: BigInt(0),
            priceUSD: '0',
            supply: BigInt(0),
        });
    }

    for (const [{args: [assetCodec]}, value] of tokensIssuances) {
        const assetId = getAssetId(assetCodec);

        if (assets.has(assetId)) {
            assets.get(assetId).supply = BigInt(value.toString());
        }
    }

    assets.get(XOR).supply = BigInt(xorIssuance.toString());

    const entities = [...assets.values()];

    await store.bulkUpdate('Asset', entities);

    await Promise.all(entities.map(entity => assetStorage.getAsset(entity.id)));

    isFirstBlockIndexed = true;
}
