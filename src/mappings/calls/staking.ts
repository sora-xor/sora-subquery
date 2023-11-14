import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'

export async function stakingBondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [controller, value, payee] }} = extrinsic as any;
    const details = {
        controller: controller.toString(),
        payee: payee.isAccount ? { kind: 'Account', value: payee.asAccount.toString() } : { kind: payee.toHuman() },
		value: value.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingBondExtraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [maxAdditional] }} = extrinsic as any;

    const details = {
		maxAdditional: maxAdditional.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingCancelDeferredSlashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [era, slashIndices] }} = extrinsic as any;

    const details = {
        era: era.toNumber(),
        slashIndices: null,
    }

    if (slashIndices) {
        details.slashIndices = slashIndices.map((item) => item.toNumber());
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);

}

export async function stakingChillCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);

}

export async function stakingChillOtherCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [controller] }} = extrinsic as any;

    const details = {
        controller: controller.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingForceApplyMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [validatorStash] }} = extrinsic as any;

    const details = {
        validatorStash: validatorStash.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingForceNewEraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingForceNewEraAlwaysCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingForceNoErasCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingForceUnstakeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [stash, numSlashingSpans] }} = extrinsic as any;

    const details = {
        stash: stash.toString(),
        numSlashingSpans:numSlashingSpans.toNumber()
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingIncreaseValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [additional] }} = extrinsic as any;

    const details = {
        additional: additional.toNumber(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingKickCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [who] }} = extrinsic as any;

    const details = {
        who: who.map(item => item.toString()),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingNominateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [targets] }} = extrinsic as any;

    const details = {
        targets: targets.map(item => item.toString()),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingPayoutStakersCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [validatorStash, era] }} = extrinsic as any;
	
    const details = {
        validatorStash: validatorStash.toString(),
        era: era.toNumber()
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingReapStashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [stash, numSlashingSpans] }} = extrinsic as any;
    
    const details = {
        stash: stash.toString(),
        numSlashingSpans: numSlashingSpans.toNumber(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingRebondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [value] }} = extrinsic as any;

    const details = { value: value.toString() }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingScaleValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [factor] }} = extrinsic as any;

    const details = {
        factor: factor.toNumber()
    }
	
    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetControllerCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [controller] }} = extrinsic as any;

    const details = {
        controller: controller.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetInvulnerablesCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [invulnerables] }} = extrinsic as any;

    const details = {
        invulnerables: invulnerables.map(item => item.toString()),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [newPerbill] }} = extrinsic as any;

    const details = {
        new: newPerbill.toNumber()
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetPayeeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [payee] }} = extrinsic as any;

    const details = {
        payee: payee.isAccount ? { kind: 'Account', value: payee.asAccount.toString() } : { kind: payee.toHuman() },
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetStakingConfigsCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [
        minNominatorBond,
        minValidatorBond,
        maxNominatorCount,
        maxValidatorCount,
        chillThreshold,
        minCommission
    ] }} = extrinsic as any;
	
    const details = {
        minNominatorBond: minNominatorBond.isSet ? { kind: 'Set', value: minNominatorBond.asSet.toString() } : { kind: minNominatorBond.toHuman() },
        minValidatorBond: minValidatorBond.isSet ? { kind: 'Set', value: minValidatorBond.asSet.toString() } : { kind: minValidatorBond.toHuman() },
        maxNominatorCount: maxNominatorCount.isSet ? { kind: 'Set', value: maxNominatorCount.asSet.toString() } : { kind: maxNominatorCount.toHuman() },
        maxValidatorCount: maxValidatorCount.isSet ? { kind: 'Set', value: maxValidatorCount.asSet.toString() } : { kind: maxValidatorCount.toHuman() },
        chillThreshold: chillThreshold.isSet ? { kind: 'Set', value: chillThreshold.asSet.toString() } : { kind: chillThreshold.toHuman() },
        minCommission: minCommission.isSet ? { kind: 'Set', value: minCommission.asSet.toString() } : { kind: minCommission.toHuman() },
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingSetValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);

    const { extrinsic: { args: [count] }} = extrinsic as any;

    const details = {
        new: count.toNumber(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingUnbondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [value] }} = extrinsic as any;

    const details = {
        value: value.toString(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingValidateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [prefs] }} = extrinsic as any;

    const details = {
        commission: prefs.commission.toNumber(),
        blocked: prefs.blocked.isTrue,
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function stakingWithdrawUnbondedCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const historyElement = await createHistoryElement(extrinsic);
    
    const { extrinsic: { args: [numSlashingSpans] }} = extrinsic as any;

    const details = {
		numSlashingSpans: numSlashingSpans.toNumber(),
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}