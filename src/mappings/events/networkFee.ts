import { SubstrateEvent } from "@subql/types";

import { networkSnapshotsStorage } from '../../utils/network';
import { formatDateTimestamp } from '../../utils';

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  const { event: { data: [account, fee] } } = event;
  const blockTimestamp = formatDateTimestamp(event.block.timestamp);
  const formattedFee = BigInt(fee.toString());

  await networkSnapshotsStorage.updateFeesStats(formattedFee, blockTimestamp);
}