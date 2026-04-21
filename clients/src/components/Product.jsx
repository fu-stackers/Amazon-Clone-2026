import React, { useState, useEffect } from "react";
import api from "../services/api";
import ProductCard from "./ProductCard";

function Product() {
  const [Product, setproduct] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-40 mr-20 ml-20">
        {Product.map((item, index) => {
          return <ProductCard data={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default Product;
