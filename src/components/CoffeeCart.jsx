import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, category, photo } = coffee;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-lovat-kappa.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof =>  cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="w-1/2 ">
                <figure><img src={photo} alt="Movie" className="w-full h-[200px] object-cover" /></figure>
            </div>
            <div className=" flex justify-around items-center w-full">
                <div className="space-y-4">
                    <p className="text-lg font-serif">{name}</p>
                    <p className="text-lg font-serif">{category}</p>
                    <p className="text-lg font-serif">{chef}</p>
                </div>
                <div className="join join-vertical space-y-3">
                    <button className="btn">View</button>
                    <Link to={`/update/${_id}`}><button className="btn">Edit</button></Link>
                    <button
                        onClick={() => { handleDelete(_id) }}
                        className="btn bg-orange-500">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;