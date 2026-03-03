import { useEffect, useState, type FormEvent } from "react";
import type { Tran } from "../types/Transaction";

const useTransaction = () => {
  const [task, setTask] = useState<Tran[]>(() => {
    const savedTasks = localStorage.getItem("trantask");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("trantask", JSON.stringify(task));
  }, [task]);

  const [amount, setAmount] = useState<string>("");
  const [cat, setCat] = useState<
    "Products" | "Entertainment" | "Bills" | "Salary" | "Other" | ""
  >("");
  const [type, setType] = useState<"income" | "expense" | "">("");
  const [date, setDate] = useState<string>("");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!date) return;
    const newTran: Tran = {
      id: Date.now(),
      amount: amount,
      date: date,
      type: type,
      cat: cat,
    };
    setTask((prev) => [...prev, newTran]);
    setAmount("");
    setCat("");
    setType("");
    setDate("");
  };

  const deleteTask = (id: number) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
  };

  const [filterType, setFilterType] = useState<"latest" | "income" | "expense">(
    "latest",
  );

  const [expenseCat, setExpenseCat] = useState<
    "All" | "Products" | "Entertainment" | "Bills" | "Salary" | "Other" | ""
  >("");

  const filteredTask = task.filter((item) => {
    return filterType === "latest"
      ? true
      : filterType === "income"
        ? item.type === "income"
        : expenseCat === "" || expenseCat === "All"
          ? item.type === "expense"
          : item.type === "expense" && item.cat === expenseCat;
  });

  return {
    task,
    amount,
    setAmount,
    cat,
    setCat,
    type,
    setType,
    date,
    setDate,
    submitForm,
    deleteTask,
    filterType,
    setFilterType,
    expenseCat,
    setExpenseCat,
    filteredTask,
  };
};

export default useTransaction;
