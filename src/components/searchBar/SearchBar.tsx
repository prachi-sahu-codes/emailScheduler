import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-[300px] h-[38px] bg-white rounded-[4px] flex">
      <input type="text" className="w-full text-[13px] rounded-[4px] px-[11px] outline-none" placeholder="Search"/>
      <div className="text-[20px] px-[8.26px] py-[9.53px]">
      <IoSearchSharp />
      </div>
    </div>
  )
}

export default SearchBar
