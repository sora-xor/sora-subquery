import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';
import { testLogMode } from '../config';

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

export function getLog(ctx: BlockContext, logModule: string | null = null, attrs: Record<string, any> = {}, testMode: boolean = false) {
    const block = 'block' in ctx.block ? ctx.block.block : ctx.block;
    const blockHeight = block.header.number.toNumber();
    const attributes: any = { blockHeight, ...attrs };

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

        logger[level](attrs, `[${logModule}] ${message}\n${attrsToString(attrs)}`);
    };

    const sendMessages = testMode ? testLogMode : true

    return {
        debug: sendMessages ? log('debug') : () => {},
        info: sendMessages ? log('info') : () => {},
        warn: sendMessages ? log('warn') : () => {},
        error: sendMessages ? log('error') : () => {},
    };
}


export function getCallHandlerLog(extrinsic: SubstrateExtrinsic, testMode: boolean = false) {
	const extrinsicHash = extrinsic.extrinsic.hash.toString()
	const callName = toPascalCase(`${extrinsic.extrinsic.method.section}.${extrinsic.extrinsic.method.method}`);
	const attributes = { extrinsicHash, callName }
	return getLog(extrinsic, 'CallHandler', attributes, testMode)
}

export function getEventHandlerLog(event: SubstrateEvent, testMode: boolean = false) {
	const extrinsicHash = event.extrinsic?.extrinsic.hash.toString()
	const eventName = toPascalCase(`${event.event.section}.${event.event.method}`);
	const eventId = `${event.block.block.header.number.toNumber()}-${event.idx}`;
	const attributes: any = { eventName, eventId }
	if (extrinsicHash) {
		attributes['extrinsicHash'] = extrinsicHash
	}
	return getLog(event, 'EventHandler', attributes, testMode)
}

export function getInitializeAssetsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'InitializeAssets', {}, testMode)
}

export function getInitializePoolsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'InitializePools', {}, testMode)
}

export function getSyncModelsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'SyncModels', {}, testMode)
}

export function getSyncPricesLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'SyncPrices', {}, testMode)
}

export function getAssetStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'AssetStorage', {}, testMode)
}

export function getAssetSnapshotsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'AssetSnapshotsStorage', {}, testMode)
}

export function getNetworkSnapshotsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'NetworkSnapshotsStorage', {}, testMode)
}

export function getPoolsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'PoolsStorage', {}, testMode)
}

export function getUtilsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'Utils', {}, testMode)
}

export function getStreamLog(ctx: BlockContext) {
	return getLog(ctx, 'Stream')
}

export function logStartProcessingCall(extrinsic: SubstrateExtrinsic) {
	return getCallHandlerLog(extrinsic).debug('Start processing the call')
}

export function logStartProcessingEvent(event: SubstrateEvent) {
	return getEventHandlerLog(event).debug('Start processing the event')
}

