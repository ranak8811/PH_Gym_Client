import React from "react";
import { FaTrash } from "react-icons/fa";
import { LuFileSignature } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";

const CofferCard = ({ data }) => {
  const { id } = useParams();
  console.log(data);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#F4F3F0] via-[#E8E6E1] to-[#DAD7D2] p-6">
        <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Card visual"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel arcu quis lacus feugiat volutpat.
            </p>
            <div className="text-right ">
              <Link to={`/update/1`}>
                <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 ml-4">
                  <LuFileSignature />
                </button>
              </Link>
              <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 ml-4">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofferCard;
