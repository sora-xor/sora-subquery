import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { KUSD } from "../../utils/consts";
import { getAssetId, getAmountUSD, formatU128ToBalance } from "../../utils/assets";
import { logStartProcessingCall } from "../../utils/logs";

export async function vaultCreateCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [collateralAsset, collateralAmountCodec, stablecoinAsset, _borrowAmountMin, borrowAmountMax, _cdpType] }} = extrinsic as any;

  const collateralAssetId = getAssetId(collateralAsset);
  const collateralAmount = formatU128ToBalance(collateralAmountCodec.toString(), collateralAssetId);

  const debtAssetId = getAssetId(stablecoinAsset);
  const debtAmount = formatU128ToBalance(borrowAmountMax.toString(), debtAssetId);

  const details: any = {
    id: undefined,
    collateralAssetId,
    collateralAmount,
    debtAssetId,
    debtAmount,
  };

  const vaultCreatedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'CDPCreated');

  if (vaultCreatedEvent) {
    const { event: { data: [id, _owner, _collateralId, _debtId, _vaultType] } } = vaultCreatedEvent;

    details.id = id.toString();
  }

  const debtIncreasedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'DebtIncreased');

  if (debtIncreasedEvent) {
    const { event: { data: [_id, _owner, _debtId, debtAmount] } } = debtIncreasedEvent;

    details.debtAmount = formatU128ToBalance(debtAmount.toString(), details.debtAssetId);
  }

  details.collateralAmountUSD = await getAmountUSD(extrinsic.block, details.collateralAssetId, details.collateralAmount);
  details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);

  await createHistoryElement(extrinsic, details);
}

export async function vaultDepositCollateralCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, collateralAmount] }} = extrinsic as any;

  const details: any = {
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
    details.collateralAmountUSD = await getAmountUSD(extrinsic.block, details.collateralAssetId, details.collateralAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultDecreaseDebtCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, debtAmount] }} = extrinsic as any;

  const details: any = {
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
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultIncreaseDeptCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId, _borrowAmountMin, borrowAmountMax] }} = extrinsic as any;

  const details: any = {
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
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  await createHistoryElement(extrinsic, details);
}

export async function vaultCloseCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const { extrinsic: { args: [vaultId] }} = extrinsic as any;

  const details: any = {
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
    details.debtAmountUSD = await getAmountUSD(extrinsic.block, details.debtAssetId, details.debtAmount);
  }

  const vaultClosedEvent = extrinsic.events.find(e => e.event.section === 'kensetsu' && e.event.method === 'CDPClosed');

  if (vaultClosedEvent) {
    const { event: { data: [_id, _owner, collateralId, collateralAmount] } } = vaultClosedEvent;
    const collateralAssetId = getAssetId(collateralId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(collateralAmount.toString(), collateralAssetId);
    details.collateralAmountUSD = await getAmountUSD(extrinsic.block, details.collateralAssetId, details.collateralAmount);
  }

  await createHistoryElement(extrinsic, details);
}
