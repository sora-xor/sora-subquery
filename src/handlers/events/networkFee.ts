import { networkSnapshotsStorage } from '../../utils/network'
import { BlockContext, Event } from '../../types'
import { logStartProcessingEvent } from '../../utils/logs'
import { getXorFeeFeeWithdrawnEventData } from '../../extractors/events'

export async function networkFeeEventHandler(ctx: BlockContext, event: Event<'XorFee.FeeWithdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { fee } = await getXorFeeFeeWithdrawnEventData(ctx, event)

	await networkSnapshotsStorage.updateFeesStats(ctx, fee)
}
