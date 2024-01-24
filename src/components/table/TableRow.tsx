import { Email } from "../../types/types";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DetailScheduleModal, ScheduleFormModal } from "..";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteScheduleAsync } from "../../features/email/action";
import { emptyDetailSchedule } from "../../features/email/emailSlice";

const TableRow = ({ schedule }: { schedule: Email }) => {
  const { title, description, subject, frequency, repeat, time } = schedule;
  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.email);

  const handleOpen = (e: any) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleDetailOpen = (e: any) => {
    e.stopPropagation();
    if (status === "success") setDetailOpen(true);
  };

  const handleDetailClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(emptyDetailSchedule());
    setDetailOpen(false);
  };

  const rowStyle = "px-[24px] py-[11px]";

  const scheduleFreq =
    frequency === "Daily"
      ? `Daily at ${time}`
      : frequency === "Monthly"
      ? `Monthly on ${repeat[0]} at ${time}`
      : `Weekly on ${repeat.join(", ")} at ${time}`;

  return (
    <tr
      className="min-w-[695px] bg-[#fff] text-[14px] border border-[#F3F3F9] hover:bg-[#fbfbff] active:bg-[#fff]"
      onClick={(e) => handleDetailOpen(e)}
    >
      <td className={`${rowStyle} cursor-pointer`}>{title}</td>
      <td className={`${rowStyle} cursor-pointer`}>
        <div className="h-[45px] flex items-center">
          <p className="line-clamp-2">{description}</p>
        </div>
      </td>
      <td className={`${rowStyle} cursor-pointer`}>{subject}</td>
      <td className={`${rowStyle} cursor-pointer`}>{scheduleFreq}</td>
      <td
        className={`${rowStyle} text-[16px]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <div title="Edit" onClick={handleOpen} className="cursor-pointer">
            <MdModeEdit />
          </div>
          <div
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteScheduleAsync(schedule?._id));
            }}
          >
            <RiDeleteBin6Line />
          </div>
        </div>
        {open && (
          <ScheduleFormModal
            open={open}
            handleClose={handleClose}
            schedule={schedule}
          />
        )}
      </td>

      {detailOpen && (
        <DetailScheduleModal
          open={detailOpen}
          handleClose={handleDetailClose}
          id={schedule?._id}
          editModalOpen={handleOpen}
        />
      )}
    </tr>
  );
};

export default TableRow;
