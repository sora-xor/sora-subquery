import { SnapshotType } from '../types';
import type {
  AssetSnapshot,
  OrderBookSnapshot,
  PoolSnapshot,
  AccountLiquiditySnapshot,
  NetworkSnapshot,
} from '../types';

import { getStorageLog, type BlockContext } from './logs';
import { shouldUpdate, formatDateTimestamp, getSnapshotIndex, getSnapshotTypeTimeDepth } from './index';

import { SubstrateBlock } from '@subql/types';
import type { Entity as BaseEntity } from '@subql/types-core';

type Snapshot = AssetSnapshot | OrderBookSnapshot | PoolSnapshot | AccountLiquiditySnapshot | NetworkSnapshot;

export class EntityStorage<Entity extends BaseEntity> {
  public readonly entityName!: string;

  protected storage!: Map<string, Entity>;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.storage = new Map();
  }

  get ids(): string[] {
    return [...this.storage.keys()];
  }

  get entities(): Entity[] {
    return [...this.storage.values()];
  }

  public getId(...args: any[]): string {
    return args.join('-');
  }

  public parseId(id: string): string[] {
    return id.split('-');
  }

  protected async loadEntity(id: string): Promise<Entity | undefined> {
    throw new Error(`[${this.constructor.name}] "loadEntity" is not implemented`);
  }

  protected async load(block: SubstrateBlock, id: string): Promise<Entity | undefined> {
    const entity = await this.loadEntity(id);

    if (entity) {
      this.log(block, true).debug({ id }, `${this.entityName}:"${id}" loaded`);
      return { ...entity };
    } else {
      this.log(block, true).debug({ id }, `${this.entityName}:"${id}" not found in DB!`);
      return undefined;
    }
  }

  protected async delete(...ids: string[]): Promise<void> {
    await store.bulkRemove(this.entityName, ids);
  }

  protected async save(block: SubstrateBlock, entity: Entity, force = false): Promise<void> {
    if (force || shouldUpdate(block, 60)) {
      await entity.save();

      this.log(block).debug({ id: entity.id }, `${this.entityName}: "${entity.id}" saved`);
    }
  }

  protected async get(block: SubstrateBlock, id: string): Promise<Entity | undefined> {
    if (this.storage.has(id)) {
      this.log(block, true).debug({ id }, `${this.entityName}: "${id}" found in storage`);
      return this.storage.get(id);
    }

    const entity = await this.load(block, id);

    return entity;
  }

  public async sync(block: SubstrateBlock): Promise<void> {
    const entities = this.entities;

    this.log(block).info(`Sync ${entities.length} entities`);

    await store.bulkUpdate(this.entityName, entities);

    // this.clean(block);
  }

  public async clean(block: SubstrateBlock): Promise<void> {
    this.storage.clear();
    this.storage = new Map();

    this.log(block).info(`Storage clean. ${this.storage.size} entities after clean.`);
  }

  public async getEntity(block: SubstrateBlock, id: string, ...args: any[]): Promise<Entity> {
    let entity = await this.get(block, id);

    if (!entity) {
      entity = await this.createEntity(block, id, ...args);

      await this.save(block, entity, true);
    }

    this.storage.set(entity.id, entity);

    return entity;
  }

  public async createEntity(block: SubstrateBlock, id: string, ...args: any[]): Promise<Entity> {
    throw new Error(`[${this.constructor.name}] "createEntity" is not implemented`);
  }

  protected log(ctx: BlockContext, onlyWithTestLogMode = false) {
    return getStorageLog(this.entityName)(ctx, onlyWithTestLogMode);
  }
}

export class EntitySnapshotsStorage<
  Entity extends BaseEntity,
  SnapshotEntity extends Snapshot,
  StorageEntity extends EntityStorage<Entity>,
> extends EntityStorage<SnapshotEntity> {
  protected entityStorage!: StorageEntity;

  public readonly updateTypes = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];
  public readonly removeTypes = [SnapshotType.DEFAULT, SnapshotType.HOUR];

  constructor(entityName: string, entityStorage: StorageEntity) {
    super(entityName);
    this.entityStorage = entityStorage;
  }

  protected async getSnapshotsByIds(block: SubstrateBlock, ids: string[]): Promise<SnapshotEntity[]> {
    const snapshots = await Promise.all(ids.map((id) => this.load(block, id)));

    return snapshots.filter((item) => !!item);
  }

  async getSnapshot(block: SubstrateBlock, entityId: string, type: SnapshotType): Promise<SnapshotEntity> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const snapshotId = this.getId(entityId, type, index);

    let snapshot = await this.get(block, snapshotId);

    if (!snapshot) {
      const entity = await this.entityStorage.getEntity(block, entityId);

      snapshot = await this.createEntity(block, snapshotId, timestamp, type, entity);
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  public override async sync(block: SubstrateBlock): Promise<void> {
    await this.syncSnapshots(block);
    await this.removeOutdatedSnapshots(block);
  }

  protected async syncSnapshots(block: SubstrateBlock): Promise<void> {
    await super.sync(block);

    const blockTimestamp = formatDateTimestamp(block.timestamp);

    for (const snapshot of this.entities) {
      const { type, timestamp } = snapshot;
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type);

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id);
      }
    }

    this.log(block).debug(`${this.storage.size} snapshots in storage after sync`);
  }

  protected async removeOutdatedSnapshots(block: SubstrateBlock): Promise<void> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const entityIds = this.entityStorage.ids;

    for (const type of this.removeTypes) {
      const depth = getSnapshotTypeTimeDepth(type);

      if (!depth) continue;

      const diff = blockTimestamp - depth;
      const { index } = getSnapshotIndex(diff, type);
      const ids = entityIds.map((id) => this.getId(id, type, index));

      await this.delete(...ids);

      this.log(block).info(`Outdated snapshots cleaning: type: ${type}, index: ${index}`);
    }
  }
}
