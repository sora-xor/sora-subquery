import { SubstrateEvent } from "@subql/types";
import { StakingEra, StakingEraNomination, StakingEraNominator, StakingEraValidator, StakingStaker, StakingValidator } from "../../types";

interface ActiveEraInfo {
    index: number
    start: (bigint | undefined)
}

export async function stakingStakersElectedEventHandler(event: SubstrateEvent): Promise<void> {
	const activeEra: ActiveEraInfo | undefined = (await api.query.staking.activeEra()).toJSON() as any;
	if (!activeEra) {
		throw new Error(`Active era not found`);
	}
	const stakingEra = new StakingEra(activeEra.index.toString());
	stakingEra.index = activeEra.index;
	if (activeEra.start) {
		stakingEra.startBlock = activeEra.start;
		const previousStakingEra = await store.get('StakingEra', (activeEra.index - 1).toString()) as any as StakingEra
		logger.debug(`previousStakingEra: ${previousStakingEra}`);
		if (previousStakingEra) {
			previousStakingEra.endBlock = activeEra.start - BigInt(1);
			await previousStakingEra.save();
		}
	}
	await stakingEra.save();

	const exposures = await api.query.staking.erasStakers.entries();

	await Promise.all(exposures.map(async (exposure) => {
		const [era, validator] = exposure[0].toHuman() as any;
		const exposureData =  exposure[1].toJSON() as any;
		const total = BigInt(exposureData.total)
		const own = BigInt(exposureData.own)
		const others = exposureData.others
		logger.debug(`era: ${era}, validator: ${validator}, total: ${total}, own: ${own}, others: ${others}`);
		let stakingValidator = await store.get('StakingValidator', validator.toString()) as StakingValidator;
		if (!stakingValidator) {
			stakingValidator = new StakingValidator(validator.toString());
		}

		let stakingStaker = await store.get('StakingStaker', validator.toString()) as StakingStaker;
		if (!stakingStaker) {
			stakingStaker = new StakingStaker(validator.toString());
		}

		let stakingEraValidators = await store.getByField('StakingEraValidator', 'stakerId', stakingStaker.id) as any as StakingEraValidator[];
		logger.debug(`stakingEraValidators: ${stakingEraValidators}`);
		let stakingEraValidator = stakingEraValidators.find(eraValidator => eraValidator.eraId === stakingEra.id) as any as StakingEraValidator | null;
		if (!stakingEraValidator) {
			stakingEraValidator = new StakingEraValidator(`${stakingEra.index}-${stakingStaker.id}`);
			stakingEraValidator.eraId = stakingEra.id;
			stakingEraValidator.validatorId = stakingValidator.id;
			stakingEraValidator.ownBond = BigInt(0);
			stakingEraValidator.totalBond = BigInt(0);
			stakingEraValidator.rewardAmount = BigInt(0);
			stakingEraValidator.stakerId = stakingStaker.id;
		}
		stakingEraValidator.ownBond = own;
		stakingEraValidator.totalBond = total;
		stakingValidator.bond = total;
		await stakingValidator.save();
		await stakingStaker.save();
		await stakingEraValidator.save();

		await Promise.all(others.map(async (nomination) => {
			let stakingStaker = await store.get('StakingStaker', nomination.who.toString()) as any as StakingStaker;
			if (!stakingStaker) {
				stakingStaker = new StakingStaker(nomination.who.toString());
				stakingStaker.save();
			}
			
			let stakingEraNominators = await store.getByField('StakingEraNominator', 'stakerId', stakingStaker.id) as any as StakingEraNominator[];
			logger.debug(`stakingEraNominators: ${stakingEraNominators}`);
			let stakingEraNominator = stakingEraNominators.find(eraNominator => eraNominator.eraId === stakingEra.id) as any as StakingEraNominator | null;
			if (!stakingEraNominator) {
				stakingEraNominator = new StakingEraNominator(`${stakingEra.id}-${stakingStaker.id}`);
				stakingEraNominator.eraId = stakingEra.id;
				stakingEraNominator.bond = BigInt(0);
				stakingEraNominator.stakerId = stakingStaker.id;
			}
			stakingEraNominator.bond += nomination.value;
			await stakingEraNominator.save()

			let stakingEraNomination = new StakingEraNomination(`${stakingEra.id}-${stakingStaker.id}-${stakingValidator.id}`);
			stakingEraNomination.eraId = stakingEra.id;
			stakingEraNomination.amount = nomination.value;
			if (stakingEraValidator) {
				stakingEraNomination.validatorId = stakingEraValidator.id;
			}
			stakingEraNomination.nominatorId = stakingEraNominator.id;
			await stakingEraNomination.save();
		}));
	}));
}