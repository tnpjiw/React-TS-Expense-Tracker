import type useTransaction from "../hooks/useTransaction"

export interface Tran{
    id:number
    amount:string
    date:string
    type: 'income' | 'expense' | ''
    cat: 'Products' | 'Entertainment' |'Bills' | 'Salary' | 'Other' | ''
}

export type UseTransactionReturn = ReturnType<typeof useTransaction>


