import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ScheduleTable from "../../components/SchedleTable";

const Schedule = () => {
  const scheduleData = useLoaderData();
  const [allScheduleData, setScheduleData] = useState(scheduleData);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8800/schedule?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setScheduleData(data);
      });
  }, [search]);

  return (
    <>
      <div className="w-[400px] mx-auto mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="w-1/2 mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Title</th>
                <th>Day</th>
                <th>Date</th>
                <th>Time</th>
                <th>Auction</th>
              </tr>
            </thead>
            <tbody>
              {allScheduleData?.length == 0 ? (
                <h1>No data found</h1>
              ) : (
                allScheduleData?.map((user, index) => (
                  <ScheduleTable
                    key={user._id}
                    data={user}
                    idx={index}
                    allScheduleData={allScheduleData}
                    setScheduleData={setScheduleData}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schedule;
