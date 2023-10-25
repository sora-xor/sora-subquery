import { SubstrateBlock } from "@subql/types";

import { priceUpdatesStream, poolXykApyUpdatesStream } from '../../utils/stream';

const streams = [priceUpdatesStream, poolXykApyUpdatesStream];

export async function syncStreams(block: SubstrateBlock) {
  const blockNumber = block.block.header.number.toNumber();

  for (const stream of streams) {
    if (stream.hasUpdate) {
      await stream.sync(blockNumber);
    }
  }
}
