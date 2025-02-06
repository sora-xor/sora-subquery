import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs } from '../../utils';
import { isEvent, getEventData } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from '../../utils/logs';

export async function soraEthTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [asset, sidechainAddress, amountCodec] = getExtrinsicArgs(extrinsic);

  const sender = getExtrinsicSigner(extrinsic);
  const assetId = getAssetId(asset);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);

  const details: any = {
    assetId,
    amount,
    sidechainAddress: sidechainAddress.toString(),
  };

  const soraEthTransferEvent = extrinsic.events.find((e) => isEvent(e, 'ethBridge', 'RequestRegistered'));

  if (soraEthTransferEvent) {
    const [requestHash] = getEventData(soraEthTransferEvent);

    details.requestHash = requestHash.toString();
  }

  await createHistoryElement(extrinsic, details);
}
