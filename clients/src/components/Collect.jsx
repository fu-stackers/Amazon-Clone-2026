import React from "react";
import Catagory from "./Catagory";
import store from "./Store";
function Collect() {
  return (
    <>
      <div className="flex item-center justify-around  space-x-3 text-black font-bold  p-1">
        {store.map((item, index) => {
          return <Catagory key={index} data={item} />;
        })}
      </div>
    </>
  );
}
export default Collect;
