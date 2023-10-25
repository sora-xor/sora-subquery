import { UpdatesStream, UpdatesStreamValue } from "../types";

const PriceUpdateStreamId = 'price';
const PoolXYKApyUpdateStreamId = 'apy';

class BlockUpdatesStream {
  public readonly id!: string;
  private data!: Map<UpdatesStreamValue['id'], UpdatesStreamValue['value']>;

  constructor(id: string) {
    this.id = id;
    this.data = new Map();
  }

  hasUpdate(): boolean {
    return this.data.size !== 0;
  }

  async update(id: string, value: string) {
    this.data.set(id, value);
  }

  async sync(blockNumber: number) {
    await this.syncData(blockNumber);
    this.clear();
  }

  private async get(): Promise<UpdatesStream> {
    let entity = await UpdatesStream.get(this.id);

    if (!entity) {
      entity = new UpdatesStream(this.id);
      entity.updatedAt = 0;
      entity.data = [];
    }

    return entity;
  }

  private async syncData(blockNumber: number): Promise<void> {
    const entity = await this.get();

    for (const [id, value] of this.data.entries()) {
      entity.data.push({ id, value });
    }

    entity.updatedAt = blockNumber;

    await entity.save();
  }

  private clear() {
    this.data.clear();
  }
}

export const priceUpdatesStream = new BlockUpdatesStream(PriceUpdateStreamId);
export const poolXykApyUpdatesStream = new BlockUpdatesStream(PoolXYKApyUpdateStreamId);
