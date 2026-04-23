import React, { useState, useEffect } from "react";
import { img } from "../assets/img/data";
import Collect from "./Catagory";
import Catagory from "./Catagory";
const Banner = () => {
  const [index, setindex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % img.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [img.length]);
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-137"
        style={{
          backgroundImage: `url(${img[index]})`,
        }}
      >
        <div className="">
          <Catagory />
        </div>
      </div>
    </>
  );
};

export default Banner;
