import { useEffect } from "react";
import { ModalProvider, PrimaryBtn } from "../..";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteScheduleAsync,
  getScheduleDetailAsync,
} from "../../../features/email/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 350,
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

const DetailScheduleModal = ({
  open,
  handleClose,
  id,
  editModalOpen,
}: {
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
  editModalOpen: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { detailSchedule } = useAppSelector((state) => state.email);

  useEffect(() => {
    dispatch(getScheduleDetailAsync(id));
  }, [id]);
  const scheduleFreq =
    detailSchedule[0]?.frequency === "Daily"
      ? `Daily at ${detailSchedule[0]?.time}`
      : detailSchedule[0]?.frequency === "Monthly"
      ? `Monthly on ${detailSchedule[0]?.repeat[0]} at ${detailSchedule[0]?.time}`
      : `Weekly on ${detailSchedule[0]?.repeat.join(", ")} at ${
          detailSchedule[0]?.time
        }`;
  const deleteHandler = (e: any) => {
    dispatch(deleteScheduleAsync(id));
    handleClose(e);
  };
  const editHandler = (e: any) => {
    handleClose(e);
    editModalOpen();
  };
  return (
    <ModalProvider open={open} handleClose={handleClose} style={style}>
      <h3 className="pb-[10px] text-[17px] font-bold">
        {detailSchedule[0]?.title}
      </h3>
      <p className="text-[13px] text-semibold">
        Subject: {detailSchedule[0]?.subject}
      </p>
      <p className="text-[13px] py-[8px] text-gray-500">
        {detailSchedule[0]?.description}
      </p>
      <p className="italic text-[14px] pb-[12px]">{scheduleFreq}</p>

      <div className="flex gap-[16px] justify-end">
        <PrimaryBtn style="w-[88px]" clickHandler={deleteHandler}>
          Delete
        </PrimaryBtn>
        <PrimaryBtn color style="w-[88px]" clickHandler={editHandler}>
          Edit
        </PrimaryBtn>
      </div>
    </ModalProvider>
  );
};

export default DetailScheduleModal;
