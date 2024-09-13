import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs } from '../../utils';
import { accountMetaStorage } from '../../utils/account';
import { isEvent, getEventData } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingCall } from '../../utils/logs';

export async function soraEthTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [asset, sidechainAddress, amountCodec] = getExtrinsicArgs(extrinsic);

  const sender = getExtrinsicSigner(extrinsic);
  const assetId = getAssetId(asset);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
    sidechainAddress: sidechainAddress.toString(),
  };

  const soraEthTransferEvent = extrinsic.events.find((e) => isEvent(e, 'ethBridge', 'RequestRegistered'));

  if (soraEthTransferEvent) {
    const [requestHash] = getEventData(soraEthTransferEvent);

    details.requestHash = requestHash.toString();
  }

  await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(extrinsic.block);

  await createHistoryElement(extrinsic, details);

  await accountMetaStorage.updateOutgoingDeposit(extrinsic.block, sender, amountUSD);
}
