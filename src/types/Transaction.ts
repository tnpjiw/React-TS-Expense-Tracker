export interface Tran{
    id:number
    amount:number
    date:Date
    type: 'income' | 'expense'
    cat: 'Products' | 'Entertainment' |'Bills' | 'Other'
}