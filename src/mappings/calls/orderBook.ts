import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from "../../utils/logs";

export async function orderBookPlaceLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const historyElement = await createHistoryElement(extrinsic)

  const { extrinsic: { args: [orderBookId, price, amount, side, lifespanOption] } } = extrinsic as any;

  const base = getAssetId(orderBookId.base);
  const quote = getAssetId(orderBookId.quote);
  const details = {
    dexId: orderBookId.dexId.toNumber(),
    base,
    quote,
    orderId: null,
    price: formatU128ToBalance(price.toString(), quote),
    amount: formatU128ToBalance(amount.toString(), base),
    side: side.toHuman(),
    lifespan: !lifespanOption.isEmpty ? Number(lifespanOption.unwrap()) : null,
  };

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
      base: getAssetId(orderBookId.base),
      quote: getAssetId(orderBookId.quote),
      orderId: Number(orderId.toHuman()),
    });

    return buffer;
  }, []);

  await addDataToHistoryElement(extrinsic, historyElement, details)
  await updateHistoryElementStats(extrinsic, historyElement);
}
