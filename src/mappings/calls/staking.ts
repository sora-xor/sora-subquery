import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs } from '../../utils';
import { isEvent } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { XOR } from '../../utils/consts';
import { formatU128ToBalance, getAmountUSD } from '../../utils/assets';
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs';
import { PayeeType } from '../../types';
import { getStakingStaker, getStakingStakerController } from '../../utils/staking';

export async function stakingBondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [controller, value, payee] = getExtrinsicArgs(extrinsic) as any;

  const assetId = XOR;
  const amount = formatU128ToBalance(value.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details = {
    controller: controller.toString(),
    payee: payee.isAccount ? { kind: payee.type, value: payee.asAccount.toString() } : { kind: payee.type },
    amount,
    amountUSD,
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingBondExtraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [maxAdditional] = getExtrinsicArgs(extrinsic) as any;

  const assetId = XOR;
  const amount = formatU128ToBalance(maxAdditional.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details = {
    amount,
    amountUSD,
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingCancelDeferredSlashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [era, slashIndices] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    era: era.toNumber(),
    slashIndices: null,
  };

  if (slashIndices) {
    details.slashIndices = slashIndices.map((item) => item.toNumber());
  }

  await createHistoryElement(extrinsic, details);
}

export async function stakingChillCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = {}; // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

  await createHistoryElement(extrinsic, details);
}

export async function stakingChillOtherCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [controller] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    controller: controller.toString(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingForceApplyMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [validatorStash] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    validatorStash: validatorStash.toString(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingForceNewEraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = {}; // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

  await createHistoryElement(extrinsic, details);
}

export async function stakingForceNewEraAlwaysCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = {}; // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

  await createHistoryElement(extrinsic, details);
}

export async function stakingForceNoErasCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details = {}; // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

  await createHistoryElement(extrinsic, details);
}

export async function stakingForceUnstakeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [stash, numSlashingSpans] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    stash: stash.toString(),
    numSlashingSpans: numSlashingSpans.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingIncreaseValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [additional] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    count: additional.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingKickCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [who] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    address: who.map((item) => item.toString()),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingNominateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  const [targets] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    targets: targets.map((item) => item.toString()),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingPayoutStakersCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [validatorStash, era] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    validatorStash: validatorStash.toString(),
    era: era.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingReapStashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [stash, numSlashingSpans] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    stash: stash.toString(),
    numSlashingSpans: numSlashingSpans.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingRebondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [value] = getExtrinsicArgs(extrinsic);

  const assetId = XOR;
  const amount = formatU128ToBalance(value.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

  const details = {
    value,
    amountUSD,
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingScaleValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [factor] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    factor: factor.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetControllerCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [controller] = getExtrinsicArgs(extrinsic);

  const extrinsicSigner = getExtrinsicSigner(extrinsic);
  const stakingStaker = await getStakingStaker(extrinsic.block, extrinsicSigner);

  stakingStaker.controller = controller.toString();
  await stakingStaker.save();

  const details = {
    controller: controller.toString(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetInvulnerablesCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [invulnerables] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    invulnerables: invulnerables.map((item) => item.toString()),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [newPerbill] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    commission: newPerbill.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetPayeeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [kind] = getExtrinsicArgs(extrinsic) as any;

  const extrinsicSigner = getExtrinsicSigner(extrinsic);
  const stakingStaker = await getStakingStaker(extrinsic.block, extrinsicSigner);

  let payee = stakingStaker.payee;
  let payeeType = stakingStaker.payeeType;

  if (kind.isAccount) {
    payee = kind.asAccount.toString();
    payeeType = PayeeType.ACCOUNT;
  } else if (kind.isController) {
    payee = await getStakingStakerController(extrinsic.block, stakingStaker);
    payeeType = PayeeType.CONTROLLER;
  }

  if (stakingStaker.payeeType !== payeeType || stakingStaker.payee !== payee) {
    stakingStaker.payeeType = payeeType;
    stakingStaker.payee = payee;
    stakingStaker.save();
    getCallHandlerLog(extrinsic).debug({ staker: stakingStaker.id, payee }, 'Staking staker payee updated');
  }

  const details = {
    payeeType,
    payee,
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetStakingConfigsCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const {
    extrinsic: { args },
  } = extrinsic as any;

  const createDetailObject = (key: keyof typeof args) => {
    const value = args[key];
    return value.isSet
      ? {
          kind: value.type,
          value: formatU128ToBalance(value.asSet.toString(), XOR),
        }
      : { kind: value.type };
  };

  const details = {
    minNominatorBond: createDetailObject('minNominatorBond'),
    minValidatorBond: createDetailObject('minValidatorBond'),
    maxNominatorCount: createDetailObject('maxNominatorCount'),
    maxValidatorCount: createDetailObject('maxValidatorCount'),
    chillThreshold: createDetailObject('chillThreshold'),
    minCommission: createDetailObject('minCommission'),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingSetValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [count] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    count: count.toNumber(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingUnbondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [value] = getExtrinsicArgs(extrinsic);

  const details = {
    amount: value.toString(),
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingValidateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [prefs] = getExtrinsicArgs(extrinsic) as any;

  const details = {
    commission: prefs.commission.toNumber(),
    blocked: prefs.blocked.isTrue,
  };

  await createHistoryElement(extrinsic, details);
}

export async function stakingWithdrawUnbondedCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [numSlashingSpans] = getExtrinsicArgs(extrinsic) as any;

  const details: any = {
    numSlashingSpans: numSlashingSpans.toNumber(),
    amount: undefined,
  };

  const stakingWithdrawnEvent = extrinsic.events.find((e) => isEvent(e, 'staking', 'Withdrawn'));

  if (stakingWithdrawnEvent) {
    const [stash, amountCodec] = stakingWithdrawnEvent.event.data;

    const assetId = XOR;
    const amount = formatU128ToBalance(amountCodec.toString(), XOR);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.amount = amount;
    details.amountUSD = amountUSD;
  }

  await createHistoryElement(extrinsic, details);
}
