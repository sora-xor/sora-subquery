import { SubstrateBlock } from "@subql/types";

import { assetPrecisions, getAssetId, assetStorage, getAssetSupply } from '../../utils/assets';

let isFirstBlockIndexed = false;

export async function initializeAssets(block: SubstrateBlock): Promise<void> {
    if (isFirstBlockIndexed) return;

    const blockNumber = block.block.header.number.toNumber();

    logger.debug(`[${blockNumber}]: Initialize Asset entities`);

    let initialAssets = await api.query.assets.assetInfos.entries();

    for (const [{args: [assetCodec]}, value] of initialAssets) {
        const assetId = getAssetId(assetCodec);

        assetPrecisions.set(assetId, value[2].toNumber());

        // create asset
        const asset = await assetStorage.getAsset(assetId);
        // get asset supply on start of indexing
        asset.supply = await getAssetSupply(assetId);
    }

    isFirstBlockIndexed = true;
}
