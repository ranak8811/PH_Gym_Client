import React, { useEffect, useState } from "react";
import CofferCard from "../../components/CofferCard";

const AllCoffee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="grid grid-cols-3">
      {data.map((d) => (
        <CofferCard data={d}></CofferCard>
      ))}
    </div>
  );
};

export default AllCoffee;
