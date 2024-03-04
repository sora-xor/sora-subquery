// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingEraNominationProps = Omit<StakingEraNomination, NonNullable<FunctionPropertyNames<StakingEraNomination>>| '_name'>;

export class StakingEraNomination implements Entity {

    constructor(
        
            id: string,
        
            eraId: string,
        
            amount: bigint,
        
            validatorId: string,
        
            nominatorId: string,
        
    ) {
        
            this.id = id;
        
            this.eraId = eraId;
        
            this.amount = amount;
        
            this.validatorId = validatorId;
        
            this.nominatorId = nominatorId;
        
    }


    public id: string;

    public eraId: string;

    public amount: bigint;

    public validatorId: string;

    public nominatorId: string;


    get _name(): string {
        return 'StakingEraNomination';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingEraNomination entity without an ID");
        await store.set('StakingEraNomination', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingEraNomination entity without an ID");
        await store.remove('StakingEraNomination', id.toString());
    }

    static async get(id:string): Promise<StakingEraNomination | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingEraNomination entity without an ID");
        const record = await store.get('StakingEraNomination', id.toString());
        if (record){
            return this.create(record as StakingEraNominationProps);
        }else{
            return;
        }
    }


    static async getByEraId(eraId: string): Promise<StakingEraNomination[] | undefined>{
      
      const records = await store.getByField('StakingEraNomination', 'eraId', eraId);
      return records.map(record => this.create(record as StakingEraNominationProps));
      
    }

    static async getByValidatorId(validatorId: string): Promise<StakingEraNomination[] | undefined>{
      
      const records = await store.getByField('StakingEraNomination', 'validatorId', validatorId);
      return records.map(record => this.create(record as StakingEraNominationProps));
      
    }

    static async getByNominatorId(nominatorId: string): Promise<StakingEraNomination[] | undefined>{
      
      const records = await store.getByField('StakingEraNomination', 'nominatorId', nominatorId);
      return records.map(record => this.create(record as StakingEraNominationProps));
      
    }


    static create(record: StakingEraNominationProps): StakingEraNomination {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.eraId,
        
            record.amount,
        
            record.validatorId,
        
            record.nominatorId,
        );
        Object.assign(entity,record);
        return entity;
    }
}
