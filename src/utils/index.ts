import type { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

export const getBlockNumber = (block: SubstrateBlock) => {
  return block.block.header.number.toNumber();
};

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() / 1000).toFixed(0));

export const shouldUpdate = (block: SubstrateBlock, diff = 3_600) => {
  const blockTimestamp = formatDateTimestamp(block.timestamp);
  const currentTimestamp = formatDateTimestamp(new Date());

  return currentTimestamp - blockTimestamp < diff;
};

export const getCallId = (call: SubstrateExtrinsic): string => {
  return call.extrinsic.hash.toString();
};

export const getEventId = (event: SubstrateEvent): string => {
  return `${getBlockNumber(event.block)}-${event.idx}`;
};

export const getEntityId = (entity: SubstrateExtrinsic | SubstrateEvent): string => {
  return 'event' in entity ? getEventId(entity) : getCallId(entity);
};

export const getExtrinsicSigner = (extrinsic: SubstrateExtrinsic): string => {
  return extrinsic.extrinsic.signer.toString();
};

export const getExtrinsicArgs = (extrinsic: SubstrateExtrinsic, reversedOrder = false) => {
  const data = extrinsic.extrinsic.args.slice();

  return reversedOrder ? data.reverse() : data;
};
