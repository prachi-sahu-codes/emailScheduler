import { useAppSelector } from "../../app/hooks";
import { PrimaryBtn, SearchBar, TableProvider } from "../../components";
import { MdAddCircleOutline } from "react-icons/md";

const Home = () => {
  const { allEmails } = useAppSelector((state) => state.email);

  return (
    <div className="w-screen h-screen pt-[48px] bg-[#F3F3F9] flex">
      <div className="w-[72px] h-full bg-[#391E5A]"></div>
      <div className="w-full">
        <div className="w-full h-[40px] bg-[#D8D2DE]"></div>
        <div className="py-[20px] px-[24px]">
          <div className="flex items-center justify-between pb-[31px]">
            <SearchBar />
            <PrimaryBtn color style="flex gap-[8px]">
              <MdAddCircleOutline className="text-[16px]"/>
              <p>Add</p>
            </PrimaryBtn>
          </div>
          <TableProvider data={allEmails} />
        </div>
      </div>
    </div>
  );
};

export default Home;
