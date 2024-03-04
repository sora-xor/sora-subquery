import { Block, BlockContext, Call, Event } from '../../types'
import { CallType as CallTypeProduction, EventType as EventTypeProduction } from '../../types/subsquid/production/support'
import { CallType as CallTypeStage, EventType as EventTypeStage } from '../../types/subsquid/stage/support'
import { CallType as CallTypeTest, EventType as EventTypeTest } from '../../types/subsquid/test/support'
import { CallType as CallTypeDev, EventType as EventTypeDev } from '../../types/subsquid/dev/support'
import * as sts from '@subsquid/substrate-runtime/lib/sts'
import { Bytes, QualifiedName, Runtime } from '@subsquid/substrate-runtime'
import assert from 'assert'

interface RuntimeCtx {
    _runtime: Runtime
}

class StorageType {
    constructor(
        private name: QualifiedName,
    ) {}

    is(block: RuntimeCtx): boolean {
        return true
    }

    async get(block: Block['header'], ...key: any[]): Promise<any> {
        return block._runtime.getStorage(block.hash, this.name, ...key)
    }

    async getAll(block: Block['header']): Promise<any[]> {
        return block._runtime.queryStorage(block.hash, this.name)
    }

    async getMany(block: Block['header'], keys: any[]): Promise<any[]> {
        return block._runtime.queryStorage(block.hash, this.name, keys)
    }

    async getKeys(block: Block['header'], ...args: any[]): Promise<any[]> {
        return block._runtime.getStorageKeys(block.hash, this.name, ...args)
    }

    async getRawKeys(block: Block['header'], ...args: any[]): Promise<Bytes[]> {
        return block._runtime.getStorageRawKeys(block.hash, this.name, ...args)
    }

    getKeysPaged(pageSize: number, block: Block['header'], ...args: any[]): AsyncIterable<any[]> {
        return block._runtime.getStorageKeysPaged(pageSize, block.hash, this.name, ...args)
    }

    async getPairs(block: Block['header'], ...args: any[]): Promise<[key: any, value: any][]> {
        return block._runtime.getStoragePairs(block.hash, this.name, ...args)
    }

    getPairsPaged(pageSize: number, block: Block['header'], ...args: any[]): AsyncIterable<[key: any, value: any][]> {
        return block._runtime.getStoragePairsPaged(pageSize, block.hash, this.name, ...args)
    }

    getDefault(block: Block['header']): any {
        assert(this.is(block))
        return block._runtime.getStorageFallback(this.name)
    }
}

type VersionedObject = {
	[key: string]: any
}

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
} | {
	kind: 'storage',
}

type ExtractType<T> = T extends sts.Type<infer U> ? U : never;
export type ExtractCallType<T> = ExtractType<
	T extends CallTypeProduction<infer U> ? U
	: T extends CallTypeStage<infer U> ? U
	: T extends CallTypeTest<infer U> ? U
	: T extends CallTypeDev<infer U> ? U
	: never
>
export type ExtractEventType<T> = ExtractType<
	T extends EventTypeProduction<infer U> ? U
	: T extends EventTypeStage<infer U> ? U
	: T extends EventTypeTest<infer U> ? U
	: T extends EventTypeDev<infer U> ? U
	: never
>

type NarrowVersions<T, V extends readonly string[]> = {
	[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: never]: T[K]
}

function getVersionedObjectKeys(obj: any): string[] {
	return Object.keys(obj)
}

