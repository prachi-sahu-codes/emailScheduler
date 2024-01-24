import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ActionBar, PrimaryBtn, TableProvider } from "../../components";
import { searchTermUpdate } from "../../features/email/emailSlice";

const Home = () => {
  const { allEmails, searchResults, searchValue, status } = useAppSelector(
    (state) => state.email
  );
  const dispatch = useAppDispatch();

  let arrList = searchValue.length > 0 ? searchResults : allEmails;

  const clickHandler = () => {
    dispatch(searchTermUpdate(""));
  };

  return (
    <div className="w-screen h-screen pt-[48px] bg-[#F3F3F9] flex">
      <div className="w-[72px] h-full bg-[#391E5A]"></div>
      <div className="w-full">
        <div className="w-full h-[40px] bg-[#D8D2DE]"></div>
        <div className={`py-[20px] px-[24px]`}>
          <ActionBar />
          {arrList.length > 0 ? (
            <TableProvider data={arrList} />
          ) : (
            <div>
              {status !== "loading" && (
                <div>
                  {allEmails.length > 0 ? (
                    <div className="flex items-center gap-4">
                      <PrimaryBtn style="px-4" clickHandler={clickHandler}>
                        Clear Filter
                      </PrimaryBtn>
                      <p>No schedules found!</p>
                    </div>
                  ) : (
                    <div>
                      <p>No schedules found!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
