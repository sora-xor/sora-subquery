import { SubstrateBlock } from "@subql/types";

import { priceUpdatesStream, poolXykApyUpdatesStream } from '../../utils/stream';
import { getStreamLog } from '../../utils/logs';
import { shouldUpdate } from "../../utils";

const streams = [priceUpdatesStream, poolXykApyUpdatesStream];

export async function syncStreams(block: SubstrateBlock) {
  if (!shouldUpdate(block, 60)) return;

  for (const stream of streams) {
    if (stream.hasUpdate) {
      await stream.sync(block);
      getStreamLog(block).debug(`"${stream.id}" stream updated`);
    }
  }
}
