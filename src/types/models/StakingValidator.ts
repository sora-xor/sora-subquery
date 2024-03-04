// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingValidatorProps = Omit<StakingValidator, NonNullable<FunctionPropertyNames<StakingValidator>>| '_name'>;

export class StakingValidator implements Entity {

    constructor(
        
            id: string,
        
            bond: bigint,
        
    ) {
        
            this.id = id;
        
            this.bond = bond;
        
    }


    public id: string;

    public bond: bigint;


    get _name(): string {
        return 'StakingValidator';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingValidator entity without an ID");
        await store.set('StakingValidator', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingValidator entity without an ID");
        await store.remove('StakingValidator', id.toString());
    }

    static async get(id:string): Promise<StakingValidator | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingValidator entity without an ID");
        const record = await store.get('StakingValidator', id.toString());
        if (record){
            return this.create(record as StakingValidatorProps);
        }else{
            return;
        }
    }



    static create(record: StakingValidatorProps): StakingValidator {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.bond,
        );
        Object.assign(entity,record);
        return entity;
    }
}
