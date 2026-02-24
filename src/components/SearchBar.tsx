import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-1">
        <CiSearch className="text-xl text-gray-400"/>
        <input type="text" className='border-b border-gray-400 outline-0' placeholder='Search'/>
    </div>
  )
}

export default SearchBar