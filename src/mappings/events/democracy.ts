import BigNumber from 'bignumber.js';

import { SubstrateEvent } from '@subql/types';

import { XOR } from '../../utils/consts';
import { accountMetaStorage } from '../../utils/account';
import { getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { getEventData } from '../../utils/events';
import { logStartProcessingEvent } from '../../utils/logs';

const getVoteConvictionRate = (voteCodec: any): number => {
  const conviction = voteCodec.conviction;

  if (conviction.isLocked1x) {
    return 1;
  } else if (conviction.isLocked2x) {
    return 2;
  } else if (conviction.isLocked3x) {
    return 3;
  } else if (conviction.isLocked4x) {
    return 4;
  } else if (conviction.isLocked5x) {
    return 5;
  } else if (conviction.isLocked6x) {
    return 6;
  } else {
    return 0.1;
  }
};

const getVoteAmount = (voteAccountCodec: any): string => {
  let amount = BigInt(0);
  let multiplier = new BigNumber(0.1);

  if (voteAccountCodec.isStandart) {
    const { vote, balance } = voteAccountCodec.asStandart;

    multiplier = new BigNumber(getVoteConvictionRate(vote));
    amount += BigInt(balance.toString());
  } else if (voteAccountCodec.isSplit) {
    const { aye, nay } = voteAccountCodec.asSplit;

    amount += BigInt(aye.toString());
    amount += BigInt(nay.toString());
  }

  const bnTotalAmount = new BigNumber(amount.toString()).multipliedBy(multiplier);
  const totalAmount = formatU128ToBalance(bnTotalAmount.toString(), XOR);

  return totalAmount;
};

export async function handleDemocracyVoted(event: SubstrateEvent): Promise<void> {
  logStartProcessingEvent(event);

  const [voter, _refIndexCodec, voteAccountCodec] = getEventData(event) as any;

  const accountId = voter.toString();
  const assetId = XOR;
  const amount = getVoteAmount(voteAccountCodec);
  const amountUSD = await getAmountUSD(event.block, assetId, amount);

  await accountMetaStorage.updateGovernance(event.block, accountId, amount, amountUSD);
}
