// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    OrderBookStatus,
} from '../enums'


export type OrderBookProps = Omit<OrderBook, NonNullable<FunctionPropertyNames<OrderBook>>| '_name'>;

export class OrderBook implements Entity {

    constructor(
        
            id: string,
        
            dexId: number,
        
            baseAssetId: string,
        
            quoteAssetId: string,
        
            baseAssetReserves: bigint,
        
            quoteAssetReserves: bigint,
        
            status: OrderBookStatus,
        
        
        
        
        
            updatedAtBlock: number,
        
    ) {
        
            this.id = id;
        
            this.dexId = dexId;
        
            this.baseAssetId = baseAssetId;
        
            this.quoteAssetId = quoteAssetId;
        
            this.baseAssetReserves = baseAssetReserves;
        
            this.quoteAssetReserves = quoteAssetReserves;
        
            this.status = status;
        
            this.updatedAtBlock = updatedAtBlock;
        
    }


    public id: string;

    public dexId: number;

    public baseAssetId: string;

    public quoteAssetId: string;

    public baseAssetReserves: bigint;

    public quoteAssetReserves: bigint;

    public status: OrderBookStatus;

    public price?: string;

    public priceChangeDay?: number;

    public volumeDayUSD?: string;

    public lastDeals?: string;

    public updatedAtBlock: number;


    get _name(): string {
        return 'OrderBook';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save OrderBook entity without an ID");
        await store.set('OrderBook', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove OrderBook entity without an ID");
        await store.remove('OrderBook', id.toString());
    }

    static async get(id:string): Promise<OrderBook | undefined>{
        assert((id !== null && id !== undefined), "Cannot get OrderBook entity without an ID");
        const record = await store.get('OrderBook', id.toString());
        if (record){
            return this.create(record as OrderBookProps);
        }else{
            return;
        }
    }


    static async getByDexId(dexId: number): Promise<OrderBook[] | undefined>{
      
      const records = await store.getByField('OrderBook', 'dexId', dexId);
      return records.map(record => this.create(record as OrderBookProps));
      
    }

    static async getByBaseAssetId(baseAssetId: string): Promise<OrderBook[] | undefined>{
      
      const records = await store.getByField('OrderBook', 'baseAssetId', baseAssetId);
      return records.map(record => this.create(record as OrderBookProps));
      
    }

    static async getByQuoteAssetId(quoteAssetId: string): Promise<OrderBook[] | undefined>{
      
      const records = await store.getByField('OrderBook', 'quoteAssetId', quoteAssetId);
      return records.map(record => this.create(record as OrderBookProps));
      
    }


    static create(record: OrderBookProps): OrderBook {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.dexId,
        
            record.baseAssetId,
        
            record.quoteAssetId,
        
            record.baseAssetReserves,
        
            record.quoteAssetReserves,
        
            record.status,
        
            record.updatedAtBlock,
        );
        Object.assign(entity,record);
        return entity;
    }
}
