import BigNumber from 'bignumber.js';

import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs, toFloat } from '../../utils';
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
  const perPeriod = args.perPeriod.unwrapOr('0').toString();
  const remainderAmount = args.remainderAmount.unwrapOr('0').toString();

  const perPeriodBn = new BigNumber(perPeriod);
  const remainderAmountBn = new BigNumber(remainderAmount);
  const amountBn = remainderAmountBn.isZero()
    ? perPeriodBn.multipliedBy(periodCount)
    : perPeriodBn.multipliedBy(periodCount - 1).plus(remainderAmountBn);

  const percent = toFloat(perPeriodBn.multipliedBy(100).dividedBy(amountBn));

  const amount = formatU128ToBalance(amountBn.toString(), assetId);
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

  if (from !== to) {
    await createHistoryElement(extrinsic, details, { address: to, useStats: false });
  }
}
