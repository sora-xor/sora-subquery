import { SubstrateExtrinsic } from "@subql/types";
import { isEvent, getEventData } from "../../utils/events";
import { createHistoryElement } from "../../utils/history";
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from "../../utils/logs";

export async function orderBookPlaceLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [orderBookId, price, amountCodec, side, lifetimeOption] } } = extrinsic as any;

  const baseAssetId = getAssetId(orderBookId.base);
  const quoteAssetId = getAssetId(orderBookId.quote);

  const amount = formatU128ToBalance(amountCodec.toString(), baseAssetId);
  const amountUSD = await getAmountUSD(extrinsic.block, baseAssetId, amount);

  const details = {
    dexId: orderBookId.dexId.toNumber(),
    baseAssetId,
    quoteAssetId,
    orderId: null,
    price: formatU128ToBalance(price.toString(), quoteAssetId),
    amount,
    amountUSD,
    side: side.toHuman(),
    lifetime: !lifetimeOption.isEmpty ? Number(lifetimeOption.unwrap()) / 1000 : null,
  };

  const limitOrderPlacedEvent = extrinsic.events.find(e => isEvent(e, 'orderBook', 'LimitOrderPlaced'));

  if (limitOrderPlacedEvent) {
    const [_orderBookId, orderId] = getEventData(limitOrderPlacedEvent);
    details.orderId = Number(orderId.toHuman());
  }

  await createHistoryElement(extrinsic, details);
}

export async function orderBookCancelLimitOrderHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const cancelEvents = extrinsic.events.filter(e => isEvent(e, 'orderBook', 'LimitOrderCanceled')) as any[];

  const details = cancelEvents.reduce((buffer, cancelEvent) => {
    const [orderBookId, orderId] = getEventData(cancelEvent) as any;

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
