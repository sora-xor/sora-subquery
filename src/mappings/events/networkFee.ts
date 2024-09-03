import { SubstrateEvent } from "@subql/types";

import { accountMetaStorage } from '../../utils/account';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingEvent } from "../../utils/logs";

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event)

  const { event: { data: [account, fee] } } = event;

  const accountId = account.toString();
  const formattedFee = fee.toString();

  await accountMetaStorage.updateFees(event.block, accountId, formattedFee);
  await networkSnapshotsStorage.updateFeesStats(event.block, BigInt(formattedFee));
}