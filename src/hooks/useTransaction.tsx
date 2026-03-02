import { useReducer, useState, type FormEvent } from "react";
import type { Tran } from "../types/Transaction";

const useTransaction = () => {
    const [task,setTask] = useState<Tran[]>([
        {id:1,amount:"100",date:new Date("2026-03-02"),type:"expense",cat:"bills"}
    ])
    const [amount,setAmount] = useState<string>("")
    const [cat,setCat] = useState<'products' | 'entertainment' |'bills' | 'other'>("products")
    const [type,setType] = useState<'income' | 'expense'>('income')
    const [date,setDate] = useState<Date>()

    const submitForm = (e:FormEvent)=>{
        e.preventDefault()
        if(!date) return
        const newTran:Tran = {
            id:Date.now(),
            amount:amount,
            date:date,
            type:type,
            cat:cat
        }
        setTask(prev => [...prev,newTran])
        setAmount("")
        setCat("products")
        setType("income")
        setDate(undefined)
    }

    

  return {task,amount,setAmount,cat,setCat,type,setType,date,setDate,submitForm}
}

export default useTransaction