// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingEraProps = Omit<StakingEra, NonNullable<FunctionPropertyNames<StakingEra>>| '_name'>;

export class StakingEra implements Entity {

    constructor(
        
            id: string,
        
            index: number,
        
            start: bigint,
        
    ) {
        
            this.id = id;
        
            this.index = index;
        
            this.start = start;
        
    }


    public id: string;

    public index: number;

    public start: bigint;


    get _name(): string {
        return 'StakingEra';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingEra entity without an ID");
        await store.set('StakingEra', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingEra entity without an ID");
        await store.remove('StakingEra', id.toString());
    }

    static async get(id:string): Promise<StakingEra | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingEra entity without an ID");
        const record = await store.get('StakingEra', id.toString());
        if (record){
            return this.create(record as StakingEraProps);
        }else{
            return;
        }
    }


    static async getByIndex(index: number): Promise<StakingEra[] | undefined>{
      
      const records = await store.getByField('StakingEra', 'index', index);
      return records.map(record => this.create(record as StakingEraProps));
      
    }

    static async getByStart(start: bigint): Promise<StakingEra[] | undefined>{
      
      const records = await store.getByField('StakingEra', 'start', start);
      return records.map(record => this.create(record as StakingEraProps));
      
    }


    static create(record: StakingEraProps): StakingEra {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.index,
        
            record.start,
        );
        Object.assign(entity,record);
        return entity;
    }
}
