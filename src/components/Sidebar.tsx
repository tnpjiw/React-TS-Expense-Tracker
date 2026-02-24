import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='h-screen w-48 flex flex-col p-5 gap-4'>
            <h1 className='text-xl font-semibold'>Expense Tracker</h1>
        <ul className="flex flex-col gap-4 p-4">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Transactions</Link>
            </li>
            <li>
                <Link to="/">Category</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar