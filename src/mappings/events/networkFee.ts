import { SubstrateEvent } from "@subql/types";

import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingEvent } from "../../utils/logs";

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event)

  const { event: { data: [account, fee] } } = event;
  const formattedFee = BigInt(fee.toString());

  await networkSnapshotsStorage.updateFeesStats(event.block, formattedFee);
}