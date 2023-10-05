import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from '../../utils/history'

export async function stakingBondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        controller: data.controller.toString(),
        payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: data.payee.value.toString() } : { kind: data.payee.__kind },
		value: data.value,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingBondExtraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
		maxAdditional: data.maxAdditional,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingCancelDeferredSlashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        era: data.era,
        slashIndices: data.slashIndices,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

}

export async function stakingChillCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

}

export async function stakingChillOtherCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        controller: data.controller.toString(),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingForceApplyMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        validatorStash: data.validatorStash.toString(),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingForceNewEraCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingForceNewEraAlwaysCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingForceNoErasCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingForceUnstakeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        stash: data.stash.toString(),
        numSlashingSpans: data.numSlashingSpans
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingIncreaseValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        additional: data.additional,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingKickCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        who: data.who.map(item => item.toString()),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingNominateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        targets: data.targets.map(item => item.toString()),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingPayoutStakersCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {
        validatorStash: data.validatorStash.toString(),
        era: data.era
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingReapStashCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;
    
    const details = {
        stash: data.stash.toString(),
        numSlashingSpans: data.numSlashingSpans,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingRebondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = { value: data.value }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingScaleValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        factor: data.factor
    }
    record.data = details as any;
	
    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetControllerCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        controller: data.controller.toString(),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetHistoryDepthCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        newHistoryDepth: data.newHistoryDepth,
        eraItemsDeleted: data.eraItemsDeleted
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetInvulnerablesCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        invulnerables: data.invulnerables.map(item => item.toString()),
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetMinCommissionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        new: data.new
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetPayeeCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: data.payee.value.toString() } : { kind: data.payee.__kind },
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetStakingConfigsCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;
	
    const details = {
        minNominatorBond: data.minNominatorBond.__kind === 'Set' ? { kind: data.minNominatorBond.__kind, value: data.minNominatorBond.value } : { kind: data.minNominatorBond.__kind },
        minValidatorBond: data.minValidatorBond.__kind === 'Set' ? { kind: data.minValidatorBond.__kind, value: data.minValidatorBond.value } : { kind: data.minValidatorBond.__kind },
        maxNominatorCount: data.maxNominatorCount.__kind === 'Set' ? { kind: data.maxNominatorCount.__kind, value: data.maxNominatorCount.value } : { kind: data.maxNominatorCount.__kind },
        maxValidatorCount: data.maxValidatorCount.__kind === 'Set' ? { kind: data.maxValidatorCount.__kind, value: data.maxValidatorCount.value } : { kind: data.maxValidatorCount.__kind },
        chillThreshold: data.chillThreshold.__kind === 'Set' ? { kind: data.chillThreshold.__kind, value: data.chillThreshold.value } : { kind: data.chillThreshold.__kind },
        minCommission: data.minCommission.__kind === 'Set' ? { kind: data.minCommission.__kind, value: data.minCommission.value } : { kind: data.minCommission.__kind },
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSetValidatorCountCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        new: data.new,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSubmitElectionSolutionCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        winners: data.winners,
        era: data.era,
        score: data.score        
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingSubmitElectionSolutionUnsignedCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        winners: data.winners,
        compact: data.compact,
        score: data.score,
        era: data.era,
        size: data.size,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingUnbondCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        value: data.value,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingValidateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
        commission: data.prefs.commission,
        blocked: data.prefs.blocked,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}

export async function stakingWithdrawUnbondedCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    const record = assignCommonHistoryElemInfo(extrinsic);
    
    const { extrinsic: { args: data }} = extrinsic as any;

    const details = {
		numSlashingSpans: data.numSlashingSpans,
    }
    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);
}