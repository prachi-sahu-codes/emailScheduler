import { Email } from "../../types/types";
import TableRow from "./TableRow";

const TableProvider = ({ data }: { data: Email[] }) => {
  return (
    <div className="calcHeight overflow-y-auto">
     {data.length > 0 && <table id="schedules" className="text-left">
      <tr className="h-[42px] bg-[#e1dee9] text-[14px] text-[#333]">
        <th className="px-[24px]">Title</th>
        <th className="px-[24px]">Description</th>
        <th className="px-[24px]">Subject</th>
        <th className="px-[24px]">Schedule</th>
        <th className="px-[24px]">Actions</th>
      </tr>

      {data.map((schedule: Email) => (
        <TableRow schedule={schedule} key={schedule._id} />
      ))}
    </table>}
    </div>
  );
};

export default TableProvider;
