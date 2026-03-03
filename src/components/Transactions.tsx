import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import type { UseTransactionReturn } from "../types/Transaction";

const Transactions = ({
  deleteTask,
  filterType,
  setFilterType,
  setExpenseCat,
  filteredTask,
}: UseTransactionReturn) => {
  return (
    <div className="flex flex-col gap-5 flex-1 p-10 px-20">
      <h1 className="font-semibold text-2xl">Latest Transactions</h1>
      <select
        className="border border-gray-400 outline-0 rounded p-1"
        onChange={(e) => {
          const value = e.target.value as "latest" | "income" | "expense";
          setFilterType(value);
          if (value !== "expense") {
            setExpenseCat("");
          }
        }}
      >
        <option value="latest">Latest</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {filterType === "expense" && (
        <select
          className="border border-gray-400 outline-0 rounded p-1"
          onChange={(e) =>
            setExpenseCat(
              e.target.value as
                | "Products"
                | "Entertainment"
                | "Bills"
                | "Other",
            )
          }
        >
          <option value="All">All Expense</option>
          <option value="Products">Products</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      )}

      <ul className="flex flex-col gap-5 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        {filteredTask.map((item) => (
          <li
            className="border border-gray-300 rounded-md p-4 shadow-lg flex gap-3 w-full"
            key={item.id}
          >
            <div
              className={
                item.type === "income"
                  ? "bg-green-200 flex p-2 self-center rounded"
                  : "bg-red-200 flex p-2 self-center rounded"
              }
            >
              {item.type === "income" ? (
                <MdArrowUpward className="text-2xl text-green-400" />
              ) : (
                <MdArrowDownward className="text-2xl text-red-400" />
              )}
            </div>
            <div>
              <p
                className={
                  item.type === "income" ? "text-green-500" : "text-red-400"
                }
              >
                {item.amount}
              </p>
              <p>{item.cat}</p>
              <p className="text-gray-400">{item.date}</p>
            </div>
            <button
              className="bg-red-400 hover:bg-red-500 hover:transition-all hover:duration-300 hover:ease-in-out rounded text-white ml-auto p-2 h-10 self-center cursor-pointer"
              onClick={() => deleteTask(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
