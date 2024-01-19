import type BigNumber from "bignumber.js";

import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';
import { testLogMode } from '../config';

type BlockContext = SubstrateExtrinsic | SubstrateEvent | SubstrateBlock

type LogAttr = boolean | string | number | bigint | BigNumber;

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

export function getLog(ctx: BlockContext, logModule: string | null = null, attrs: Record<string, LogAttr> = {}, onlyWithTestLogMode: boolean = false) {
    const block = 'block' in ctx.block ? ctx.block.block : ctx.block;
    const blockHeight = block.header.number.toNumber();
    const attributes: any = { blockHeight, ...attrs };

    const attrsToString = (attributes: Record<string, LogAttr>): string => {
        return Object.entries(attributes).map(([key, value]) => ' '.repeat(41) + `\x1b[30m${key}: ${value.toString()}\x1b[0m`).join('\n');
    };

    const log = (level: 'debug' | 'info' | 'warn' | 'error') => (arg1: Record<string, LogAttr> | string, arg2?: string) => {
        let attrs: Record<string, LogAttr> = {};
        let message: string;

        if (typeof arg1 === 'string') {
            message = arg1;
        } else {
            attrs = arg1;
            message = arg2!;
        }

        attrs = { ...attributes, ...attrs };

        logger[level](`[${logModule}] ${message}\n${attrsToString(attrs)}`);
    };

    const sendMessages = onlyWithTestLogMode ? testLogMode : true

    return {
        debug: sendMessages ? log('debug') : () => {},
        info: sendMessages ? log('info') : () => {},
        warn: sendMessages ? log('warn') : () => {},
        error: sendMessages ? log('error') : () => {},
    };
}


export function getCallHandlerLog(extrinsic: SubstrateExtrinsic, onlyWithTestLogMode: boolean = false) {
	const extrinsicHash = extrinsic.extrinsic.hash.toString()
	const callName = toPascalCase(`${extrinsic.extrinsic.method.section}.${extrinsic.extrinsic.method.method}`);
	const attributes = { extrinsicHash, callName }
	return getLog(extrinsic, 'CallHandler', attributes, onlyWithTestLogMode)
}

export function getEventHandlerLog(event: SubstrateEvent, onlyWithTestLogMode: boolean = false) {
	const extrinsicHash = event.extrinsic?.extrinsic.hash.toString()
	const eventName = toPascalCase(`${event.event.section}.${event.event.method}`);
	const eventId = `${event.block.block.header.number.toNumber()}-${event.idx}`;
	const attributes: any = { eventName, eventId }
	if (extrinsicHash) {
		attributes['extrinsicHash'] = extrinsicHash
	}
	return getLog(event, 'EventHandler', attributes, onlyWithTestLogMode)
}

export function getInitializeAssetsLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'InitializeAssets', {}, onlyWithTestLogMode)
}

export function getInitializePoolsLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'InitializePools', {}, onlyWithTestLogMode)
}

export function getInitializeOrderBooksLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'InitializeOrderBooks', {}, onlyWithTestLogMode)
}

export function getSyncModelsLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'SyncModels', {}, onlyWithTestLogMode)
}

export function getSyncPricesLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'SyncPrices', {}, onlyWithTestLogMode)
}

export function getAssetStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'AssetStorage', {}, onlyWithTestLogMode)
}

export function getAssetSnapshotsStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'AssetSnapshotsStorage', {}, onlyWithTestLogMode)
}

export function getNetworkSnapshotsStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'NetworkSnapshotsStorage', {}, onlyWithTestLogMode)
}

export function getOrderBooksSnapshotsStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'OrderBooksSnapshotsStorage', {}, onlyWithTestLogMode)
}

export function getPoolsStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'PoolsStorage', {}, onlyWithTestLogMode)
}

export function getOrderBooksStorageLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'OrderBooksStorage', {}, onlyWithTestLogMode)
}

export function getUtilsLog(ctx: BlockContext, onlyWithTestLogMode: boolean = false) {
	return getLog(ctx, 'Utils', {}, onlyWithTestLogMode)
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

