import type useTransaction from "../hooks/useTransaction"

export interface Tran{
    id:number
    amount:string
    date:Date
    type: 'income' | 'expense'
    cat: 'products' | 'entertainment' |'bills' | 'other'
}

export type UseTransactionReturn = ReturnType<typeof useTransaction>


