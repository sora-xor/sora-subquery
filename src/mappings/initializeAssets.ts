import { SubstrateBlock } from "@subql/types";

import { assetPrecisions, getAssetId, getOrCreateAssetEntity } from '../utils/assets';

let isFirstBlockIndexed = false;

export async function initializeAssets(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Asset entities`);

    let initialAssets = await api.query.assets.assetInfos.entries();

    for (const [{args: [assetId]}, value] of initialAssets) {
        const asset = getAssetId(assetId);

        assetPrecisions.set(asset, value[2].toNumber());

        await getOrCreateAssetEntity(asset);
    }

    isFirstBlockIndexed = true;
}
