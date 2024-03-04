// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type PoolXYKProps = Omit<PoolXYK, NonNullable<FunctionPropertyNames<PoolXYK>>| '_name'>;

export class PoolXYK implements Entity {

    constructor(
        
            id: string,
        
            baseAssetId: string,
        
            targetAssetId: string,
        
            baseAssetReserves: bigint,
        
            targetAssetReserves: bigint,
        
            multiplier: number,
        
        
        
    ) {
        
            this.id = id;
        
            this.baseAssetId = baseAssetId;
        
            this.targetAssetId = targetAssetId;
        
            this.baseAssetReserves = baseAssetReserves;
        
            this.targetAssetReserves = targetAssetReserves;
        
            this.multiplier = multiplier;
        
    }


    public id: string;

    public baseAssetId: string;

    public targetAssetId: string;

    public baseAssetReserves: bigint;

    public targetAssetReserves: bigint;

    public multiplier: number;

    public priceUSD?: string;

    public strategicBonusApy?: string;


    get _name(): string {
        return 'PoolXYK';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save PoolXYK entity without an ID");
        await store.set('PoolXYK', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove PoolXYK entity without an ID");
        await store.remove('PoolXYK', id.toString());
    }

    static async get(id:string): Promise<PoolXYK | undefined>{
        assert((id !== null && id !== undefined), "Cannot get PoolXYK entity without an ID");
        const record = await store.get('PoolXYK', id.toString());
        if (record){
            return this.create(record as PoolXYKProps);
        }else{
            return;
        }
    }


    static async getByBaseAssetId(baseAssetId: string): Promise<PoolXYK[] | undefined>{
      
      const records = await store.getByField('PoolXYK', 'baseAssetId', baseAssetId);
      return records.map(record => this.create(record as PoolXYKProps));
      
    }

    static async getByTargetAssetId(targetAssetId: string): Promise<PoolXYK[] | undefined>{
      
      const records = await store.getByField('PoolXYK', 'targetAssetId', targetAssetId);
      return records.map(record => this.create(record as PoolXYKProps));
      
    }


    static create(record: PoolXYKProps): PoolXYK {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.baseAssetId,
        
            record.targetAssetId,
        
            record.baseAssetReserves,
        
            record.targetAssetReserves,
        
            record.multiplier,
        );
        Object.assign(entity,record);
        return entity;
    }
}
