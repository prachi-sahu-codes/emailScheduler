import { MdAddCircleOutline } from "react-icons/md";
import { PrimaryBtn, ScheduleFormModal, SearchBar } from "..";
import { useState } from "react";

const ActionBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between pb-[31px]">
      <SearchBar />
      <PrimaryBtn
        color
        style="flex gap-[8px]"
        clickHandler={handleOpen}
      >
        <MdAddCircleOutline className="text-[16px]" />
        <p>Add</p>
      </PrimaryBtn>
      {open && <ScheduleFormModal open={open} handleClose={handleClose} />}
    </div>
  );
};

export default ActionBar;
