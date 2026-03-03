import { MdArrowDownward, MdArrowUpward } from "react-icons/md"
import type { UseTransactionReturn } from "../types/Transaction";



const Transactions = ({task,deleteTask}:UseTransactionReturn) => {
  return (
    <div className="flex flex-col gap-5 flex-1 p-10 px-20">
      <h1 className="font-semibold text-2xl">Latest Transactions</h1>
      <select
        className="border border-gray-400 outline-0 rounded p-1"
      >
        <option value="latest">Latest</option>
        <option value="salary">Salary</option>
        <option value="products">Products</option>
        <option value="entertainment">Entertainment</option>
        <option value="bills">Bills</option>
        <option value="other">Other</option>
      </select>
      <ul className="flex flex-col gap-5">
        {task.map((item) => (
          <li className="border border-gray-300 rounded-md p-4 shadow-lg flex gap-3 w-full" key={item.id}>
            <div className={item.type === 'income' ? "bg-green-200 flex p-2 self-center rounded" : "bg-red-200 flex p-2 self-center rounded"}>
              {item.type === "income" ? <MdArrowUpward className="text-2xl text-green-400" /> : <MdArrowDownward className="text-2xl text-red-400" />}
            </div>
            <div>
              <p className={item.type === 'income' ? "text-green-500" : "text-red-400"}>{item.amount}</p>
              <p className="font-semibold">{item.cat}</p>
              <p className="text-gray-400">{item.date}</p>
            </div>
            <button className="bg-red-400 hover:bg-red-500 hover:transition-all hover:duration-300 hover:ease-in-out rounded text-white ml-auto p-2 h-10 self-center cursor-pointer" onClick={()=>deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
