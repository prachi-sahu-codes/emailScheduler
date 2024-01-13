import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed bg-gray-700 bg-opacity-50 z-10 top-0 left-0 bottom-0 right-0">
      <div className="absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Oval
          height={80}
          width={80}
          color="#391E5A"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#391E5A"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
};

export default Loader;
