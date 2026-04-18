import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import amazonlogo from "../../assets/amazon_PNG25.png";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex items-center h-[60px] bg-[#131921] sticky top-0 z-[100] px-4">
      {/* THE LOGO & LOCATION SECTION */}
      <div className="flex items-center">
        <div className="w-[100px] mt-2 mr-4 cursor-pointer">
          <img src={amazonlogo} alt="amazon-logo" className="object-contain" />
        </div>

        {/* FIX: Corrected "flex", added white text, and aligned items */}
        <div className="flex items-center text-white cursor-pointer hover:outline hover:outline-1 p-1">
          <IoLocationOutline className="text-xl mt-2" />
          <div className="flex flex-col ml-1">
            <span className="text-[10px] text-gray-300">Deliver to</span>
            <span className="text-[13px] font-extrabold">Ethiopia</span>
          </div>
        </div>
      </div>

      {/* THE SEARCH BAR (Greedy Middle) */}
      <div className="flex flex-1 items-center rounded-md overflow-hidden mx-4 h-[38px]">
        {/* FIX: Cleaned up height and added a border-right for the select */}
        <select className="h-full bg-gray-200 text-xs px-2 outline-none border-r border-gray-300 cursor-pointer">
          <option value="all">All</option>
        </select>
        <input
          className="h-full p-2.5 flex-1 outline-none text-black bg-white"
          type="text"
          placeholder="Search Amazon"
        />
        <div className="h-full w-[45px] bg-[#febd69] flex items-center justify-center cursor-pointer hover:bg-[#f3a847]">
          <FiSearch className="text-black text-xl" />
        </div>
      </div>

      {/* THE NAVIGATION LINKS */}
      <nav className="flex items-center text-white">
        <div className="flex flex-col mx-3 cursor-pointer hover:outline hover:outline-1 p-1">
          <span className="text-[10px]">Hello, Guest</span>
          <span className="text-[13px] font-extrabold">Sign In</span>
        </div>

        <div className="flex flex-col mx-3 cursor-pointer hover:outline hover:outline-1 p-1">
          <span className="text-[10px]">Returns</span>
          <span className="text-[13px] font-extrabold">& Orders</span>
        </div>

        {/* THE SHOPPING CART - Real Amazon Style */}
        <div className="flex items-end mx-3 cursor-pointer hover:outline hover:outline-1 p-1 relative">
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-[#f08804] absolute top-[-5px] right-[25px]">
              0
            </span>
            <FiShoppingCart className="text-3xl" />
          </div>
          <span className="text-[13px] font-extrabold mt-4">Cart</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
