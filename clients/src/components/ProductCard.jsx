import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  const { id, title, price, category, image, rating } = data;
  const navigate = useNavigate();
  return (
    <>
      <div
        key={id}
        className="group flex flex-col items-center justify-center  bg-white shadow-xl hover:scale-105 transition-transform p-5 relative"
      >
        <div className="h-50" onClick={() => navigate(`/productdetails/${id}`)}>
          <img src={image} alt="" className="w-37.5 h-50" />
        </div>
        <p className="text-sm font-medium line-clamp-2 mb-2">{title}</p>
        <div className="flex">
          {" "}
          {/* rating */}
          <Stack spacing={1}>
            <Rating defaultValue={rating.rate} precision={0.5} />
          </Stack>
          <small>{rating.count}</small>
        </div>
        <p className="text-lg font-bold">${price}</p>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 w-full bg-yellow-400 py-1 rounded-xl font-bold">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
