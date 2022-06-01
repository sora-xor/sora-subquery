import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function demeterDepositHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught demeterFarmingPlatform deposit extrinsic")

  const record = assignCommonHistoryElemInfo(extrinsic)

  logger.debug(JSON.stringify(extrinsic))

  const { extrinsic: { args: [assetId, rewardAssetId, isFarm, desiredAmount] } } = extrinsic;

  const details: any = {};

  details.assetId = assetId.toString();
  details.rewardAssetId = rewardAssetId.toString();
  details.isFarm = isFarm.toHuman();

  if (record.execution.success) {
    const event = extrinsic.events.find(e => e.event.section === 'demeterfarmingplatform' && e.event.method === 'Deposited');
    const { event: { data: [who, pool_asset, reward_asset, is_farm, amount] } } = event;

    details.amount = amount.toString();
  } else {
    details.amount = desiredAmount.toString();
  }

  record.data = details;

  await record.save();

  logger.debug(`===== Saved demeterFarmingPlatform deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function demeterWithdrawHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logger.debug("Caught demeterFarmingPlatform withdraw extrinsic")

  const record = assignCommonHistoryElemInfo(extrinsic)

  const { extrinsic: { args: [assetId, rewardAssetId, desiredAmount, isFarm] } } = extrinsic;

  const details: any = {};

  details.assetId = assetId.toString();
  details.rewardAssetId = rewardAssetId.toString();
  details.isFarm = isFarm.toHuman();

  if (record.execution.success) {
    const event = extrinsic.events.find(e => e.event.section === 'demeterfarmingplatform' && e.event.method === 'Withdrawn');
    const { event: { data: [who, amount, pool_asset, reward_asset, is_farm] } } = event;

    details.amount = amount.toString();
  } else {
    details.amount = desiredAmount.toString();
  }

  record.data = details;

  await record.save();

  logger.debug(`===== Saved demeterFarmingPlatform withdraw with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

// export async function demeterGetRewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
//   logger.debug("Caught demeterFarmingPlatform getRewards extrinsic")

//   const record = assignCommonHistoryElemInfo(extrinsic)
// }