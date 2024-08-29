import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { getAssetId } from "../../utils/assets";
import { logStartProcessingCall } from "../../utils/logs";

export async function setSbtExpiratioCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
	logStartProcessingCall(extrinsic);
	const { extrinsic: { args: [account, sbtAsset, newExpiresAt] } } = extrinsic as any;
	
	const sbtAssetId = getAssetId(sbtAsset);
	const newExpiresAtTime = newExpiresAt.toString();
	const accountId = account.toString();

	const details = {
		sbtAssetId,
		newExpiresAtTime,
		accountId
	}

	await createHistoryElement(extrinsic,details);
}

export async function regulateAssetCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> { 
	logStartProcessingCall(extrinsic);

	const { extrinsic: { args: [asset] } } = extrinsic as any;

	const assetId = getAssetId(asset);

	const details = {
		assetId
	}

	await createHistoryElement(extrinsic, details);
}

export async function bindRegulatedAssetToSbtCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> { 
	logStartProcessingCall(extrinsic);

	const { extrinsic: { args: [regulatedAsset, sbtAsset] } } = extrinsic as any;
	
	const regulatedAssetId = getAssetId(regulatedAsset);
	const sbtAssetId = getAssetId(sbtAsset);

	const details = {
		regulatedAssetId,
		sbtAssetId
	}

	await createHistoryElement(extrinsic, details);
}

export async function registerRegulatedAssetCallHandler(extrinsic: SubstrateExtrinsic): Promise<void> { 
	logStartProcessingCall(extrinsic);
	const { extrinsic: { args: [_symbol, _name, _supply, _mintable] } } = extrinsic as any;

	const symbol = _symbol.toString();
	const name = _name.toString();
	const supply = _supply.toString();
	const mintable = _mintable.toString()

	const details = {
		symbol,
		name,
		supply,
		mintable,
	}

	await createHistoryElement(extrinsic, details);
}