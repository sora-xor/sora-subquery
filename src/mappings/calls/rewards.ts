import { SubstrateExtrinsic } from '@subql/types';
import { createHistoryElement } from '../../utils/history';
import { isAssetTransferEvent, getTransferEventData } from '../../utils/events';
import { logStartProcessingCall } from '../../utils/logs';

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = extrinsic.events.reduce((buffer, e) => {
    if (isAssetTransferEvent(e)) {
      const { assetId, amount } = getTransferEventData(e);
      buffer.push({ assetId, amount });
    }
    return buffer;
  }, []);

  await createHistoryElement(extrinsic, details);
}
