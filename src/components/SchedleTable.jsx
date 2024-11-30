import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ScheduleTable = ({ idx, data, allScheduleData, setScheduleData }) => {
  const { _id, title, day, formatHour, formattedDate, isCompleted } = data;

  const handleDelete = (id) => {
    fetch(`http://localhost:8800/schedule/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          const newData = allScheduleData.filter(
            (filterData) => filterData._id != id
          );

          setScheduleData(newData);
          Swal.fire("delete success");
        }
      });
  };

  const handleUpdateStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:8800/status/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedData = allScheduleData.map((scheduleData) =>
          scheduleData._id === id
            ? { ...scheduleData, isCompleted: true }
            : scheduleData
        );

        setScheduleData(updatedData);

        Swal.fire("task complete");
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{day}</td>
        <td>{formatHour}</td>
        <td>{formattedDate}</td>
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
