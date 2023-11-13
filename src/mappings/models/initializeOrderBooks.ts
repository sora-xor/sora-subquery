import { SubstrateBlock } from "@subql/types";

import { OrderBookStatus } from '../../types'
import { getAssetId } from '../../utils/assets';
import { getAllOrderBooks, orderBooksStorage } from '../../utils/orderBook';
import { getInitializeOrderBooksLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

export async function initializeOrderBooks(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeOrderBooksLog(block).debug('Initialize Order Books entities');

  const orderBooks = await getAllOrderBooks(block);

  const buffer = new Map();
  const updatedAtBlock = block.block.header.number.toNumber();

  if (orderBooks) {
    for (const [key, value] of orderBooks) {
      const { dexId: dex, base, quote } = key.args[0] as any;
      const { status: statusCodec } = value as any;
      const dexId = Number(dex);
      const baseAssetId = getAssetId(base);
      const quoteAssetId = getAssetId(quote);
      const id = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
      const status = statusCodec ? statusCodec.toHuman() : OrderBookStatus.Trade;

      buffer.set(id, {
        id,
        dexId,
        baseAssetId,
        quoteAssetId,
        status,
        updatedAtBlock,
      });
    }
  }

  const entities = [...buffer.values()];

  if (entities.length) {
    await store.bulkUpdate('OrderBook', entities);
    await Promise.all(entities.map(({ dexId, baseAssetId, quoteAssetId }) => orderBooksStorage.getOrderBook(block, dexId, baseAssetId, quoteAssetId)));
    getInitializeOrderBooksLog(block).debug(`${entities.length} Order Books initialized!`);
  } else {
    getInitializeOrderBooksLog(block).debug('No Order Books to initialize!');
  }

  isFirstBlockIndexed = true;
}
