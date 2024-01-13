import { useAppSelector } from "../../app/hooks";
import { SearchBar, TableProvider } from "../../components";
import { Email } from "../../types/types";

const Home = () => {
  const { allEmails } = useAppSelector((state) => state.email);

  return (
    <div className="w-screen h-screen pt-[48px] bg-[#F3F3F9] flex">
      <div className="w-[72px] h-full bg-[#391E5A]"></div>
      <div className="w-full">
        <div className="w-full h-[40px] bg-[#D8D2DE]"></div>
        <div className="py-[20px] px-[24px]">
          <div className="pb-[31px]">
          <SearchBar />
          </div>
          <TableProvider data={allEmails} />
        </div>
      </div>
    </div>
  );
};

export default Home;
