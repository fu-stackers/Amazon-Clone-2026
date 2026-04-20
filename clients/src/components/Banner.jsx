import React, { useState, useEffect } from "react";
import { img } from "../assets/img/data";
import Collect from "./Collect";
const Banner = () => {
  const [index, setindex] = useState(0);
  useEffect(() => {
    // 1. Start the Timer
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % img.length);
    }, 10000); // 4000ms = 4 seconds

    // 2. The Cleanup (CRITICAL)
    return () => clearInterval(interval);
  }, [img.length]);
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-[550px]"
        style={{
          backgroundImage: `url(${img[index]})`,
        }}
      >
        <div className="">
          <Collect />
        </div>
      </div>
    </>
  );
};

export default Banner;
