export class Invoice {
    
    _id?:number
    item: string;
    qty: number;
    date: Date;
    due: Date
    rate: number;
    tax: number;
}