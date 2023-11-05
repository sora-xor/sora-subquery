import { UpdatesStream } from "../types";

const PriceUpdateStreamId = 'price';
const PoolXYKApyUpdateStreamId = 'apy';

class BlockUpdatesStream {
  public readonly id!: string;
  private storage!: Map<string, string>;

  constructor(id: string) {
    this.id = id;
    this.storage = new Map();
  }

  get hasUpdate(): boolean {
    return this.storage.size !== 0;
  }

  async update(id: string, value: string) {
    this.storage.set(id, value);
  }

  async sync(blockNumber: number) {
    await this.syncData(blockNumber);
    this.clear();
  }

  private async get(): Promise<UpdatesStream> {
    let entity = await UpdatesStream.get(this.id);

    if (!entity) {
      entity = new UpdatesStream(this.id);
      entity.block = 0;
      entity.data = '';
    }

    return entity;
  }

  private async syncData(blockNumber: number): Promise<void> {
    const entity = await this.get();
    const updates = {};

    for (const [id, value] of this.storage.entries()) {
      updates[id] = value;
    }

    entity.data = JSON.stringify(updates);
    entity.block = blockNumber;

    await entity.save();
  }

  private clear() {
    this.storage.clear();
  }
}

export const priceUpdatesStream = new BlockUpdatesStream(PriceUpdateStreamId);
export const poolXykApyUpdatesStream = new BlockUpdatesStream(PoolXYKApyUpdateStreamId);