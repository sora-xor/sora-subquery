import { SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

type BlockContext = SubstrateExtrinsic | SubstrateEvent

function toPascalCase(str: string): string {
    return str
        .split('.')
        .map(segment => {
            return segment
                .replace(/([a-z])([A-Z])/g, '$1 $2')  // Separate camelCase
                .replace(/[_\W]+/g, ' ')  // Replace underscores and non-alphanumeric characters with spaces
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        })
        .join('.')
        .toLowerCase()  // Convert the whole string to lowercase
        .replace(/(^|\.)\w/g, match => match.toUpperCase());  // Capitalize the first character of each segment
}

export function getLog(ctx: BlockContext, module: string | null = null, attrs: Record<string, any> = {}) {
	const blockHeight = ctx.block.block.header.number.toNumber()
	const attributes: any = { blockHeight, ...attrs }
	if (module) {
		attributes['module'] = module
	}
	return logger.child(attributes)
}

export function getCallHandlerLog(extrinsic: SubstrateExtrinsic, message: string = '', attrs: Record<string, any> = {}) {
	const extrinsicHash = extrinsic.extrinsic.hash.toString()
	const callName = toPascalCase(`${extrinsic.extrinsic.method.section}.${extrinsic.extrinsic.method.method}`);
	const attributes = { extrinsicHash, callName, ...attrs }
	return getLog(extrinsic, 'CallHandler', attributes)
}

export function getEventHandlerLog(event: SubstrateEvent, message: string = '', attrs: Record<string, any> = {}) {
	const extrinsicHash = event.extrinsic?.extrinsic.hash.toString()
	const eventName = toPascalCase(`${event.event.section}.${event.event.method}`);
	const attributes: any = { ...attrs, eventName }
	if (extrinsicHash) {
		attributes['extrinsicHash'] = extrinsicHash
	}
	return getLog(event, 'EventHandler', attributes)
}

export function getInitializeAssetsLog(ctx: BlockContext) {
	return getLog(ctx, 'InitializeAssets')
}

export function getInitializePoolsLog(ctx: BlockContext) {
	return getLog(ctx, 'InitializePools')
}

export function getSyncModelsLog(ctx: BlockContext) {
	return getLog(ctx, 'SyncModels')
}

export function getSyncPricesLog(ctx: BlockContext) {
	return getLog(ctx, 'SyncPrices')
}

export function getAssetStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'AssetStorage')
}

export function getAssetSnapshotsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'AssetSnapshotsStorage')
}

export function getNetworkSnapshotsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'NetworkSnapshotsStorage')
}

export function getPoolsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'PoolsStorage')
}

export function logStartProcessingCall(extrinsic: SubstrateExtrinsic) {
	return getCallHandlerLog(extrinsic).debug('Start processing the call')
}

export function logStartProcessingEvent(event: SubstrateEvent) {
	return getEventHandlerLog(event).debug('Start processing the event')
}

