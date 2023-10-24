import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

type BlockContext = SubstrateExtrinsic | SubstrateEvent | SubstrateBlock

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
    const block = 'block' in ctx.block ? ctx.block.block : ctx.block;
    const blockHeight = block.header.number.toNumber();
    const attributes: any = { blockHeight, ...attrs };
    if (module) {
        attributes['module'] = module;
    }

    const attrsToString = (attributes: Record<string, any>): string => {
        return Object.entries(attributes).map(([key, value]) => ' '.repeat(41) + `\x1b[30m${key}: ${value}\x1b[0m`).join('\n');
    };

    const log = (level: 'debug' | 'info' | 'warn' | 'error') => (arg1: Record<string, any> | string, arg2?: string) => {
        let attrs: Record<string, any> = {};
        let message: string;

        if (typeof arg1 === 'string') {
            message = arg1;
        } else {
            attrs = arg1;
            message = arg2!;
        }

        attrs = { ...attributes, ...attrs };

        logger[level](attrs, `${message}\n${attrsToString(attrs)}`);
    };

    return {
        debug: log('debug'),
        info: log('info'),
        warn: log('warn'),
        error: log('error'),
    };
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
	const eventId = `${event.block.block.header.number.toNumber()}-${event.idx}`;
	const attributes: any = { ...attrs, eventName, eventId }
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

