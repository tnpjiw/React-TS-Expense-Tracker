

const BalanceDisplay = () => {
  return (
    <div className="flex flex-col items-center mt-5">
        <div className="text-center border border-gray-400 rounded p-5 space-y-3">
            <h1 className="text-xl font-bold">Total Balance</h1>
            <p className="font-bold text-xl">0 $</p>
        </div>
        <div className="flex justify-between gap-10 mt-5 max-w-md w-full">
            <div className="text-center border border-gray-400 rounded p-2 px-5 space-y-2">
                <h1 className="text-xl font-semibold">Income</h1>
                <p className="font-bold text-xl">0 $</p>
            </div>
            <div className="text-center border border-gray-400 rounded p-2 px-5 space-y-2">
                <h1 className="text-xl font-semibold">Expense</h1>
                <p className="font-bold text-xl">0 $</p>
            </div>
        </div>
    </div>
  )
}

export default BalanceDisplay