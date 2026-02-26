import { MdProductionQuantityLimits } from "react-icons/md";

const TransactionList = () => {
  return (
    <li className="border border-gray-300 rounded-md p-4 shadow-lg flex gap-3">
            <div className="bg-orange-200 flex p-2 self-center rounded">
                <MdProductionQuantityLimits className="text-2xl text-orange-400"/>
            </div>
            <div>
              <p className="font-semibold">Test</p>
              <p className="font-semibold">Products</p>
              <p className="text-gray-400">Date</p>
            </div>
          </li>
  )
}

export default TransactionList