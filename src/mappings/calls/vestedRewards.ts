import BigNumber from 'bignumber.js';

import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs, toFloat } from '../../utils';
import { isAssetTransferEvent } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from '../../utils/logs';

export async function vestedTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [destCodec, scheduleCodec] = getExtrinsicArgs(extrinsic);
  const schedule = scheduleCodec as any;
  const args = schedule.isLinearVestingSchedule ? schedule.asLinearVestingSchedule : schedule.asLinearPendingVestingSchedule;

  const from = getExtrinsicSigner(extrinsic);
  const to = destCodec.toString();
  const assetId = getAssetId(args.assetId);

  const period = args.period.toNumber();
  const periodCount = args.periodCount.toNumber();
  const perPeriod = formatU128ToBalance(args.perPeriod.unwrap().toString(), assetId);
  const remainderAmount = formatU128ToBalance(args.remainderAmount.unwrap().toString(), assetId);

  const perPeriodBn = new BigNumber(perPeriod);
  const remainderAmountBn = new BigNumber(remainderAmount);
  const amountBn = remainderAmountBn.isZero()
    ? perPeriodBn.multipliedBy(periodCount)
    : perPeriodBn.multipliedBy(periodCount - 1).plus(remainderAmountBn);

  const percent = toFloat(perPeriodBn.multipliedBy(100).dividedBy(amountBn));

  const amount = amountBn.toString();
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details: any = {
    assetId,
    amount,
    amountUSD,
    from,
    to,
    period,
    percent
  };

  await createHistoryElement(extrinsic, details, { address: from });

  const assetTransfer = extrinsic.events.find((e) => isAssetTransferEvent(e));

  if (assetTransfer && from !== to) {
    await createHistoryElement(assetTransfer as any, details, { address: to, useStats: false });
  }
}
