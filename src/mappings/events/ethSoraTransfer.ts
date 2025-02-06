import type { SubstrateEvent } from '@subql/types';

import { isEvent, getEventData } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { formatU128ToBalance } from '../../utils/assets';
import {
  getDepositedEventData,
  getTransferEventData,
  isAssetDepositedEvent,
  isAssetTransferEvent,
} from '../../utils/events';
import { logStartProcessingEvent } from '../../utils/logs';

export async function ethSoraTransferEventHandler(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const extrinsic = event.extrinsic;
  const registeredRequestEvent = extrinsic.events.find((e) => isEvent(e, 'ethBridge', 'RequestRegistered'));
  const currenciesEvent = extrinsic.events.find((e) => isAssetDepositedEvent(e) || isAssetTransferEvent(e));

  if (!registeredRequestEvent || !currenciesEvent) return;

  const [requestHash] = getEventData(registeredRequestEvent);

  const {
    assetId,
    amount: assetAmount,
    to,
  } = isAssetDepositedEvent(currenciesEvent)
    ? getDepositedEventData(currenciesEvent)
    : getTransferEventData(currenciesEvent);

  const amount = formatU128ToBalance(assetAmount, assetId);

  const details: any = {
    requestHash: requestHash.toString(),
    assetId,
    amount,
    to,
  };

  await createHistoryElement(extrinsic, details);
}
