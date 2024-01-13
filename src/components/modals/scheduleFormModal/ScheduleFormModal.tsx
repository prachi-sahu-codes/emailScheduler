import { useState } from "react";
import { toast } from "react-toastify";
import { ModalProvider, PrimaryBtn } from "../..";
import { Email } from "../../../types/types";
import { dayArr, timeArr } from "../../../utils/data";
import RepeatCheckBox from "./RepeatCheckBox";
import { useAppDispatch } from "../../../app/hooks";
import {
  addNewScheduleAsync,
  updateScheduleAsync,
} from "../../../features/email/action";

const style = {
  position: "absolute",
  top: "10%",
  right: "6%",
  width: 336,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

interface FormModalInterface {
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  schedule?: Email;
}

const ScheduleFormModal = ({
  open,
  handleClose,
  schedule,
}: FormModalInterface) => {
  const [formData, setFormData] = useState({
    title: schedule?.title ?? "",
    description: schedule?.description ?? "",
    subject: schedule?.subject ?? "",
    frequency: schedule?.frequency ?? "",
    repeat: schedule?.repeat ?? [],
    time: schedule?.time ?? "",
  });
  const dispatch = useAppDispatch();

  const titleStyle = "w-[72px] text-[13px] shrink-0";
  const inputStyle =
    "w-full px-[16px] py-[8px] text-[12px] border border-[#EBE8EF] rounded-[4px]";

  const cancelHandler = (e: any) => {
    e.preventDefault();
    handleClose(e);
    setFormData({
      title: "",
      description: "",
      subject: "",
      frequency: "",
      repeat: [],
      time: "",
    });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    const requiredFieldsFilled =
      formData.title !== "" &&
      formData.description !== "" &&
      formData.subject !== "" &&
      formData.frequency !== "" &&
      (formData.frequency !== "Weekly" || formData.repeat.length > 0) &&
      (formData.frequency !== "Monthly" || formData.repeat.length > 0) &&
      formData.time !== "";

    if (requiredFieldsFilled) {
      if (schedule) {
        dispatch(
          updateScheduleAsync({ id: schedule?._id, scheduleData: formData })
        );
      } else {
        dispatch(addNewScheduleAsync(formData));
      }
      handleClose(e);
    } else {
      toast.error("Please fill in all required fields!");
    }
  };

  return (
    <ModalProvider open={open} handleClose={handleClose} style={style}>
      <h3 className="pb-[10px] text-[16px] font-semibold">Add Schedule</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-[16px] mb-[12px]">
          <p className={`${titleStyle}`}>Title</p>
          <input
            type="text"
            className={`${inputStyle}`}
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>
        <div className="flex items-center gap-[16px] mb-[12px]">
          <p className={`${titleStyle}`}>Description</p>
          <textarea
            className={`${inputStyle}`}
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            required
          />
        </div>
        <div className="flex items-center gap-[16px] mb-[12px]">
          <p className={`${titleStyle}`}>Subject</p>
          <input
            type="text"
            className={`${inputStyle}`}
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
            }
            required
          />
        </div>
        <div className="flex items-center gap-[16px] mb-[12px]">
          <p className={`${titleStyle}`}>Frequency</p>
          <select
            className={`${inputStyle} cursor-pointer`}
            value={formData.frequency}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, frequency: e.target.value }))
            }
            required
          >
            <option value="" selected disabled>
              Select Frequency
            </option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        {formData?.frequency !== "Daily" && (
          <div>
            {formData?.frequency === "Weekly" ? (
              <div className="flex items-center gap-[16px] mb-[12px]">
                <p className={`${titleStyle}`}>Repeat</p>
                <ul className="flex gap-[8px]">
                  {dayArr.map((obj) => (
                    <div key={obj.id}>
                      <RepeatCheckBox
                        obj={obj}
                        repeat={formData.repeat}
                        setFormData={setFormData}
                      />
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-[16px] mb-[12px]">
                <p className={`${titleStyle}`}>Repeat</p>
                <select
                  className={`${inputStyle} cursor-pointer`}
                  value={formData?.repeat[0]}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      repeat: [e.target.value],
                    }))
                  }
                  required
                >
                  <option value="" selected disabled>
                    Select Day
                  </option>
                  <option value="First Monday">First Monday</option>
                  <option value="Last Friday">Last Friday</option>
                </select>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-[16px] mb-[12px]">
          <p className={`${titleStyle}`}>Time</p>
          <select
            className={`${inputStyle} cursor-pointer`}
            value={formData.time}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, time: e.target.value }))
            }
            required
          >
            <option value="" selected disabled>
              Select Time
            </option>
            {timeArr.map(({ id, time }) => (
              <option key={id}>{time}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-[16px] justify-end">
          <PrimaryBtn style="w-[88px]" clickHandler={cancelHandler}>
            Cancel
          </PrimaryBtn>
          <PrimaryBtn color style="w-[88px]" clickHandler={submitHandler}>
            Done
          </PrimaryBtn>
        </div>
      </form>
    </ModalProvider>
  );
};

export default ScheduleFormModal;
