import { u8aToHex } from '@polkadot/util';

import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicSigner, getExtrinsicArgs } from '../../utils';
import { accountMetaStorage } from '../../utils/account';
import { isEvent, getEventData } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingCall } from '../../utils/logs';

function getEvmNetworkId(network: any): number {
  if (network.isEvmLegacy) return network.asEvmLegacy.toNumber();

  return parseInt(network.asEvm.toString(), 16);
}

function getNetworkId(network: any): string | number {
  if (network.isSub) return network.asSub.toString();
  if (network.isTon) return network.asTon.toString();

  return getEvmNetworkId(network);
}

function accountFromJunction(junction: any): string {
  if (junction.isAccountId32) {
    return junction.asAccountId32.id.toString();
  } else if (junction.isAccountKey20) {
    const { key } = junction.asAccountKey20;
    return u8aToHex(key);
  } else {
    return '';
  }
}

function getAccount(data: any): string {
  if (data.isUnknown) {
    return '';
  }
  if (data.isEvm) {
    return data.asEvm.toString();
  }
  if (data.isSora) {
    return data.asSora.toString();
  }
  if (data.isParachain) {
    const { interior } = data.asParachain.isV3 ? data.asParachain.asV3 : data.asParachain.asV2;

    if (interior.isX1) {
      return accountFromJunction(interior.asX1);
    } else if (interior.isX2) {
      return accountFromJunction(interior.asX2[1]);
    } else {
      return '';
    }
  }
  if (data.isLiberland) {
    return data.asLiberland.toString();
  }

  return '';
}

function getNetwork(data: any): number | null {
  if (!data.isParachain) return null;

  const { interior } = data.asParachain.isV3 ? data.asParachain.asV3 : data.asParachain.asV2;

  // this is relaychain
  if (interior.isX1) {
    return null;
  }
  // this is parachain
  if (interior.isX2) {
    const [networkJunction] = interior.asX2;

    if (networkJunction.isParachain) {
      const paraId = networkJunction.asParachain.toNumber();

      return paraId;
    }
  }

  return null;
}

function getBridgeProxyHash(extrinsic: SubstrateExtrinsic): string | null {
  const bridgeProxyUpdate = extrinsic.events.find((e) => isEvent(e, 'bridgeProxy', 'RequestStatusUpdate'));

  if (bridgeProxyUpdate) {
    const [hash] = getEventData(bridgeProxyUpdate);

    return hash.toString();
  }

  return null;
}

export async function substrateBridgeIncomingHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details: any = {};

  details.hash = getBridgeProxyHash(extrinsic);

  const bridgeAppMinted = extrinsic.events.find(
    (e) => isEvent(e, 'parachainBridgeApp', 'Minted') || isEvent(e, 'substrateBridgeApp', 'Minted')
  );

  if (bridgeAppMinted) {
    const [subNetworkId, assetCodec, _sender, recipientCodec, amountCodec] = getEventData(bridgeAppMinted);

    const recipient = recipientCodec.toString();
    const assetId = getAssetId(assetCodec);
    const amount = formatU128ToBalance(amountCodec.toString(), assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.networkType = subNetworkId.toString();
    details.networkId = null;
    details.assetId = assetId;
    details.amount = amount;
    details.amountUSD = amountUSD;
    details.to = recipient;

    await accountMetaStorage.updateIncomingDeposit(extrinsic.block, recipient, amountUSD);
  }

  await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(extrinsic.block);

  await createHistoryElement(extrinsic, details, { address: details.to });
}

export async function bridgeProxyOutgoingHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  const [subNetworkId, assetCodec, recipient, amountCodec] = getExtrinsicArgs(extrinsic) as any;

  const networkType = getNetworkId(subNetworkId);
  const networkId = getNetwork(recipient);

  const sender = getExtrinsicSigner(extrinsic);
  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);
  const to = getAccount(recipient);

  const details: any = {
    networkType,
    networkId,
    assetId,
    amount,
    amountUSD,
    to,
  };

  details.hash = getBridgeProxyHash(extrinsic);

  await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(extrinsic.block);

  await createHistoryElement(extrinsic, details);

  await accountMetaStorage.updateOutgoingDeposit(extrinsic.block, sender, amountUSD);
}

export async function tonBridgeIncomingHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [networkIdCodec] = getExtrinsicArgs(extrinsic) as any;

  const networkType = networkIdCodec.type.toString();
  const networkId = getNetworkId(networkIdCodec);

  const details: any = {};

  details.hash = getBridgeProxyHash(extrinsic);
  details.networkType = networkType;
  details.networkId = networkId;

  const jettonAppMinted = extrinsic.events.find((e) => isEvent(e, 'jettonApp', 'Minted'));

  if (jettonAppMinted) {
    const [assetCodec, senderCodec, recipientCodec, amountCodec] = getEventData(jettonAppMinted);

    const sender = (senderCodec as any).address.toString();
    const recipient = recipientCodec.toString();
    const assetId = getAssetId(assetCodec);
    const amount = formatU128ToBalance(amountCodec.toString(), assetId);
    const amountUSD = await getAmountUSD(extrinsic.block, assetId, amount);

    details.assetId = assetId;
    details.amount = amount;
    details.amountUSD = amountUSD;
    details.to = recipient;
    details.from = sender;

    await accountMetaStorage.updateIncomingDeposit(extrinsic.block, recipient, amountUSD);
  }

  await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(extrinsic.block);

  await createHistoryElement(extrinsic, details, { address: details.to });
}
