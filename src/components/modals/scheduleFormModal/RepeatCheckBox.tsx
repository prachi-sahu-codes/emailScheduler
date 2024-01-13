interface RepeatCheckBoxInterface {
  id: number;
  day: string;
  value: string;
}

const RepeatCheckBox = ({
  obj,
  repeat,
  setFormData,
}: {
  obj: RepeatCheckBoxInterface;
  repeat: string[];
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      subject: string;
      frequency: string;
      repeat: string[];
      time: string;
    }>
  >;
}) => {
  const ifExistArr = repeat.includes(obj.value);
  const bgColor = ifExistArr
    ? "bg-[#391E5A] text-[#fff]"
    : "bg-[#fff] text-[#000]";

  const selectHandler = () => {
    const value = obj.value;

    if (ifExistArr) {
      const removeValue = repeat.filter((day) => day !== value);
      setFormData((prev) => ({ ...prev, repeat: removeValue }));
    } else {
      setFormData((prev) => ({ ...prev, repeat: [...prev.repeat, value] }));
    }
  };

  return (
    <li
      className={`${bgColor} w-6 h-6 flex items-center justify-center border border-[#EBE8EF] rounded-full text-[14px] cursor-pointer hover:border-[#333]`}
      onClick={() => selectHandler()}
    >
      {obj.day}
    </li>
  );
};

export default RepeatCheckBox;
