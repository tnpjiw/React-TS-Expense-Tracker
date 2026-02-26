
import TransactionList from './TransactionList';

const Transactions = () => {
  return (
      <div className="flex flex-col gap-5 flex-1 p-10 px-20">
        <h1 className="font-semibold text-2xl">Latest Transactions</h1>
        <select name="" id="" className='border border-gray-400 outline-0 rounded p-1'>
            <option value="">Latest</option>
            <option value="">Products</option>
            <option value="">Entertainment</option>
            <option value="">Bills</option>
            <option value="">Other</option>
        </select>
        <ul className="flex flex-col gap-10">
          <TransactionList />
        </ul>
      </div>
  );
};

export default Transactions;
