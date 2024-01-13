import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useDebounce from "../../hooks/useDebounce";
import { IoSearchSharp } from "react-icons/io5";
import { searchScheduleAsync } from "../../features/email/action";
import { searchTermUpdate } from "../../features/email/emailSlice";

const SearchBar = () => {
  const { searchValue } = useAppSelector((state) => state.email);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(searchValue);

  const changeHandler = (searchTerm: string) => {
    setSearchTerm(() => searchTerm);
    dispatch(searchTermUpdate(searchTerm));
  };
  const debouncedValue = useDebounce(
    () => dispatch(searchScheduleAsync(searchTerm)),
    searchTerm,
    300
  );

  return (
    <div className="w-[300px] h-[38px] bg-white rounded-[4px] flex">
      <input
        type="text"
        className="w-full text-[13px] rounded-[4px] px-[11px] outline-none"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <div className="text-[20px] px-[8.26px] py-[9.53px]">
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default SearchBar;
