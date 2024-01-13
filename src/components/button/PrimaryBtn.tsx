import { ReactNode } from "react";

const PrimaryBtn = ({
  children,
  color,
  style,
}: {
  children: ReactNode;
  color?: boolean;
  style?: string;
}) => {
  const bgColor = color
    ? "bg-[#391E5A] text-[#fff]"
    : "bg-[#EBE8EF] text-[#333]";
  return (
    <button className={`rounded-[4px] p-[8px] text-[12px] font-semibold ${bgColor} ${style}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
