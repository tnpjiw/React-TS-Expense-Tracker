import type { UseTransactionReturn } from "../types/Transaction";

const AddTransaction = ({
  amount,
  setAmount,
  date,
  setDate,
  type,
  setType,
  cat,
  setCat,
  submitForm,
}: UseTransactionReturn) => {
  return (
    <div className="flex flex-col items-center w-md">
      <h1 className="self-start">Transaction</h1>
      <form
        action=""
        className="w-full mt-1 flex flex-col gap-2"
        onSubmit={submitForm}
      >
        <input
          type="number"
          value={amount}
          className="border border-gray-400 rounded outline-0 px-2"
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex gap-2 w-full">
          <input
            type="date"
            value={date}
            className="border border-gray-400 rounded  outline-0 flex-1"
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            value={type}
            className="border border-gray-400 rounded outline-0 flex-1"
            onChange={(e) => setType(e.target.value as "income" | "expense")}
          >
            <option value="">Select</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            value={cat}
            className="border border-gray-400 rounded outline-0 flex-1"
            onChange={(e) =>
              setCat(
                e.target.value as
                  | "Products"
                  | "Entertainment"
                  | "Bills"
                  | "Salary"
                  | "Other",
              )
            }
          >
            <option value="">Select</option>
            {type === "income" && (
              <>
                <option value="Salary">Salary</option>
                <option value="Other">Other</option>
              </>
            )}

            {type === "expense" && (
              <>
                <option value="Products">Products</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </>
            )}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out text-white rounded p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
