import BigNumber from "bignumber.js";
import { u8aToHex } from '@polkadot/util';

import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance, assetStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { logStartProcessingCall } from "../../utils/logs";

function getEvmNetworkId(network: any): number {
  if (network.isEvmLegacy) return network.asEvmLegacy.toNumber();

  return parseInt(network.asEvm.toString(), 16);
}

function getNetworkId(network: any): string | number {
  if (network.isSub) return network.asSub.toString();

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
  const bridgeProxyUpdate = extrinsic.events.find((e) => e.event.section === 'bridgeProxy' && e.event.method === 'RequestStatusUpdate');

  if (bridgeProxyUpdate) {
    const { event: { data: [hash] } } = bridgeProxyUpdate;

    return hash.toString();
  }

  return null;
}

export async function substrateBridgeIncomingHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details: any = {};

  const bridgeAppMinted = extrinsic.events.find((e) =>
    ['parachainBridgeApp', 'substrateBridgeApp'].includes(e.event.section) &&
    e.event.method === 'Minted'
  );

  if (bridgeAppMinted) {
    const { event: { data: [subNetworkId, assetCodec, _sender, recipient, amountCodec] } } = bridgeAppMinted;

    const assetId = getAssetId(assetCodec);
    const amount = formatU128ToBalance(amountCodec.toString(), assetId);
    const asset = await assetStorage.getAsset(extrinsic.block, assetId);
    const amountUSD = new BigNumber(asset.priceUSD).multipliedBy(new BigNumber(amount)).toFixed(2);

    details.networkType = subNetworkId.toString();
    details.networkId = null;
    details.assetId = assetId;
    details.amount = amount;
    details.amountUSD = amountUSD;
    details.to = recipient.toString();
  }

  details.hash = getBridgeProxyHash(extrinsic);

  await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(extrinsic.block);

  await createHistoryElement(extrinsic, details, undefined, details.to);
}

export async function bridgeProxyOutgoingHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  const { extrinsic: { args: [subNetworkId, assetCodec, recipient, amountCodec] } } = extrinsic as any;

  const networkType = getNetworkId(subNetworkId);
  const networkId = getNetwork(recipient);

  const assetId = getAssetId(assetCodec);
  const amount = formatU128ToBalance(amountCodec.toString(), assetId);
  const asset = await assetStorage.getAsset(extrinsic.block, assetId);
  const amountUSD = new BigNumber(asset.priceUSD).multipliedBy(new BigNumber(amount)).toFixed(2);
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
}