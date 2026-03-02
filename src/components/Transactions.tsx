import useTransaction from "../hooks/useTransaction";
import type { Tran } from "../types/Transaction";
import { MdProductionQuantityLimits } from "react-icons/md";

interface TransactionsProps {
  task: Tran[];
}

const Transactions = ({task}:TransactionsProps) => {
  return (
    <div className="flex flex-col gap-5 flex-1 p-10 px-20">
      <h1 className="font-semibold text-2xl">Latest Transactions</h1>
      <select
        className="border border-gray-400 outline-0 rounded p-1"
      >
        <option value="latest">Latest</option>
        <option value="products">Products</option>
        <option value="entertainment">Entertainment</option>
        <option value="bills">Bills</option>
        <option value="other">Other</option>
      </select>
      <ul className="flex flex-col gap-10">
        {task.map((item) => (
          <li className="border border-gray-300 rounded-md p-4 shadow-lg flex gap-3 w-full" key={item.id}>
            <div className="bg-orange-200 flex p-2 self-center rounded">
              <MdProductionQuantityLimits className="text-2xl text-orange-400" />
            </div>
            <div>
              <p className={item.type === 'income' ? "text-green-500" : "text-red-400"}>{item.amount}</p>
              <p className="font-semibold">{item.cat}</p>
              <p className="text-gray-400">{item.date.toLocaleDateString()}</p>
            </div>
            <button className="bg-red-400 hover:bg-red-500 rounded text-white ml-auto p-2 h-10 self-center cursor-pointer">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
