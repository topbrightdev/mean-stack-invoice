export class Invoice {
    
    _id?:string;
    item: string;
    qty: number;
    date: Date;
    due: Date
    rate: number;
    tax: number;
}
