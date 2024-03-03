import { SubstrateExtrinsic } from "@subql/types";

import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { logStartProcessingCall } from "../../utils/logs";

const Section = 'demeterFarmingPlatform';

export async function demeterDepositHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [desiredAmount, isFarm, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR;
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId);
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId);
  // farming or staking
  details.isFarm = isFarm.toHuman();

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Deposited');

  if (event) {
    const [amount] = event.event.data.slice().reverse();
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), details.assetId);
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId);
  }

  await createHistoryElement(extrinsic, details);
}

export async function demeterWithdrawHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [isFarm, desiredAmount, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR;
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId);
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId);
  // farming or staking
  details.isFarm = isFarm.toHuman();

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Withdrawn');

  if (event) {
    const { event: { data: [who, amount] } } = event;
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), details.assetId);
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId);
  }

  await createHistoryElement(extrinsic, details);
}

export async function demeterGetRewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [isFarm, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};

  // reward asset id
  details.assetId = getAssetId(rewardAssetId);
  // reward for farming or staking
  details.isFarm = isFarm.toHuman();

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'RewardWithdrawn');

  if (event) {
    const { event: { data: [who, amount] } } = event;

    details.amount = formatU128ToBalance(amount.toString(), details.assetId);
  } else {
    details.amount = '0';
  }

  await createHistoryElement(extrinsic, details);
}