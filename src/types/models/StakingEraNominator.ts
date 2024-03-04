// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingEraNominatorProps = Omit<StakingEraNominator, NonNullable<FunctionPropertyNames<StakingEraNominator>>| '_name'>;

export class StakingEraNominator implements Entity {

    constructor(
        
            id: string,
        
            eraId: string,
        
            bond: bigint,
        
            stakerId: string,
        
    ) {
        
            this.id = id;
        
            this.eraId = eraId;
        
            this.bond = bond;
        
            this.stakerId = stakerId;
        
    }


    public id: string;

    public eraId: string;

    public bond: bigint;

    public stakerId: string;


    get _name(): string {
        return 'StakingEraNominator';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingEraNominator entity without an ID");
        await store.set('StakingEraNominator', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingEraNominator entity without an ID");
        await store.remove('StakingEraNominator', id.toString());
    }

    static async get(id:string): Promise<StakingEraNominator | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingEraNominator entity without an ID");
        const record = await store.get('StakingEraNominator', id.toString());
        if (record){
            return this.create(record as StakingEraNominatorProps);
        }else{
            return;
        }
    }


    static async getByEraId(eraId: string): Promise<StakingEraNominator[] | undefined>{
      
      const records = await store.getByField('StakingEraNominator', 'eraId', eraId);
      return records.map(record => this.create(record as StakingEraNominatorProps));
      
    }

    static async getByStakerId(stakerId: string): Promise<StakingEraNominator[] | undefined>{
      
      const records = await store.getByField('StakingEraNominator', 'stakerId', stakerId);
      return records.map(record => this.create(record as StakingEraNominatorProps));
      
    }


    static create(record: StakingEraNominatorProps): StakingEraNominator {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.eraId,
        
            record.bond,
        
            record.stakerId,
        );
        Object.assign(entity,record);
        return entity;
    }
}
