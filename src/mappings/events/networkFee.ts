import { SubstrateEvent } from '@subql/types';

import { XOR } from '../../utils/consts';
import { getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { accountMetaStorage } from '../../utils/account';
import { getFeeWithdrawnData, isEvent, getEventData } from '../../utils/events';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingEvent } from '../../utils/logs';

export async function handleNetworkFee(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { accountId, fee, assetId } = getFeeWithdrawnData(event);

  let xorFee = fee;

  if (assetId !== XOR) {
    xorFee = '0';

    const feePayment = event.extrinsic?.events.find((e) => isEvent(e, 'transactionPayment', 'TransactionFeePaid'));

    if (feePayment) {
      const [_who, actualFee, _tip] = getEventData(feePayment);

      xorFee = actualFee.toString();
    }
  }

  const amount = formatU128ToBalance(xorFee, XOR);
  const amountUSD = await getAmountUSD(event.block, XOR, amount);

  await accountMetaStorage.updateFees(event.block, accountId, amount, amountUSD);
  await networkSnapshotsStorage.updateFeesStats(event.block, BigInt(xorFee));
}
