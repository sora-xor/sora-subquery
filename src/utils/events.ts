import { TypedEventRecord } from '@subql/types';
import { Codec } from '@polkadot/types/types';

import { getAssetId } from '../utils/assets';
import { XOR } from './consts';

export const isEvent = (e: TypedEventRecord<Codec[]>, section: string, method: string): boolean => {
  return e.event.method === method && e.event.section === section;
};

export const getEventData = (e: TypedEventRecord<Codec[]>, reversedOrder = false) => {
  const data = e.event.data.slice();

  return reversedOrder ? data.reverse() : data;
};

export const isExchangeEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return isEvent(e, 'liquidityProxy', 'Exchange');
};

export const isXorTransferEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'balances', 'Transfer');
};

export const isXorDepositedEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'balances', 'Deposited');
};

export const isTokenTransferEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'tokens', 'Transfer');
};

export const isTokenDepositedEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'tokens', 'Deposited');
};

// substrate 3
export const isCurrencyDepositedEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'currencies', 'Deposited');
};

// substrate 3
export const isCurrencyTransferEvent = (e: TypedEventRecord<Codec[]>) => {
  return isEvent(e, 'currencies', 'Transferred');
};

export const isAssetTransferEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return isXorTransferEvent(e) || isTokenTransferEvent(e) || isCurrencyTransferEvent(e);
};

export const isAssetDepositedEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return isXorDepositedEvent(e) || isTokenDepositedEvent(e) || isCurrencyDepositedEvent(e);
};

export const getTransferEventData = (e: TypedEventRecord<Codec[]>) => {
  const [amount, to, from, currencyId] = getEventData(e, true);
  const assetId = currencyId ? getAssetId(currencyId) : XOR;

  return {
    assetId,
    from: from.toString(),
    to: to.toString(),
    amount: amount.toString(),
  };
};

export const getDepositedEventData = (e: TypedEventRecord<Codec[]>) => {
  const [amount, to, currencyId] = getEventData(e, true);
  const assetId = currencyId ? getAssetId(currencyId) : XOR;

  return {
    assetId,
    to: to.toString(),
    amount: amount.toString(),
  };
};
