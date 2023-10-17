import { SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

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

export function debug(ctx: SubstrateExtrinsic | SubstrateEvent, module: string, message: string) {
	const blockNumber = ctx.block.block.header.number.toNumber();
	logger.debug(`[${blockNumber}][${module}] ${message}`);
}

export function logCallHandler(extrinsic: SubstrateExtrinsic) {
	const name = toPascalCase(`${extrinsic.extrinsic.method.section}.${extrinsic.extrinsic.method.method}`);
	const extrinsicHash = extrinsic.extrinsic.hash.toString();
	const extrinsicHashString = extrinsicHash ? ` found within the extrinsic '${extrinsicHash}'` : ''
	debug(extrinsic, 'CallHandler', `Processing the '${name}' call${extrinsicHashString}`);
}

export function logEventHandler(event: SubstrateEvent) {
	const name = toPascalCase(`${event.event.section}.${event.event.method}`);
	const extrinsicHash = event.extrinsic?.extrinsic.hash.toString();
	const extrinsicHashString = extrinsicHash ? ` found within the extrinsic '${extrinsicHash}'` : ''
	debug(event, 'EventHandler', `Processing the '${name}' event${extrinsicHashString}`);
}