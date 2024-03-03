import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingCall } from "../../utils/logs";

export async function soraEthTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const { extrinsic: { args: [asset, sidechainAddress, amount, ] } } = extrinsic;

    const assetId = getAssetId(asset);

    const details: any = {
        assetId,
        sidechainAddress: sidechainAddress.toString(),
        amount: formatU128ToBalance(amount.toString(), assetId)
    };

    const soraEthTransferEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered');

    if (soraEthTransferEvent) {
        const { event: { data: [requestHash] } } = soraEthTransferEvent;

        details.requestHash = requestHash.toString();
    }

    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(extrinsic.block);

    await createHistoryElement(extrinsic, details);
}