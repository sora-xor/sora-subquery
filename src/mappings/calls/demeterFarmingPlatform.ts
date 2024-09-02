import { SubstrateExtrinsic } from "@subql/types";

import { createHistoryElement } from "../../utils/history";
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { logStartProcessingCall } from "../../utils/logs";

const Section = 'demeterFarmingPlatform';

export async function demeterDepositHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [desiredAmount, isFarmCodec, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};
  const isFarm = isFarmCodec.toHuman() as boolean;

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR;
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId);
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId);
  // farming or staking
  details.isFarm = isFarm;

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Deposited');

  if (event) {
    const [amountCodec] = event.event.data.slice().reverse();
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amountCodec.toString(), details.assetId);
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId);
  }

  details.amountUSD = !isFarm ? await getAmountUSD(extrinsic.block, details.assetId, details.amount, true) : null;

  await createHistoryElement(extrinsic, details);
}

export async function demeterWithdrawHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [isFarmCodec, desiredAmount, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};
  const isFarm = isFarmCodec.toHuman() as boolean;

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR;
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId);
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId);
  // farming or staking
  details.isFarm = isFarm;

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'Withdrawn');

  if (event) {
    const { event: { data: [who, amount] } } = event;
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), details.assetId);
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId);
  }

  details.amountUSD = !isFarm ? await getAmountUSD(extrinsic.block, details.assetId, details.amount, true) : null;

  await createHistoryElement(extrinsic, details);
}

export async function demeterGetRewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [isFarm, rewardAssetId, poolAssetId, baseAssetId] = extrinsic.extrinsic.args.slice().reverse();

  const details: any = {};
  const assetId = getAssetId(rewardAssetId);

  // reward asset id
  details.assetId = assetId;
  // reward for farming or staking
  details.isFarm = isFarm.toHuman();

  const event = extrinsic.events.find(e => e.event.section === Section && e.event.method === 'RewardWithdrawn');

  if (event) {
    const { event: { data: [who, amountCodec] } } = event;

    const amount = formatU128ToBalance(amountCodec.toString(), assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.amount = amount;
    details.amountUSD = amountUSD;
  } else {
    details.amount = '0';
    details.amountUSD = '0';
  }

  await createHistoryElement(extrinsic, details);
}