import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Productdetail = () => {
  const { id } = useParams();
  console.log(id);
  const [singleproduct, setsingleproduct] = useState(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        console.log("dfghjk");
        console.log(res.data);
        setsingleproduct(res.data);
        console.log(singleproduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      key={singleproduct?.id}
      className="group flex gap-2.5  justify-between  bg-white shadow-xl  p-8 relative my-10 mx-15 h-125 "
    >
      <div className="pl-10">
        <img
          src={singleproduct?.image}
          alt="product-details"
          className="object-contain h-110 hover:scale-110 transition-transform duration-500 cursor-pointer"
        />
      </div>
      <div className="flex flex-col my-auto">
        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-gray-500 shadow-sm">
          {singleproduct?.category}
        </span>
        <h3 className="text-gray-900 font-bold text-2xl line-clamp-1 mb-1">
          {singleproduct?.title}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed italic">
          {singleproduct?.description}
        </p>
        <div className="flex items-center">
          {" "}
          {/* rating */}
          <Stack spacing={1}>
            <Rating defaultValue={singleproduct?.rating.rate} precision={0.5} />
          </Stack>
          <small>{singleproduct?.rating.count}</small>
        </div>
        <p className="text-lg font-bold">${singleproduct?.price}</p>
        <div className="items-center flex flex-col">
          <button className="opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300 mt-3 w-120 hover:bg-[#e6af68] bg-yellow-400 px-30% rounded-xl font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
