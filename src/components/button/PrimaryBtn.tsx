import { ReactNode, MouseEvent } from "react";

const PrimaryBtn = ({
  children,
  color,
  style,
  clickHandler,
}: {
  children: ReactNode;
  color?: boolean;
  style?: string;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const bgColor = color
    ? "bg-[#391E5A] text-[#fff] hover:border-[#000]"
    : "bg-[#EBE8EF] text-[#333] hover:border-[#dadada]";
  return (
    <button
      className={`rounded-[4px] p-[8px] text-[12px] font-semibold border ${bgColor} ${style}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
