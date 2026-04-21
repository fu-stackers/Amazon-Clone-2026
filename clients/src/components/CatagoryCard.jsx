import React from "react";
import { useNavigate } from "react-router-dom";
function CatagoryCard({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer bg-white p-3 rounded transition-all duration-300 ease-out hover:scale-105"
        onClick={() => navigate(`/category${data.link}`)}
      >
        <h1>{data.catagory}</h1>
        <img src={data.image} alt="" className="object-contain h-62.5" />
        <h1>
          <a href="#" className="text-blue-500 text-xs">
            show now
          </a>
        </h1>
      </div>
    </>
  );
}

export default CatagoryCard;
