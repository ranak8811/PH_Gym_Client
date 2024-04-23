import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://coffee-store-server-lovat-kappa.vercel.app/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const  remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            })
    }

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
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
                                    <td>{user.lastSign}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn">X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;