import React from "react";

function Catagory({ data }) {
  return (
    <>
      <div className="cursor-pointer bg-white p-3 rounded">
        <h1>{data.catagory}</h1>
        <img src={data.image} alt="" className="w-[200px] h-[150px]" />
        <h1>
          <a href="#" className="text-blue-500 text-xs">
            show now
          </a>
        </h1>
      </div>
    </>
  );
}

export default Catagory;
