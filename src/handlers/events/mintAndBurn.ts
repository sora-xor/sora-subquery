import { assetSnapshotsStorage } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, Event } from '../../types'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import {
	getTokensWithdrawnEventData,
	getBalancesWithdrawEventData,
	getTokensDepositedEventData,
	getBalancesDepositEventData
} from '../../extractors/events'

export async function tokenBurnEventHandler(ctx: BlockContext, event: Event<'Tokens.Withdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { assetId, amount } = await getTokensWithdrawnEventData(ctx, event)

	await assetSnapshotsStorage.updateBurned(ctx, assetId, BigInt(amount))
}

export async function xorBurnEventHandler(ctx: BlockContext, event: Event<'Balances.Withdraw'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

    const { amount } = await getBalancesWithdrawEventData(ctx, event)
	const assetId = XOR

	await assetSnapshotsStorage.updateBurned(ctx, assetId, amount)
}

export async function tokenMintEventHandler(ctx: BlockContext, event: Event<'Tokens.Deposited'>): Promise<void> {
    logStartProcessingEvent(ctx, event)

    const { assetId, amount } = await getTokensDepositedEventData(ctx, event)

	getEventHandlerLog(ctx, event).debug(`1 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}

export async function xorMintEventHandler(ctx: BlockContext, event: Event<'Balances.Deposit'>): Promise<void> {
    logStartProcessingEvent(ctx, event)

    const { amount } = await getBalancesDepositEventData(ctx, event)
	const assetId = XOR

	getEventHandlerLog(ctx, event).debug(`2 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}
