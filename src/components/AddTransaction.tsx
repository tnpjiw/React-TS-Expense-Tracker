const AddTransaction = () => {
  return (
    <div className="flex flex-col items-center w-md">
      <h1 className="self-start">Transaction</h1>
      <form
        action=""
        className="w-full mt-1 flex flex-col gap-2"
      >
        <input
          type="number"
          className="border border-gray-400 rounded outline-0 px-2"
        />

        <div className="flex gap-2 w-full">
          <input
            type="date"
            className="border border-gray-400 rounded  outline-0 flex-1"
          />

           <select
            name=""
            id=""
            className="border border-gray-400 rounded outline-0 flex-1"
          >
            <option value="">Income</option>
            <option value="">Expense</option>
          </select>

          <select
            name=""
            id=""
            className="border border-gray-400 rounded outline-0 flex-1"
          >
            <option value="">Select</option>
            <option value="">Products</option>
            <option value="">Entertainment</option>
            <option value="">Bills</option>
            <option value="">Other</option>
          </select>

        </div>
        <button className="w-full bg-blue-400 text-white rounded p-2">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
