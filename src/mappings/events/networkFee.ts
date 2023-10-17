import { SubstrateEvent } from "@subql/types";

import { networkSnapshotsStorage } from '../../utils/network';
import { formatDateTimestamp } from '../../utils';
import { logEventHandler } from "../../utils/logs";

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  logEventHandler(event)

  const { event: { data: [account, fee] } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);
  const formattedFee = BigInt(fee.toString());

  await networkSnapshotsStorage.updateFeesStats(formattedFee, blockTimestamp);
}