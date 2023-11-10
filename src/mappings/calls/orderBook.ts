import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getAssetId } from '../../utils/assets';
import { placeLimitOrderExtrinsicData } from '../../utils/orderBook';
import { logStartProcessingCall } from "../../utils/logs";

export async function orderBookPlaceLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const historyElement = await createHistoryElement(extrinsic)
  const details = placeLimitOrderExtrinsicData(extrinsic);

  const limitOrderPlacedEvent = extrinsic.events.find(e =>
    e.event.section === 'orderBook' &&
    e.event.method === 'LimitOrderPlaced'
  );

  if (limitOrderPlacedEvent) {
    const { event: { data: [orderBookId, orderId] } } = limitOrderPlacedEvent;
    details.orderId = Number(orderId.toHuman());
  }

  await addDataToHistoryElement(extrinsic, historyElement, details)
  await updateHistoryElementStats(extrinsic, historyElement);
}

export async function orderBookCancelLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const historyElement = await createHistoryElement(extrinsic)
  const cancelEvents = extrinsic.events.filter(e =>
    e.event.section === 'orderBook' &&
    e.event.method === 'LimitOrderCanceled'
  ) as any[];

  const details = cancelEvents.reduce((buffer, cancelEvent) => {
    const { event: { data: [orderBookId, orderId] } } = cancelEvent;

    buffer.push({
      dexId: orderBookId.dexId.toNumber(),
      baseAssetId: getAssetId(orderBookId.base),
      quoteAssetId: getAssetId(orderBookId.quote),
      orderId: Number(orderId.toHuman()),
    });

    return buffer;
  }, []);

  await addDataToHistoryElement(extrinsic, historyElement, details)
  await updateHistoryElementStats(extrinsic, historyElement);
}
