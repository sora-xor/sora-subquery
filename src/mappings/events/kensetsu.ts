import { SubstrateEvent } from "@subql/types";
import { Vault, VaultAccount, VaultStatus, VaultEvent, VaultEventType } from '../../types'

import { formatDateTimestamp, getEventId } from '../../utils';
import { getVaultAccountEntity } from '../../utils/kensetsu';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

async function handleEventType(event: SubstrateEvent, eventType: VaultEventType) {
  logStartProcessingEvent(event);

  let vault!: Vault;
  let account!: VaultAccount
  let vaultIdCodec!: any;
  let ownerCodec!: any;
  let assetCodec!: any;
  let amountCodec!: any;
  let debtAssetCodec!: any;
  let vaultTypeCodec!: any;

  switch (eventType) {
    case VaultEventType.Created: {
      [vaultIdCodec, ownerCodec, assetCodec, debtAssetCodec, vaultTypeCodec] = event.event.data;
      break;
    }
    case VaultEventType.Liquidated: {
      [vaultIdCodec, assetCodec, amountCodec, debtAssetCodec] = event.event.data;
      break;
    }
    default: {
      [vaultIdCodec, ownerCodec, assetCodec, amountCodec] = event.event.data;
      break;
    }
  }

  const vauldId = vaultIdCodec.toString();
  const blockNumber = event.block.block.header.number.toNumber();
  const timestamp = formatDateTimestamp(event.block.timestamp);

  if (eventType === VaultEventType.Created) {
    account = await getVaultAccountEntity(event.block, ownerCodec.toString());

    vault = new Vault(
      vauldId,
      vaultTypeCodec.toHuman(),
      VaultStatus.Opened,
      account.id,
      getAssetId(assetCodec),
      getAssetId(debtAssetCodec),
      blockNumber,
      blockNumber,
    );
  } else {
    vault = await Vault.get(vauldId);
  }

  if (!vault) {
    getEventHandlerLog(event).error({ id: vauldId }, 'Vault not found');
    return;
  };

  const vaultEvent = new VaultEvent(
    getEventId(event),
    eventType,
    vault.id,
    timestamp,
    blockNumber,
  );

  const assetId = getAssetId(assetCodec);
  const amount = amountCodec ? formatU128ToBalance(amountCodec.toString(), assetId) : null;

  vaultEvent.amount = amount;
  vault.updatedAtBlock = blockNumber;

  switch (eventType) {
    case VaultEventType.Closed: {
      vault.status = Number(amount) === 0 ? VaultStatus.Liquidated : VaultStatus.Closed;
      vault.collateralAmountReturned = amount;
      break;
    }
    case VaultEventType.Liquidated: {
      account = await getVaultAccountEntity(event.block, vault.ownerId);
      account.lastLiquidationId = vaultEvent.id;
      break;
    }
  }

  await account?.save();
  await vault.save();
  await vaultEvent.save();
}

export async function vaultCreatedEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.Created);
}

export async function vaultCollateralDepositEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.CollateralDeposit);
}

export async function vaultDebtIncreasedEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.DebtIncreased);
}

export async function vaultDebtPaymentEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.DebtPayment);
}

export async function vaultLiquidatedEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.Liquidated);
}

export async function vaultClosedEvent(event: SubstrateEvent): Promise<void> {
  await handleEventType(event, VaultEventType.Closed);
}