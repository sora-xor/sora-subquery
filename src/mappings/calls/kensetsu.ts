import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { XOR } from "../../utils/consts";
import { formatU128ToBalance } from "../../utils/assets";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function kensetsuCreateVaultCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic)

  // "debpAssetid", "vaultType" may be added in future
  const { extrinsic: { args: [collateralAssetId, collateralAmount, borrowAmount] }} = extrinsic as any;

  const details = {
  };

  await createHistoryElement(extrinsic, details);
}
