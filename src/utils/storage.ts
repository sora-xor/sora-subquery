import { SnapshotType } from "../types";
import type { AssetSnapshot, OrderBookSnapshot, PoolSnapshot, NetworkSnapshot } from '../types';

import { getStorageLog, type BlockContext } from './logs';
import { shouldUpdate, formatDateTimestamp, getSnapshotIndex, getSnapshotTypeTimeDepth } from './index';

import { SubstrateBlock } from '@subql/types';
import type { Entity as BaseEntity } from "@subql/types-core";

type Snapshot = AssetSnapshot | OrderBookSnapshot | PoolSnapshot | NetworkSnapshot;

export class EntityStorage<Entity extends BaseEntity> {
  protected entityName!: string;

  protected storage!: Map<string, Entity>;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.storage = new Map();
  }

  get ids(): string[] {
    return [...this.storage.keys()];
  }

  get values(): Entity[] {
    return [...this.storage.values()];
  }

  public getId(...args: any[]): string {
    return args.join('-');
  }

  protected async load(id: string): Promise<Entity> {
    return await store.get(this.entityName, id) as Entity;
  }

  protected async delete(...ids: string[]): Promise<void> {
    await store.bulkRemove(this.entityName, ids);
  }

  protected async save(block: SubstrateBlock, entity: Entity, force = false): Promise<void> {
    if (force || shouldUpdate(block, 60)) {
      await entity.save();

      this.log(block).debug({ id: entity.id }, `${this.entityName} saved`);
    }
  }

  public async sync(block: SubstrateBlock): Promise<void> {
    this.log(block).debug(`Sync ${this.storage.size} entities`);

    await store.bulkUpdate(this.entityName, [...this.storage.values()]);
  }

  public async getEntity(block: SubstrateBlock, id: string, ...args: any[]): Promise<Entity> {
    if (this.storage.has(id)) {
      this.log(block, true).debug({ id }, `${this.entityName} found in storage`);
      return this.storage.get(id);
    }

    let entity = await this.load(id);

    if (!entity) {
      entity = this.createEntity(block, id, ...args);

      await this.save(block, entity, true);
      this.log(block).debug({ id }, `${this.entityName} created and saved`);
    }

    this.storage.set(entity.id, entity);

    return entity;
  }

  public createEntity(block: SubstrateBlock, id: string, ...args: any[]): Entity {
    throw new Error(`[${this.constructor.name}] "createEntity" is not implemented`);
  }

  protected log(ctx: BlockContext, onlyWithTestLogMode = false) {
    return getStorageLog(this.entityName)(ctx, onlyWithTestLogMode);
  }
}

export class EntitySnapshotsStorage<
  Entity extends BaseEntity,
  SnapshotEntity extends Snapshot,
  StorageEntity extends  EntityStorage<Entity>,
> extends EntityStorage<SnapshotEntity> {
  protected entityStorage!: StorageEntity;

  public readonly updateTypes = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY];
  public readonly removeTypes = [SnapshotType.DEFAULT, SnapshotType.HOUR];

  constructor(entityName: string, entityStorage: StorageEntity) {
    super(entityName);
    this.entityStorage = entityStorage;
  }

  protected async getSnapshotsByIds(ids: string[]): Promise<SnapshotEntity[]> {
    const snapshots = await Promise.all(ids.map(id => this.load(id)));

    return snapshots.filter((item) => !!item);
  };

  async getSnapshot(block: SubstrateBlock, entityId: string, type: SnapshotType): Promise<SnapshotEntity> {
    const blockTimestamp = formatDateTimestamp(block.timestamp);
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type);
    const id = this.getId(entityId, type, index);

    if (this.storage.has(id)) {
      this.log(block, true).debug({ id }, `${this.entityName} found in storage`);
      return this.storage.get(id);
    }

    let snapshot = await this.load(id);

    if (!snapshot) {
      const entity = await this.entityStorage.getEntity(block, entityId);

      snapshot = this.createEntity(block, id, timestamp, type, entity);

      this.log(block).debug({ id }, `${this.entityName} created and saved`);
    }

    this.storage.set(snapshot.id, snapshot);

    return snapshot;
  }

  public override async sync(block: SubstrateBlock): Promise<void> {
    await this.syncSnapshots(block);
    await this.removeOutdatedSnapshots(block);
  }

  protected async syncSnapshots(block: SubstrateBlock): Promise<void> {
    await this.sync(block);

    const blockTimestamp = formatDateTimestamp(block.timestamp);

    for (const snapshot of this.storage.values()) {
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

      await store.bulkRemove(this.entityName, ids);

      this.log(block).info(`Outdated snapshots cleaning: type: ${type}, index: ${index}`);
    }
  }
}