import React from "react";
import { BsList } from "react-icons/bs";

function LowerNav() {
  return (
    <>
      <div className="flex h-[30px] bg-[#232f3e] text-white space-x-3 cursor-pointer items-center font-bold ">
        <div className="flex items-center hover:outline hover:outline-1">
          <BsList fontWeight={500} />
          <p>All</p>
        </div>

        <p className="hover:outline hover:outline-1">Today's Deals</p>
        <p className="hover:outline hover:outline-1">Gift Cards</p>
        <p className="hover:outline hover:outline-1">Sell</p>
        <p className="hover:outline hover:outline-1">Registry</p>
        <p className="hover:outline hover:outline-1">Prime Video</p>
        <p className="hover:outline hover:outline-1">Customer Service</p>
      </div>
    </>
  );
}
export default LowerNav;
