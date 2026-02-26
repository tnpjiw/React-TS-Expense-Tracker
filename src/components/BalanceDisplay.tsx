import AddTransaction from "./AddTransaction"

const BalanceDisplay = () => {
  return (
    <div className="flex flex-col items-center mt-5 flex-1 gap-5">
        <div className="text-center bg-blue-400 rounded-lg p-5 space-y-3 ">
            <h1 className="text-xl font-bold text-white">Total Balance</h1>
            <p className="font-bold text-xl text-white">0 $</p>
        </div>
        <div className="flex justify-between gap-10 mt-5 max-w-md w-full">
            <div className="text-center = bg-green-400 rounded-lg p-2 px-5 space-y-2 text-white">
                <h1 className="text-xl font-semibold">Income</h1>
                <p className="font-bold text-xl">0 $</p>
            </div>
            <div className="text-center border border-red-400 rounded-lg p-2 px-5 space-y-2">
                <h1 className="text-xl font-semibold text-red-400">Expense</h1>
                <p className="font-bold text-xl text-red-400">0 $</p>
            </div>
        </div>
        <AddTransaction />
    </div>
  )
}

export default BalanceDisplay