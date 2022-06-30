import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
import { XOR } from "..";

const Section = 'demeterFarmingPlatform';

export async function demeterDepositHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught demeterFarmingPlatform deposit extrinsic")

  const record = assignCommonHistoryElemInfo(extrinsic);

  const { extrinsic: { args: [assetId, rewardAssetId, isFarm, desiredAmount] } } = extrinsic;

  const details: any = {};

  // asset id paired with XOR (farming), or asset id (staking)
  details.assetId = assetId.toString();
  // reward asset id
  details.rewardAssetId = rewardAssetId.toString();
  // farming or staking
  details.isFarm = isFarm.toHuman();

  // ability to find farming operation by XOR address
  if (details.isFarm) {
    details.baseAssetId = XOR;
  }

  if (record.execution.success) {
    const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Deposited');
    const { event: { data: [who, pool_asset, reward_asset, is_farm, amount] } } = event;

    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), assetId.toString());
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), assetId.toString());
  }

  record.data = details;

  await record.save();

  logger.debug(`===== Saved demeterFarmingPlatform deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function demeterWithdrawHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught demeterFarmingPlatform withdraw extrinsic")

  const record = assignCommonHistoryElemInfo(extrinsic);

  const { extrinsic: { args: [assetId, rewardAssetId, desiredAmount, isFarm] } } = extrinsic;

  const details: any = {};

  // asset id paired with XOR (farming), or asset id (staking)
  details.assetId = assetId.toString();
  // reward asset id
  details.rewardAssetId = rewardAssetId.toString();
  // farming or staking
  details.isFarm = isFarm.toHuman();

  // ability to find farming operation by XOR address
  if (details.isFarm) {
    details.baseAssetId = XOR;
  }

  if (record.execution.success) {
    const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Withdrawn');
    const { event: { data: [who, amount, pool_asset, reward_asset, is_farm] } } = event;

    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), assetId.toString());
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), assetId.toString());
  }

  record.data = details;

  await record.save();

  logger.debug(`===== Saved demeterFarmingPlatform withdraw with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function demeterGetRewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught demeterFarmingPlatform getRewards extrinsic")

  const record = assignCommonHistoryElemInfo(extrinsic);

  const { extrinsic: { args: [assetId, rewardAssetId, isFarm] } } = extrinsic;

  const details: any = {};

  // reward asset id
  details.assetId = rewardAssetId.toString();
  // reward for farming or staking
  details.isFarm = isFarm.toHuman();

  const event = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies');

  if (event) {
    const { event: { data: [currencyId, from, to, amount] } } = event;

    details.amount = formatU128ToBalance(amount.toString(), rewardAssetId.toString());
  } else {
    details.amount = '0';
  }

  record.data = details;

  await record.save();

  logger.debug(`===== Saved demeterFarmingPlatform getRewards with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}