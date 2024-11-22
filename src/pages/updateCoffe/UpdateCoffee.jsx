import { useParams } from "react-router-dom";

const UpdateCoffee = () => {
  const { id } = useParams();
  const handleCoffeeUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] lg:p-24">
      <h2 className="text-3xl text-center font-bold">Update Coffee page</h2>
      <form onSubmit={handleCoffeeUpdate}>
        <div className="flex gap-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              //   defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:w-1/2 mt-6 md:mt-0">
            <label className="label font-bold">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              //   defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              //   defaultValue={supplier}
              placeholder="Enter coffee Supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:w-1/2 mt-6 md:mt-0">
            <label className="label font-bold">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              //   defaultValue={taste}
              placeholder="Enter coffee Taste"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              //   defaultValue={category}
              placeholder="Enter coffee Category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:w-1/2 mt-6 md:mt-0">
            <label className="label font-bold">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              //   defaultValue={details}
              placeholder="Enter coffee Details"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              //   defaultValue={photo}
              placeholder="Enter photo url"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* End of Labels */}
        <input
          type="submit"
          value="Update Coffee"
          className="btn w-full bg-pink-500 text-white mt-6"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
