import { SubstrateExtrinsic } from '@subql/types';
import { getExtrinsicArgs } from '../../utils';
import { isEvent, getEventData } from '../../utils/events';
import { createHistoryElement } from '../../utils/history';
import { KUSD } from '../../utils/consts';
import { getAssetId, getAmountUSD, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from '../../utils/logs';

const getCreateCdpArgs = (extrinsic: SubstrateExtrinsic) => {
  const args = getExtrinsicArgs(extrinsic) as any;
  const isV1 = args.length === 4;

  const collateralAssetId = getAssetId(args[0]);
  const collateralAmount = formatU128ToBalance(args[1].toString(), collateralAssetId);
  const debtAssetId = isV1 ? KUSD : getAssetId(args[2]);
  const debtAmountCodec = isV1 ? args[3] : args[4];
  const debtAmount = formatU128ToBalance(debtAmountCodec.toString(), debtAssetId);

  return {
    collateralAssetId,
    collateralAmount,
    debtAssetId,
    debtAmount,
  };
}

export async function vaultCreateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const details: any = {
    id: undefined,
    ...getCreateCdpArgs(extrinsic),
  };

  const vaultCreatedEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'CDPCreated'));

  if (vaultCreatedEvent) {
    const [id, _owner, _collateralId, _debtId, _vaultType] = getEventData(vaultCreatedEvent);

    details.id = id.toString();
  }

  const debtIncreasedEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'DebtIncreased'));

  if (debtIncreasedEvent) {
    const [_id, _owner, _debtId, debtAmount] = getEventData(debtIncreasedEvent);

    details.debtAmount = formatU128ToBalance(debtAmount.toString(), details.debtAssetId);
  }

  details.collateralAmountUSD = await getAmountUSD(
    extrinsic.block,
    details.collateralAssetId,
    details.collateralAmount
  );
  details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);

  await createHistoryElement(extrinsic, details);
}

export async function vaultDepositCollateralCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [vaultId, collateralAmount] = getExtrinsicArgs(extrinsic) as any;

  const details: any = {
    id: vaultId.toString(),
    collateralAssetId: undefined,
    collateralAmount: formatU128ToBalance(collateralAmount.toString(), ''), // formatted with 18 decimals
  };

  const vaultDepositEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'CollateralDeposit'));

  if (vaultDepositEvent) {
    const [_id, _owner, collateralId, collateralAmount] = getEventData(vaultDepositEvent);
    const collateralAssetId = getAssetId(collateralId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(collateralAmount.toString(), collateralAssetId);
    details.collateralAmountUSD = await getAmountUSD(
      extrinsic.block,
      details.collateralAssetId,
      details.collateralAmount
    );
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultDecreaseDebtCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [vaultId, debtAmount] = getExtrinsicArgs(extrinsic) as any;

  const details: any = {
    id: vaultId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(debtAmount.toString(), KUSD), // default
  };

  const vaultDebtPaymentEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'DebtPayment'));

  if (vaultDebtPaymentEvent) {
    const [_id, _owner, debtId, debtAmount] = getEventData(vaultDebtPaymentEvent);
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultIncreaseDeptCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [vaultId, _borrowAmountMin, borrowAmountMax] = getExtrinsicArgs(extrinsic) as any;

  const details: any = {
    id: vaultId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(borrowAmountMax.toString(), KUSD), // default
  };

  const vaultDebtIncreasedEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'DebtIncreased'));

  if (vaultDebtIncreasedEvent) {
    const [_id, _owner, debtId, debtAmount] = getEventData(vaultDebtIncreasedEvent);
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultCloseCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const [vaultId] = getExtrinsicArgs(extrinsic) as any;

  const details: any = {
    id: vaultId.toString(),
    collateralAssetId: undefined,
    collateralAmount: undefined,
    debtAssetId: undefined,
    debtAmount: undefined,
  };

  const vaultDebtPaymentEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'DebtPayment'));

  if (vaultDebtPaymentEvent) {
    const [_id, _owner, debtId, debtAmount] = getEventData(vaultDebtPaymentEvent);
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  const vaultClosedEvent = extrinsic.events.find((e) => isEvent(e, 'kensetsu', 'CDPClosed'));

  if (vaultClosedEvent) {
    const [_id, _owner, collateralId, collateralAmount] = getEventData(vaultClosedEvent);
    const collateralAssetId = getAssetId(collateralId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(collateralAmount.toString(), collateralAssetId);
    details.collateralAmountUSD = await getAmountUSD(
      extrinsic.block,
      details.collateralAssetId,
      details.collateralAmount
    );
  }

  await createHistoryElement(extrinsic, details);
}
