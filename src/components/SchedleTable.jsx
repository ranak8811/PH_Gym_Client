import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";

const ScheduleTable = ({ schedule, idx, scheduleData, setScheduleData }) => {
  // console.log(schedule);

  const { _id, title, day, date, hour, isCompleted } = schedule;
  // console.log(_id);
  // const isCompleted = true;

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://gym-server-phi.vercel.app/schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingSchedule = scheduleData.filter(
          (schedule) => schedule._id !== id
        );
        setScheduleData(remainingSchedule);
      });
  };

  const handleUpdateStatus = (id) => {
    // console.log(id);
    fetch(`https://gym-server-phi.vercel.app/status/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newData = scheduleData.map((schedule) =>
          schedule._id === id ? { ...schedule, isCompleted: true } : schedule
        );

        setScheduleData(newData);
      });
  };
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{day}</td>
        <td>{date}</td>
        <td>{hour}</td>
        <td>
          <div className="flex gap-4">
            {" "}
            <button
              onClick={() => handleDelete(_id)}
              className="bg-pink-500 px-4 py-2 rounded text-white"
            >
              <FaTrash className=""></FaTrash>
            </button>
            <button className="bg-pink-500 px-4 py-2 rounded text-white">
              <Link to={`/update/${_id}`}>
                {" "}
                <FaFile />
              </Link>
            </button>
            <button
              onClick={() => handleUpdateStatus(_id)}
              className="bg-pink-500 px-4 py-2 rounded text-white"
            >
              {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ScheduleTable;
