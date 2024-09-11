import { SubstrateEvent } from "@subql/types";

import { XOR } from '../../utils/consts';
import { getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { accountMetaStorage } from '../../utils/account';
import { getEventData } from '../../utils/events';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingEvent } from "../../utils/logs";

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event)

  const [account, fee] = getEventData(event);

  const accountId = account.toString();
  const assetId = XOR;
  const amount = formatU128ToBalance(fee.toString(), assetId);
  const amountUSD = await getAmountUSD(event.block, assetId, amount);

  await accountMetaStorage.updateFees(event.block, accountId, amount, amountUSD);
  await networkSnapshotsStorage.updateFeesStats(event.block, BigInt(fee.toString()));
}