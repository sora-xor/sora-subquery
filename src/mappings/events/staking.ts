import { SubstrateEvent } from '@subql/types';
import { StakingEraNomination, StakingEraNominator, StakingEraValidator, StakingValidator } from '../../types';
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs';
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking';

export async function stakingStakersElectedEventHandler(event: SubstrateEvent): Promise<void> {
	logStartProcessingEvent(event)

	const activeStakingEra = await getActiveStakingEra(event.block)

	const exposures = await api.query.staking.erasStakers.entries(activeStakingEra.id);

	for (const [[era, validator], exposure] of exposures) {
		const exposureData =  exposure.toJSON() as any;
		const total = BigInt(exposureData.total)
		const own = BigInt(exposureData.own)
		const others = exposureData.others

		let stakingValidator = await StakingValidator.get(validator.toString())
		if (!stakingValidator) {
			stakingValidator = new StakingValidator(validator.toString())
		}

		const stakingStaker = await getStakingStaker(event.block, validator.toString())
		const stakingEraValidatorId = `${activeStakingEra.id}-${stakingStaker.id}`;

		let stakingEraValidator = await StakingEraValidator.get(stakingEraValidatorId);
		if (!stakingEraValidator) {
			stakingEraValidator = new StakingEraValidator(stakingEraValidatorId)
			stakingEraValidator.eraId = activeStakingEra.id
			stakingEraValidator.validatorId = stakingValidator.id
			stakingEraValidator.ownBond = BigInt(0)
			stakingEraValidator.totalBond = BigInt(0)
			stakingEraValidator.rewardAmount = BigInt(0)
			stakingEraValidator.stakerId = stakingStaker.id
		}
		stakingEraValidator.ownBond = own
		stakingEraValidator.totalBond = total
		stakingValidator.bond = total
		await stakingValidator.save()
		getEventHandlerLog(event).debug({ id: stakingValidator.id, bond: stakingValidator.bond }, 'Staking Validator saved')
		await stakingEraValidator.save()
		getEventHandlerLog(event).debug(
			{
				id: stakingEraValidator.id,
				ownBond: stakingEraValidator.ownBond,
				totalBond: stakingEraValidator.totalBond,
			},
			'Staking Era Validator saved',
		)

		for (let nomination of others) {
			const stakingStaker = await getStakingStaker(event.block, nomination.who.toString())
			const stakingEraNominatorId = `${activeStakingEra.id}-${stakingStaker.id}`;

			let stakingEraNominator = await StakingEraNominator.get(stakingEraNominatorId);
			if (!stakingEraNominator) {
				stakingEraNominator = new StakingEraNominator(stakingEraNominatorId)
				stakingEraNominator.eraId = activeStakingEra.id
				stakingEraNominator.stakerId = stakingStaker.id
				stakingEraNominator.bond = BigInt(0)
			}
			stakingEraNominator.bond += BigInt(nomination.value.toString())
			await stakingEraNominator.save()
			getEventHandlerLog(event).debug(
				{ id: stakingEraNominator.id, bond: stakingEraNominator.bond },
				'Staking Era Nominator saved',
			)

			let stakingEraNomination = new StakingEraNomination(`${activeStakingEra.id}-${stakingStaker.id}-${stakingValidator.id}`)
			stakingEraNomination.eraId = activeStakingEra.id
			stakingEraNomination.amount = BigInt(nomination.value.toString())
			stakingEraNomination.validatorId = stakingEraValidator.id
			stakingEraNomination.nominatorId = stakingEraNominator.id
			await stakingEraNomination.save()
			getEventHandlerLog(event).debug(
				{ id: stakingEraNomination.id, amount: stakingEraNomination.amount },
				'Staking Era Nomination saved',
			)
		}
	}
}
