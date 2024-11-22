import { useEffect, useState } from "react";
import UserTable from "../../components/UserTable";

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="w-1/2 mx-auto bg-slate-50">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>CrateAt</th>
              <th>LastSignIn</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserTable data={user}></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
