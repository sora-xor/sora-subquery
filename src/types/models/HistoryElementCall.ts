// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    HistoryElementCallDetails,
} from '../interfaces'




export type HistoryElementCallProps = Omit<HistoryElementCall, NonNullable<FunctionPropertyNames<HistoryElementCall>>| '_name'>;

export class HistoryElementCall implements Entity {

    constructor(
        
            id: string,
        
            historyElementId: string,
        
            module: string,
        
            method: string,
        
            hash: string,
        
        
            updatedAtBlock: number,
        
    ) {
        
            this.id = id;
        
            this.historyElementId = historyElementId;
        
            this.module = module;
        
            this.method = method;
        
            this.hash = hash;
        
            this.updatedAtBlock = updatedAtBlock;
        
    }


    public id: string;

    public historyElementId: string;

    public module: string;

    public method: string;

    public hash: string;

    public data?: HistoryElementCallDetails;

    public updatedAtBlock: number;


    get _name(): string {
        return 'HistoryElementCall';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save HistoryElementCall entity without an ID");
        await store.set('HistoryElementCall', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove HistoryElementCall entity without an ID");
        await store.remove('HistoryElementCall', id.toString());
    }

    static async get(id:string): Promise<HistoryElementCall | undefined>{
        assert((id !== null && id !== undefined), "Cannot get HistoryElementCall entity without an ID");
        const record = await store.get('HistoryElementCall', id.toString());
        if (record){
            return this.create(record as HistoryElementCallProps);
        }else{
            return;
        }
    }


    static async getByHistoryElementId(historyElementId: string): Promise<HistoryElementCall[] | undefined>{
      
      const records = await store.getByField('HistoryElementCall', 'historyElementId', historyElementId);
      return records.map(record => this.create(record as HistoryElementCallProps));
      
    }

    static async getByHash(hash: string): Promise<HistoryElementCall[] | undefined>{
      
      const records = await store.getByField('HistoryElementCall', 'hash', hash);
      return records.map(record => this.create(record as HistoryElementCallProps));
      
    }


    static create(record: HistoryElementCallProps): HistoryElementCall {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.historyElementId,
        
            record.module,
        
            record.method,
        
            record.hash,
        
            record.updatedAtBlock,
        );
        Object.assign(entity,record);
        return entity;
    }
}
