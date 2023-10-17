import { SubstrateExtrinsic } from "@subql/types";

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { logCallHandler } from "../../utils/logs";

const Section = 'demeterFarmingPlatform';

export async function demeterDepositHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logCallHandler(extrinsic);

  const record = assignCommonHistoryElemInfo(extrinsic);

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

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved demeterFarmingPlatform deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function demeterWithdrawHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logCallHandler(extrinsic);

  const record = assignCommonHistoryElemInfo(extrinsic);

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

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved demeterFarmingPlatform withdraw with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function demeterGetRewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logCallHandler(extrinsic);

  const record = assignCommonHistoryElemInfo(extrinsic);

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

  record.data = details;

  await record.save();
  await updateHistoryElementStats(record);

  logger.debug(`===== Saved demeterFarmingPlatform getRewards with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}