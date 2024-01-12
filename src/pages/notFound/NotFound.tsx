import notfound from "../../assets/notfond.svg";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen bg-[#F3F3F9]">
      <div className="absolute flex flex-col items-center top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 text-center">
        <img
          src={notfound}
          alt="Not found"
          className="w-52 sm:w-96 m-auto mb-8"
        />
        <h1 className="w-60 sm:w-full font-semibold text-lg sm:text-xl p-2 text-gray-700">
          Looks like something is missing!!
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-3">
          Go back to home page
        </p>

        <button
          className="bg-[#391E5A] p-4 py-1 flex gap-1 text-sm items-center justify-center shadow-sm hover:shadow-lg active:shadow-inset rounded text-[#F3F3F9] hover:text-white font-medium"
          onClick={clickHandler}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
