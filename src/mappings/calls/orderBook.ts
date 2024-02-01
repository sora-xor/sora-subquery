import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from "../../utils/logs";

export async function orderBookPlaceLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [orderBookId, price, amount, side, lifetimeOption] } } = extrinsic as any;

  const baseAssetId = getAssetId(orderBookId.base);
  const quoteAssetId = getAssetId(orderBookId.quote);

  const details = {
    dexId: orderBookId.dexId.toNumber(),
    baseAssetId,
    quoteAssetId,
    orderId: null,
    price: formatU128ToBalance(price.toString(), quoteAssetId),
    amount: formatU128ToBalance(amount.toString(), baseAssetId),
    side: side.toHuman(),
    lifetime: !lifetimeOption.isEmpty ? Number(lifetimeOption.unwrap()) / 1000 : null,
  };

  const limitOrderPlacedEvent = extrinsic.events.find(e =>
    e.event.section === 'orderBook' &&
    e.event.method === 'LimitOrderPlaced'
  );

  if (limitOrderPlacedEvent) {
    const { event: { data: [_orderBookId, orderId] } } = limitOrderPlacedEvent;
    details.orderId = Number(orderId.toHuman());
  }

  await createHistoryElement(extrinsic, details);
}

export async function orderBookCancelLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

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

  await createHistoryElement(extrinsic, details);
}
