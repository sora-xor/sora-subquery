import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { getAssetId } from '../../utils/assets';
import { logStartProcessingCall } from "../../utils/logs";

export async function assetRegistrationHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const { extrinsic: { args: [symbol] } } = extrinsic;

    const details: any = {
        assetId: symbol.toHuman()
    };

    const assetRegistrationEvent = extrinsic.events.find(e => e.event.method === 'AssetRegistered');

    if (assetRegistrationEvent) {
        const { event: { data: [asset] } } = assetRegistrationEvent;

        const assetId: string = getAssetId(asset);

        details.assetId = assetId;
    }

    await createHistoryElement(extrinsic, details);
}