import { XOR } from '../../utils/consts';
import { SubstrateEvent } from '@subql/types';
import { ReferrerReward } from '../../types';
import { formatDateTimestamp } from '../../utils';
import { getReferrerRewardedData } from '../../utils/events';
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs';

export async function referrerRewardHandler(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const { referral, referrer, amount, assetId } = getReferrerRewardedData(event);

  if (assetId !== XOR) {
    // 'XORless referrer rewards is not supported!'
    return;
  }

  const key = `${referral}-${referrer}`;

  let referrerReward = await ReferrerReward.get(key);

  if (!referrerReward) {
    referrerReward = new ReferrerReward(key, referral, referrer, formatDateTimestamp(event.block.timestamp), BigInt(0));
  }

  referrerReward.updated = formatDateTimestamp(event.block.timestamp);

  referrerReward.amount = referrerReward.amount + BigInt(amount);

  await referrerReward.save();

  getEventHandlerLog(event).debug(
    {
      referral: referrerReward.referral,
      referrer: referrerReward.referrer,
      amount: referrerReward.amount,
      updated: referrerReward.updated,
    },
    'Referrer reward updated'
  );
}
