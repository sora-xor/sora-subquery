import { SubstrateBlock } from "@subql/types";

import { OrderBookStatus } from '../../types'
import { getAssetId } from '../../utils/assets';
import { getAllOrderBooks, OrderBooksStorage, orderBooksStorage, getOrderBookAssetBalance } from '../../utils/orderBook';
import { getInitializeOrderBooksLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

export async function initializeOrderBooks(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeOrderBooksLog(block).debug('Initialize Order Books entities');

  await orderBooksStorage.updateAccountIds(block);

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
      const id = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
      const status = statusCodec ? statusCodec.toHuman() : OrderBookStatus.Trade;
      const accountId = await orderBooksStorage.getAccountId(block, id);

      // We don't use Promise.all here because we need consistent order of requests in the log
      const baseAssetReserves = getOrderBookAssetBalance(block, accountId, baseAssetId)
      const quoteAssetReserves = getOrderBookAssetBalance(block, accountId, quoteAssetId)

      buffer.set(id, {
        id,
        dexId,
        baseAssetId,
        quoteAssetId,
        baseAssetReserves,
        quoteAssetReserves,
        status,
        updatedAtBlock,
      });
    }
  }

  const entities = [...buffer.values()];

  if (entities.length) {
    // get or create entities in DB & memory
    // We don't use Promise.all here because we need consistent order of requests in the log
    const created = [];
    for (const { dexId, baseAssetId, quoteAssetId } of entities) {
        const orderBook = await orderBooksStorage.getOrderBook(block, dexId, baseAssetId, quoteAssetId);
        created.push(orderBook);
    }
    // update data in memory storage
    created.forEach((entity) => {
      Object.assign(entity, buffer.get(entity.id))
    });
    // save in DB
    await store.bulkUpdate('OrderBook', created);
    getInitializeOrderBooksLog(block).debug(`${entities.length} Order Books initialized!`);
  } else {
    getInitializeOrderBooksLog(block).debug('No Order Books to initialize!');
  }

  isFirstBlockIndexed = true;
}
