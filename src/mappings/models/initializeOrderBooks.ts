import { SubstrateBlock } from "@subql/types";

import { OrderBookStatus } from '../../types'
import { getBlockNumber } from '../../utils';
import { getAssetId, getAssetBalance } from '../../utils/assets';
import { getAllOrderBooks, orderBooksStorage } from '../../utils/orderBook';
import { getInitializeOrderBooksLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

export async function initializeOrderBooks(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeOrderBooksLog(block).debug('Initialize Order Books entities');

  await orderBooksStorage.updateAccountIds(block);

  const orderBooks = await getAllOrderBooks(block);

  const buffer = new Map();
  const updatedAtBlock = getBlockNumber(block);

  if (orderBooks) {
    for (const [key, value] of orderBooks) {
      const { dexId: dex, base, quote } = key.args[0] as any;
      const { status: statusCodec } = value as any;
      const dexId = Number(dex);
      const baseAssetId = getAssetId(base);
      const quoteAssetId = getAssetId(quote);
      const id = orderBooksStorage.getId(dexId, baseAssetId, quoteAssetId);
      const status = statusCodec ? statusCodec.toHuman() : OrderBookStatus.Trade;
      const accountId = await orderBooksStorage.getAccountId(block, id);

      // We don't use Promise.all here because we need consistent order of requests in the log
      const baseAssetReserves = await getAssetBalance(block, accountId, baseAssetId)
      const quoteAssetReserves = await getAssetBalance(block, accountId, quoteAssetId)

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
    for (const entity of entities) {
        const orderBook = await orderBooksStorage.getEntity(block, entity.id);
        // update data in memory storage
        Object.assign(orderBook, entity);
    }
    // save in DB
    await orderBooksStorage.sync(block);
    getInitializeOrderBooksLog(block).info(`${entities.length} Order Books initialized!`);
  } else {
    getInitializeOrderBooksLog(block).info('No Order Books to initialize!');
  }

  isFirstBlockIndexed = true;
}
