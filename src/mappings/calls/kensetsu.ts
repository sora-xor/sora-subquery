import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { KUSD } from "../../utils/consts";
import { getAssetId, formatU128ToBalance } from "../../utils/assets";
import { logStartProcessingCall } from "../../utils/logs";

export async function vaultCreateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  // "debpAssetid", "vaultType" may be added in future
  const { extrinsic: { args: [collateralAsset, collateralAmount, _borrowAmountMin, borrowAmountMax] }} = extrinsic as any;

  const collateralAssetId = getAssetId(collateralAsset);

  const details = {
    id: undefined,
    collateralAssetId,
    collateralAmount: formatU128ToBalance(collateralAmount.toString(), collateralAssetId),
    debtAssetId: KUSD,
    debtAmount: formatU128ToBalance(borrowAmountMax.toString(), KUSD),
  };

  const vaultCreatedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'CDPCreated');

  if (vaultCreatedEvent) {
    const { event: { data: [id, _owner, _collateralId, debtId, _vaultType] } } = vaultCreatedEvent;

    details.id = id.toString();
    details.debtAssetId = getAssetId(debtId);
  }

  const debtIncreasedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'DebtIncreased');

  if (debtIncreasedEvent) {
    const { event: { data: [_id, _owner, _debtId, debtAmount] } } = vaultCreatedEvent;

    details.debtAmount = formatU128ToBalance(debtAmount.toString(), details.debtAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultDepositCollateralCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, collateralAmount] }} = extrinsic as any;

  const details = {
    id: vaultId.toString(),
    collateralAssetId: undefined,
    collateralAmount: formatU128ToBalance(collateralAmount.toString(), ''), // formatted with 18 decimals
  };

  const vaultDepositEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'CollateralDeposit');

  if (vaultDepositEvent) {
    const { event: { data: [_id, _owner, collateralId, collateralAmount] } } = vaultDepositEvent;
    const collateralAssetId = getAssetId(collateralId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(collateralAmount.toString(), collateralAssetId);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultDecreaseDebtCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, debtAmount] }} = extrinsic as any;

  const details = {
    id: vaultId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(debtAmount.toString(), KUSD), // default
  };

  const vaultDebtPaymentEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'DebtPayment');

  if (vaultDebtPaymentEvent) {
    const { event: { data: [_id, _owner, debtId, debtAmount] } } = vaultDebtPaymentEvent;
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultIncreaseDeptCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, _borrowAmountMin, borrowAmountMax] }} = extrinsic as any;

  const details = {
    id: vaultId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(borrowAmountMax.toString(), KUSD), // default
  };

  const vaultDebtIncreasedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'DebtIncreased');

  if (vaultDebtIncreasedEvent) {
    const { event: { data: [_id, _owner, debtId, debtAmount] } } = vaultDebtIncreasedEvent;
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultCloseCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId] }} = extrinsic as any;

  const details = {
    id: vaultId.toString(),
    collateralAssetId: undefined,
    collateralAmount: undefined,
    debtAssetId: undefined,
    debtAmount: undefined,
  };

  const vaultDebtPaymentEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'DebtPayment');

  if (vaultDebtPaymentEvent) {
    const { event: { data: [_id, _owner, debtId, debtAmount] } } = vaultDebtPaymentEvent;
    const debtAssetId = getAssetId(debtId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(debtAmount.toString(), debtAssetId);
  }

  const vaultClosedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'CDPClosed');

  if (vaultClosedEvent) {
    const { event: { data: [_id, _owner, collateralId, collateralAmount] } } = vaultDebtPaymentEvent;
    const collateralAssetId = getAssetId(collateralId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(collateralAmount.toString(), collateralAssetId);
  }

  await createHistoryElement(extrinsic, details);
}
