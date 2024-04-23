import Swal from 'sweetalert2'


const AddCoffee = () => {



    const handleCoffeeAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addNewCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(addNewCoffee);
        fetch('https://coffee-store-server-lovat-kappa.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewCoffee)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'New coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                }
        })
    }

    return (
        <div className="bg-[#F4F3F0] lg:p-24">
            <h2 className="text-3xl text-center font-bold">Add Coffee page</h2>
            <form onSubmit={handleCoffeeAdd}>
                <div className="flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Enter coffee Supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Enter coffee Taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Enter coffee Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Enter coffee Details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-6 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered" required />
                    </div>
                </div>
                {/* End of Labels */}
                <input type="submit" value="Add Coffee" className="btn w-full bg-[#D2B48C] hover:bg-[#f6a73f] mt-6" />
            </form>
        </div>
    );
};

export default AddCoffee;