function getAllVersions(obj: any): readonly string[] {
	return getVersionedObjectKeys(obj)
		.filter((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
		.map((key) => key.slice(1))
}

function isVersionedObject(obj: any): obj is VersionedObject {
    const keys = getVersionedObjectKeys(obj)
    return keys.some((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
}

function getDataFromVersionedObject<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): Exclude<T[keyof T], boolean> | null {
	if (!isVersionedObject(obj)) {
		throw new Error(`[${ctx.block.header.height}] Object does not conform to VersionedObject pattern`)
	}

	const entity = entityItem.kind === 'storage'
		? ctx.block.header
		: entityItem.entity

	for (const key of getVersionedObjectKeys(obj)) {
		if (obj[key].is(entity)) {

			return obj[key]
		}
	}

	return null
}

// Make sure to add "as const" after the versions array to properly narrow the entity object
export function narrowVersionedObject<T extends VersionedObject, V extends readonly string[]>(types: T, versions: V): NarrowVersions<T, V> {
	const narrowed: any = {}

	versions.forEach((version) => {
		const vKey = `v${version}`
		const versionType = types[vKey as keyof T]
		if (versionType) {
			narrowed[vKey] = versionType
		}
	})

	return narrowed as NarrowVersions<T, V>
}

export function findCurrentSpecVersion<T extends VersionedObject>(ctx: BlockContext, types: T, entityItem: EntityItem): string | null {
	const entity = entityItem.kind === 'storage'
		? ctx.block.header
		: entityItem.entity

	for (const key of getVersionedObjectKeys(types)) {
		if (key.startsWith('v') && !isNaN(parseInt(key[1])) && types[key].is(entity) === true) {
			return key.slice(1)
		}
	}
	return null
}

export function isCurrentVersionIncluded<T extends VersionedObject, V extends readonly string[]>(ctx: BlockContext, types: T, entityItem: EntityItem, versions: V): boolean {
	return versions.includes(findCurrentSpecVersion(ctx, types, entityItem) as any)
}

type IncludeVersions<T, V extends readonly string[]> = {
    [K in keyof T as K extends `v${infer R}` ? (R extends V[number] ? K : never) : never]: T[K]
}
type ExcludeVersions<T, V extends readonly string[]> = {
    [K in keyof T as K extends `v${infer R}` ? (R extends V[number] ? never : K) : K]: T[K]
}

// Make sure to add "as const" after the versions array to properly narrow the entity object

type FilterKind = 'include' | 'exclude'
type VersionFilter<
	T extends VersionedObject,
	K extends FilterKind = 'exclude',
	V extends readonly string[] = []
> = K extends 'include'
	? Exclude<IncludeVersions<T, V>[keyof IncludeVersions<T, V>], string>
	: Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string>
type FilterArgs<K, V> = { kind: K , versions: V }

export function getEntityRepresentation<T extends VersionedObject, K extends FilterKind, V extends readonly string[] = [], C extends boolean = false>(
	ctx: BlockContext,
	types: T,
	entityItem: EntityItem,
	filter: FilterArgs<K, V> = { kind: 'exclude' as unknown as K, versions: [] as unknown as V },
	couldBeNull?: C,
): C extends true ? VersionFilter<T, K, V> | null : VersionFilter<T, K, V> {
	const allVersions = getAllVersions(types) as V
	// Filter by the specified versions
	let versions = [] as unknown as V
	if (filter.kind === 'include') {
		versions = filter.versions
	} else if (filter.kind === 'exclude') {
		versions = allVersions.filter((v) => !filter.versions.includes(v)) as unknown as V
	}

	const narrowedObject = narrowVersionedObject(types, versions)
	let data: any = getDataFromVersionedObject(ctx, narrowedObject, entityItem)

	if (data === null) {
		if (entityItem.kind === 'call') {
			data = {
				decode(call: Call<any>) {
					return entityItem.entity.block._runtime.decodeJsonCallRecordArguments(call)
				}
			} as any
		} else if (entityItem.kind === 'event') {
			data = {
				decode(event: Event<any>) {
					return entityItem.entity.block._runtime.decodeJsonEventRecordArguments(event)
				}
			} as any
		} else if (entityItem.kind === 'storage') {
			data = new StorageType(types.name)
		}
	}
	if (data === null && !couldBeNull) {
		throw new Error(`[${ctx.block.header.height}] Entity data is null`)
	}

	return data
}

export function getCallRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	call: Call<any>,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, false>(ctx, types, { kind: 'call', entity: call }, filter)
}
export function decodeCall<R>(representation: R, call: Call<any>): ExtractCallType<R> {
	return (representation as any).decode(call)
}
export function getCallData<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	call: Call<any>,
	filter?: FilterArgs<K, V>,
) {
	const representation = getCallRepresentation<T, K, V>(ctx, types, call, filter)
	return decodeCall(representation, call)
}

export function getEventRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	event: Event<any>,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, false>(ctx, types, { kind: 'event', entity: event }, filter)
}
export function decodeEvent<R>(representation: R, event: Event<any>): ExtractEventType<R> {
	return (representation as any).decode(event)
}
export function getEventData<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	event: Event<any>,
	filter?: FilterArgs<K, V>,
) {
	const representation = getEventRepresentation<T, K, V>(ctx, types, event, filter)
	return decodeEvent(representation, event)
}

export function getStorageRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, true>(ctx, types, { kind: 'storage' }, filter, true)
}
