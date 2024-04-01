import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { XOR } from "../../utils/consts";
import { formatU128ToBalance } from "../../utils/assets";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";
import { PayeeType } from "../../types";
import { getStakingStaker, getStakingStakerController } from "../../utils/staking";

export async function stakingBondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [controller, value, payee] }} = extrinsic as any;
    const details = {
        controller: controller.toString(),
        payee: payee.isAccount ? { kind: payee.type, value: payee.asAccount.toString() } : { kind: payee.type },
		amount: formatU128ToBalance(value.toString(), XOR),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingBondExtraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [maxAdditional] }} = extrinsic as any;

    const details = {
		amount: formatU128ToBalance(maxAdditional.toString(), XOR),
    };

    await createHistoryElement(extrinsic, details);
}

export async function stakingCancelDeferredSlashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [era, slashIndices] }} = extrinsic as any;

    const details = {
        era: era.toNumber(),
        slashIndices: null,
    }

    if (slashIndices) {
        details.slashIndices = slashIndices.map((item) => item.toNumber());
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingChillCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

    await createHistoryElement(extrinsic, details);
}

export async function stakingChillOtherCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [controller] }} = extrinsic as any;

    const details = {
        controller: controller.toString(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingForceApplyMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [validatorStash] }} = extrinsic as any;

    const details = {
        validatorStash: validatorStash.toString(),
    }

    await createHistoryElement(extrinsic, details)
}

export async function stakingForceNewEraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

    await createHistoryElement(extrinsic, details);
}

export async function stakingForceNewEraAlwaysCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

    await createHistoryElement(extrinsic, details);
}

export async function stakingForceNoErasCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

    await createHistoryElement(extrinsic, details)
}

export async function stakingForceUnstakeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [stash, numSlashingSpans] }} = extrinsic as any;

    const details = {
        stash: stash.toString(),
        numSlashingSpans: numSlashingSpans.toNumber()
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingIncreaseValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [additional] }} = extrinsic as any;

    const details = {
        count: additional.toNumber(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingKickCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [who] }} = extrinsic as any;

    const details = {
        address: who.map(item => item.toString()),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingNominateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const { extrinsic: { args: [targets] }} = extrinsic as any;

    const details = {
        targets: targets.map(item => item.toString()),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingPayoutStakersCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [validatorStash, era] }} = extrinsic as any;
	
    const details = {
        validatorStash: validatorStash.toString(),
        era: era.toNumber()
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingReapStashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [stash, numSlashingSpans] }} = extrinsic as any;

    const details = {
        stash: stash.toString(),
        numSlashingSpans: numSlashingSpans.toNumber(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingRebondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [value] }} = extrinsic as any;

    const details = { value: formatU128ToBalance(value.toString(), XOR) }

    await createHistoryElement(extrinsic, details);
}

export async function stakingScaleValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [factor] }} = extrinsic as any;

    const details = {
        factor: factor.toNumber()
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetControllerCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [controller] }} = extrinsic as any;

    const extrinsicSigner = extrinsic.extrinsic.signer.toString();
    const stakingStaker = await getStakingStaker(extrinsic.block, extrinsicSigner);

    stakingStaker.controller = controller.toString();
    await stakingStaker.save();

    const details = {
        controller: controller.toString(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetHistoryDepthCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: { newHistoryDepth, eraItemsDeleted } }} = extrinsic as any;

	const details = {
		newHistoryDepth: newHistoryDepth.toNumber(),
		eraItemsDeleted: eraItemsDeleted.toNumber(),
	}

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetInvulnerablesCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [invulnerables] }} = extrinsic as any;

    const details = {
        invulnerables: invulnerables.map(item => item.toString()),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [newPerbill] }} = extrinsic as any;

    const details = {
        commission: newPerbill.toNumber()
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetPayeeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args }} = extrinsic as any;

	const extrinsicSigner = extrinsic.extrinsic.signer.toString()
	const stakingStaker = await getStakingStaker(extrinsic.block, extrinsicSigner)
    const kind = args[0];

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
		stakingStaker.payeeType = payeeType
		stakingStaker.payee = payee
		stakingStaker.save()
		getCallHandlerLog(extrinsic).debug({ staker: stakingStaker.id, payee }, 'Staking staker payee updated')
	}

	const details = {
		payeeType,
		payee,
	}

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetStakingConfigsCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args }} = extrinsic as any;
	
    const createDetailObject = (key: keyof typeof args) => {
		const value = args[key]
		return value.isSet
			? {
					kind: value.type,
					value: formatU128ToBalance(value.asSet.toString(), XOR),
			  }
			: { kind: value.type }
	}

	const details = {
		minNominatorBond: createDetailObject('minNominatorBond'),
		minValidatorBond: createDetailObject('minValidatorBond'),
		maxNominatorCount: createDetailObject('maxNominatorCount'),
		maxValidatorCount: createDetailObject('maxValidatorCount'),
		chillThreshold: createDetailObject('chillThreshold'),
		minCommission: createDetailObject('minCommission'),
	}

    await createHistoryElement(extrinsic, details);
}

export async function stakingSetValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [count] }} = extrinsic as any;

    const details = {
        count: count.toNumber(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingSubmitElectionSolutionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: { winners, era, score } }} = extrinsic as any;

	const details = {
		winners,
		era,
		score,
	}

    await createHistoryElement(extrinsic, details);
}

export async function stakingUnbondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [value] }} = extrinsic as any;

    const details = {
        amount: value.toString(),
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingValidateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [prefs] }} = extrinsic as any;

    const details = {
        commission: prefs.commission.toNumber(),
        blocked: prefs.blocked.isTrue,
    }

    await createHistoryElement(extrinsic, details);
}

export async function stakingWithdrawUnbondedCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic)

    const { extrinsic: { args: [numSlashingSpans] }} = extrinsic as any;

    const details = {
		numSlashingSpans: numSlashingSpans.toNumber(),
        amount: undefined,
    };

    const stakingWithdrawnEvent = extrinsic.events.find((e) => e.event.section === 'staking' && e.event.method === 'Withdrawn');

    if (stakingWithdrawnEvent) {
        const [stash, amount] = stakingWithdrawnEvent.event.data;

        details.amount = formatU128ToBalance(amount.toString(), XOR);
    }

    await createHistoryElement(extrinsic, details);
}