import { useAppSelector } from "../../app/hooks";

const Home = () => {
  const { allEmails } = useAppSelector((state) => state.email);
  console.log(allEmails);
  return (
    <div className="w-screen h-screen pt-[48px] bg-[#F3F3F9] flex">
      <div className="w-[72px] h-full bg-[#391E5A]"></div>
      <div className="w-full">
        <div className="w-full h-[40px] bg-[#D8D2DE]"></div>
        <div className="py-[20px] px-[24px]"></div>
      </div>
    </div>
  );
};

export default Home;
