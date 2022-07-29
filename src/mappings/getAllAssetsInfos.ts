import { SubstrateBlock } from "@subql/types";
import { assetPrecisions } from "./utils";

let isFirstBlockIndexed = true;

export async function getAllAssetsInfos(block: SubstrateBlock): Promise<void> {
    if (!isFirstBlockIndexed) {
        return;
    }

    let initialAssets = await api.query.assets.assetInfos.entries()

    initialAssets.forEach(([{args: [assetId]}, value]) => {
        assetPrecisions.set(assetId.toString(), value[2].toNumber())
    });

    isFirstBlockIndexed = false;

}
