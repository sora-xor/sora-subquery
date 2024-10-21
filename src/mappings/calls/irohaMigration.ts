import { SubstrateExtrinsic } from '@subql/types';

import {
  isAssetDepositedEvent,
  getDepositedEventData,
  isAssetTransferEvent,
  getTransferEventData,
} from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { formatU128ToBalance, getAmountUSD } from '../../utils/assets';
import { logStartProcessingCall } from '../../utils/logs';

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details: any = {};

  const currenciesEvent = extrinsic.events.find((e) => isAssetDepositedEvent(e) || isAssetTransferEvent(e));

  if (currenciesEvent) {
    const {
      assetId,
      amount: assetAmount,
      to,
    } = isAssetDepositedEvent(currenciesEvent)
      ? getDepositedEventData(currenciesEvent)
      : getTransferEventData(currenciesEvent);

    const amount = formatU128ToBalance(assetAmount, assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.assetId = assetId;
    details.amount = amount;
    details.amountUSD = amountUSD;
    details.to = to;
  }

  await createHistoryElement(extrinsic, details);
}
