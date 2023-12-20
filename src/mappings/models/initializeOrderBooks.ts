import { SubstrateBlock } from "@subql/types";

import { OrderBookStatus } from '../../types'
import { getAssetId } from '../../utils/assets';
import { XOR } from "../../utils/consts";
import { getAllOrderBooks, OrderBooksStorage, orderBooksStorage } from '../../utils/orderBook';
import { getInitializeOrderBooksLog } from "../../utils/logs";

let isFirstBlockIndexed = false;

const getOrderBookAssetBalance = async (accountId: string, assetId: string) => {
  let data!: any;

  if (assetId === XOR) {
    data = (await api.query.system.account(accountId) as any).data;
  } else {
    data = await api.query.tokens.accounts(accountId, assetId);
  }

  return BigInt(data.free.toString());
};

export async function initializeOrderBooks(block: SubstrateBlock): Promise<void> {
  if (isFirstBlockIndexed) return;

  getInitializeOrderBooksLog(block).debug('Initialize Order Books entities');

  await orderBooksStorage.updateAccountIds();

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
      const accountId = orderBooksStorage.accountIds.get(id);
      const [baseAssetLocked, quoteAssetLocked] = await Promise.all([
        getOrderBookAssetBalance(accountId, baseAssetId),
        getOrderBookAssetBalance(accountId, quoteAssetId),
      ]);

      buffer.set(id, {
        id,
        dexId,
        baseAssetId,
        quoteAssetId,
        baseAssetLocked,
        quoteAssetLocked,
        status,
        updatedAtBlock,
      });
    }
  }

  const entities = [...buffer.values()];

  if (entities.length) {
    // get or create entities in DB & memory
    const created = await Promise.all(entities.map(({ dexId, baseAssetId, quoteAssetId }) => orderBooksStorage.getOrderBook(block, dexId, baseAssetId, quoteAssetId)));
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
