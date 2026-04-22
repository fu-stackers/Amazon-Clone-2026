import React, { useState, useEffect } from "react";
import api from "../services/api";
import ProductCard from "./ProductCard";
import Simbol from "./Simbol";
function Product() {
  const [Product, setproduct] = useState([]);
  const [fetch, setfetch] = useState(false);
  const array = [
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 34 },
    { id: 134 },
    { id: 145 },
    { id: 156 },
    { id: 1567 },
    { id: 13456 },
    { id: 1876 },
    { id: 187632 },
    { id: 1987 },
    { id: 109 },
    { id: 1098 },
    { id: 122 },
    { id: 1333 },
    { id: 1111 },
  ];
  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
        console.log(Product);
        setfetch(true);
      })
      .catch((err) => {
        console.log(err);
        setfetch(false);
      });
  }, []);
  return (
    <>
      {fetch ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-40 mr-20 ml-20">
          {Product.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-40 mr-20 ml-20 bg-gray-500">
          {array.map((item, index) => {
            return <Simbol key={index} symbol={item} />;
          })}
        </div>
      )}
    </>
  );
}

export default Product;
