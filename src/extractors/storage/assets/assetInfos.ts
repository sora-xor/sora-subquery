import { storage } from '../../../types/subsquid/merged'
import { BlockContext, AssetId } from '../../../types'
import { indexer } from '../../../config'
import { getStorageRepresentation, isCurrentVersionIncluded } from '../../../utils/subsquid/entities'
import { assertDefined } from '../../../utils'
import { versionsWithStringAssetId } from '../../../const'

type Data = {
	symbol: string,
	name: string,
	decimals: number,
	isMintable: boolean,
	content?: string,
	description?: string
}

async function getSubsquidData(ctx: BlockContext, assetId: AssetId): Promise<Data> {
	const types = storage.assets.assetInfos
	const representationString = getStorageRepresentation(ctx, types, { kind: 'include', versions: versionsWithStringAssetId })
	const representationAsset32 = getStorageRepresentation(ctx, types, { kind: 'exclude', versions: versionsWithStringAssetId })

	let data = isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versionsWithStringAssetId)
		? await representationString?.get(ctx.block.header, assetId)
		: await representationAsset32?.get(ctx.block.header, { code: assetId })

	assertDefined(data)

	const [symbol, name, decimals, _isMintable, content, description] = data

	return {
		symbol,
		name,
		decimals,
		isMintable: _isMintable,
		content,
		description
	}
}

async function getSubqueryData(ctx: BlockContext, assetId: AssetId): Promise<Data> {
	const [symbol, name, decimals, _isMintable, content, description] = (await api.query.assets.assetInfos(assetId)).toHuman() as any;

	return {
		symbol,
		name,
		decimals,
		isMintable: _isMintable,
		content,
		description
	}
}

export async function getAssetsAssetInfosStorageData(ctx: BlockContext, assetId: AssetId): Promise<Data> {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, assetId)
		: getSubqueryData(ctx, assetId)
}