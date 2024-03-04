// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    OrderType,

    OrderStatus,
} from '../enums'


export type OrderBookOrderProps = Omit<OrderBookOrder, NonNullable<FunctionPropertyNames<OrderBookOrder>>| '_name'>;

export class OrderBookOrder implements Entity {

    constructor(
        
            id: string,
        
            type: OrderType,
        
        
            orderBookId: string,
        
            accountId: string,
        
            createdAtBlock: number,
        
            timestamp: number,
        
            isBuy: boolean,
        
            amount: string,
        
            price: string,
        
            lifetime: number,
        
            expiresAt: number,
        
            amountFilled: string,
        
            status: OrderStatus,
        
            updatedAtBlock: number,
        
    ) {
        
            this.id = id;
        
            this.type = type;
        
            this.orderBookId = orderBookId;
        
            this.accountId = accountId;
        
            this.createdAtBlock = createdAtBlock;
        
            this.timestamp = timestamp;
        
            this.isBuy = isBuy;
        
            this.amount = amount;
        
            this.price = price;
        
            this.lifetime = lifetime;
        
            this.expiresAt = expiresAt;
        
            this.amountFilled = amountFilled;
        
            this.status = status;
        
            this.updatedAtBlock = updatedAtBlock;
        
    }


    public id: string;

    public type: OrderType;

    public orderId?: number;

    public orderBookId: string;

    public accountId: string;

    public createdAtBlock: number;

    public timestamp: number;

    public isBuy: boolean;

    public amount: string;

    public price: string;

    public lifetime: number;

    public expiresAt: number;

    public amountFilled: string;

    public status: OrderStatus;

    public updatedAtBlock: number;


    get _name(): string {
        return 'OrderBookOrder';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save OrderBookOrder entity without an ID");
        await store.set('OrderBookOrder', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove OrderBookOrder entity without an ID");
        await store.remove('OrderBookOrder', id.toString());
    }

    static async get(id:string): Promise<OrderBookOrder | undefined>{
        assert((id !== null && id !== undefined), "Cannot get OrderBookOrder entity without an ID");
        const record = await store.get('OrderBookOrder', id.toString());
        if (record){
            return this.create(record as OrderBookOrderProps);
        }else{
            return;
        }
    }


    static async getByOrderBookId(orderBookId: string): Promise<OrderBookOrder[] | undefined>{
      
      const records = await store.getByField('OrderBookOrder', 'orderBookId', orderBookId);
      return records.map(record => this.create(record as OrderBookOrderProps));
      
    }

    static async getByAccountId(accountId: string): Promise<OrderBookOrder[] | undefined>{
      
      const records = await store.getByField('OrderBookOrder', 'accountId', accountId);
      return records.map(record => this.create(record as OrderBookOrderProps));
      
    }


    static create(record: OrderBookOrderProps): OrderBookOrder {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.type,
        
            record.orderBookId,
        
            record.accountId,
        
            record.createdAtBlock,
        
            record.timestamp,
        
            record.isBuy,
        
            record.amount,
        
            record.price,
        
            record.lifetime,
        
            record.expiresAt,
        
            record.amountFilled,
        
            record.status,
        
            record.updatedAtBlock,
        );
        Object.assign(entity,record);
        return entity;
    }
}
