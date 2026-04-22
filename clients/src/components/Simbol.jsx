import React from "react";

const Simbol = ({ symbol }) => {
  const { id } = symbol;
  return (
    <div
      className="w-42 h-55 rounded-md  bg-gray-700 shadow-gray-600"
      key={id}
    ></div>
  );
};

export default Simbol;
