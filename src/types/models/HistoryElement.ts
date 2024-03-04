// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    ExecutionResult,

    HistoryElementDetails,
} from '../interfaces'



import {
    HistoryElementType,
} from '../enums'


export type HistoryElementProps = Omit<HistoryElement, NonNullable<FunctionPropertyNames<HistoryElement>>| '_name'>;

export class HistoryElement implements Entity {

    constructor(
        
            id: string,
        
            type: HistoryElementType,
        
            blockHeight: number,
        
            blockHash: string,
        
            module: string,
        
            method: string,
        
            address: string,
        
            networkFee: string,
        
            execution: ExecutionResult,
        
            timestamp: number,
        
        
        
        
            callNames: string[],
        
            updatedAtBlock: number,
        
    ) {
        
            this.id = id;
        
            this.type = type;
        
            this.blockHeight = blockHeight;
        
            this.blockHash = blockHash;
        
            this.module = module;
        
            this.method = method;
        
            this.address = address;
        
            this.networkFee = networkFee;
        
            this.execution = execution;
        
            this.timestamp = timestamp;
        
            this.callNames = callNames;
        
            this.updatedAtBlock = updatedAtBlock;
        
    }


    public id: string;

    public type: HistoryElementType;

    public blockHeight: number;

    public blockHash: string;

    public module: string;

    public method: string;

    public address: string;

    public networkFee: string;

    public execution: ExecutionResult;

    public timestamp: number;

    public data?: HistoryElementDetails;

    public dataTo?: string;

    public dataFrom?: string;

    public callNames: string[];

    public updatedAtBlock: number;


    get _name(): string {
        return 'HistoryElement';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save HistoryElement entity without an ID");
        await store.set('HistoryElement', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove HistoryElement entity without an ID");
        await store.remove('HistoryElement', id.toString());
    }

    static async get(id:string): Promise<HistoryElement | undefined>{
        assert((id !== null && id !== undefined), "Cannot get HistoryElement entity without an ID");
        const record = await store.get('HistoryElement', id.toString());
        if (record){
            return this.create(record as HistoryElementProps);
        }else{
            return;
        }
    }


    static async getByBlockHash(blockHash: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'blockHash', blockHash);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }

    static async getByModule(module: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'module', module);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }

    static async getByMethod(method: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'method', method);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }

    static async getByAddress(address: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'address', address);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }

    static async getByDataTo(dataTo: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'dataTo', dataTo);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }

    static async getByDataFrom(dataFrom: string): Promise<HistoryElement[] | undefined>{
      
      const records = await store.getByField('HistoryElement', 'dataFrom', dataFrom);
      return records.map(record => this.create(record as HistoryElementProps));
      
    }


    static create(record: HistoryElementProps): HistoryElement {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.type,
        
            record.blockHeight,
        
            record.blockHash,
        
            record.module,
        
            record.method,
        
            record.address,
        
            record.networkFee,
        
            record.execution,
        
            record.timestamp,
        
            record.callNames,
        
            record.updatedAtBlock,
        );
        Object.assign(entity,record);
        return entity;
    }
}
