import React from "react";
import CatagoryCard from "./CatagoryCard";
import store from "./Store";
function Catagory() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black font-bold  pt-85 mr-5 ml-5">
        {store.map((item, index) => {
          return <CatagoryCard key={index} data={item} />;
        })}
      </div>
    </>
  );
}
export default Catagory;
