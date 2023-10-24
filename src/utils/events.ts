import { TypedEventRecord } from '@subql/types';
import { Codec } from '@polkadot/types/types';

import { getAssetId } from '../utils/assets';
import { XOR } from './consts';

export const isExchangeEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return e.event.method === 'Exchange' && e.event.section === 'liquidityProxy';
};

export const isXorTransferEvent = (e: TypedEventRecord<Codec[]>) => {
  return e.event.method === 'Transfer' && e.event.section === 'balances';
};

export const isXorDepositedEvent = (e: TypedEventRecord<Codec[]>) => {
  return e.event.method === 'Deposited' && e.event.section === 'balances';
};

export const isTokenTransferEvent = (e: TypedEventRecord<Codec[]>) => {
  return e.event.method === 'Transfer' && e.event.section === 'tokens';
};

export const isTokenDepositedEvent = (e: TypedEventRecord<Codec[]>) => {
  return e.event.method === 'Deposited' && e.event.section === 'tokens';
};

export const isAssetTransferEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return isXorTransferEvent(e) || isTokenTransferEvent(e);
};

export const isAssetDepositedEvent = (e: TypedEventRecord<Codec[]>): boolean => {
  return isXorDepositedEvent(e) || isTokenDepositedEvent(e);
};

export const getTransferEventData = (e: TypedEventRecord<Codec[]>) => {
  const [amount, to, from, currencyId] = e.event.data.slice().reverse();
  const assetId = isXorTransferEvent(e) ? XOR : getAssetId(currencyId);

  return {
    assetId,
    from: from.toString(),
    to: to.toString(),
    amount: amount.toString(),
  };
}

export const getDepositedEventData = (e: TypedEventRecord<Codec[]>) => {
  const [amount, to, currencyId] = e.event.data.slice().reverse();
  const assetId = isXorDepositedEvent(e) ? XOR : getAssetId(currencyId);

  return {
    assetId,
    to: to.toString(),
    amount: amount.toString(),
  };
}
