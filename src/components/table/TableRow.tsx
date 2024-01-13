import { Email } from "../../types/types";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ScheduleFormModal } from "..";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteScheduleAsync } from "../../features/email/action";

const TableRow = ({ schedule }: { schedule: Email }) => {
  const { title, description, subject, frequency, repeat, time } = schedule;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(false);
  };

  const rowStyle = "px-[24px] py-[11px]";
  const scheduleFreq =
    frequency === "Daily"
      ? `Daily at ${time}`
      : frequency === "Monthly"
      ? `Monthly on ${repeat[0]} at ${time}`
      : `Weekly on ${repeat.join(", ")} at ${time}`;

  return (
    <tr className="min-w-[695px] bg-[#fff] text-[14px] border border-[#F3F3F9] cursor-pointer hover:bg-[#fbfbff] active:bg-[#fff]">
      <td className={`${rowStyle}`}>{title}</td>
      <td className={`${rowStyle} h-[55px] line-clamp-2`}>{description}</td>
      <td className={`${rowStyle}`}>{subject}</td>
      <td className={`${rowStyle}`}>{scheduleFreq}</td>
      <td className={`${rowStyle} flex gap-4 text-[16px]`}>
        <div title="Edit" onClick={handleOpen}>
          <MdModeEdit />
        </div>
        <div
          title="Delete"
          onClick={() => dispatch(deleteScheduleAsync(schedule?._id))}
        >
          <RiDeleteBin6Line />
        </div>
      </td>
      {open && (
        <ScheduleFormModal
          open={open}
          handleClose={handleClose}
          schedule={schedule}
        />
      )}
    </tr>
  );
};

export default TableRow;
